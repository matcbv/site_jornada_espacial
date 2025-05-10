import addModal from "./modal_animations";

// ---------- HTML ELEMENTS ----------

// Audio elements
const mscPopup = document.querySelector('.msc-popup');
const audioDiv = document.querySelector('.audio-div');
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off');
const musicIcon = document.querySelector('.music-icon');
const playlistDiv = document.querySelector('.playlist-div');
const musics = document.querySelectorAll('.musics');
let toStopAudio = '';
let toPlayAudio = '';
let lastSoundWaveIcon = '';

// Current main
const currentMain = document.querySelector('main');

// ---------- PLAY POPUP ----------

if(currentMain.classList.contains('index-main')){
    const mscPopupCloseIcon = document.querySelector('.msc-popup-close-icon');
    const playBtn = document.querySelector('.play-btn');
    const introSectionRect = document.querySelector('.intro-section').getBoundingClientRect();

    // Evento para aparição do popup para início da trilha sonora:
    window.addEventListener('load', () => {
        const audioStatus = sessionStorage.getItem('audioStatus');
        // Adicionando caso a tela ultrapasse ou não o fim da seção de introdução:
        if(window.scrollY <= introSectionRect.bottom && audioStatus !== 'false'){
            mscPopup.classList.add('msc-popup-appear-animation');
        } else{
            document.body.removeChild(mscPopup);
        }
    });
    
    window.addEventListener('scroll', () => {
        // Removendo o popup para início da trilha sonora caso ele passa o fim da seção de introdução:
        if (window.scrollY >= introSectionRect.bottom){
            if(mscPopup && mscPopup.parentElement){
                mscPopup.classList.remove('msc-popup-appear-animation');
                mscPopup.classList.add('disappear-animation');
                setTimeout(() => {
                    if(mscPopup && mscPopup.parentElement){
                        document.body.removeChild(mscPopup);
                    }
                }, 500);
            }
        }
    });

    playBtn.addEventListener('click', () => {
        const currentAudio = sessionStorage.getItem('currentAudio');
        const redbonesSoundWaveIcon = document.querySelector('#redbone').querySelector('.sound-wave-icon');
        if(currentAudio){
            toPlayAudio = getMusic(currentAudio);
            toPlayAudio.play();
            sessionStorage.setItem('audioStatus', toPlayAudio.paused);
        } else{
            toPlayAudio = getMusic('redbone');
            toPlayAudio.play();
            sessionStorage.setItem('currentAudio', 'redbone');
            sessionStorage.setItem('audioStatus', toPlayAudio.paused);
            redbonesSoundWaveIcon.style.display = 'block';
            lastSoundWaveIcon = redbonesSoundWaveIcon;
            musicsFetch(toPlayAudio);
        }
        mscPopup.classList.remove('msc-popup-appear-animation');
        mscPopup.classList.add('disappear-animation');
        setTimeout(() => {
            document.body.removeChild(mscPopup);
        }, 500);
        soundOn.style.display = 'block';
        soundOff.style.display = 'none';
    });

    mscPopupCloseIcon.addEventListener('click', () => {
        mscPopup.classList.remove('msc-popup-appear-animation');
        mscPopup.classList.add('disappear-animation');
        setTimeout(() => {
            document.body.removeChild(mscPopup);
        }, 500);
    });
}

