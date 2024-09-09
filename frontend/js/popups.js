const images = document.querySelectorAll('img')
const galaxiesMain = document.querySelector('.galaxies-main')
const indexMain = document.querySelector('.index-main')

if(galaxiesMain){
    // Fetch para a requisição dos popups
    document.addEventListener('click', (e) => {
        const element = e.target
        if(element.tagName.toLowerCase() === "img" && element.classList.contains('celestial-body-img')){
            for(const image of images){
                if (element.id === image.id) {
                    fetch(`/popup/${element.id}`).then(res => {
                        if (!res.ok){
                            throw new Error('Erro na requisição do popup.')
                        } else{
                            sessionStorage.setItem('currentBody', `${element.id}`)
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
    ideaIcon.addEventListener('click', ideaForm)

    const starIcon = document.querySelector('.star-icon')
    starIcon.addEventListener('click', () => {
        window.location.href = `/favbody/${sessionStorage.getItem('currentBody')}`
    })   
}

// Função do botão de fechar o popup
function closeAction(main, divPopup, closeIcon) {
    closeIcon.addEventListener('click', () => {
        main.removeChild(divPopup)
    })
}
