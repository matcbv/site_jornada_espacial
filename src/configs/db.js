const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');

// Conexão com o banco de dados
class ConnectMongo {
	// Gerador de senhas aleatórias
	#secretGenerator() {
		let secret = '';
		for (let i = 0; i <= 30; i++) {
			secret += String.fromCharCode(Math.floor(Math.random() * 93 + 33));
		}
		return secret;
	}

	constructor(app) {
		this.app = app;
	}

	async connect() {
		try {
			await mongoose.connect(process.env.MONGOURI);
			this.app.emit('ready');
		} catch (e) {
			console.log(
				`Não foi possível se conectar com o banco de dados. Erro: ${e}`,
			);
			process.exit(1);
		}
	}

	createSession() {
		// Criando a sessão do nosso usuário
		this.app.use(
			session({
				secret: this.#secretGenerator(),
				store: MongoStore.create({ mongoUrl: process.env.MONGOURI }),
				resave: false,
				saveUninitialized: false,
				cookie: {
					maxAge: 60 * 60 * 24 * 7 * 1000, // 7 dias
					httpOnly: true,
				},
			}),
		);
	}
}

module.exports = ConnectMongo;
