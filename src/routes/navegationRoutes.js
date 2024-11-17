const pagesController = require('../controllers/pagesController');
const staticController = require('../controllers/staticController');
const ideaformController = require('../controllers/ideaformController');
const userMiddleware = require('../middlewares/userMiddlewares');

const { Router } = require('express');
const router = new Router();

// Página inicial
router.get('/', pagesController.homePage);
// Seção Milkyway
router.get('/milkyway', pagesController.milkyway);
// Seção Andrômeda
router.get('/andromeda', pagesController.andromeda);
// Seção Triângulo
router.get('/triangle', pagesController.triangle);
// Requisição dos popups
router.get('/popup/:body', staticController.getPopup);
// Rota para obter corpo celeste favorito
router.get('/getFavBody', userMiddleware.getFavBody);
// Rota para favoritar corpo celeste
router.get('/favBody/:body', userMiddleware.checkLog, userMiddleware.addFavBody);
// Formulário de ideias
router.get('/ideaform', pagesController.ideaForm);
// Rota para enviar dados do formulario
router.post('/ideaform/sendidea', ideaformController.sendIdea);
// Página sobre mim
router.get('/aboutme', pagesController.aboutme);
// Página de inspirações
router.get('/inspirations', pagesController.inspirations); // Em produção
// Página 404
router.get('/404', pagesController.error404)

module.exports = router;
