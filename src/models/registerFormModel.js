const mongoose = require('mongoose')
const validator = require('validator')

const registerModel = new mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, require: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    birthday: {type: String, required: true}
})

const registerSchema = new mongoose.model('users', registerModel)

class Register{
    constructor(data){
        this.data = data,
        this.dataKeys = {name: 'Nome', lastname: 'Sobrenome', username: 'Usuário', password: 'Senha', email: 'Email', birthday: 'Data de nascimento'},
        this.error_list = [] 
    }

    checkData(){
        for (let k of Object.keys(this.data)){
            if (k === 'email'){
                if(!validator.isEmail(this.data[k])){
                    this.error_list.push('Email inválido.')
                }
            } else if(k == 'data'){
                if(!validator.isDate(this.data[k])){
                    this.error_list.push('Data inválida.')
                }
            } else if(typeof this.data[k] !== 'string' || this.data[k] === ''){
                this.data[k] = ''
                this.error_list.push(`Insira um valor válido para ${this.dataKeys[k]}.`)
            }
        }
        console.log(this.data)
    }
}

module.exports = Register
