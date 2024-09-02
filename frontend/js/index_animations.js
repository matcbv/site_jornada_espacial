// ---------- HTML ELEMENTS ----------

const indexMain = document.querySelector('.index-main')
const startingBtn = document.querySelector('.intro-btn')
const milkywaySection = document.querySelector('.milkyway-section')
const introductionSection = document.querySelector('.intro-section')

// ---------- ROCKET ANIMATION ----------

if (indexMain){
    indexMain.addEventListener('mouseover', (e) => {
        const element = e.target
        if (element.tagName.toLowerCase() == 'a'){
            const rocket = element.nextElementSibling
            rocket.innerHTML = '🚀'
            rocket.classList.add('rocket')
            removeRocket(element, rocket)
        }
    })
}

function removeRocket(element, rocket){
    element.addEventListener('mouseout', () => {
        rocket.innerHTML = ''
        rocket.classList.remove('rocket')
    })
}


// ---------- INTRO BUTTON ----------

if(startingBtn){
    startingBtn.addEventListener('click', () => {
        if (introductionSection.classList.contains('appear-animation')) {
            introductionSection.classList.remove('appear-animation')
        }
        introductionSection.classList.add('squish-animation')
        setTimeout(() => {
            introductionSection.classList.remove('squish-animation')
            milkywaySection.scrollIntoView({behavior: "smooth"})
        }, 998)
    })
    
    
    window.addEventListener('load', () => {
        introductionSection.classList.add('intro-appear-animation')
        setTimeout(() => {
            introductionSection.classList.remove('intro-appear-animation')
            introductionSection.style.opacity = '1'
        }, 999)
    })
}
