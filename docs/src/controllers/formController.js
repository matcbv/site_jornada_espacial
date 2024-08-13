const path = require('path')
const ideaFormModel = require(path.resolve(__dirname, '..', 'models', 'ideaFormModel'))

const formController = {
    sendIdea: (req, res) => {
        const ideaFormObj = new ideaFormModel(req.body)
        ideaFormObj.sendData().then(status => {
            if (status.length > 0){                
                if (status.includes('Escolha um assunto')){
                    req.flash('subjectError', 'Escolha um assunto')
                }
                if(status.includes('Mensagem inválida')){
                    req.flash('textError', 'Mensagem inválida')
                }
                return res.redirect('/ideaform')
            } else{
                req.flash('successMsg', 'Ideia enviada com sucesso!')
                return res.redirect('/ideaform')
            }
        })
    }
}

module.exports = formController
