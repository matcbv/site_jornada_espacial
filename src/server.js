const path = require('path');
const { glob } = require('glob');

require('dotenv').config();

const express = require('express');
const app = express();

// Aplicando middleware urlencoded() usado para interpretar dados enviados no formato application/x-www-form-urlencoded, que é o formato padrão de envio de formulários HTML.
app.use(express.urlencoded({ extended: true }));

// Definindo a rota dos arquivos estáticos
console.log('Root', path.resolve(__dirname));
console.log('Static content:', path.resolve(__dirname, '..', 'public'));
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

// Definindo a engine de visualização da aplicação
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
// Registrando o mecanismo de template para a extensão .html
app.engine('html', require('ejs').renderFile);
// Obs.: O mecanismo renderFile será chamado automaticamente quando utilizarmos res.render(), buscando o mecanismo associado à extensão .html (no caso, renderFile do EJS). Serão automaticamente passados para renderFile todos os parâmetros necessários: o caminho do arquivo, os dados e as opções.

// Definindo o tempo de vida do servidor
app.keepAliveTimeout = 120000;

// Conectando-se ao banco de dados:
const ConnectMongo = require('./configs/db');
const connection = new ConnectMongo(app);
connection.connect();
connection.createSession();

// Configurações adicionais de segurança
const helmet = require('helmet');
const csrf = require('csurf');
app.use(helmet(), csrf());

// Adição de mensagens flash para validação de formulários
const flash = require('connect-flash');
app.use(flash());

// Aplicando os middlewares globais exportados em forma de array:
const globalMiddlewares = require('./middlewares/globalMiddlewares');
app.use(globalMiddlewares);
/*
	Poderíamos aplicar middlewares somente a determinada rota com: app.use('/route', middleware);
	Obs.: Nesse caso, /route seria a rota base para os middlewares passados por parâmetro.
*/
// Adicionando nosso roteador de rotas à aplicação
const routes = glob.sync(path.resolve(__dirname, 'routes', '*.js'));
for (const route of routes) {
	const router = require(route);
	app.use(router);
}
// Definindo a página de erro em caso de erro 404
app.use((req, res) => res.status(404).render('error404.html'));

app.on('ready', () => app.listen(process.env.SERVERPORT));
