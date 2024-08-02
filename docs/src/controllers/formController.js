const ideaFormModel = require('../models/ideaFormModel')

const formController = {
    sendIdea: (req, res) => {
        const ideaFormObj = new ideaFormModel(req.body)
        const status = ideaFormObj.sendData()
        if (status === 'Escolha um assunto'){
            res.locals.subjectError = 'Escolha um assunto'
            res.redirect('back')
            return
        } else if(status === 'Mensagem inválida'){
            console.log('passei aqui')
            res.locals.textError = 'Mensagem inválida'
            res.redirect('back')
            return
        }
        res.redirect('back')
        return
    }
}

module.exports = formController
