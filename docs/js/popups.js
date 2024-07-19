const images = document.querySelectorAll('img')
const divPopup = document.querySelector('.popup')
console.log(images)
document.addEventListener('click', (e) => {
    const element = e.target
    if(element.tagName.toLowerCase() === "img"){
        for(const image of images){
            if (element.id === image.id) {
                fetch(`./popups_html/${element.id}_popup.html`).then((res) => {
                    if (!res.ok){
                        throw new Error('Erro na requisição do popup')
                    } else{
                        res.text().then((html) => {
                            getPopup(html)
                        })
                    }
                })
            } 
        }
    }
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
