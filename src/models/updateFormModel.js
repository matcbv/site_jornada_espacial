const validator = require('validator')
const userModel = require('../models/userModel')

class Update{
    constructor(newData, currentUserId){
        this.newData = newData
        this.currentUserId = currentUserId
        this.errorList = []
    }

    async checkData() {
        for (let k of Object.keys(this.newData)) {
            if (k === 'email') {
                if (!validator.isEmail(this.newData[k])) {
                    this.errorList.push({ [k]: 'Email inválido' })
                }

            } else if (k === 'name' || k === 'lastname') {
                if (!this.newData[k]) {
                    k === 'name' ? this.errorList.push({ [k]: 'Nome inválido' }) : this.errorList.push({ [k]: 'Sobrenome inválido' });
                } else {
                    this.newData[k] = this.newData[k][0].toUpperCase() + this.newData[k].slice(1)
                }
                
            } else if (k === 'username') {
                if (!this.newData[k]) {
                    this.errorList.push({ [k]: 'Usuário inválido' })
                } else if(this.newData[k].length > 16) {
                    this.errorList.push({ [k]: 'Máximo de 16 caracteres' })
                } else{
                    const dataQuery = await userModel.findOne({ username: this.newData[k]})
                    if(dataQuery){
                        if(this.currentUserId.toString() !== dataQuery._id.toString()){
                            this.errorList.push({ [k]: 'Usuário já existente' })
                        }
                    }
                }
            }
        }
    }
}

module.exports = Update
