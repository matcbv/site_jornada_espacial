// ---------- HTML ELEMENTS ----------

// Intro and footer
const introSection = document.querySelector('.intro-section')
const footer = document.querySelector('footer')

// Buttons
const backHomePageBtn = document.querySelector('.back-homepage-btn')

// Audio elements
const mscPopup = document.querySelector('.msc-popup')
const audioDiv = document.querySelector('.audio-div')
const audioDivRectBottom = audioDiv.getBoundingClientRect().bottom
const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')
const musicIcon = document.querySelector('.music-icon')
const playlistDiv = document.querySelector('.playlist-div')
const musics = document.querySelectorAll('.musics')
let toStopAudio = ''
let toPlayAudio = ''
let lastSoundWaveIcon = ''

// Ideaform main
const ideaformMain = document.querySelector('.ideaform-main')


// ---------- MUSIC POPUP ----------

if(introSection){
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
                mscPopup.classList.remove('msc-popup-appear-animation')
                mscPopup.classList.add('disappear-animation')
                setTimeout(() => {
                    if(mscPopup && mscPopup.parentElement){
                        document.body.removeChild(mscPopup)
                    }
                }, 500)
            }
        }
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
            sessionStorage.setItem('currentAudio', 'redbone')
            sessionStorage.setItem('audioStatus', toPlayAudio.paused)
        }
        document.body.removeChild(mscPopup)
        soundOn.style.display = 'block'
        soundOff.style.display = 'none'
    })

    mscPopupCloseIcon.addEventListener('click', () => {
        document.body.removeChild(mscPopup)
    })
}

// ---------- SOUND ICON ----------

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

// ---------- MUSIC ICON ----------

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
    const soundWaveIcon =  getSoundWaveIcon(element)
    if (!element.classList.contains('msc-div')){
       element = element.parentElement
    }
    const music = getMusic(element.id)
    const currentAudio = sessionStorage.getItem('currentAudio')
    if(currentAudio){
        toStopAudio = getMusic(currentAudio)
        toStopAudio.pause()
        if(lastSoundWaveIcon){
            lastSoundWaveIcon.style.display = 'none'
        }
    }
    sessionStorage.setItem('audioStatus', toPlayAudio.paused)
    sessionStorage.setItem('currentAudio', element.id)
    try{
        music.play()
        soundWaveIcon.style.display = 'block'
        lastSoundWaveIcon = soundWaveIcon
    }catch{
        throw new Error('Erro ao tocar a música')
    }
    if(mscPopup && mscPopup.parentElement){
        document.body.removeChild(mscPopup)
    }
})

function getMusic(id){
    for(const music of musics){
        if(music.classList.contains(id)){
            return music
        }
    }
}

function getSoundWaveIcon(element){
    const parentElement = element.parentElement
    if(!parentElement.classList.contains('playlist-div')){
        const soundWaveIcon = parentElement.querySelector('.sound-wave-icon')
        return soundWaveIcon
    }
}

// ---------- AUDIO DIV ----------

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

if(ideaformMain){
    audioDiv.style.flexFlow = 'row nowrap'
    soundOff.style.margin = '0 auto 0 10px'
    soundOn.style.margin = '0 auto 0 10px'
    playlistDiv.style.bottom = '90px'
}

// ---------- 404 BUTTON ----------

if (backHomePageBtn){
    backHomePageBtn.addEventListener('click', () => {
        window.location.href = '/'
    })
}
