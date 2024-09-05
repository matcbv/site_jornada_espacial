// ---------- HTML ELEMENTS ----------

const eyeIcon = document.querySelector('.eye-icon')
const passwordInput = document.querySelector('.password-input')
const crossline = document.querySelector('.crossline')
const registerForm = document.querySelector('.register-form')
const inputs = document.querySelectorAll('input')

// ---------- REGISTER FORM ANIMATIONS ----------

if (registerForm){
    for (let input of inputs){
        if (input.type !== 'submit'){

            if (input.value){
                if (input.name === 'password'){
                    input.type = 'text'

                    input.addEventListener('click', () => {
                        input.type = 'password'
                    })
                }
                input.style.color = '#d93939'
            }
    
            input.addEventListener('click', () => {
                input.value = ''
                input.style.color = 'white'
            })
    
            input.addEventListener('focus', () => {
                input.value = ''
                input.style.color = 'white'
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
