const introRect = document.querySelector(".intro-section").getBoundingClientRect()
const introVh = introRect.height
const headerRect = document.querySelector("header").getBoundingClientRect()
const headerVh = headerRect.height

document.addEventListener("scroll", () => {
    const verticalScroll = window.scrollY
    if (verticalScroll >= introVh - headerVh){
        document.body.classList.add('change-scrollbar');
    } else if(verticalScroll < introVh - headerVh) {
        document.body.classList.remove('change-scrollbar');
    }
})