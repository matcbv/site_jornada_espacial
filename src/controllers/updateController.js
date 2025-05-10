const [ userData ] = require('../middlewares/globalMiddlewares');
const Update = require('../models/updateFormModel');
const userModel = require('../models/userModel');

const updateController = {
	updateData: async (req, res) => {
		const update = new Update(req.body, req.session.user._id);
		await update.checkData();
		if (update.errorList.length > 0) {
			for (let e of update.errorList) {
				Object.entries(e).forEach(([field, msg]) => {
					req.flash(`${field}Error`, msg);
				});
			}
			res.redirect('/account/profile/editProfile');
		} else {
			try {
				const updatedUser = await userModel.findOneAndUpdate(
					{ username: req.session.user.username },
					{ $set: update.newData },
					{ new: true },
				);
				req.session.user = updatedUser;
				userData(req, res, () => {
					res.redirect('/account/profile');
				});
			} catch (e) {
				console.error('Erro ao atualizar os dados.', e);
			};
		};
	},
};

module.exports = updateController;
