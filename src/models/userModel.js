const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    lastname: { type: String, require: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    birthday: { type: String, required: true, trim: true }
})

const userModel = new mongoose.model('users', userSchema)

module.exports = userModel
