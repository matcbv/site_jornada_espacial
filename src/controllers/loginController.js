const Login = require('../models/loginFormModel')

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
            return res.redirect('/profile')
        }
    }
}

module.exports = loginController
