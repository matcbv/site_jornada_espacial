const ideaFormModel = require('../models/ideaFormModel')
const ideaFormClass = new ideaFormModel()

const formController = {
    sendIdea: (req, res) => {
        console.log('Formulário enviado com sucesso!')
        console.dir(req.body)
        // ideaFormModel.checkData(req.body)
    }
}

module.exports = formController
