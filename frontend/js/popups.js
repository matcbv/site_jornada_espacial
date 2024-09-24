import addModal from "./modal_animations"

const images = document.querySelectorAll('img')
const currentMain = document.querySelector('main')
let clicked = false

if(currentMain.classList.contains('galaxies-main') || currentMain.classList.contains('profile-main')){
    // Fetch para a requisição dos popups
    document.addEventListener('click', (e) => {
        const element = e.target
        if(element.tagName.toLowerCase() === "img" && element.classList.contains('celestial-body-img') && !clicked){
            clicked = true
            for(const image of images){
                if (element.id !== 'dotted_circle' && element.id === image.id) {
                    fetch(`/popup/${element.id}`).then(res => {
                        if (!res.ok){
                            throw new Error('Erro na requisição do popup.')
                        } else{
                            fetch('/loggedIn')
                            .then(res => res.json())
                            .then(userSession => {
                                if(userSession){
                                    fetch('/getVisitedBodies')
                                    .then(res => res.json())
                                    .then(visitedBodies => {
                                        if(visitedBodies.length === 12){
                                            setTimeout(() => {
                                                fetch('/getModal')
                                                .then(data => data.text())
                                                .then(html => {addModal(currentMain, html, 'galactic_explorer')})
                                                .catch(() => {})
                                            }, 1000)
                                        }
                                    })
                                }
                            })
                            res.text().then(html => {
                                getPopup(html, currentMain, element.id)
                                clicked = false
                            })
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
        divPopup.classList.add('disappear-animation')
        setTimeout(() => {
            currentMain.removeChild(divPopup)
        }, 500)
    })

    const ideaIcon = document.querySelector('.idea-icon')
    ideaIcon.addEventListener('click', () => {
        window.location.href = '/ideaForm'
    })

    const starIcon = document.querySelector('.star-icon')
    const selectedStarIcon = document.querySelector('.selected-star-icon')
    fetch('/loggedIn')
    .then(res => res.json())
    .then(userSession => {
        if(userSession){
            fetch('/getFavBody')
            .then(res => res.json())
            .then(favBody => {
                if(favBody === celestialBody){
                    starIcon.style.display = 'none'
                    selectedStarIcon.style.display = 'block'
                } else{
                    starIcon.style.display = 'block'
                    selectedStarIcon.style.display = 'none'
                    starIcon.addEventListener('click', () => {
                        window.location.href = `/favBody/${celestialBody}`
                    })
                }
            })
        } else{
            starIcon.style.display = 'block'
            selectedStarIcon.style.display = 'none'
            starIcon.addEventListener('click', () => {
                window.location.href = '/account'
            })
        }
    })
}
