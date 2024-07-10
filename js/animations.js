// ---------- ROCKET ANIMATION ----------

const milkywayBtn = document.querySelector('#milkyway-btn')
const andromedaBtn = document.querySelector('#andromeda-btn')
const milkywayRocket = document.querySelector('#milkyway-rocket')
const andromedaRocket = document.querySelector('#andromeda-rocket')

milkywayBtn.addEventListener('mouseover', () => {
    milkywayRocket.innerHTML = '🚀'
    milkywayRocket.classList.add('rocket')
})

milkywayBtn.addEventListener('mouseout', () => {
    milkywayRocket.innerHTML = ''
    milkywayRocket.classList.remove('rocket')
})

andromedaBtn.addEventListener('mouseover', () => {
    andromedaRocket.innerHTML = '🚀'
    andromedaRocket.classList.add('rocket')
})

andromedaBtn.addEventListener('mouseout', () => {
    andromedaRocket.innerHTML = ''
    andromedaRocket.classList.remove('rocket')
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
    introSection.classList.add('intro-animation')
    setTimeout(() => {
        introSection.classList.remove('intro-animation')
        milkywaySection.scrollIntoView({behavior: "smooth"})
    }, 900)
})