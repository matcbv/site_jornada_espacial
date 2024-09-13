// Criando nosso roteador de rotas
const express = require('express')
const router = express.Router()

// Importando os middlewares de controle de rota
const pagesController = require('./controllers/pagesController')
const staticController = require('./controllers/staticController')
const ideaformController = require('./controllers/ideaformController')
const registerController = require('./controllers/registerController')
const loginController = require('./controllers/loginController')
const updateController = require('./controllers/updateController')
const {checkLog, userData, logoutUser, addFavBody, changeProfileImg} = require('./middlewares/userMiddlewares')

// Página inicial
router.get('/', pagesController.homePage)
// Seção Milkyway
router.get('/milkyway', pagesController.milkyway)
// Seção Andrômeda
router.get('/andromeda', pagesController.andromeda)
// Seção Triângulo
router.get('/triangle', pagesController.triangle)
// Requisição dos popups
router.get('/popup/:body', staticController.getPopup)
// Favoritar corpo celeste
router.get('/favBody/:body', checkLog, userData, addFavBody)


// Formulário de ideias
router.get('/ideaform', pagesController.ideaForm)
// Enviando dados do formulario
router.post('/ideaform/sendidea', ideaformController.sendIdea)
// Página sobre mim
router.get('/aboutme', pagesController.aboutme)
// Página de inspirações
router.get('/inspirations', pagesController.inspirations) // Em produção


// Template para login ou cadastro
router.get('/account', pagesController.log_template)
// Página de login
router.get('/account/signin', pagesController.login)
// Login do usuário
router.post('/account/signin/login', loginController.logUser)
// Página de cadastro
router.get('/account/signup', pagesController.register)
// Registro do usuário
router.post('/account/signup/register', registerController.signup)
// Página para validação da conta
router.get('/account/signup/validation', pagesController.validationPage)
// Reenvio do email para validação da conta
router.get('/account/signup/validation/resend', registerController.resendVerifEmail)
// Validação da conta
router.post('/checkCode', registerController.validation)
// Página para troca da senha
router.get('/account/changePassword', pagesController.changePasswordPage)


// Página inicial do perfil do usuário:
router.get('/account/profile', checkLog, userData, pagesController.profile)
// Logout do usuário
router.get('/account/profile/logout', logoutUser)
// Página para editar dados do usuário
router.get('/account/profile/editProfile', checkLog, userData, pagesController.editProfile)
// Atualizar dados do usuário
router.post('/account/profile/editProfile/updateData', checkLog, updateController.updateData, userData)
// Alterar ícone do perfil
router.get('/profileImg/:img', checkLog, userData, changeProfileImg)


// Página 404
router.get('/404', pagesController.error_404)

module.exports = router
