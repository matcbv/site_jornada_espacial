// Criando nosso roteador de rotas
const express = require('express')
const router = express.Router()

// Importando os middlewares de controle de rota
const homeController = require('./controllers/homeController')
const popupController = require('./controllers/popupController')
const formController = require('./controllers/formController')
const errorController = require('./controllers/errorController')

// Página inicial
router.get('/', homeController.homePage)
// Seção Milkyway
router.get('/milkyway', homeController.milkyway)
// Seção Andrômeda
router.get('/andromeda', homeController.andromeda)
// Seção Triângulo
router.get('/triangle', homeController.triangle)
// Popup de ideias
router.get('/ideaform', homeController.ideaForm)
// Enviando dados do formulario
router.post('/ideaform/sendidea', formController.sendIdea)
// Popups
router.get('/popup/:body', popupController.getPopup)
// Página 404
router.get('/404', errorController.error_404)

module.exports = router
