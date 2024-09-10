// Elementos do cabeçalho
const menuIcon = document.querySelector('.menu-icon')
const fluidHeader = document.querySelector('.fluid-header')

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
