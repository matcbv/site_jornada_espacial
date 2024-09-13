const { changePassword } = require("./loginController")
const { userData } = require("./registerController")

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

    log_template: (req, res) => {
        return res.render('log_template.html')
    },

    login: (req, res) => {
        return res.render('login.html')
    },

    register: (req, res) => {
        return res.render('register.html')
    },

    validationPage: (req, res) => {
        return res.render('code_popup.html')
    },

    profile: (req, res) => {
        return res.render('profile.html')
    },

    editProfile: (req, res) => {
        return res.render('edit_profile.html')
    },

    changePasswordPage: (req, res) => {
        return res.render('change_password.html')
    },
    
    error_404: (req, res) => {
        return res.render('error_404.html')
    }
}

module.exports = pagesController
