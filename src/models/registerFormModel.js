const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const registerSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    lastname: {type: String, require: true, trim: true},
    username: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    email: {type: String, required: true, trim: true},
    birthday: {type: String, required: true, trim: true}
})

const registerModel = new mongoose.model('users', registerSchema)

class Register{
    constructor(data){
        this.data = data,
        this.error_list = []
    }

    checkData(){
        for (let k of Object.keys(this.data)){
            if (k === 'email'){
                if(!validator.isEmail(this.data[k])){
                    this.error_list.push({[k]: 'Email inválido'})
                }
            } else if(k === 'birthday'){
                if(!validator.isDate(this.data[k])){
                    this.error_list.push({[k]: 'Data inválida'})
                }
            } else if (k === 'name' || k === 'lastname'){
                if (!this.data[k]){
                    k === 'name' ? this.error_list.push({[k]: 'Nome inválido'}) : this.error_list.push({[k]: 'Sobrenome inválido'});
                } else {
                    this.data[k] = this.data[k][0].toUpperCase() + this.data[k].slice(1)
                }
            } else if (k === 'password'){
                if (this.data[k].length < 8 || Array.from(this.data[k]).filter(l => validator.isNumeric(l)).length === 0 || Array.from(this.data[k]).filter(l => validator.isAlpha(l)).length === 0 ){
                    this.error_list.push({[k]: 'Senha inválida'})
                } else{
                    const salt = bcrypt.genSaltSync()
                    this.data[k] = bcrypt.hashSync(this.data[k], salt)
                }
            } else if (k === 'user'){
                if (!this.data[k]){
                    this.error_list.push({[k]: 'Usuário inválido'})
                } else{
                    if(registerModel.findOne({name: this.data[k]})){
                        this.error_list.push({[k]: 'Usuário já existente'})
                    }
                }
            }
        }
        return this.error_list
    }

    saveData(){
        registerModel.create(this.data)
    }
}

module.exports = Register
