const homeController = {
    homePage: (req, res) => {
        return res.render('index.html')
    },

    milkyway: (req, res) => {
        return res.render('milkyway.html')
    },

    andromeda: (req, res) => {
        return res.render('andromeda.html')
    },

    triangle: (req, res) => {
        return res.render('triangle.html')
    },

    ideaForm: (req, res) => {
        return res.render('ideaform.html')
    }
}

module.exports = homeController
