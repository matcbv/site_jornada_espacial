const menuIcon = document.querySelector('.menu-icon')
const fluidHeader = document.querySelector('.fluid-header')

menuIcon.addEventListener('click', () => {
    const fluidHeaderDisplay = window.getComputedStyle(fluidHeader).display
    if (fluidHeaderDisplay === 'none'){
        fluidHeader.classList.remove('get-up-animation')
        fluidHeader.style.display = 'block'
        fluidHeader.classList.add('get-down-animation')
    } else if (fluidHeaderDisplay === 'block'){
        fluidHeader.style.top = '0'
        fluidHeader.classList.remove('get-down-animation')
        fluidHeader.classList.add('get-up-animation')
        setInterval(() => {
            fluidHeader.style.display = 'none'
            fluidHeader.classList.remove('get-up-animation')
        }, 500)
    }
})
