const staticController = require('../controllers/staticController');
const userMiddleware = require('../middlewares/userMiddlewares');

const { Router } = require('express');
const router = new Router();

// Rota para obter os corpos celestes já visitados
router.get('/getVisitedBodies', userMiddleware.getVisitedBodies);
// Rota para obter as músicas já tocadas
router.get('/getPlayedMusics/:music', userMiddleware.getPlayedMusics);
// Rota para obter as insígneas do usuário
router.get('/getBadges', userMiddleware.getBadges);
// Rota para adicionar modal das insígneas na tela
router.get('/getModal', userMiddleware.checkLog, staticController.getModal);
// Rota para obter o modal contendo a descrição de cada insígnea
router.get(
	'/getBadgeModal/:badge',
	userMiddleware.checkLog,
	staticController.getBadgeModal,
);
// Rota para obter o modal de dicas de cada insígnea
router.get(
	'/getBadgeHintModal/:badge',
	userMiddleware.checkLog,
	staticController.getBadgeHintModal,
);
// Rota para adicionar insígneas ao perfil do usuário
router.get('/addBadge/:badge', userMiddleware.addBadge);

module.exports = router;
