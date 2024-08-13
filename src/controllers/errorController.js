const errorController = {
    error_404: (req, res) => {
        return res.render('error_404.html')
    }
}

module.exports = errorController
