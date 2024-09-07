// ---------- HTML ELEMENTS ----------

// ---------- FORM MAIN ----------
const registerMain = document.querySelector('.register-main')

// ---------- ICONS ---------- 
const eyeIcon = document.querySelector('.eye-icon')
const requirementsIcon = document.querySelector('.requirements-icon')
const requirementsDiv = document.querySelector('.password-requirements')
const crossline = document.querySelector('.crossline')


// ---------- FORMS ----------
const registerForm = document.querySelector('.register-form')
const codeForm = document.querySelector('.code-form')
const loginForm = document.querySelector('.login-form')

// ---------- INPUTS ----------
const inputs = document.querySelectorAll('input')
const passwordInput = document.querySelector('.password-input')


// ---------- REGISTER FORM ANIMATIONS ----------

if (registerForm || codeForm || loginForm){
    for (let input of inputs){
        if (input.type !== 'submit' && input.type !== 'button'){

            if (input.placeholder && input.name === 'password'){
                input.type = 'text'
                input.addEventListener('click', () => {
                    input.type = 'password'
                })
            }
    
            input.addEventListener('click', () => {
                input.placeholder = ''
            })
    
            input.addEventListener('focus', () => {
                input.placeholder = ''
            })
        }
    }
}

if (eyeIcon && crossline){
    eyeIcon.addEventListener('click', () => showPassword())
    crossline.addEventListener('click', () => showPassword())
}

function showPassword() {
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text'
        crossline.style.display = 'none'
    } else{
        passwordInput.type = 'password'
        crossline.style.display = 'block'
    }
}

if (requirementsIcon){
    requirementsIcon.addEventListener('click', () => {
        let requirementsDivStyles = window.getComputedStyle(requirementsDiv)
        if (requirementsDivStyles.display === 'none'){
            requirementsDiv.classList.remove('disappear-animation')
            requirementsDiv.classList.add('fast-appear-animation')
            setTimeout(() => {
                requirementsDiv.style.display = 'flex'
            }, 500)
            hideRequirements(requirementsDivStyles)
        } else if(requirementsDivStyles.display === 'flex'){
            requirementsDiv.classList.remove('fast-appear-animation')
            requirementsDiv.classList.add('disappear-animation')
            setTimeout(() => {
                requirementsDiv.style.display = 'none'
            }, 500)
        }
    })
}

function hideRequirements(requirementsDivStyles){
    registerMain.addEventListener('click', (e) => {
        const element = e.target
        if (!element.classList.contains('password-requirements' || !element.closest('div').classList.contains('password-requirements'))){
            if (requirementsDivStyles.display === 'flex'){
                requirementsDiv.classList.remove('fast-appear-animation')
                requirementsDiv.classList.add('disappear-animation')
                setTimeout(() => {
                    requirementsDiv.style.display = 'none'
                }, 500)
            }
        }
    })
}
