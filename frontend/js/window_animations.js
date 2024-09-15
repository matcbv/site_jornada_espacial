// ---------- HTML ELEMENTS ----------

const headerSection = document.querySelector("header")
const introductionSection = document.querySelector(".intro-section")
const galaxiesMain = document.querySelector('.galaxies-main')

const soundOn = document.querySelector(".sound-on")
const soundOff = document.querySelector(".sound-off")
const playlist = document.querySelector('.playlist-div')
const playlistMusics = document.querySelectorAll('.musics')

const fluidHeader = document.querySelector('.fluid-header')
const profileImgPopup = document.querySelector('.profile-img-popup')

const resendEmailBtn = document.querySelector('.resend-email')
const timerSpan = document.querySelector('.timer')

const profileMain = document.querySelector('.main-profile')
const editProfileMain = document.querySelector('.main-edit-profile')

// ---------- EVENTOS PARA MUDAR A COR DO SCROLLBAR ----------

if (introductionSection && headerSection){
    const introVh = introductionSection.getBoundingClientRect().height
    const headerVh = headerSection.getBoundingClientRect().height

    document.addEventListener("scroll", () => {
        const verticalScroll = window.scrollY
        if (verticalScroll >= introVh - headerVh){
            document.body.classList.add('change-scrollbar');
        } else if(verticalScroll < introVh - headerVh) {
            document.body.classList.remove('change-scrollbar');
        }
    })
} else if (galaxiesMain || editProfileMain || profileMain){
    document.body.classList.add('change-scrollbar');
}

// ---------- EVENTOS PARA OBTER E ALTERAR ESTADO DO ÁUDIO ----------

window.addEventListener('beforeunload', () => {
    const currentAudio = sessionStorage.getItem('currentAudio')
    if(currentAudio){
        const audio = getMusic(currentAudio)
        sessionStorage.setItem('audioTime', audio.currentTime)
        sessionStorage.setItem('audioStatus', audio.paused)
    }
})

window.addEventListener('load', () => {
    const currentAudio = sessionStorage.getItem('currentAudio')
    if(currentAudio){
        soundWaveIcon = document.getElementById(currentAudio).querySelector('.sound-wave-icon')
        const audio = getMusic(currentAudio)
        const audioStatus = sessionStorage.getItem('audioStatus')
        if(audioStatus === 'false'){
            const audioTime = sessionStorage.getItem('audioTime')
            audio.currentTime = audioTime
            audio.play()
            soundOn.style.display = 'block'
            soundOff.style.display = 'none'
            soundWaveIcon.style.display = 'block'
        } else{
            soundOn.style.display = 'none'
            soundOff.style.display = 'block'
            soundWaveIcon.style.display = 'none'
        }
    }
})

function getMusic(id){
    for(const music of playlistMusics){
        if(music.classList.contains(id)){
            return music
        }
    }
}

// ---------- EVENTO PARA EXCLUSÃO DA MENSAGEM DE SUCESSO ----------

window.addEventListener('load', () => {
    const ideaformMain = document.querySelector('.ideaform-main')
    const successPopup = document.querySelector('.success-popup')
    if (successPopup){
        setTimeout(() => {
            successPopup.classList.add('disappear-animation')
            setTimeout(() => {
                ideaformMain.removeChild(successPopup)
            }, 500)
        }, 3000)
    }
})

// ---------- EVENTO PARA FECHAMENTO DO CABECALHO FLUIDO AO AUMENTAR A TELA ----------

window.addEventListener('resize', () => {
    if (window.innerWidth >= 992){
        if (fluidHeader){
            fluidHeader.style.display = 'none'
        }
    }
    if (window.innerWidth <= 992){
        if (profileImgPopup){
            profileImgPopup.style.display = 'none'
        }
    }
})

// ---------- EVENTO PARA DESABILITAR O BOTÃO DE REENVIAR EMAIL ----------

window.addEventListener('load', () => {
    if(sessionStorage.getItem('emailSent') === 'true' && resendEmailBtn){
        resendEmailBtn.disabled = true
        timerSpan.style.display = 'flex'
        timerSpan.classList.add('disabled-btn')
        let s = 15
        counter = setInterval(() => {
            timerSpan.innerHTML = `${s}`
            s--
        }, 1000)
        setTimeout(() => {
            clearInterval(counter)
            resendEmailBtn.disabled = false
            timerSpan.innerHTML = ''
            timerSpan.style.display = 'none'
            timerSpan.classList.remove('disabled-btn')
            sessionStorage.setItem('emailSent', 'false')
        }, 15000)
    }
})
