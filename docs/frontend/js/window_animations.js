const introductionSection = document.querySelector(".intro-section")
const headerSection = document.querySelector("header")

if (introductionSection && headerSection){
    const introVh = introductionSection.getBoundingClientRect().height
    const headerVh = headerSection.getBoundingClientRect().height

    document.addEventListener("scroll", () => {
        const verticalScroll = window.scrollY
        if (verticalScroll >= introVh - headerVh){
            document.body.classList.add('change-scrollbar');
        } else if(verticalScroll < introVh - headerVh) {
            document.body.classList.remove('change-scrollbar');
        }
    })
}

const galaxiesMainGridDiv = document.querySelector('.galaxies-main-grid-div')

if (galaxiesMainGridDiv){
    document.body.classList.add('change-scrollbar');
}
