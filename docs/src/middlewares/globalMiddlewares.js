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
    res.locals.messsage = req.flash('message')
    next()
}

module.exports = {csrfMiddleware, globalMiddleware}
