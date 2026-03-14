import { resolve } from 'path';

export const staticController = {
	getPopup: (req, res) => {
		if (req.session.user) {
			if (!req.session.user.badges.includes('galactic_explorer')) {
				if (req.session.visitedBodies) {
					if (!req.session.visitedBodies.includes(req.params.body)) {
						req.session.visitedBodies.push(req.params.body);
					}
				} else {
					req.session.visitedBodies = [req.params.body];
				}
			}
		}
		return res.sendFile(
			resolve(
				import.meta.dirname,
				'..',
				'views',
				'popups',
				`${req.params.body}_popup.html`,
			),
		);
	},

	getModal: (req, res) => {
		return res.sendFile(
			resolve(import.meta.dirname, '..', 'views', 'badges', 'badge_modal.html'),
		);
	},

	getBadgeModal: (req, res) => {
		return res.sendFile(
			resolve(
				import.meta.dirname,
				'..',
				'views',
				'badges',
				'unlocked_badges',
				`${req.params.badge}.html`,
			),
		);
	},

	getBadgeHintModal: (req, res) => {
		return res.sendFile(
			resolve(
				import.meta.dirname,
				'..',
				'views',
				'badges',
				'locked_badges',
				`${req.params.badge}.html`,
			),
		);
	},
};
