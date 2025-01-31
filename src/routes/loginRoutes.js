const pagesController = require('../controllers/pagesController');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const emailController = require('../controllers/emailController');
const userMiddleware = require('../middlewares/userMiddlewares');

const { Router } = require('express');
const router = new Router();

// Template para login ou cadastro
router.get('/account', pagesController.accountPage);
// Rota para verificar se usuário está logado
router.get('/loggedIn', userMiddleware.loggedIn);
// Página de login
router.get('/account/signin', pagesController.login);
// Rota para logar usuário
router.post('/account/signin/login', loginController.logUser);
// Página de cadastro
router.get('/account/signUp', pagesController.register);
// Rota para registrar o usuário
router.post('/account/signUp/register/:emailType', registerController.signUp);
// Validação da conta
router.get('/account/signUp/validation', pagesController.validationPage);
// Rota para reenviar email de validação da conta
router.get('/resendEmail/:emailType', emailController.resendVerifEmail);
// Rota para validação da conta
router.post('/checkCode', registerController.validation);
// Página de obtenção dos dados do usuário
router.get('/account/password', pagesController.passwordPage);
// Rota para checar a existência do usuário
router.get('/account/password/getUser/:emailType', loginController.getUser);
// Página para troca da senha
router.get(
	'/account/password/changePassword',
	pagesController.changePasswordPage,
);
// Rota para checar e atualizar a nova senha
router.post('/savePassword', loginController.savePassword);

module.exports = router;
