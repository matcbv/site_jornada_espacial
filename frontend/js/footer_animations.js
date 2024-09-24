import addModal from "./modal_animations"

// ---------- HTML ELEMENTS ----------

const footer = document.querySelector('footer')

const topBtn = document.querySelector('.top-btn')
const cowboyBebopDiv = document.querySelector('.cowboy-bebop-div')
const swordfishDiv = document.querySelector('.swordfish-div')

const currentMain = document.querySelector('main')

let clicked = false

// ---------- TOP BUTTON ----------

topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// ---------- COWBOY BEBOP ANIMATION ----------

cowboyBebopDiv.addEventListener('click', () => {
    swordfishDiv.classList.add('travel-animation')
    swordfishDiv.style.display = 'block'
    swordfishDiv.addEventListener('click', swordFishClick)
    setTimeout(() => {
        swordfishDiv.classList.remove('travel-animation')
        swordfishDiv.removeEventListener('click', swordFishClick)
        swordfishDiv.style.display = 'none'
    }, 2000)
})

function swordFishClick() {
    if (!clicked){
        clicked = true
        fetch('/loggedIn')
        .then(res => res.json())
        .then(userSession => {
            if(userSession){
                if(!userSession.badges.includes('space_cowboy')){
                    fetch('/getModal')
                    .then(data => data.text())
                    .then(html => {
                        addModal(currentMain, html, 'space_cowboy')
                        clicked = false
                    })
                    .catch(() => {})
                }
            }
        })
    }
}

// ---------- TROCANDO AS CORES DO RODAPÉ AO ENTRAR NO PERFIL DO USUÁRIO ----------

if (currentMain.classList.contains('profile-main') || currentMain.classList.contains('edit-profile-main')){
    footer.classList.add('profile-footer')
} else{
    footer.classList.remove('profile-footer')
}
