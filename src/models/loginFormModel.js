
const userModel = require('./userModel')
const validator = require('validator')
const bcrypt = require('bcrypt')

class Login{
    constructor(data){
        this.data = data,
        this.userData = null,
        this.msgList = ['Usuário inválido', 'Senha inválida', 'Usuário inexistente', 'Senha incorreta', 'Código inválido', 'Senhas não conferem']
        this.errorList = [],
        this.code = ''
    }

    _checkData() {
        if(Object.keys(this.data).length === 0){
            this.errorList.push({'username': this.msgList[0]})
            this.errorList.push({'password': this.msgList[1]})
            return
        } else{
            for (let k of Object.keys(this.data)){
                if (k === 'username'){
                    if (!this.data[k]){
                        this.errorList.push({[k]: this.msgList[0]})
                    }
                }
                if (k === 'password'){
                    if (!this.data[k]){
                        this.errorList.push({[k]: this.msgList[1]})
                    }
                }
            }
        }
    }

    async checkUser(){
        this._checkData()
        if (this.errorList.length > 0){
            return
        }
        const dataQuery = await userModel.findOne({ username: this.data['username'] })
        if (!dataQuery) {
            this.errorList.push({ 'username': this.msgList[2] })
            return
        }
        if (!bcrypt.compareSync(this.data.password, dataQuery.password)){
            this.errorList.push({ 'password': this.msgList[3] })
            return
        }
        this.userData = dataQuery
    }

    async checkNewPassword(code, dataQuery){
        if(dataQuery.password !== dataQuery.password_confirmation){
            this.errorList.push({ 'password': this.msgList[5] })
        }else{
            const alphaArr = Array.from(dataQuery.password).filter(l => validator.isAlpha(l))
            const numericArr = Array.from(dataQuery.password).filter(l => validator.isNumeric(l))
            const upperArr = alphaArr.filter(l => validator.isUppercase(l))
    
            if (Array.from(dataQuery.password).length < 8 || Array.from(dataQuery.password).length > 16 || numericArr.length === 0 || alphaArr.length === 0 || upperArr.length === 0) {
                this.errorList.push({ 'password': this.msgList[1] })
            }
        }
    }
}

module.exports = Login