if (audioDiv){

    // ---------- SOUND ICON ----------

    soundOn.addEventListener('click', () => {
        const currentAudio = sessionStorage.getItem('currentAudio');
        if(currentAudio){
            toStopAudio = getMusic(currentAudio);
            toStopAudio.pause();
            sessionStorage.setItem('audioTime', toStopAudio.currentTime);
            sessionStorage.setItem('audioStatus', toStopAudio.paused);
            soundOn.style.display = 'none';
            soundOff.style.display = 'block';
        }
    });
    
    soundOff.addEventListener('click', () => {
        const currentAudio = sessionStorage.getItem('currentAudio');
        if(currentAudio){
            toPlayAudio = getMusic(currentAudio);
            const audioTime = sessionStorage.getItem('audioTime');
            toPlayAudio.currentTime = audioTime;
            toPlayAudio.play();
            soundOn.style.display = 'block';
            soundOff.style.display = 'none';
        } else{
            toPlayAudio = getMusic('redbone');
            toPlayAudio.play();
            soundOn.style.display = 'block';
            soundOff.style.display = 'none';
        }
        if(mscPopup && mscPopup.parentElement){
            document.body.removeChild(mscPopup);
        }
        sessionStorage.setItem('audioStatus', toPlayAudio.paused);
    });

    // ---------- MUSIC ICON ----------

    musicIcon.addEventListener('click', () => {
        if(window.getComputedStyle(playlistDiv).display === 'none'){
            playlistDiv.classList.add('fast-appear-animation');
            playlistDiv.style.display = 'block';
            setTimeout(() => {
                playlistDiv.classList.remove('fast-appear-animation');
            }, 500);
        } else{
            playlistDiv.classList.add('disappear-animation');
            setTimeout(() => {
                playlistDiv.style.display = 'none';
                playlistDiv.classList.remove('disappear-animation');
            }, 500);
        }
    });

    // ---------- PLAYLIST ----------

    playlistDiv.addEventListener('click', (e) => {
        let element = e.target;
        let soundWaveIcon =  '';
        if (element.tagName.toLowerCase() !== 'div'){
            element = element.closest('div');
            soundWaveIcon = element.querySelector('.sound-wave-icon');
        } else{
            soundWaveIcon = element.querySelector('.sound-wave-icon');
        }
        const music = getMusic(element.id);
        const currentAudio = sessionStorage.getItem('currentAudio');
        if(currentAudio){
            lastSoundWaveIcon = document.getElementById(currentAudio).querySelector('.sound-wave-icon');
            toStopAudio = getMusic(currentAudio);
            toStopAudio.pause();
            soundOff.style.display = 'block';
            soundOn.style.display = 'none';
            if (lastSoundWaveIcon){
                lastSoundWaveIcon.style.display = 'none';
            }
        }
        sessionStorage.setItem('audioStatus', toPlayAudio.paused);
        sessionStorage.setItem('currentAudio', element.id);
        music.play();
        soundWaveIcon.style.display = 'block';
        lastSoundWaveIcon = soundWaveIcon;
        soundOff.style.display = 'none';
        soundOn.style.display = 'block';
        musicsFetch(music);
        if(mscPopup && mscPopup.parentElement){
            document.body.removeChild(mscPopup);
        }
    });
}

function getMusic(id){
    for(const music of musics){
        if(music.classList.contains(id)){
            return music;
        }
    }
}

function musicsFetch(music) {
    fetch('/loggedIn')
    .then(res => res.json())
    .then(userSession => {
        if(userSession){
            if(!userSession.badges.some(badgeList => badgeList.includes('musical_travaller'))){
                fetch(`/getPlayedMusics/${music.classList[0]}`)
                .then(res => res.json())
                .then(playedMusics => {
                    if(playedMusics.length === 5){
                        setTimeout(() => {
                            fetch('/getModal')
                            .then(data => data.text())
                            .then(html => {addModal(currentMain, html, 'musical_travaller');})
                            .catch(() => {});
                        }, 500);
                    }
                });
            }
        }
    });
}

// ---------- EVENTO PARA DESAPARECIMENTO DA PLAYLIST ----------

window.addEventListener('click', (e) => {
    const element = e.target;
    if(!playlistDiv.contains(element) && element !== musicIcon && window.getComputedStyle(playlistDiv).display === 'block'){
        playlistDiv.classList.add('disappear-animation');
        setTimeout(() => {
            playlistDiv.style.display = 'none';
            playlistDiv.classList.remove('disappear-animation');
        }, 500);
    }
});

// ---------- AUDIO DIV ----------

if(audioDiv){
    if(!currentMain.classList.contains('ideaform-main') && !currentMain.classList.contains('login-main') && !currentMain.classList.contains('password-main')){
        const footerRectTop = document.querySelector('footer').getBoundingClientRect().top;
        const audioDivRectBottom = audioDiv.getBoundingClientRect().bottom;
        window.addEventListener('scroll', () => {
            if (window.scrollY >= footerRectTop - audioDivRectBottom){
                audioDiv.style.position = 'absolute';
                playlistDiv.style.position = 'absolute';
            } else{
                audioDiv.style.position = 'fixed';
                playlistDiv.style.position = 'fixed';
            };
        });
    } else{
        audioDiv.style.position = 'absolute';
        audioDiv.style.flexFlow = 'row nowrap';
        soundOff.style.margin = '0 auto 0 10px';
        soundOn.style.margin = '0 auto 0 10px';
        playlistDiv.style.position = 'absolute';
        playlistDiv.style.bottom = '85px';
    };
}
