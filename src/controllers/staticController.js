const path = require('path')

const staticController = {
    getPopup: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'popups', `${req.params.body}_popup.html`))
    },

    addModal: (req, res) => {
        console.log(req.params.body)
        return res.sendFile(path.resolve(__dirname, '..', 'views', `badge_modal.html`))
    }
}

module.exports = staticController
