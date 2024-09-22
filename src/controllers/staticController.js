const path = require('path')

const staticController = {
    getPopup: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'popups', `${req.params.body}_popup.html`))
    },

    getModal: (req, res) => {
        if(req.newBadge){
            return res.sendFile(path.resolve(__dirname, '..', 'views', 'badge_modal.html'))
        }
        return res.redirect('back');
    }
}

module.exports = staticController
