// ---------- MUSIC POPUP ----------

const musics = document.querySelectorAll('.musics')
const introSection = document.querySelector('.intro-section')
const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')
const playlistDiv = document.querySelector('.playlist-div')
let toStopAudio = ''
let toPlayAudio = ''

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
                mscPopup.classList.add('disappear-animation')
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
        const currentAudio = sessionStorage.getItem('currentAudio')
        if(currentAudio){
            toPlayAudio = getMusic(currentAudio)
            toPlayAudio.play()
            sessionStorage.setItem('audioStatus', toPlayAudio.paused)

        }else{
            toPlayAudio = getMusic('redbone')
            toPlayAudio.play()
            sessionStorage.setItem('audioStatus', toPlayAudio.paused)
        }
        document.body.removeChild(mscPopup)
        soundOn.style.display = 'block'
        soundOff.style.display = 'none'
    })
}

// ---------- SOUND ICON ----------

const audioDiv = document.querySelector('.audio-div')
const audioDivRectBottom = audioDiv.getBoundingClientRect().bottom
const footer = document.querySelector('footer')

soundOn.addEventListener('click', () => {
    const currentAudio = sessionStorage.getItem('currentAudio')
    if(currentAudio){
        toStopAudio = getMusic(currentAudio)
        toStopAudio.pause()
        sessionStorage.setItem('audioTime', toStopAudio.currentTime)
        sessionStorage.setItem('audioStatus', toStopAudio.paused)
        soundOn.style.display = 'none'
        soundOff.style.display = 'block'
    }
})

soundOff.addEventListener('click', () => {
    const currentAudio = sessionStorage.getItem('currentAudio')
    if(currentAudio){
        toPlayAudio = getMusic(currentAudio)
        const audioTime = sessionStorage.getItem('audioTime')
        toPlayAudio.currentTime = audioTime
        toPlayAudio.play()
        soundOn.style.display = 'block'
        soundOff.style.display = 'none'
    }else{
        toPlayAudio = getMusic('redbone')
        toPlayAudio.play()
        soundOn.style.display = 'block'
        soundOff.style.display = 'none'
    }
    if(mscPopup && mscPopup.parentElement){
        document.body.removeChild(mscPopup)
    }
    sessionStorage.setItem('audioStatus', toPlayAudio.paused)
})

window.addEventListener('scroll', () => {
    const footerRectTop = footer.getBoundingClientRect().top
    if (footerRectTop <= audioDivRectBottom){
        audioDiv.style.position = 'absolute'
        playlistDiv.style.position = 'absolute'
    } else{
        audioDiv.style.position = 'fixed'
        playlistDiv.style.position = 'fixed'
    }
})

// ---------- MUSIC ICON ----------

const musicIcon = document.querySelector('.music-icon')

musicIcon.addEventListener('click', () => {
    if(window.getComputedStyle(playlistDiv).display === 'none'){
        playlistDiv.classList.add('playlist-appear-animation')
        playlistDiv.style.display = 'block'
        setTimeout(() => {
            playlistDiv.classList.remove('playlist-appear-animation')
        }, 500)
    } else{
        playlistDiv.classList.add('disappear-animation')
        setTimeout(() => {
            playlistDiv.style.display = 'none'
            playlistDiv.classList.remove('disappear-animation')
        }, 500)
    }
})

// ---------- PLAYLIST ----------

playlistDiv.addEventListener('click', (e) => {
    let element = e.target
    if (!element.classList.contains('msc-div')){
       element = element.parentElement
    }
    const music = getMusic(element.id)
    const currentAudio = sessionStorage.getItem('currentAudio')
    if(currentAudio){
        toStopAudio = getMusic(currentAudio)
        toStopAudio.pause()     
    }
    sessionStorage.setItem('audioStatus', toPlayAudio.paused)
    sessionStorage.setItem('currentAudio', element.id)
    music.play()
})

function getMusic(id){
    for(const music of musics){
        if(music.classList.contains(id)){
            return music
        }
    }
}

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
