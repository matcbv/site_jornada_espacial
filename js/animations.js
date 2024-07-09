const milkywayBtn = document.querySelector('#milkyway-btn')
const andromedaBtn = document.querySelector('#andromeda-btn')

milkywayBtn.addEventListener('mouseover', () => {
    milkywayBtn.classList.add('rocket')
})

milkywayBtn.addEventListener('mouseout', () => {
    milkywayBtn.classList.remove('rocket')
})