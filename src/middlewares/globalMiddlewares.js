function csrfMiddleware(req, res, next) {
	res.locals.csrfToken = req.csrfToken();
	next();
}

function varMiddlewares(req, res, next) {
	res.locals.allBadges = [
		'galactic_explorer',
		'musical_travaller',
		'thinker_backpacker',
		'universe_champion',
		'space_cowboy',
	];
	next();
}

function userData(req, res, next) {
	if (req.session.user) {
		res.locals.name = req.session.user.name || '';
		res.locals.lastname = req.session.user.lastname || '';
		res.locals.username = req.session.user.username || '';
		res.locals.birthday = req.session.user.birthday || '';
		res.locals.email = req.session.user.email || '';
		res.locals.bio = req.session.user.bio || '';
		res.locals.favBody = req.session.user.favBody || '';
		res.locals.profileImg = req.session.user.profileImg || '';
		res.locals.badges = req.session.user.badges || [];
	} else {
		res.locals.profileImg = '';
	}
	next();
}

function includesMiddleware(req, res, next) {
	res.locals.head = 'includes/head.html';
	res.locals.header = 'includes/header.html';
	res.locals.fluidHeader = 'includes/fluid_header.html';
	res.locals.footer = 'includes/footer.html';
	res.locals.playlist = 'includes/playlist.html';
	res.locals.audio = 'includes/audio.html';
	res.locals.swordfish = 'includes/swordfish.html';
	res.locals.profileNav = 'includes/profile_nav.html';
	next();
}

function flashesMiddleware(req, res, next) {
	res.locals.subjectError = req.flash('subjectError');
	res.locals.textError = req.flash('textError');
	res.locals.successMsg = req.flash('successMsg');
	res.locals.ideaSent = req.flash('ideaSent');
	res.locals.nameError = req.flash('nameError');
	res.locals.lastnameError = req.flash('lastnameError');
	res.locals.usernameError = req.flash('usernameError');
	res.locals.passwordError = req.flash('passwordError');
	res.locals.emailError = req.flash('emailError');
	res.locals.birthdayError = req.flash('birthdayError');
	res.locals.bioError = req.flash('bioError');
	res.locals.codeError = req.flash('codeError');
	res.locals.userError = req.flash('userError');
	res.locals.registerMsg = req.flash('registerMsg');
	next();
}

module.exports = [
	csrfMiddleware,
	varMiddlewares,
	userData,
	includesMiddleware,
	flashesMiddleware,
];
