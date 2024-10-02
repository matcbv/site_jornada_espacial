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
    const styleSheet = document.createElement('style')
    document.head.appendChild(styleSheet)

    const animationHeight = Math.random() * window.innerHeight / 2
    styleSheet.innerHTML = `@keyframes swordfish-travel{
        from{
            left: -200px;
            top: ${animationHeight}px;
        }
        to{
            left: 100vw;
            top: ${animationHeight + 200}px;
        }
    }`
    swordfishDiv.style.animation =  'swordfish-travel 2s linear 0s 1 normal both'
    swordfishDiv.style.display = 'block'
    swordfishDiv.addEventListener('click', swordFishClick)
    setTimeout(() => {
        swordfishDiv.style.display = 'none'
        swordfishDiv.style.animation = ''
        swordfishDiv.removeEventListener('click', swordFishClick)
        document.head.removeChild(styleSheet)
    }, 2000)
})

function swordFishClick() {
    if (!clicked){
        clicked = true
        fetch('/loggedIn')
        .then(res => res.json())
        .then(userSession => {
            if(userSession){
                if(!userSession.badges.some(badgeList => badgeList.includes('space_cowboy'))){
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
