const Register = require('../models/registerFormModel')
const {codeGenerator, sendVerifEmail} = require('../controllers/emailController')

const registerController = {
    userData: '',
    code: '',
    registerData: '',

    signup: async (req, res) => {
        const register = new Register(req.body)
        await register.checkData()
        if (register.error_list.length > 0){
            for (let e of register.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
                return res.redirect('/account/signup')
            }
        } else {
            this.registerData = register.data
            this.userData = register
            this.code =  codeGenerator()
            sendVerifEmail(this.code, register.data.email, register.data.username)
            return res.redirect('/account/signup/validation')
        }
    },

    validation: (req, res) => {
        if (req.body.code === this.code){
            this.userData.saveData()
            req.flash('registerMsg', 'Cadastro realizado com sucesso!')
            return res.redirect('/account/signin')
        } else{
            req.flash('codeError', 'Código inválido')
            return res.redirect('/account/signup/validation')
        }
    },

    resendVerifEmail: async (req, res) => {
        await sendVerifEmail(this.code, this.registerData.email, this.registerData.username)
        res.redirect('/account/signup/validation')
    }
}

module.exports = registerController
