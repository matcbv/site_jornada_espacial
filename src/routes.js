// Criando nosso roteador de rotas
const express = require('express')
const router = express.Router()

// Importando os middlewares de controle de rota
const pagesController = require('./controllers/pagesController')
const popupController = require('./controllers/popupController')
const ideaformController = require('./controllers/ideaformController')
const registerController = require('./controllers/registerController')
const errorController = require('./controllers/errorController')

// Página inicial
router.get('/', pagesController.homePage)
// Seção Milkyway
router.get('/milkyway', pagesController.milkyway)
// Seção Andrômeda
router.get('/andromeda', pagesController.andromeda)
// Seção Triângulo
router.get('/triangle', pagesController.triangle)
// Formulário de ideias
router.get('/ideaform', pagesController.ideaForm)
// Página sobre mim
router.get('/aboutme', pagesController.aboutme)
// Página de inspirações
router.get('/inspirations', pagesController.inspirations)
// Template de entrada
router.get('/signin', pagesController.signin_template)
// Página de login
router.get('/signin/login', pagesController.login)
// Página de cadastro
router.get('/signin/register', pagesController.register)
// Registro do usuário
router.post('/signin/register/signup', registerController.signup)
// Enviando dados do formulario
router.post('/ideaform/sendidea', ideaformController.sendIdea)
// Popups
router.get('/popup/:body', popupController.getPopup)
// Página 404
router.get('/404', errorController.error_404)

module.exports = router
