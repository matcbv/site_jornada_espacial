// ---------- HTML ELEMENTS ----------

const rightArrowIcon = document.querySelector('.right-arrow-icon')
const leftArrowIcon = document.querySelector('.left-arrow-icon')
const editImageIcon = document.querySelector('.edit-img-icon')
const saveImgButton = document.querySelector('.save-img-button')
const profileNav = document.querySelector('.profile-nav')
const profileImgCloseIcon = document.querySelector('.profile-img-close-icon')
const profileImgPopup = document.querySelector('.profile-img-popup')
const mainProfile = document.querySelector('.main-profile')

// ---------- NAV ANIMATION ----------

if (rightArrowIcon){
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
}

// ---------- PROFILE ICON ANIMATION ----------

if (mainProfile){
    localStorage.setItem('loggedIn', 'true')

    profileImgCloseIcon.addEventListener('click', () => {
        if(window.getComputedStyle(profileImgPopup).display === 'flex'){
            profileImgPopup.classList.add('disappear-animation')
            setTimeout(() => {
                profileImgPopup.style.display = 'none'
                profileImgPopup.classList.remove('disappear-animation')
            }, 500)
        }
    })
    if(editImageIcon){
        editImageIcon.addEventListener('click', () => {
            if(window.getComputedStyle(profileImgPopup).display === 'none'){
                profileImgPopup.classList.add('fast-appear-animation')
                    profileImgPopup.style.display = 'flex'
                setTimeout(() => {
                    profileImgPopup.classList.remove('fast-appear-animation')
                }, 500)
            }
        })
    }

    const iconImages = profileImgPopup.querySelectorAll('img')
    if(iconImages){
        iconImages.forEach(element => {
            if(element !== profileImgCloseIcon){    
                element.addEventListener('click', () =>{
                    iconImages.forEach(img => {
                        if(img.classList.contains('outline-icons')){
                            img.classList.remove('outline-icons')
                        }
                    })
                    element.classList.add('outline-icons')
                    sessionStorage.setItem('profileImg', element.id)
                })
            }
        });
    }

    if (saveImgButton){
        saveImgButton.addEventListener('click', () => {
            window.location.href = `/profileImg/${sessionStorage.getItem('profileImg')}`
        })
    }

    const logoutIcon = document.querySelector('.logout-icon')
    if (logoutIcon){
        logoutIcon.addEventListener('click', () => {
            localStorage.setItem('favBody', '')
            localStorage.setItem('loggedIn', 'false')
        })
    }
}
