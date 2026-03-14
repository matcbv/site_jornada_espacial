import { IdeaForm } from '../models/ideaFormModel.js';

export const ideaFormController = {
	sendIdea: (req, res) => {
		const ideaFormObj = new IdeaForm(req.body);
		ideaFormObj.sendData().then((status) => {
			if (status.length > 0) {
				for (const errorObject of Object.values(status)) {
					for (const [key, value] of Object.entries(errorObject)) {
						req.flash(key, value);
					}
				}
				return res.redirect('/ideaform');
			} else {
				req.flash('successMsg', 'Ideia enviada com sucesso!');
				req.flash('ideaSent', true);
				return res.redirect('/ideaform');
			}
		});
	},
};
