const userModel = require('../models/userModel')

async function checkLog(req, res, next){
    if (req.session.user){
        try{
            const userData = await userModel.findOne({ username: req.session.user['username'] })
            req.session.user = userData
        } catch(e){
            console.log('Erro ao atualizar dados do usuário', e)
        }
        next()
    } else{
        res.redirect('/account')
    }
}

function logoutUser(req, res){
    req.session.destroy((err) => {
        if (err) {
          return res.status(500).send('Erro ao finalizar a sessão.');
        }
        res.redirect('/');
      });
}

function userData(req, res, next){
    res.locals.name = req.session.user.name
    res.locals.lastname = req.session.user.lastname
    res.locals.username = req.session.user.username
    res.locals.birthday = req.session.user.birthday
    res.locals.email = req.session.user.email
    res.locals.bio = req.session.user.bio
    res.locals.favBody = req.session.user.favBody
    res.locals.profileImg = req.session.user.profileImg
    res.locals.badges = req.session.user.badges
    next()
}

async function addFavBody(req, res){
    const currentBody = req.params.body
    try{
        const user = await userModel.findOne({ username: req.session.user.username })
        user.favBody = currentBody
        await user.save()
        res.redirect('/account/profile')
    } catch(e){
        console.log('Erro ao favoritar corpo celeste', e)
    }
}

async function changeProfileImg(req, res) {
    const newProfileImg = req.params.img
    try{
        const user = await userModel.findOne({ username: req.session.user.username })
        user.profileImg = newProfileImg
        await user.save()
        res.redirect('/account/profile')
    } catch(e){
        console.log('Erro ao alterar imagem de perfil', e)
    }
}

async function checkBadge(req, res, next) {
    const user = await userModel.findOne({ username: req.session.user.username })
    req.newBadge = !user.badges.includes(req.params.badge)
    next()
}

async function addBadge(req, res) {
    const user = await userModel.findOne({ username: req.session.user.username })
    user.badges.push(req.params.badge)
    req.session.user.badges = user.badges 
    await user.save()
    res.redirect('back');
}

module.exports = {checkLog, userData, logoutUser, addFavBody, addBadge, checkBadge, changeProfileImg}
