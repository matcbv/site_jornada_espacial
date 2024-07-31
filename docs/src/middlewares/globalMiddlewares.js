function csrfMiddleware(req, res, next){
    res.locals.csrfToken = req.csrfToken()
    next()
}

function globalMiddleware(req, res, next){
    res.locals.head = 'includes/head.html'
    res.locals.header = 'includes/header.html'
    res.locals.footer = 'includes/footer.html'
    next()
}

module.exports = {csrfMiddleware, globalMiddleware}
