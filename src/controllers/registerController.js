const Register = require('../models/registerFormModel')

const registerController = {
    signup: (req, res) => {
        const registerClass = new Register(req.body)
        registerClass.checkData()
        return
    }
}


module.exports = registerController