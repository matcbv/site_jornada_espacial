const path = require('path')

const staticController = {
    getPopup: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'popups', `${req.params.body}_popup.html`))
    }
}

module.exports = staticController