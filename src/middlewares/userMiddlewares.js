const userModel = require('../models/userModel')

async function checkLog(req, res, next){
    if (req.session.user){
        try{
            const userData = await userModel.findOne({ username: req.session.user['username'] })
            req.session.user = userData
        } catch(e){
            console.log('Falha ao atualizar dados do usuário', e)
        }
        next()
    } else{
        res.redirect('/account/signin')
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
    res.locals.favBody = req.session.user['favBody']
    res.locals.badges = req.session.user['badges']
    next()
}

async function addFavBody(req, res, next){
    const currentBody = req.params.body
    try{
        const user = await userModel.findOne({ username: res.locals.username })
        user.favBody = currentBody
        await user.save()
        res.redirect('/account/profile')
    } catch(e){
        console.log('Erro ao favoritar corpo celeste', e)
    }
}

module.exports = {checkLog, userData, logoutUser, addFavBody}
