const currentMain = document.querySelector('main')
const comet = document.querySelector('.comet')
const asteroid = document.querySelector('.asteroid')
let lastBody = comet

if(currentMain.classList.contains('galaxies-main')){
    setInterval(() => {lastBody === comet ? celestialodiesAnimation(asteroid, 'right'): celestialodiesAnimation(comet, 'left')}, 8000)
}

function celestialodiesAnimation(celestialBody, direction){
    lastBody = celestialBody
    const styleSheet = document.createElement('style')
    document.head.appendChild(styleSheet)

    const animationHeight = Math.random() * currentMain.offsetHeight / 2
    styleSheet.innerHTML = `@keyframes celestial-bodies{
        from{
            ${direction}: -200px;
            top: ${animationHeight}px;
        }
        to{
            ${direction}: 100vw;
            top: ${animationHeight + 200}px;
        }
    }`
    celestialBody.style.animation =  'celestial-bodies 4s linear 0s 1 normal both'
    celestialBody.style.display = 'inline'
    setTimeout(() => {
        celestialBody.style.display = 'none'
        celestialBody.style.animation = ''
    }, 4000)
}
