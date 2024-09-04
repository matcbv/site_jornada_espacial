function csrfMiddleware(req, res, next){
    res.locals.csrfToken = req.csrfToken()
    next()
}

function globalMiddleware(req, res, next){
    res.locals.head = 'includes/head.html'
    res.locals.header = 'includes/header.html'
    res.locals.fluidHeader = 'includes/fluid_header.html'
    res.locals.footer = 'includes/footer.html'
    res.locals.playlist = 'includes/playlist.html'
    res.locals.audio = 'includes/audio.html'
    res.locals.swordfish = 'includes/swordfish.html'
    res.locals.subjectError = req.flash('subjectError')
    res.locals.textError = req.flash('textError')
    res.locals.successMsg = req.flash('successMsg')
    res.locals.nameError = req.flash('nameError')
    res.locals.lastnameError = req.flash('lastnameError')
    res.locals.usernameError = req.flash('usernameError')
    res.locals.passwordError = req.flash('passwordError')
    res.locals.emailError = req.flash('emailError')
    res.locals.birthdayError = req.flash('birthdayError')
    next()
}

module.exports = {csrfMiddleware, globalMiddleware}
