// ---------- FOOTER POPUPS ----------

const divPopupFooter = document.querySelector('.popup')
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
    divPopupFooter.style.display = 'flex'
    divPopupFooter.classList.add('appear-animation')
    divPopupFooter.innerHTML = html
    closeAction(document.querySelector('#close-icon'))
}

function closeAction(closeIcon) {
    closeIcon.addEventListener('click', () => {
        divPopupFooter.style.display = 'none'
        divPopupFooter.innerHTML = ''
        divPopupFooter.classList.remove('appear-animation')
    })
}

// ---------- BEGINNING BUTTON ----------

const beginningBtn = document.querySelector('.beginning-btn')

beginningBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})
