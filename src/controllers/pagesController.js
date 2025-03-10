const pagesController = {
	homePage: (req, res) => {
		return res.render('index.html');
	},

	milkyway: (req, res) => {
		return res.render('milkyway.html');
	},

	andromeda: (req, res) => {
		return res.render('andromeda.html');
	},

	triangle: (req, res) => {
		return res.render('triangle.html');
	},

	ideaForm: (req, res) => {
		return res.render('ideaform.html');
	},

	aboutme: (req, res) => {
		return res.render('aboutme.html');
	},

	inspirations: (req, res) => {
		return res.render('inspirations.html');
	},

	accountPage: (req, res) => {
		return res.render('account_page.html');
	},

	login: (req, res) => {
		return res.render('login.html');
	},

	register: (req, res) => {
		return res.render('register.html');
	},

	validationPage: (req, res) => {
		return res.render('code_popup.html');
	},

	profile: (req, res) => {
		return res.render('profile.html');
	},

	editProfile: (req, res) => {
		return res.render('edit_profile.html');
	},

	passwordPage: (req, res) => {
		return res.render('password.html');
	},

	changePasswordPage: (req, res) => {
		return res.render('change_password.html');
	},

	error404: (req, res) => {
		return res.render('error404.html');
	},
};

module.exports = pagesController;
