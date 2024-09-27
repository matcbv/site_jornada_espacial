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
const emailController = require('./controllers/emailController')
const userMiddleware = require('./middlewares/userMiddlewares')

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
// Rota para obter corpo celeste favorito
router.get('/getFavBody', userMiddleware.getFavBody)
// Rota para favoritar corpo celeste
router.get('/favBody/:body', userMiddleware.checkLog, userMiddleware.addFavBody)


// Formulário de ideias
router.get('/ideaform', pagesController.ideaForm)
// Rota para enviar dados do formulario
router.post('/ideaform/sendidea', ideaformController.sendIdea)
// Página sobre mim
router.get('/aboutme', pagesController.aboutme)
// Página de inspirações
router.get('/inspirations', pagesController.inspirations) // Em produção


// Template para login ou cadastro
router.get('/account', pagesController.accountPage)
// Rota para verificar se usuário está logado
router.get('/loggedIn', userMiddleware.loggedIn)
// Página de login
router.get('/account/signin', pagesController.login)
// Rota para logar usuário
router.post('/account/signin/login', loginController.logUser)
// Página de cadastro
router.get('/account/signUp', pagesController.register)
// Rota para registrar o usuário
router.post('/account/signUp/register/:emailType', registerController.signUp)
// Validação da conta
router.get('/account/signUp/validation', pagesController.validationPage)
// Rota para reenviar email de validação da conta
router.get('/resendEmail/:emailType', emailController.resendVerifEmail)
// Rota para validação da conta
router.post('/checkCode', registerController.validation)
// Página de obtenção dos dados do usuário
router.get('/account/password', pagesController.passwordPage)
// Rota para checar a existência do usuário
router.get('/account/password/getUser/:emailType', loginController.getUser)
// Página para troca da senha
router.get('/account/password/changePassword', pagesController.changePasswordPage)
// Rota para checar e atualizar a nova senha
router.post('/savePassword', loginController.savePassword)


// Página inicial do perfil do usuário:
router.get('/account/profile', userMiddleware.checkLog ,pagesController.profile)
// Rota para deslogar o usuário
router.get('/account/profile/logout', userMiddleware.logoutUser)
// Página para editar dados do usuário
router.get('/account/profile/editProfile', userMiddleware.checkLog, pagesController.editProfile)
// Rota para atualizar dados do usuário
router.post('/account/profile/editProfile/updateData', userMiddleware.checkLog, updateController.updateData)
// Rota para alterar a imagem do perfil
router.get('/profileImg/:img', userMiddleware.checkLog, userMiddleware.changeProfileImg)
// Rota para deletar a conta do usuário
router.get('/deleteAccount', loginController.deleteAccount, userMiddleware.logoutUser)


// Rota para obter as insígenas do usuário
router.get('/')
// Rota para obter os corpos celestes já visitados
router.get('/getVisitedBodies', userMiddleware.getVisitedBodies)
// Rota para obter as músicas já tocadas
router.get('/getPlayedMusics/:music', userMiddleware.getPlayedMusics)
// Rota para obter as insígneas do usuário
router.get('/getBadges', userMiddleware.getBadges)
// Rota para adicionar modal das insígneas na tela
router.get('/getModal', userMiddleware.checkLog, staticController.getModal)
// Rota para obter o modal contendo a descrição de cada insígnea
router.get('/getBadgeModal/:badge', userMiddleware.checkLog, staticController.getBadgeModal)
// Rota para obter o modal de dicas de cada insígnea
router.get('/getBadgeHintModal/:badge', userMiddleware.checkLog, staticController.getBadgeHintModal)
// Rota para adicionar insígneas ao perfil do usuário
router.get('/addBadge/:badge', userMiddleware.addBadge)


// Página 404
router.get('/404', pagesController.error404)

module.exports = router
