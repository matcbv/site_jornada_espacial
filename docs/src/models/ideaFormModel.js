const { types } = require('@babel/core')
const mongoose = require('mongoose')

const ideaSchema = new mongoose.Schema({
    subject: {type: String, require: true},
    text: {type: String, require: true},
    email: String
})

const idealModel = new mongoose.model('IdeaForm', ideaSchema)

class IdeaForm{
    constructor(data){
        this.subject = data.subject,
        this.text = data.text,
        this.email = data.email,
        this.errorList = []
    }

    checkData = () => {
        if(typeof this.subject !== 'string'){
            this.subject = ''
        } else if(typeof this.text !== 'string'){
            this.text = ''
        } else if(typeof this.email !== 'string'){
            this.email = ''
        }
    }

    sendData = (req, res) => {
        return
    }
}

module.exports = IdeaForm
