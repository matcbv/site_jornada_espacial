const Login = require('../models/loginFormModel')
const validator = require('validator')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')
const loginFormModel = require('../models/loginFormModel')
const emailController = require('../controllers/emailController')

const loginController = {
    _code: '',
    _userData: '',

    logUser: async (req, res) => {
        const login = new Login(req.body)
        await login.checkUser()
        if (login.error_list.length > 0){
            for (let e of login.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
            return res.redirect('/account/signin')
        } else{
            req.session.user = login.userData
            return res.redirect('/account/profile')
        }
    },

    getUser: async (req, res) => {
        if(req.query.data){
            if (validator.isEmail(req.query.data)){
                loginController._userData = await userModel.findOne({email: req.query.data})
                if(loginController._userData){
                    try{
                        loginController._code = await emailController.sendVerifEmail(loginController._userData)
                        return res.redirect('/account/password/changePassword')
                    }catch(e){
                        console.log('Erro ao enviar o email.', e)
                    }
                }
            } else{
                loginController._userData = await userModel.findOne({username: req.query.data})
                if (loginController._userData){
                    try{
                        loginController._code = await emailController.sendVerifEmail(loginController._userData)
                        return res.redirect('/account/password/changePassword')
                    }catch(e){
                        console.log('Erro ao enviar o email.', e)
                    }
                } else{
                    req.flash('userError', 'Usuário/Email inválido')
                }
            }
        } else{
            req.flash('userError', 'Usuário/Email inválido')
        }
        return res.redirect('/account/password')
    },

    savePassword: async (req, res) => {
        const login = new loginFormModel()
        if (loginController._code !== req.body.code){
            login.error_list.push({ 'code': 'Código inválido' })
        }

        login.checkNewPassword(loginController._code, req.body)

        if(login.error_list.length > 0){
            for (let e of login.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
            return res.redirect('/account/password/changePassword')
        } else{
            const salt = bcrypt.genSaltSync()
            loginController._userData['password'] = bcrypt.hashSync(req.body.password, salt)
            await loginController._userData.save()
            req.flash('registerMsg', 'Senha alterada com sucesso!')
            return res.redirect('/account/signin')
        }
    }
}

module.exports = loginController
