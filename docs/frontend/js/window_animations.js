const introductionSection = document.querySelector(".intro-section")
const headerSection = document.querySelector("header")
const soundOn = document.querySelector(".sound-on")
const soundOff = document.querySelector(".sound-off")

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
}

const galaxiesMain = document.querySelector('.galaxies-main')

if (galaxiesMain){
    document.body.classList.add('change-scrollbar');
}

const playlistMusics = document.querySelectorAll('.musics')

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
        const audio = getMusic(currentAudio)
        const audioStatus = sessionStorage.getItem('audioStatus')
        if(audioStatus === 'false'){
            const audioTime = sessionStorage.getItem('audioTime')
            audio.currentTime = audioTime
            audio.play()
            soundOn.style.display = 'block'
            soundOff.style.display = 'none'
        } else{
            soundOn.style.display = 'none'
            soundOff.style.display = 'block'
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
