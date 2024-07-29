// Criando nosso roteador de rotas
const express = require('express')
const router = express.Router()

// Importando os middlewares de controle de rota
const homeController = require('./controllers/homeController')

router.get('/', homeController.homePage)

module.exports = router