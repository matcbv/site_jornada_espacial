// ---------- HTML ELEMENTS ----------

const footer = document.querySelector('footer')

const topBtn = document.querySelector('.top-btn')
const cowboyBebopDiv = document.querySelector('.cowboy-bebop-div')
const swordfishDiv = document.querySelector('.swordfish-div')

const currentMain = document.querySelector('main')

// ---------- TOP BUTTON ----------

topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// ---------- COWBOY BEBOP ANIMATION ----------

cowboyBebopDiv.addEventListener('click', () => {
    swordfishDiv.classList.add('travel-animation')
    swordfishDiv.style.display = 'block'
    swordfishDiv.addEventListener('click', () => {
        if (sessionStorage.getItem('loggedIn') === 'true'){
            let badges = JSON.parse(localStorage.getItem('badges'))
            if (!badges){
                localStorage.setItem('badges', JSON.stringify(['spaceCowboy']))
            } else if(!badges.includes('spaceCowboy')){
                badges.push('spaceCowboy')
                localStorage.setItem('badges', JSON.stringify(badges))
            }
            fetch('/addBadge/spaceCowboy').then(data => {
                data.text().then(html => {addModal(currentMain, html)})
            })
            // window.location.href('/addBadge/spaceCowboy')
        }
    })
    setTimeout(() => {
        swordfishDiv.classList.remove('travel-animation')
    }, 2000)
})

function addModal(currentMain, html) {
    const divModal = document.createElement('div')
    divModal.style.display = 'flex'
    divModal.classList.add('appear-animation', 'modal')
    divModal.innerHTML = html

    currentMain.appendChild(divModal)

    const badge = divModal.querySelector('.badge')
    badge.classList.add('spinning-animation')

    setTimeout(() => {
        badge.classList.remove('spinning-animation')
    }, 2000);

    const closeIcon = divModal.querySelector('.bridge-modal-close-icon')
    closeIcon.addEventListener('click', () => {
        currentMain.removeChild(divModal)
    })
}

// ---------- TROCANDO AS CORES DO RODAPÉ AO ENTRAR NO PERFIL DO USUÁRIO ----------

if (currentMain.classList.contains('profile-main') || currentMain.classList.contains('edit-profile-main')){
    footer.classList.add('profile-footer')
} else{
    footer.classList.remove('profile-footer')
}
