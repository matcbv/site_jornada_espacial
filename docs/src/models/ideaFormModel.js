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
        this.data = data,
        // this.subject = data.subject,
        // this.text = data.subject,
        // this.email = data.email,
        this.errorList = []
    }

    checkData = () => {
        console.dir(this)
        return
    }

    sendData = (req, res) => {
        return
    }
}

module.exports = IdeaForm
