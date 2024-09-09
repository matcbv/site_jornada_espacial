const rightArrowIcon = document.querySelector('.right-arrow-icon')
const leftArrowIcon = document.querySelector('.left-arrow-icon')
const profileNav = document.querySelector('.profile-nav')


rightArrowIcon.addEventListener('click', () => {
    const profileNavDisplay = window.getComputedStyle(profileNav).display
    if (profileNavDisplay === 'none'){
        profileNav.classList.remove('to-left-animation')
        profileNav.style.display = 'flex'
        profileNav.classList.add('to-right-animation')
        rightArrowIcon.style.display = 'none'
        leftArrowIcon.style.display = 'inline'
    
        leftArrowIcon.addEventListener('click', () => {
            profileNav.classList.remove('to-right-animation')
            profileNav.classList.add('to-left-animation')
            setTimeout(() => {
                profileNav.classList.remove('show-profile-nav')
                profileNav.style.display = 'none'
                profileNav.classList.remove('to-left-animation')
                leftArrowIcon.style.display = 'none'
                rightArrowIcon.style.display = 'inline'
            }, 500)

        })
    }
})

