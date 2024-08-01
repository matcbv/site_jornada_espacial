const ideaFormModel = require('../models/ideaFormModel')

const formController = {
    sendIdea: (req, res) => {
        ideaFormModel.checkData()
    }
}


module.exports = formController