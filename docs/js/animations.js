// ---------- HTML ELEMENTS ----------

const milkywayBtn = document.querySelector('#milkyway-btn')
const andromedaBtn = document.querySelector('#andromeda-btn')
const triangleBtn = document.querySelector('#triangle-btn')
const milkywayRocket = document.querySelector('#milkyway-rocket')
const andromedaRocket = document.querySelector('#andromeda-rocket')
const triangleRocket = document.querySelector('#triangle-rocket')
const beginningBtn = document.querySelector('.beginning-btn')

// ---------- NAVEGATION ----------

milkywayBtn.addEventListener('click', () => {
    window.location.assign('milkyway.html')
})

andromedaBtn.addEventListener('click', () => {
    window.location.assign('andromeda.html')
})

triangleBtn.addEventListener('click', () => {
    window.location.assign('triangle.html')
})

// ---------- ROCKET ANIMATION ----------

document.addEventListener('mouseover', e => {
    if (e.target.id == 'milkyway-btn'){
        milkywayRocket.innerHTML = '🚀'
        milkywayRocket.classList.add('rocket')
    } else if (e.target.id ==  'andromeda-btn'){
        andromedaRocket.innerHTML = '🚀'
        andromedaRocket.classList.add('rocket')
    } else if (e.target.id ==  'triangle-btn'){
        triangleRocket.innerHTML = '🚀'
        triangleRocket.classList.add('rocket')
    }
})

document.addEventListener('mouseout', e => {
    if (e.target.id == 'milkyway-btn'){
        milkywayRocket.innerHTML = ''
        milkywayRocket.classList.remove('rocket')
    } else if (e.target.id ==  'andromeda-btn'){
        andromedaRocket.innerHTML = ''
        andromedaRocket.classList.remove('rocket')
    } else if (e.target.id ==  'triangle-btn'){
        triangleRocket.innerHTML = ''
        triangleRocket.classList.remove('rocket')
    }
})

// ---------- BEGINNING BUTTON ----------

beginningBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// ---------- INTRO BUTTON ----------

const startingBtn = document.querySelector('.intro-btn')
const milkywaySection = document.querySelector('.milkyway-section')
const introSection = document.querySelector('.intro-section')

startingBtn.addEventListener('click', () => {
    if (introSection.classList.contains('appear-animation')) {
        introSection.classList.remove('appear-animation')
    }
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
        introSection.style.opacity = '1'
    }, 1000)
}
