const validator = require('validator')
const userModel = require('../models/userModel')
const { data } = require('autoprefixer')

class Update{
    constructor(newData){
        this.newData = newData
        this.error_list = []
    }

    async checkData() {
        for (let k of Object.keys(this.newData)) {
            if (k === 'email') {
                if (!validator.isEmail(this.newData[k])) {
                    this.error_list.push({ [k]: 'Email inválido' })
                }

            } else if (k === 'name' || k === 'lastname') {
                if (!this.newData[k]) {
                    k === 'name' ? this.error_list.push({ [k]: 'Nome inválido' }) : this.error_list.push({ [k]: 'Sobrenome inválido' });
                } else {
                    this.newData[k] = this.newData[k][0].toUpperCase() + this.newData[k].slice(1)
                }
                
            } else if (k === 'username') {
                if (!this.newData[k]) {
                    this.error_list.push({ [k]: 'Usuário inválido' })
                } else if(this.newData[k].length > 16) {
                    this.error_list.push({ [k]: 'Máximo de 16 caracteres' })
                } else{
                    await this._checkUser(this.newData[k])
                }
            }
        }
    }

    async _checkUser(newUsername) {
        const dataQuery = await userModel.findOne({ username: newUsername })
        console.log('!!!!!!!!!!!!!!!')
        console.dir(dataQuery)
        console.log('!!!!!!!!!!!!!!!')
        if (dataQuery){
            if (dataQuery['username'] !== this.newData['username']){
                this.error_list.push({ 'username': 'Usuário já existente' })
            }
        }
    }
}

module.exports = Update
