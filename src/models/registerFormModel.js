const userModel = require('./userModel')
const validator = require('validator')
const bcrypt = require('bcrypt')

class Register {
    constructor(data) {
        this.data = data,
        this.error_list = []
    }

    async checkData() {
        for (let k of Object.keys(this.data)) {
            
            if (k === 'email') {
                if (!validator.isEmail(this.data[k])) {
                    this.error_list.push({ [k]: 'Email inválido' })
                }

            } else if (k === 'birthday') {
                if (!validator.isDate(this.data[k], { format: 'DD/MM/YYYY', strictMode: true })) {
                    this.error_list.push({ [k]: 'Data inválida' })
                }

            } else if (k === 'name' || k === 'lastname') {
                if (!this.data[k]) {
                    k === 'name' ? this.error_list.push({ [k]: 'Nome inválido' }) : this.error_list.push({ [k]: 'Sobrenome inválido' });
                } else {
                    this.data[k] = this.data[k][0].toUpperCase() + this.data[k].slice(1)
                }
                
            } else if (k === 'password') {
                const alphaArr = Array.from(this.data[k]).filter(l => validator.isAlpha(l))
                const numericArr = Array.from(this.data[k]).filter(l => validator.isNumeric(l))
                const upperArr = alphaArr.filter(l => validator.isUppercase(l))

                if (this.data[k].length < 8 || this.data[k].length > 16 || numericArr.length === 0 || alphaArr.length === 0 || upperArr.length === 0) {
                    this.error_list.push({ [k]: 'Senha inválida' })
                } else {
                    const salt = bcrypt.genSaltSync()
                    this.data[k] = bcrypt.hashSync(this.data[k], salt)
                }

            } else if (k === 'username') {
                if (!this.data[k]) {
                    this.error_list.push({ [k]: 'Usuário inválido' })
                } else if(this.data[k].length > 16) {
                    this.error_list.push({ [k]: 'Máximo de 16 caracteres' })
                } else{
                    await this._checkUser()
                }
            }
        }
        return this.error_list
    }

    async _checkUser() {
        const dataQuery = await userModel.findOne({ username: this.data['username'] })
        if (dataQuery) {
            this.error_list.push({ 'username': 'Usuário já existente' })
        }
    }

    saveData() {
        userModel.create(this.data)
    }
}

module.exports = Register
