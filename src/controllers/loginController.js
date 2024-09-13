const Login = require('../models/loginFormModel')
const validator = require('validator')
const userModel = require('../models/userModel')
const {codeGenerator, sendVerifEmail} = require('../controllers/emailController')

const loginController = {
    logUser: async (req, res) => {
        const loginClass = new Login(req.body)
        await loginClass.checkUser()
        if (loginClass.error_list.length > 0){
            for (let e of loginClass.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
            res.redirect('/account/signin')
        } else{
            req.session.user = loginClass.userData
            return res.redirect('/account/profile')
        }
    },

    getUser: async (req, res) => {
        const data = req.query.username
        if(data){
            if (validator.isEmail(data)){
                const userByEmail = await userModel.findOne({email: data})
                if(userByEmail){
                    try{
                        sendVerifEmail(codeGenerator(), userByEmail.email, userByEmail.username)
                        return res.redirect('/account/password/changePassword')
                    }catch(e){
                        console.log('Erro ao enviar o email.', e)
                    }
                }
            } else{
                const userByUsername = await userModel.findOne({username: data})
                if (userByUsername){
                    try{
                        sendVerifEmail(codeGenerator(), userByUsername.email, userByUsername.username)
                        return res.redirect('/account/password/changePassword')
                    }catch(e){
                        console.log('Erro ao enviar o email.', e)
                    }
                } else{
                    req.flash('userError', 'Usuário/Email inválido')
                }
            }
        }
        return res.redirect('/account/password')
    },
}

module.exports = loginController
