const ideaFormModel = require('../models/ideaFormModel')

const formController = {
    sendIdea: (req, res) => {
        const ideaFormObj = new ideaFormModel(req.body)
        ideaFormObj.checkData()
    }
}

module.exports = formController
