const { types } = require('@babel/core')
const mongoose = require('mongoose')

const ideaSchema = new mongoose.Schema({
    subject: {type: string, require: true},
    text: {type: string, require: true},
    email: string
})

const idealModel = new mongoose.Model(ideaSchema)

class IdeaForm{
    constructor(data){
        this.subject = data.subject,
        this.text = data.subject,
        this.errorList = []
    }

    checkData = () => {
        return
    }

    sendData = (req, res) => {
        return
    }
}

module.exports = IdeaForm
