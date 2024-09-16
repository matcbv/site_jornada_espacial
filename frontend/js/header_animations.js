// Elementos do cabeçalho
const menuIcon = document.querySelector('.menu-icon')

const header = document.querySelector('header')
const fluidHeader = document.querySelector('.fluid-header')

const profileMain = document.querySelector('.profile-main')
const editProfileMain = document.querySelector('.edit-profile-main')

// Evento para animações do cabeçalho fluido
menuIcon.addEventListener('click', () => {
    const fluidHeaderDisplay = window.getComputedStyle(fluidHeader).display
    menuIcon.classList.add('shake-animation')
    if (fluidHeaderDisplay === 'none'){
        fluidHeader.classList.remove('get-up-animation')
        fluidHeader.style.display = 'block'
        fluidHeader.classList.add('get-down-animation')
    } else if (fluidHeaderDisplay === 'block'){
        fluidHeader.classList.remove('get-down-animation')
        fluidHeader.classList.add('get-up-animation')
        setTimeout(() => {
            fluidHeader.style.display = 'none'
            fluidHeader.classList.remove('get-up-animation')
        }, 500)
    }
    setTimeout(() => {
        menuIcon.classList.remove('shake-animation')
    }, 500)
})

// Trocando cores do cabeçalho ao entrar no perfil do usuário
if (profileMain || editProfileMain){
    header.classList.add('profile-header')
    const galaxiesLinks = header.querySelector('ul').querySelectorAll('a')
    galaxiesLinks.forEach(element => {
        element.classList.add('profile-galaxies-links')
    });
    const fluidHeaderLinks = fluidHeader.querySelectorAll('li')
    fluidHeaderLinks.forEach(element => {
        element.classList.add('profile-fluid-header-links')
    });
} else{
    header.classList.remove('profile-header')
    const galaxiesLinks = header.querySelector('ul').querySelectorAll('a')
    galaxiesLinks.forEach(element => {
        element.classList.remove('profile-galaxies-links')
    });
    const fluidHeaderLinks = fluidHeader.querySelectorAll('li')
    fluidHeaderLinks.forEach(element => {
        element.classList.remove('profile-fluid-header-links')
    });
}
