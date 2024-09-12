const Update = require('../models/updateFormModel')

const updateController = (req, res) => {
    this.userData = userModel.findOne({username: req.session.user.username})
    const update = new Update(req.body)
    
}

exports.module = updateController
