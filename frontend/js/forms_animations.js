import validator from "validator"

// ---------- HTML ELEMENTS ----------

// ---------- FORM MAIN ----------
const currentMain = document.querySelector('main');

// ---------- ICONS ---------- 
const eyeIcons = document.querySelectorAll('.eye-icon');
const closedEyeIcons = document.querySelectorAll('.closed-eye-icon');
const requirementsIcon = document.querySelector('.requirements-icon');

// ---------- FORMS ----------
const registerForm = document.querySelector('.register-form');
const codeForm = document.querySelector('.code-form');
const loginForm = document.querySelector('.login-form');
const passwordForm = document.querySelector('.password-form');

// ---------- INPUTS ----------
const inputs = document.querySelectorAll('input');

// ---------- BUTTONS ----------
const resendEmailBtn = document.querySelector('.resend-email');

// ---------- REGISTER FORM ANIMATIONS ----------

if (registerForm || codeForm || loginForm || passwordForm){
    for (let input of inputs){
        if (input.type !== 'submit' && input.type !== 'button'){
            input.addEventListener('click', () => {
                input.placeholder = '';
            });
            input.addEventListener('focus', () => {
                input.placeholder = '';
            });
        };
        if(input.id === 'birthday'){
            input.addEventListener('input', (event) => {
                const data = event.data;
                if(!validator.isNumeric(data)){
                    input.value = input.value.slice(0, -1);
                };
                if (Array.from(input.value).length === 2 || Array.from(input.value).length === 5){
                    input.value += '/';
                };
            });
        };
    };
};

if (eyeIcons && closedEyeIcons){
    eyeIcons.forEach(element => {
        element.addEventListener('click', () => showPassword(element, element.previousElementSibling));
    });
    closedEyeIcons.forEach(element => {
        element.addEventListener('click', () => showPassword(element, element.previousElementSibling.previousElementSibling));
    });
};

function showPassword(element, input) {
    if (input.type === 'password'){
        input.type = 'text';
        element.style.display = 'none';
        element.nextElementSibling.style.display = 'block';
    } else{
        input.type = 'password';
        element.style.display = 'none';
        element.previousElementSibling.style.display = 'block';
    };
}

if (requirementsIcon){
    const requirementsDiv = requirementsIcon.nextElementSibling;

    requirementsIcon.addEventListener('click', () => {
        if (window.getComputedStyle(requirementsDiv).display === 'none'){
            requirementsDiv.classList.remove('disappear-animation');
            requirementsDiv.classList.add('fast-appear-animation');
            setTimeout(() => {
                requirementsDiv.style.display = 'flex';
            }, 500);
            currentMain.addEventListener('click', hideRequirements)
        } else if(window.getComputedStyle(requirementsDiv).display === 'flex'){
            requirementsDiv.classList.remove('fast-appear-animation');
            requirementsDiv.classList.add('disappear-animation');
            setTimeout(() => {
                requirementsDiv.style.display = 'none';
            }, 500);
            currentMain.removeEventListener('click', hideRequirements);
        };
    });

    function hideRequirements(e){
        const element = e.target
        if(!requirementsDiv.contains(element) && window.getComputedStyle(requirementsDiv).display === 'flex'){
            if (window.getComputedStyle(requirementsDiv).display === 'flex'){
                requirementsDiv.classList.remove('fast-appear-animation');
                requirementsDiv.classList.add('disappear-animation');
                setTimeout(() => {
                    requirementsDiv.style.display = 'none';
                }, 500);
            };
        };
    };
};

// ---------- VALIDATION POPUP ANIMATIONS ----------

if (resendEmailBtn){
    resendEmailBtn.addEventListener('click', () => {
        sessionStorage.setItem('emailSent', 'true');
        // Utilizando o encodeURIComponent para codificação de caracteres não alfanuméricos:
        window.location.href = '/resendEmail/password_email?prevPage=' + encodeURIComponent(window.location.href);
    });
};
