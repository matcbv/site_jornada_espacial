// HTML ELEMENTS

const eyeIcon = document.querySelector('.eye-icon')
const passwordInput = document.querySelector('.password-input')


// REGISTER FORM ANIMATIONS

eyeIcon.addEventListener('mousedown', () => {
    passwordInput.type = 'text'
})