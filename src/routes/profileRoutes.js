import { pagesController } from '../controllers/pagesController.js';
import { loginController } from '../controllers/loginController.js';
import { updateController } from '../controllers/updateController.js';
import { userMiddleware } from '../middlewares/userMiddlewares.js';
import { Router } from 'express';

const router = new Router();

// Página inicial do perfil do usuário:
router.get(
	'/account/profile',
	userMiddleware.checkLog,
	pagesController.profile,
);
// Rota para deslogar o usuário
router.get('/account/profile/logout', userMiddleware.logoutUser);
// Página para editar dados do usuário
router.get(
	'/account/profile/editProfile',
	userMiddleware.checkLog,
	pagesController.editProfile,
);
// Rota para atualizar dados do usuário
router.post(
	'/account/profile/editProfile/updateData',
	userMiddleware.checkLog,
	updateController.updateData,
);
// Rota para alterar a imagem do perfil
router.get(
	'/profileImg/:img',
	userMiddleware.checkLog,
	userMiddleware.changeProfileImg,
);
// Rota para deletar a conta do usuário
router.get(
	'/deleteAccount',
	loginController.deleteAccount,
	userMiddleware.logoutUser,
);

export default router;
