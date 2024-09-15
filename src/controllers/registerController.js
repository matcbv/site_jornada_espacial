const Register = require('../models/registerFormModel')
const emailController = require('../controllers/emailController')

const registerController = {
    _user: '',
    _code: '',

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
            registerController._user = register
            registerController._code = await emailController.sendVerifEmail(registerController._user.data)
            return res.redirect('/account/signup/validation')
        }
    },

    validation: (req, res) => {
        if (req.body.code === registerController._code){
            registerController._user.saveData()
            req.flash('registerMsg', 'Cadastro realizado com sucesso!')
            return res.redirect('/account/signin')
        } else{
            req.flash('codeError', 'Código inválido')
            return res.redirect('/account/signup/validation')
        }
    }
}

module.exports = registerController
