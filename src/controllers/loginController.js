const Login = require('../models/loginFormModel');
const validator = require('validator');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const loginFormModel = require('../models/loginFormModel');
const emailController = require('../controllers/emailController');
const { userData } = require('../middlewares/globalMiddlewares');
const path = require('path');
const fs = require('fs');

const loginController = {
	_code: '',
	_userData: '',

	logUser: async (req, res) => {
		const login = new Login(req.body);
		await login.checkUser();
		if (login.errorList.length > 0) {
			for (let e of login.errorList) {
				Object.entries(e).forEach(([field, msg]) => {
					req.flash(`${field}Error`, msg);
				});
			}
			return res.redirect('/account/signin');
		} else {
			req.session.user = login.userData;
			userData(req, res, () => {
				return res.redirect('/account/profile');
			});
		}
	},

	getUser: async (req, res) => {
		if (req.query.data) {
			const filePath = path.resolve(
				__dirname,
				'..',
				'views',
				'includes',
				`${req.params.emailType}.html`,
			);
			const emailHTML = fs.readFileSync(filePath, 'utf8');
			if (validator.isEmail(req.query.data)) {
				loginController._userData = await userModel.findOne({
					email: req.query.data,
				});
				if (loginController._userData) {
					try {
						loginController._code = await emailController.sendVerifEmail(
							loginController._userData,
							emailHTML,
						);
						return res.redirect('/account/password/changePassword');
					} catch (e) {
						console.error('Erro ao enviar o email.', e);
					}
				}
			} else {
				loginController._userData = await userModel.findOne({
					username: req.query.data,
				});
				if (loginController._userData) {
					try {
						loginController._code = await emailController.sendVerifEmail(
							loginController._userData,
							emailHTML,
						);
						return res.redirect('/account/password/changePassword');
					} catch (e) {
						console.error('Erro ao enviar o email.', e);
					}
				} else {
					req.flash('userError', 'Usuário/Email inválido');
				}
			}
		} else {
			req.flash('userError', 'Usuário/Email inválido');
		}
		return res.redirect('/account/password');
	},

	savePassword: async (req, res) => {
		const login = new loginFormModel();
		if (loginController._code !== req.body.code) {
			login.errorList.push({ code: 'Código inválido' });
		}

		login.checkNewPassword(req.body);

		if (login.errorList.length > 0) {
			for (let e of login.errorList) {
				Object.entries(e).forEach(([field, msg]) => {
					req.flash(`${field}Error`, msg);
				});
			}
			return res.redirect('/account/password/changePassword');
		} else {
			const salt = bcrypt.genSaltSync();
			loginController._userData['password'] = bcrypt.hashSync(
				req.body.password,
				salt,
			);
			await loginController._userData.save();
			req.flash('registerMsg', 'Senha alterada com sucesso!');
			return res.redirect('/account/signin');
		}
	},

	deleteAccount: async (req, res, next) => {
		try {
			await userModel.findOneAndDelete({ username: req.session.user.username });
			next();
		} catch (e) {
			console.error('Erro ao excluir o usuário.', e);
		}
	},
};

module.exports = loginController;
