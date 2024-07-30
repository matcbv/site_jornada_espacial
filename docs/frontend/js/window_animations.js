const introductionSection = document.querySelector(".intro-section")
const headerSection = document.querySelector("header")
if (introductionSection && headerSection){
    const introRect = introductionSection.getBoundingClientRect()
    const headerRect = headerSection.getBoundingClientRect()
    const headerVh = headerRect.height

    document.addEventListener("scroll", () => {
        const verticalScroll = window.scrollY
        if (verticalScroll >= introVh - headerVh){
            document.body.classList.add('change-scrollbar');
        } else if(verticalScroll < introVh - headerVh) {
            document.body.classList.remove('change-scrollbar');
        }
    })
}
