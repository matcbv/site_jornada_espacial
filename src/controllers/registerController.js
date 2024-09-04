const e = require('connect-flash')
const Register = require('../models/registerFormModel')

const registerController = {
    signup: (req, res) => {
        const registerClass = new Register(req.body)
        const errorList = registerClass.checkData()
        if (errorList.length > 0){
            for (let e of errorList){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
        } else {
            registerClass.saveData()
        }
        res.redirect('/signin/register')
    }
}

module.exports = registerController
