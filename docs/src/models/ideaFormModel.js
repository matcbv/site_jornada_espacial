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
        this.text = data.subject,
        this.errorList = []
    }

    checkData = () => {
        console.log(this)
    }

    sendData = (req, res) => {
        return
    }
}

module.exports = IdeaForm
