const mongoose = require('mongoose')
const validator = require('validator')

const ideaSchema = new mongoose.Schema({
    subject: {type: String, required: true},
    text: {type: String, required: true},
    email: String
})

const IdeaModel = mongoose.model('IdeaForm', ideaSchema)

class IdeaForm{
    constructor(data){
        this.data = data,
        this.status = []
    }

    checkData = () => {
        if(typeof this.data.subject !== 'string' || this.data.subject === ''){
            this.status.push({'subjectError': 'Escolha um assunto'})
        }
        if(typeof this.data.text !== 'string' || this.data.text === ''){
            this.status.push({'textError': 'Mensagem inválida'})
        }
        if(this.data.email !== ''){
            if(!validator.isEmail(this.data.email)){
                this.status.push({'emailError': 'Email inválido'})
            }
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
