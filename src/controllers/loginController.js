const Login = require('../models/loginFormModel')

const loginController = {
    logUser: (req, res) => {
        const loginClass = new Login(req.body)
        loginClass.checkUser().then(errorList => {
            if (errorList.length > 0){
                for (let e of errorList){
                    Object.entries(e).forEach(([field, msg]) => {
                        req.flash(`${field}Error`, msg)
                    })
                }
                res.redirect('/account/signin')
            } else{
                req.session.user = loginClass.userData
                return res.redirect('/')
            }
        })
    }
}

module.exports = loginController
