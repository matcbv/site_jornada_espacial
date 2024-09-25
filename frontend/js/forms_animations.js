// ---------- HTML ELEMENTS ----------

// ---------- FORM MAIN ----------
const registerMain = document.querySelector('.register-main')

// ---------- ICONS ---------- 
const eyeIcons = document.querySelectorAll('.eye-icon')
const crosslines = document.querySelectorAll('.crossline')
const requirementsIcon = document.querySelector('.requirements-icon')
const requirementsDiv = document.querySelector('.password-requirements')

// ---------- FORMS ----------
const registerForm = document.querySelector('.register-form')
const codeForm = document.querySelector('.code-form')
const loginForm = document.querySelector('.login-form')
const passwordForm = document.querySelector('.password-form')

// ---------- INPUTS ----------
const inputs = document.querySelectorAll('input')

// ---------- BUTTONS ----------
const resendEmailBtn = document.querySelector('.resend-email')

// ---------- REGISTER FORM ANIMATIONS ----------

if (registerForm || codeForm || loginForm || passwordForm){
    for (let input of inputs){
        if (input.type !== 'submit' && input.type !== 'button'){
    
            input.addEventListener('click', () => {
                input.placeholder = ''
            })
    
            input.addEventListener('focus', () => {
                input.placeholder = ''
            })
        }
    }
}

if (Array.from(eyeIcons).length > 0 && Array.from(crosslines).length > 0){
    eyeIcons.forEach(element => {
        element.addEventListener('click', () => showPassword(element))
    });
    crosslines.forEach(element => {
        element.addEventListener('click', () => showPassword(element))
    });
}

function showPassword(element) {
    const input = element.previousElementSibling
    if (input.type === 'password'){
        input.type = 'text'
        element.classList.contains('crossline') ? element.style.display = 'none': element.nextElementSibling.style.display = 'none'
    } else{
        input.type = 'password'
        element.classList.contains('crossline') ? element.style.display = 'block': element.nextElementSibling.style.display = 'block'
    }
}

if (requirementsIcon){
    requirementsIcon.addEventListener('click', () => {
        if (window.getComputedStyle(requirementsDiv).display === 'none'){
            requirementsDiv.classList.remove('disappear-animation')
            requirementsDiv.classList.add('fast-appear-animation')
            setTimeout(() => {
                requirementsDiv.style.display = 'flex'
            }, 500)
            registerMain.addEventListener('click', hideRequirements)
        } else if(window.getComputedStyle(requirementsDiv).display === 'flex'){
            requirementsDiv.classList.remove('fast-appear-animation')
            requirementsDiv.classList.add('disappear-animation')
            setTimeout(() => {
                requirementsDiv.style.display = 'none'
            }, 500)
            registerMain.removeEventListener('click', hideRequirements)
        }
    })
}

function hideRequirements(e){
        const element = e.target
        if(!requirementsDiv.contains(element) && window.getComputedStyle(requirementsDiv).display === 'flex'){
            if (window.getComputedStyle(requirementsDiv).display === 'flex'){
                requirementsDiv.classList.remove('fast-appear-animation')
                requirementsDiv.classList.add('disappear-animation')
                setTimeout(() => {
                    requirementsDiv.style.display = 'none'
                }, 500)
            }
        }
}

// ---------- VALIDATION POPUP ANIMATIONS ----------

if (resendEmailBtn){
    resendEmailBtn.addEventListener('click', () => {
        sessionStorage.setItem('emailSent', 'true')
        window.location.href = '/resendEmail/password_email?prevPage=' + encodeURIComponent(window.location.href);
    })
}
