
const userModel = require('./userModel')
const validator = require('validator')

class Login{
    constructor(data){
        this.data = data,
        this.userData = null,
        this.error_list = []
    }

    _checkData() {
        console.log(this.data)
        if(Object.keys(this.data).length === 0){
            console.log('aooobaaaa')
            this.error_list.push({'username': 'Usuário inválido'})
            this.error_list.push({'password': 'Senha inválida'})
            return
        } else{
            for (let k of Object.keys(this.data)){
                if (k === 'username'){
                    if (!this.data[k]){
                        console.log('passei aquiii')
                        this.error_list.push({[k]: 'Usuário inválido'})
                    }
                }
                if (k === 'password'){
                    if (!this.data[k]){
                        this.error_list.push({[k]: 'Senha inválida'})
                    }
                }
            }
        }
    }

    async checkUser(){
        this._checkData()
        if (this.error_list.length > 0){
            return this.error_list
        }
        const dataQuery = await userModel.findOne({ username: this.data['username'] })
        if (!dataQuery) {
            this.error_list.push({ 'username': 'Usuário inexistente' })
        }
        this.userData = dataQuery
        console.log(this.error_list)
        return this.error_list
    }
}

module.exports = Login
