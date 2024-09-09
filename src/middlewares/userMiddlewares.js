function checkLog(req, res, next){
    if (req.session.user){
        next()
    } else{
        res.redirect('/account')
    }
}

function logoutUser(req, res, next){
    req.session.destroy((err) => {
        if (err) {
          return res.status(500).send('Erro ao finalizar a sessão.');
        }
        res.redirect('/');
      });
}

function userData(req, res, next){
    res.locals.name = req.session.user['name']
    res.locals.lastname = req.session.user['lastname']
    res.locals.username = req.session.user['username']
    res.locals.birthday = req.session.user['birthday']
    res.locals.bio = req.session.user['bio']
    res.locals.favBody = req.session['favBody']
    res.locals.badges = req.session['badges']
    next()
}

module.exports = {checkLog, userData, logoutUser}
