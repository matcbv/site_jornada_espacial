import { resolve, sep } from 'path';
import { globSync } from 'glob';
import express from 'express';
import { ConnectMongo } from './configs/db.js';
import flash from 'connect-flash';
import * as globalMiddlewares from './middlewares/globalMiddlewares.js';
import helmet from 'helmet';
import csurf from 'csurf';
import { renderFile } from 'ejs';
import { config } from 'dotenv';
import { pathToFileURL } from 'url';
config();

const app = express();

// Aplicando middleware urlencoded() usado para interpretar dados enviados no formato application/x-www-form-urlencoded, que é o formato padrão de envio de formulários HTML.
app.use(express.urlencoded({ extended: true }));

// Definindo a rota dos arquivos estáticos
app.use(express.static(resolve(import.meta.dirname, '..', 'public')));

// Definindo a engine de visualização da aplicação
app.set('view engine', 'ejs');
app.set('views', resolve(import.meta.dirname, 'views'));
// Registrando o mecanismo de template para a extensão .html
app.engine('html', renderFile);
// Obs.: O mecanismo renderFile será chamado automaticamente quando utilizarmos res.render(), buscando o mecanismo associado à extensão .html (no caso, renderFile do EJS). Serão automaticamente passados para renderFile todos os parâmetros necessários: o caminho do arquivo, os dados e as opções.

// Conectando-se ao banco de dados:
const connection = new ConnectMongo(app);
connection.connect();
connection.createSession();

// Configurações adicionais de segurança
app.use(helmet(), csurf());

// Adição de mensagens flash para validação de formulários
app.use(flash());

// Obtendo os middlewares globais do objeto e aplicando-os à aplicação:
Object.values(globalMiddlewares).forEach((middleware) => app.use(middleware));

// Adicionando nosso roteador de rotas à aplicação
const routes = globSync(
	// Utilizaremos o split com sep (identifica automaticamente o separador do sistema operacional atual) para separar os caminhos e então juntaremos com o join.
	resolve(import.meta.dirname, 'routes', '*.js')
		.split(sep)
		.join('/'),
);
for (const route of routes) {
	// Transformando a URL de caminho obtida em uma compatível para importação:
	const router = await import(pathToFileURL(route).href);
	app.use(router.default);
}
// Definindo a página de erro em caso de erro 404
app.use((req, res) => res.status(404).render('error404.html'));

app.on('ready', () => app.listen(process.env.SERVERPORT));
