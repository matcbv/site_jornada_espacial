function csrfMiddleware(req, res, next){
    res.locals.csrfToken = req.csrfToken()
    next()
}

function globalMiddleware(req, res, next){
    res.locals.head = 'includes/head.html'
    res.locals.header = 'includes/header.html'
    res.locals.fluidHeader = 'includes/fluid_header.html'
    res.locals.footer = 'includes/footer.html'
    res.locals.audio = 'includes/audio.html'
    res.locals.subjectError = ''
    res.locals.textError = ''
    res.locals.messsage = ''
    next()
}

module.exports = {csrfMiddleware, globalMiddleware}
