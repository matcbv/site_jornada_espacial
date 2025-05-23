const userModel = require('../models/userModel');
const [userData] = require('../middlewares/globalMiddlewares');

const userMiddleware = {
	checkLog: async (req, res, next) => {
		if (!req.session.user) {
			return res.redirect('/account');
		}
		next();
	},

	loggedIn: (req, res) => {
		req.session.user ? res.json(req.session.user) : res.json(false);
	},

	logoutUser: (req, res) => {
		req.session.destroy((err) => {
			if (err) {
				return res.status(500).send('Erro ao finalizar a sessão.');
			}
			res.redirect('/');
		});
	},

	getFavBody: async (req, res) => {
		const user = await userModel.findOne({
			username: req.session.user.username,
		});
		return res.json(user.favBody);
	},

	addFavBody: async (req, res) => {
		const currentBody = req.params.body;
		try {
			const user = await userModel.findOneAndUpdate(
				{ username: req.session.user.username },
				{ favBody: currentBody },
				{ new: true },
			);
			req.session.user = user;
			userData(req, res, () => {
				return res.redirect('/account/profile');
			});
		} catch (e) {
			console.error('Erro ao favoritar corpo celeste', e);
		}
	},

	changeProfileImg: async (req, res) => {
		const newProfileImg = req.params.img;
		try {
			const user = await userModel.findOneAndUpdate(
				{ username: req.session.user.username },
				{ profileImg: newProfileImg },
				{ new: true },
			);
			req.session.user = user;
			userData(req, res, () => {
				return res.redirect('/account/profile');
			});
		} catch (e) {
			console.error('Erro ao alterar imagem de perfil', e);
		}
	},

	addBadge: async (req, res) => {
		const date = new Date();
		req.session.user.badges.push([
			req.params.badge,
			date.toLocaleDateString(['pt-BR']),
		]);
		const user = await userModel.findOneAndUpdate(
			{ username: req.session.user.username },
			{ badges: req.session.user.badges },
			{ new: true },
		);
		req.session.user = user;
		userData(req, res, () => {
			return res.redirect('/account/profile');
		});
	},

	getBadges: (req, res) => {
		return res.json(req.session.user.badges);
	},

	getVisitedBodies: (req, res) => {
		if (req.session.user) {
			req.session.visitedBodies
				? res.json(req.session.visitedBodies)
				: res.json([]);
		}
	},

	getPlayedMusics: (req, res) => {
		if (req.session.user) {
			if (!req.session.user.badges.includes('musical_travaller')) {
				if (
					req.session.playedMusics &&
					!req.session.playedMusics.includes(req.params.music)
				) {
					req.session.playedMusics.push(req.params.music);
				} else {
					req.session.playedMusics = [req.params.music];
				}
				return res.json(req.session.playedMusics);
			} else {
				return res.json([]);
			}
		}
	},
};

module.exports = userMiddleware;
