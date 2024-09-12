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
                            res.text().then(html => {
                                getPopup(html, galaxiesMain, element.id)
                            })
                        }
                    })
                }
            }
        }
    })
}

// Função para adição do conteúdo obtido na página
function getPopup(html, main, celestialBody){
    const divPopup = document.createElement('div')
    divPopup.style.display = 'flex'
    divPopup.classList.add('appear-animation', 'popup')
    divPopup.innerHTML = html
    main.appendChild(divPopup)

    const closeIcon = divPopup.querySelector('.close-icon')
    closeIcon.addEventListener('click', () => {
        main.removeChild(divPopup)
    })

    const ideaIcon = document.querySelector('.idea-icon')
    ideaIcon.addEventListener('click', () => {
        window.location.href = '/ideaForm'
    })

    const starIcon = document.querySelector('.star-icon')
    const selectedStarIcon = document.querySelector('.selected-star-icon')
    if (localStorage.getItem('favBody') === celestialBody && localStorage.getItem('loggedIn') === 'true'){
        starIcon.style.display = 'none'
        selectedStarIcon.style.display = 'block'
    } else{
        starIcon.style.display = 'block'
        selectedStarIcon.style.display = 'none'
    }
    starIcon.addEventListener('click', () => {
        if(localStorage.getItem('loggedIn') === 'true'){
            localStorage.setItem('favBody', `${celestialBody}`)
            starIcon.style.display = 'none'
            selectedStarIcon.style.display = 'block'
        }
        window.location.href = `/favBody/${celestialBody}`
    })
}
