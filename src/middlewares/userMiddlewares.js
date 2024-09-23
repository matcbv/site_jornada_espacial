const userModel = require('../models/userModel')

const userController = {
    checkLog: async (req, res, next) => {
        if (!req.session.user){
            return res.redirect('/account')
        }
        next()
    },

    loggedIn: (req, res) => {
        return res.json(!!req.session.user)
    },
    
    logoutUser: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
              return res.status(500).send('Erro ao finalizar a sessão.');
            }
            res.redirect('/');
          });
    },
    
    userData: (req, res, next) => {
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
    },

    getFavBody: async (req, res) => {
        const user = await userModel.findOneAndUpdate({username: req.session.user.username})
        return res.json(user.favBody)
    },
    
    addFavBody: async (req, res) => {
        const currentBody = req.params.body
        try{
            const user = await userModel.findOneAndUpdate({username: req.session.user.username}, {favBody: currentBody}, {new: true})
            req.session.user = user
            userController.userData(req, res, () => {
                return res.redirect('/account/profile')
            })
        } catch(e){
            console.error('Erro ao favoritar corpo celeste', e)
        }
    },
    
    changeProfileImg: async (req, res) => {
        const newProfileImg = req.params.img
        try{
            const user = await userModel.findOneAndUpdate({username: req.session.user.username}, {profileImg: newProfileImg}, {new: true})
            req.session.user = user
            userController.userData(req, res, () => {
                return res.redirect('/account/profile')
            })
        } catch(e){
            console.error('Erro ao alterar imagem de perfil', e)
        }
    },
    
    checkBadge: async (req, res, next) => {
        const user = await userModel.findOne({ username: req.session.user.username })
        if(user.badges.includes(req.params.badge)){
            return res.redirect('/account/profile')
        }
        next()
    },
    
    addBadge: async (req, res) => {
        req.session.user.badges.push(req.params.badge)
        const user = await userModel.findOneAndUpdate({username: req.session.user.username}, {badges: req.session.user.badges}, {new: true})
        req.session.user = user
        userController.userData(req, res, () => {
            return res.redirect('/account/profile')
        })
    },

    getVisitedBodies: (req, res) => {
        if(req.session.user){
            req.session.visitedBodies ? res.json(req.session.visitedBodies): res.json([])
        }
    },

    getPlayedMusics: (req, res) => {
        if(req.session.user){
            req.session.playedMusics ? res.json(req.session.playedMusics): res.json([])
        }
    }
}

module.exports = userController
