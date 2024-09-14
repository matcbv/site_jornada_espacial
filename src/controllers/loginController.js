const Login = require('../models/loginFormModel')
const validator = require('validator')
const userModel = require('../models/userModel')
const {codeGenerator, sendVerifEmail} = require('../controllers/emailController')

const loginController = {
    code: '',
    userData: '',
    
    
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
        if (this.code !== dataQuery.code){
            req.flash('codeError', 'Código inválido')
            return res.redirect('/account/password/changePassword')
        }

        if(dataQuery.password !== dataQuery.password_confirmation){
            req.flash('passwordError', 'Senhas não conferem')
            return res.redirect('/account/password/changePassword')
        }

        const alphaArr = Array.from(dataQuery.password).filter(l => validator.isAlpha(l))
        const numericArr = Array.from(dataQuery.password).filter(l => validator.isNumeric(l))
        const upperArr = alphaArr.filter(l => validator.isUppercase(l))

        if (dataQuery.password.length < 8 || dataQuery.password.length > 16 || numericArr.length === 0 || alphaArr.length === 0 || upperArr.length === 0) {
            req.flash('passwordError', 'Senha inválida')
        } else {
            const salt = bcrypt.genSaltSync()
            dataQuery.password = bcrypt.hashSync(dataQuery.password, salt)
            this.userData.password = dataQuery.password
            await save(this.userData)
        }
        return res.redirect('/account/signin')
    }
}

module.exports = loginController
