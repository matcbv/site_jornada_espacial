// ---------- HTML ELEMENTS ----------

const milkywayBtn = document.querySelector('#milkyway-btn')
const andromedaBtn = document.querySelector('#andromeda-btn')
const triangleBtn = document.querySelector('#triangle-btn')
const milkywayRocket = document.querySelector('#milkyway-rocket')
const andromedaRocket = document.querySelector('#andromeda-rocket')
const triangleRocket = document.querySelector('#triangle-rocket')


// ---------- NAVEGATION ----------

if (milkywayBtn){
    milkywayBtn.addEventListener('click', () => {
        window.location.href = '/milkyway'
    })
}

if (andromedaBtn){
    andromedaBtn.addEventListener('click', () => {
        window.location.href = '/andromeda'
    })
}

if (triangleBtn){
    triangleBtn.addEventListener('click', () => {
        window.location.href = '/triangle'
    })
}

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

// ---------- INTRO BUTTON ----------

const startingBtn = document.querySelector('.intro-btn')
const milkywaySection = document.querySelector('.milkyway-section')
const introductionSection = document.querySelector('.intro-section')

if(startingBtn){
    startingBtn.addEventListener('click', () => {
        if (introductionSection.classList.contains('appear-animation')) {
            introductionSection.classList.remove('appear-animation')
        }
        introductionSection.classList.add('squish-animation')
        setTimeout(() => {
            introductionSection.classList.remove('squish-animation')
            milkywaySection.scrollIntoView({behavior: "smooth"})
        }, 999)
    })
    
    
    window.addEventListener('load', () => {
        introductionSection.classList.add('intro-appear-animation')
        setTimeout(() => {
            introductionSection.classList.remove('intro-appear-animation')
            introductionSection.style.opacity = '1'
        }, 1000)
    })
}
