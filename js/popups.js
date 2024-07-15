const images = document.querySelectorAll('img')
const divPopup = document.querySelector('.popup')

document.addEventListener('click', (e) => {
    const element = e.target
    for(const image of images){
        if (element.id === image.id) {
            fetch(`../popups_html/${element.id}_popup.html`).then((res) => {
                if(!res.ok){
                    throw new Error('Erro durante a requisição do popup.') 
                } else{
                    res.text().then((html) => {
                        getPopup(element.id, html)
                    })
                }
            })
        } 
    }
})

async function getPopup(id, html){
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
