const path = require('path');

// Configurando nossas variáveis de ambiente:
require('dotenv').config();

// Criação a aplicação
const express = require('express');
const app = express();

// Aplicando middleware para interpretar estruturas complexas em formulários
app.use(express.urlencoded({extended: true}));

// Definindo a rota dos arquivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public', 'assets')));

// Definindo a engine de visualização da aplicação
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
// Registrando o mecanismo de template para a extensão .html
app.engine('html', require('ejs').renderFile);
// Obs.: O mecanismo renderFile será chamado automaticamente quando utilizarmos res.render(), buscando o mecanismo associado à extensão .html (no caso, renderFile do EJS). Serão automáticamente passando para renderFile todos os parâmetros necessários: o caminho do arquivo, os dados e as opções.

// Definindo o tempo de vida do servidor
app.keepAliveTimeout = 120000;

// Conexão com o banco de dados
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');

try{
    mongoose.connect(process.env.MONGOURI).then(() => {
        app.emit('ready');
    });
} catch(e){
    throw new Error(e);
};

// Gerador de senhas aleatórias
function secretGenerator(){
    let secret = '';
    for(let i=0; i<=30; i++){
        secret += String.fromCharCode((Math.floor(Math.random() * 93 + 33)));
    };
    return secret;
};

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
}));

// Configurações adicionais de segurança
const helmet = require('helmet');
app.use(helmet());

const csrf = require('csurf');
app.use(csrf());

// Adição de mensagens flash para validadção de formulários
const flash = require('connect-flash');
app.use(flash());

// Aplicando os middlewares globais
const {csrfMiddleware, varMiddlewares, userData, includesMiddleware, flashesMiddleware} = require('./middlewares/globalMiddlewares');
app.use(csrfMiddleware);
app.use(varMiddlewares);
app.use(includesMiddleware);
app.use(flashesMiddleware);
app.use(userData);
// Obs.: Poderíamos aplicar middleware somente a determinada rota com: app.use('/route', middleware);

// Adicionando nosso roteador de rotas à aplicação
const { glob } = require('glob');
const routes = glob.sync(path.resolve(__dirname, 'routes', '*.js'));
for (const route of routes){
    const router = require(route);
    app.use(router);
};

// Definindo a página de erro em caso de erro 404
app.use((req, res) => { res.status(404).render('error404.html') });

app.on('ready', () => {
    // Inicialização da aplicação
    app.listen(process.env.SERVERPORT);
});
