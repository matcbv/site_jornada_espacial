const mongoose = require('mongoose')

const ideaSchema = new mongoose.Schema({
    subject: {type: String, required: true},
    text: {type: String, required: true},
    email: String
})

const IdeaModel = mongoose.model('IdeaForm', ideaSchema)

class IdeaForm{
    constructor(data){
        this.data = data,
        this.subject = data.subject,
        this.text = data.text,
        this.email = data.email,
        this.status = []
    }

    checkData = () => {
        if(typeof this.subject !== 'string' || this.subject === ''){
            this.status.push('Escolha um assunto')
        }
        if(typeof this.text !== 'string' || this.text === ''){
            this.status.push('Mensagem inválida')
        }
        if(typeof this.email !== 'string'){
            this.email = ''
        }
    }

    sendData = async () => {
        this.checkData()
        if(this.status.length !== 0){
            return this.status
        }
        await IdeaModel.create(this.data)
        return this.status
    }
}

module.exports = IdeaForm
