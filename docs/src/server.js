const path = require('path')

// Configurando nossas variáveis de ambiente:
require('dotenv').config()

// Criação a aplicação
const express = require('express')
const app = express()

// Configurando complementos para a aplicação
app.use(express.urlencoded({extended: true}))

// Definindo a rota dos arquivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public', 'assets')))

// Definindo a engine de visialização da aplicação
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)

// Conexão com o banco de dados
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const session = require('express-session')

try{
    mongoose.connect(process.env.MONGOURI).then(() => {
        app.emit('ready')
    })
} catch(e){
    throw new error(e)
}

// Gerados de senhas aleatórias
function secretGenerator(){
    let secret = ''
    for(let i=0; i<=30; i++){
        secret += String.fromCharCode((Math.floor(Math.random() * 93 + 33)))
    }
    return secret;
}

// Criando a sessão do nosso usuário
app.use(session({
    secret: secretGenerator(),
    store: MongoStore.create({mongoUrl: process.env.MONGOURI}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 7 * 1000, // 7 dias
        httpOnly: true 
    }
}))

// Configurações adicionais de segurança
const helmet = require('helmet')
app.use(helmet())

const csrf = require('csurf')
app.use(csrf())

const flash = require('connect-flash')
app.use(flash())

// Aplicando os middlewares globais
const {csrfMiddleware, globalMiddleware} = require('./middlewares/globalMiddlewares')
app.use(globalMiddleware)
app.use(csrfMiddleware)

// Adicionando nosso roteador de rotas à aplicação
const routes = require('./routes')
app.use(routes)

app.on('ready', () => {
    // Inicialização da aplicação
    app.listen(process.env.SERVERPORT, () => {
        console.log(`Servidor iniciado na porta ${process.env.SERVERPORT}`)
    })
})
