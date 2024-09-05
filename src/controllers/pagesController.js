const pagesController = {
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
    },

    aboutme: (req, res) => {
        return res.render('aboutme.html')
    },

    inspirations: (req, res) => {
        return res.render('inspirations.html')
    },

    signin_template: (req, res) => {
        return res.render('signin_template.html')
    },

    login: (req, res) => {
        return res.render('login.html')
    },

    register: (req, res) => {
        return res.render('register.html')
    },
    
    error_404: (req, res) => {
        return res.render('error_404.html')
    }
}

module.exports = pagesController
