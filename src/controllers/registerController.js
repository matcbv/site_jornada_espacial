const Register = require('../models/registerFormModel');
const emailController = require('../controllers/emailController');
const path = require('path');
const fs = require('fs/promises');

const registerController = {
	_user: '',
	_code: '',

	signUp: async (req, res) => {
		const register = new Register(req.body);
		await register.checkData();
		if (register.errorList.length > 0) {
			for (let e of register.errorList) {
				Object.entries(e).forEach(([field, msg]) => {
					req.flash(`${field}Error`, msg);
				});
			}
			return res.redirect('/account/signUp');
		} else {
			const filePath = path.resolve(
				__dirname,
				'..',
				'views',
				'includes',
				`${req.params.emailType}.html`,
			);
			const emailHTML = await fs.readFile(filePath, 'utf8');
			registerController._user = register;
			registerController._code = await emailController.sendVerifEmail(
				registerController._user.data,
				emailHTML,
			);
			return res.redirect('/account/signUp/validation');
		}
	},

	validation: (req, res) => {
		if (req.body.code === registerController._code) {
			registerController._user.saveData();
			req.flash('registerMsg', 'Cadastro realizado com sucesso!');
			return res.redirect('/account/signin');
		} else {
			req.flash('codeError', 'Código inválido');
			return res.redirect('/account/signUp/validation');
		}
	},
};

module.exports = registerController;
