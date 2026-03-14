import { staticController } from '../controllers/staticController.js';
import { userMiddleware } from '../middlewares/userMiddlewares.js';
import { Router } from 'express';

const router = new Router();

// Rota para obter os corpos celestes já visitados
router.get('/getVisitedBodies', userMiddleware.getVisitedBodies);
// Rota para obter as músicas já tocadas
router.get('/getPlayedMusics/:music', userMiddleware.getPlayedMusics);
// Rota para obter as insígnias do usuário
router.get('/getBadges', userMiddleware.getBadges);
// Rota para adicionar modal das insígnias na tela
router.get('/getModal', userMiddleware.checkLog, staticController.getModal);
// Rota para obter o modal contendo a descrição de cada insígnia
router.get(
	'/getBadgeModal/:badge',
	userMiddleware.checkLog,
	staticController.getBadgeModal,
);
// Rota para obter o modal de dicas de cada insígnia
router.get(
	'/getBadgeHintModal/:badge',
	userMiddleware.checkLog,
	staticController.getBadgeHintModal,
);
// Rota para adicionar insígnias ao perfil do usuário
router.get('/addBadge/:badge', userMiddleware.addBadge);

export default router;
