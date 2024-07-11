// ---------- ROCKET ANIMATION ----------

const milkywayBtn = document.querySelector('#milkyway-btn')
const andromedaBtn = document.querySelector('#andromeda-btn')
const centaurusBtn = document.querySelector('#centaurus-btn')
const milkywayRocket = document.querySelector('#milkyway-rocket')
const andromedaRocket = document.querySelector('#andromeda-rocket')
const centaurusRocket = document.querySelector('#centaurus-rocket')

document.addEventListener('mouseover', mouse => {
    if (mouse.target.id == 'milkyway-btn'){
        milkywayRocket.innerHTML = '🚀'
        milkywayRocket.classList.add('rocket')
    } else if (mouse.target.id ==  'andromeda-btn'){
        andromedaRocket.innerHTML = '🚀'
        andromedaRocket.classList.add('rocket')
    } else if (mouse.target.id ==  'centaurus-btn'){
        centaurusRocket.innerHTML = '🚀'
        centaurusRocket.classList.add('rocket')
    }
})

document.addEventListener('mouseout', mouse => {
    if (mouse.target.id == 'milkyway-btn'){
        milkywayRocket.innerHTML = ''
        milkywayRocket.classList.remove('rocket')
    } else if (mouse.target.id ==  'andromeda-btn'){
        andromedaRocket.innerHTML = ''
        andromedaRocket.classList.remove('rocket')
    } else if (mouse.target.id ==  'centaurus-btn'){
        centaurusRocket.innerHTML = ''
        centaurusRocket.classList.remove('rocket')
    }
})

// ---------- BEGINNING BUTTON ----------

const beginningBtn = document.querySelector('.beginning-btn')

beginningBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// ---------- INTRO BUTTON ----------

const startingBtn = document.querySelector('.intro-btn')
const milkywaySection = document.querySelector('.milkyway-section')
const introSection = document.querySelector('.intro-section')

startingBtn.addEventListener('click', () => {
    introSection.classList.add('squish-animation')
    setTimeout(() => {
        introSection.classList.remove('squish-animation')
        milkywaySection.scrollIntoView({behavior: "smooth"})
    }, 999)
})

window.onload = function () {
    introSection.classList.add('appear-animation')
    setTimeout(() => {
        introSection.classList.remove('appear-animation')
    }, 1000)
}
