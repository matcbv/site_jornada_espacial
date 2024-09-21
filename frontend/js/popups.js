const images = document.querySelectorAll('img')
const currentMain = document.querySelector('main')

if(currentMain.classList.contains('galaxies-main') || currentMain.classList.contains('profile-main')){
    // Fetch para a requisição dos popups
    document.addEventListener('click', (e) => {
        const element = e.target
        if(element.tagName.toLowerCase() === "img" && element.classList.contains('celestial-body-img')){
            for(const image of images){
                if (element.id === image.id) {
                    fetch(`/popup/${element.id}`).then(res => {
                        if (!res.ok){
                            throw new Error('Erro na requisição do popup.')
                        } else if(currentMain.classList.contains('galaxies-main')){
                                    res.text().then(html => {getPopup(html, currentMain, element.id)})
                        } else{
                            res.text().then(html => {getPopup(html, currentMain, element.id)})
                        }
                    })
                }
            }
        }
    })
}

// Função para adição do conteúdo obtido na página
function getPopup(html, currentMain, celestialBody){
    const divPopup = document.createElement('div')
    divPopup.style.display = 'flex'
    divPopup.classList.add('appear-animation', 'popup')
    divPopup.innerHTML = html
    if(currentMain.classList.contains('profile-main')){
        divPopup.querySelector('.popup-content').style.backgroundColor = '#040216'
    }
    currentMain.appendChild(divPopup)

    const closeIcon = divPopup.querySelector('.close-icon')
    closeIcon.addEventListener('click', () => {
        currentMain.removeChild(divPopup)
    })

    const ideaIcon = document.querySelector('.idea-icon')
    ideaIcon.addEventListener('click', () => {
        window.location.href = '/ideaForm'
    })

    const starIcon = document.querySelector('.star-icon')
    const selectedStarIcon = document.querySelector('.selected-star-icon')
    if (sessionStorage.getItem('favBody') === celestialBody && sessionStorage.getItem('loggedIn') === 'true'){
        starIcon.style.display = 'none'
        selectedStarIcon.style.display = 'block'
    } else{
        starIcon.style.display = 'block'
        selectedStarIcon.style.display = 'none'
    }
    starIcon.addEventListener('click', () => {
        if(sessionStorage.getItem('loggedIn') === 'true'){
            sessionStorage.setItem('favBody', `${celestialBody}`)
            starIcon.style.display = 'none'
            selectedStarIcon.style.display = 'block'
        }
        window.location.href = `/favBody/${celestialBody}`
    })
}
