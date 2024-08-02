// Criando nosso roteador de rotas
const express = require('express')
const router = express.Router()

// Importando os middlewares de controle de rota
const homeController = require('./controllers/homeController')
const popupController = require('./controllers/popupController')
const formController = require('./controllers/formController')

// Página inicial
router.get('/', homeController.homePage)
// Seção Milkyway
router.get('/milkyway', homeController.milkyway)
// Seção Andrômeda
router.get('/andromeda', homeController.andromeda)
// Seção Triângulo
router.get('/triangle', homeController.triangle)
// Popup de ideias
router.get('/ideaForm', homeController.ideaForm)
// Enviando dados do formulario
router.post('/ideaForm/sendIdea', formController.sendIdea)
// Popups
router.get('/popup/:body', popupController.getPopup)

module.exports = router