const Login = require('../models/loginFormModel')
const validator = require('validator')
const userModel = require('../models/userModel')
const loginFormModel = require('../models/loginFormModel')
const {codeGenerator, sendVerifEmail} = require('../controllers/emailController')

const loginController = {

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
        this.userData = req.query.data
        if(this.userData){
            if (validator.isEmail(this.userData)){
                const userByEmail = await userModel.findOne({email: this.userData})
                if(userByEmail){
                    code = codeGenerator()
                    try{
                        sendVerifEmail(code, userByEmail.email, userByEmail.username)
                        return res.redirect('/account/password/changePassword')
                    }catch(e){
                        console.log('Erro ao enviar o email.', e)
                    }
                }
            } else{
                const userByUsername = await userModel.findOne({username: this.userData})
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

    savePassword: async (req, res) => {
        const dataQuery = req.body
        const login = new loginFormModel()
        login.checkNewPassword(dataQuery.password)

        if(login.error_list.length > 0){
            for (let e of login.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
            return res.redirect('/account/password/changePassword')
        } else{
            const salt = bcrypt.genSaltSync()
            dataQuery.password = bcrypt.hashSync(dataQuery.password, salt)
            const user = await userModel.findOne()
            user.save()
        }
    }
}

module.exports = loginController
