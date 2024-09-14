
const userModel = require('./userModel')
const validator = require('validator')
const bcrypt = require('bcrypt')

class Login{
    constructor(data){
        this.data = data,
        this.userData = null,
        this.msgList = ['Usuário inválido', 'Senha inválida', 'Usuário inexistente', 'Senha incorreta', 'Código inválido', 'Senhas não conferem']
        this.error_list = [],
        this.code = ''
    }

    _checkData() {
        if(Object.keys(this.data).length === 0){
            this.error_list.push({'username': this.msgList[0]})
            this.error_list.push({'password': this.msgList[1]})
            return
        } else{
            for (let k of Object.keys(this.data)){
                if (k === 'username'){
                    if (!this.data[k]){
                        this.error_list.push({[k]: this.msgList[0]})
                    }
                }
                if (k === 'password'){
                    if (!this.data[k]){
                        this.error_list.push({[k]: this.msgList[1]})
                    }
                }
            }
        }
    }

    async checkUser(){
        this._checkData()
        if (this.error_list.length > 0){
            return
        }
        const dataQuery = await userModel.findOne({ username: this.data['username'] })
        if (!dataQuery) {
            this.error_list.push({ 'username': this.msgList[2] })
            return
        }
        if (!bcrypt.compareSync(this.data.password, dataQuery.password)){
            this.error_list.push({ 'password': this.msgList[3] })
            return
        }
        this.userData = dataQuery
    }

    async checkNewPassword(dataQuery){
        if (this.code !== dataQuery.code){
            this.error_list.push({ 'code': this.msgList[4] })
        }

        if(dataQuery.password !== dataQuery.password_confirmation){
            this.error_list.push({ 'password': this.msgList[5] })
        }

        const alphaArr = Array.from(dataQuery.password).filter(l => validator.isAlpha(l))
        const numericArr = Array.from(dataQuery.password).filter(l => validator.isNumeric(l))
        const upperArr = alphaArr.filter(l => validator.isUppercase(l))

        if (Array.from(dataQuery.password).length < 8 || Array.from(dataQuery.password).length > 16 || numericArr.length === 0 || alphaArr.length === 0 || upperArr.length === 0) {
            this.error_list.push({ 'password': this.msgList[1] })
        }
    }
}

module.exports = Login
