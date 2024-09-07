
const userModel = require('./userModel')
const validator = require('validator')

class Login{
    constructor(data){
        this.data = data,
        this.userData = null,
        this.msgList = ['Usuário inválido', 'Senha inválida', 'Usuário inexistente', 'Senha incorreta']
        this.error_list = []
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
        if (this.data.password !== dataQuery.password){
            this.error_list.push({ 'password': this.msgList[3] })
            return
        }
        this.userData = dataQuery
    }
}

module.exports = Login
