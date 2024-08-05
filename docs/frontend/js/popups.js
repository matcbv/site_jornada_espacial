const images = document.querySelectorAll('img')
const galaxiesMain = document.querySelector('.galaxies-main')
const indexMain = document.querySelector('.index-main')

if(galaxiesMain){
    // Fetch para a requisição dos popups
    document.addEventListener('click', (e) => {
        const element = e.target
        if(element.tagName.toLowerCase() === "img" && !element.classList.contains('close-icon') && !element.classList.contains('sound-icon')){
            for(const image of images){
                if (element.id === image.id) {
                    fetch(`http://localhost:8080/popup/${element.id}`).then(res => {
                        if (!res.ok){
                            throw new Error('Erro na requisição do popup.')
                        } else{
                            global.currentPopup = element.id
                            res.text().then(html => {
                                getPopup(html, galaxiesMain)
                            })
                        }
                    })
                }
            }
        }
    })
}

// Fetch para requisição do popup aboutme
function getAboutmePopup(){
    fetch(`http://localhost:8080/popup/${element.id}`).then(res => {
        if (!res.ok){
            throw new Error (`Erro na requisição do popup ${element.id}`)
        } else{
            res.text().then(html => {
                if (indexMain){
                    getPopup(html, indexMain)
                } else if(galaxiesMain){
                    getPopup(html, galaxiesMain)
                }
            })
        }
    })
} 

// Função para a requisição do formulário de idéias
function ideaForm() {
    window.location.href = '/ideaForm'
}

// Função para adição do conteúdo obtido na página
function getPopup(html, main){
    const divPopup = document.createElement('div')
    divPopup.style.display = 'flex'
    divPopup.classList.add('appear-animation', 'popup')
    divPopup.innerHTML = html
    main.appendChild(divPopup)
    
    closeAction(main, divPopup, divPopup.querySelector('.close-icon'))

    const ideaIcon = document.querySelector('.idea-icon')
    
    if(ideaIcon){
        ideaIcon.removeEventListener('click', ideaForm)
        ideaIcon.addEventListener('click', ideaForm)
    }
}

// Função do botão de fechar o popup
function closeAction(main, divPopup, closeIcon) {
    closeIcon.addEventListener('click', () => {
        main.removeChild(divPopup)
    })
}
