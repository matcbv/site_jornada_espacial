const currentMain = document.querySelector('main')

function addModal(currentMain, html, badgeName) {
    const divModal = document.createElement('div')
    divModal.style.display = 'flex'
    divModal.classList.add('appear-animation', 'modal')
    divModal.innerHTML = html

    currentMain.appendChild(divModal)

    const badgeDiv = divModal.querySelector('.badge-div')
    badgeDiv.classList.add('spinning-animation')

    const badge = divModal.querySelector('.badge')
    badge.src = `/images/profile_images/${badgeName}_badge.png`
    badge.classList.add('scale-up-animation')

    setTimeout(() => {
        badgeDiv.classList.remove('spinning-animation')
        badge.classList.remove('scale-up-animation')
        const badgeTitle = divModal.querySelector('h1')
        badgeTitle.classList.add('resizing-big-animation')
    }, 2000);

    const saveBadgeButton = divModal.querySelector('.save-badge-button')
    const badgeInnerDiv = divModal.querySelector('.badge-inner-div')
    saveBadgeButton.addEventListener('click', () => {
        badge.classList.add('scale-down-animation')
        badgeInnerDiv.classList.add('centralizing-badge', 'to-profile-animation')
        setTimeout(() => {
            window.location.href = `/addBadge/${badgeName}`
        }, 1000)
    })
}

if(currentMain.classList.contains('profile-main')){
    const badgesDiv = document.querySelector('.badges-div')
    const badges = badgesDiv.querySelectorAll('img')
    badges.forEach(badge => {
        if(badge.classList.contains('unlocked-badge')){
            badge.addEventListener('click', () => {
                fetch(`/getBadgeModal/${badge.id}`)
                .then(res => res.text())
                .then(html => {
                    fetch('/getBadges')
                    .then(res => res.json())
                    .then(userBadges => {
                        userBadges.forEach(item => {
                            if(item[0] === badge.id){
                                const modalBadgeDiv = document.createElement('div')
                                modalBadgeDiv.classList.add('modal-badge-div')
                                modalBadgeDiv.innerHTML = html.replace('{{date}}', item[1])
                                badgesDiv.appendChild(modalBadgeDiv)
                            }
                        });
                    })
                })
            })
        }
    });
}

export default addModal
