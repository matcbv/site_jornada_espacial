const userModel = require('./userModel');
const validator = require('validator');
const bcrypt = require('bcrypt');

class Register {
	constructor(data) {
		this.data = data;
		this.errorList = [];
	}

	async checkData() {
		for (let k of Object.keys(this.data)) {
			if (k === 'email') {
				if (!validator.isEmail(this.data[k])) {
					this.errorList.push({ [k]: 'Email inválido' });
				} else {
					const dataQuery = await userModel.findOne({
						email: this.data['email'],
					});
					if (dataQuery) {
						this.errorList.push({ email: 'Email em uso' });
					}
				}
			} else if (k === 'birthday') {
				if (
					!validator.isDate(this.data[k], {
						format: 'DD/MM/YYYY',
						strictMode: true,
					})
				) {
					this.errorList.push({ [k]: 'Data inválida' });
				}
			} else if (k === 'name' || k === 'lastname') {
				if (!this.data[k]) {
					k === 'name'
						? this.errorList.push({ [k]: 'Nome inválido' })
						: this.errorList.push({ [k]: 'Sobrenome inválido' });
				} else {
					this.data[k] = this.data[k][0].toUpperCase() + this.data[k].slice(1);
				}
			} else if (k === 'password') {
				const alphaArr = Array.from(this.data[k]).filter((l) =>
					validator.isAlpha(l),
				);
				const numericArr = Array.from(this.data[k]).filter((l) =>
					validator.isNumeric(l),
				);
				const upperArr = alphaArr.filter((l) => validator.isUppercase(l));

				if (
					this.data[k].length < 8 ||
					this.data[k].length > 16 ||
					numericArr.length === 0 ||
					alphaArr.length === 0 ||
					upperArr.length === 0
				) {
					this.errorList.push({ [k]: 'Senha inválida' });
				} else {
					const salt = bcrypt.genSaltSync();
					this.data[k] = bcrypt.hashSync(this.daa[k], salt);
				}
			} else if (k === 'username') {
				if (!this.data[k]) {
					this.errorList.push({ [k]: 'Usuário inválido' });
				} else if (this.data[k].length > 16) {
					this.errorList.push({ [k]: 'Máximo de 16 caracteres' });
				} else {
					const dataQuery = await userModel.findOne({
						username: this.data['username'],
					});
					if (dataQuery) {
						this.errorList.push({ username: 'Usuário já existente' });
					}
				}
			}
		}
		return this.errorList;
	}

	saveData() {
		userModel.create(this.data);
	}
}

module.exports = Register;
