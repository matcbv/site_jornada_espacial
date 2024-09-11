// ---------- HTML ELEMENTS ----------

const topBtn = document.querySelector('.top-btn')
const cowboyBebopDiv = document.querySelector('.cowboy-bebop-div')
const swordfishDiv = document.querySelector('.swordfish-div')
const footer = document.querySelector('footer')
const profileMain = document.querySelector('.main-profile')

// ---------- TOP BUTTON ----------

topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

// ---------- COWBOY BEBOP ANIMATION ----------

cowboyBebopDiv.addEventListener('click', () => {
    swordfishDiv.classList.add('travel-animation')
    swordfishDiv.style.display = 'block'
    setTimeout(() => {
        swordfishDiv.classList.remove('travel-animation')
    }, 2000)
})

// ---------- TROCANDO AS CORES DO RODAPÉ AO ENTRAR NO PERFIL DO USUÁRIO ----------
if (profileMain){
    footer.classList.add('profile-footer')
}else{
    footer.classList.remove('profile-footer')
}
