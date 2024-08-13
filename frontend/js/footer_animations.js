// ---------- HTML ELEMENTS ----------
const topBtn = document.querySelector('.top-btn')
const cowboyBebopDiv = document.querySelector('.cowboy-bebop-div')
const swordfishDiv = document.querySelector('.swordfish-div')

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