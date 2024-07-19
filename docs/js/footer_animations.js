// ---------- FOOTER POPUPS ----------

const divPopup = document.querySelector('.popup')
const aboutMeLink = document.getElementById('about-me')
const referencesLink = document.getElementById('references')
const inspirations = document.getElementById('inspirations')

aboutMeLink.addEventListener('click', () => {
    fetch(`./popups_html/about_me_popup.html`).then((res) => {
        if (!res.ok){
            throw new Error('Erro na requisição do popup')
        } else{
            res.text().then((html) => {
                getPopup(html)
            })
        }
    })
})

async function getPopup(html){
    divPopup.style.display = 'flex'
    divPopup.classList.add('appear-animation')
    divPopup.innerHTML = html
    closeAction(document.querySelector('#close-icon'))
}

function closeAction(closeIcon) {
    closeIcon.addEventListener('click', () => {
        divPopup.style.display = 'none'
        divPopup.innerHTML = ''
        divPopup.classList.remove('appear-animation')
    })
}

// ---------- BEGINNING BUTTON ----------

const beginningBtn = document.querySelector('.beginning-btn')

beginningBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})
