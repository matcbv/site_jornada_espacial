const path = require('path')

const popupController = {
    getPopup: (req, res) => {
        return res.sendFile(path.resolve(__dirname, '..', 'views', 'popups_html', `${req.params.body}_popup.html`))
    }
}

module.exports = popupController