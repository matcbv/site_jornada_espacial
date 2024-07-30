const images = document.querySelectorAll('img')
const divPopup = document.querySelector('.popup')

document.addEventListener('click', (e) => {
    const element = e.target
    if(element.tagName.toLowerCase() === "img"){
        for(const image of images){
            if (element.id === image.id) {
                fetch(`http://localhost:8080/popup/${element.id}`).then((res) => {
                    if (!res.ok){
                        throw new Error('Erro na requisição do popup')
                    } else{
                        res.text().then((html) => {
                            console.dir(res)
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
