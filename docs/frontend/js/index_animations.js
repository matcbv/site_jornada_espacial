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
const introSection = document.querySelector('.intro-section')

if(introSection){
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
    
    
    window.addEventListener('load', () => {
        introSection.classList.add('appear-animation')
        setTimeout(() => {
            introSection.classList.remove('appear-animation')
            introSection.style.opacity = '1'
        }, 1000)
    })
}

// ---------- MUSIC POPUP ----------

const audio = document.querySelector('.music')
const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')

if(introSection){
    const mscPopup = document.querySelector('.msc-popup')
    const mscPopupCloseIcon = document.querySelector('.msc-popup-close-icon')
    const play = document.querySelector('.play')
    const introSectionRect = introSection.getBoundingClientRect()

    window.addEventListener('load', () => {
        const audioStatus = sessionStorage.getItem('audioStatus')
        if(window.scrollY < introSectionRect.bottom && audioStatus !== 'false'){
            mscPopup.classList.add('msc-popup-appear-animation') 
        } else{
            document.body.removeChild(mscPopup)
        }
    })
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= introSectionRect.bottom - 0.4){
            if(mscPopup && mscPopup.parentElement){
                mscPopup.classList.add('msc-popup-disappear-animation')
                setTimeout(() => {
                    if(mscPopup && mscPopup.parentElement){
                        document.body.removeChild(mscPopup)
                    }
                }, 1500)
            }
        }
    })

    mscPopupCloseIcon.addEventListener('click', () => {
        document.body.removeChild(mscPopup)
    })

    play.addEventListener('click', () => {
        sessionStorage.setItem('audioTime', audio.currentTime)
        sessionStorage.setItem('audioStatus', audio.paused)
        audio.play()
        document.body.removeChild(mscPopup)
        soundOn.style.display = 'block'
        soundOff.style.display = 'none'
    })

    soundOff.addEventListener('click', () => {
        if(mscPopup && mscPopup.parentElement){
            document.body.removeChild(mscPopup)
        }
    })
}

// ---------- SOUND ICON ----------

const soundOffRectBottom = soundOff.getBoundingClientRect().bottom
const soundOnRectBottom = soundOn.getBoundingClientRect().bottom
const footer = document.querySelector('footer')

soundOn.addEventListener('click', () => {
    audio.pause()
    sessionStorage.setItem('audioTime', audio.currentTime)
    sessionStorage.setItem('audioStatus', audio.paused)
    soundOn.style.display = 'none'
    soundOff.style.display = 'block'
})

soundOff.addEventListener('click', () => {
    const audioTime = sessionStorage.getItem('audioTime')
    audio.currentTime = audioTime
    audio.play()
    soundOn.style.display = 'block'
    soundOff.style.display = 'none'
})

window.addEventListener('scroll', () => {
    const footerRectTop = footer.getBoundingClientRect().top
    if (footerRectTop <= soundOffRectBottom || footerRectTop <= soundOnRectBottom){
        soundOff.style.position = 'absolute'
        soundOn.style.position = 'absolute'
    } else{
        soundOff.style.position = 'fixed'
        soundOn.style.position = 'fixed'
    }
})

// ---------- TOP BUTTON ----------

const topBtn = document.querySelector('.top-btn')

topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// ---------- 404 BUTTON ----------

const backHomePageBtn = document.querySelector('.back-homepage-btn')

if (backHomePageBtn){
    backHomePageBtn.addEventListener('click', () => {
        window.location.href = '/'
    })
}
