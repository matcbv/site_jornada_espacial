function csrfMiddleware(req, res, next){
    res.locals.csrfToken = req.csrfToken()
    next()
}

function globalMiddleware(req, res, next){
    next()
}

module.exports = {csrfMiddleware, globalMiddleware}