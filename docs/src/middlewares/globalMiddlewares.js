function csrfMiddleware(req, res, next){
    res.locals.csrfToken = req.csrfToken()
    next()
}

function globalMiddleware(req, res, next){
    res.locals.user = req.user
    res.locals.head = 'includes/head.html'
    res.locals.footer = 'includes/footer.html'
    next()
}

module.exports = {csrfMiddleware, globalMiddleware}
