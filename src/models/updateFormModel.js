class Update{
    constructor(newData){
        ths.newData = newData
        this.error_list = []
    }

    async checkData() {
        for (let k of Object.keys(this.newData)) {
            
            if (k === 'email') {
                if (!validator.isEmail(this.data[k])) {
                    this.error_list.push({ [k]: 'Email inválido' })
                }

            } else if (k === 'name' || k === 'lastname') {
                if (!this.data[k]) {
                    k === 'name' ? this.error_list.push({ [k]: 'Nome inválido' }) : this.error_list.push({ [k]: 'Sobrenome inválido' });
                } else {
                    this.data[k] = this.data[k][0].toUpperCase() + this.data[k].slice(1)
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
}

module.exports = Update
