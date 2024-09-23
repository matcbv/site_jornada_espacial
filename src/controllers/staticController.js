const path = require('path')

const staticController = {
    getPopup: (req, res) => {
        if(req.session.user){
            if(!req.session.user.badges.includes('galactic_explorer')){
                req.session.visitedBodies ? req.session.visitedBodies.push(req.params.body): req.session.visitedBodies = [req.params.body]
            }
        }
        console.dir(req.session)
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'popups', `${req.params.body}_popup.html`))
    },

    getModal: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'badge_modal.html'))
    }
}

module.exports = staticController
