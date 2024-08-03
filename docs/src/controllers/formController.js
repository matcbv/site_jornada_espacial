const ideaFormModel = require('../models/ideaFormModel')

const formController = {
    sendIdea: (req, res) => {
        const ideaFormObj = new ideaFormModel(req.body)
        const status = ideaFormObj.sendData()
        if (status === 'Escolha um assunto'){
            res.locals.subjectError = 'Escolha um assunto'
            return res.redirect('back')
        } else if(status === 'Mensagem inválida'){
            res.locals.textError = 'Mensagem inválida'
            return res.redirect('back')
        }
        res.locals.message = 'Ideia enviada com sucesso!'
        return res.redirect('back')
    }
}

module.exports = formController
