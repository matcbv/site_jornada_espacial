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
    badge.classList.add('scaleUp-animation')

    setTimeout(() => {
        badgeDiv.classList.remove('spinning-animation')
        const badgeTitle = divModal.querySelector('h1')
        badgeTitle.classList.add('resizing-big-animation')
    }, 2000);

    const saveBadgeButton = divModal.querySelector('.save-badge-button')
    saveBadgeButton.addEventListener('click', () => {
        badge.classList.add('centralizing-badge', 'shake-animation', 'to-profile-animation')
        setTimeout(() => {
            window.location.href = `/addBadge/${badgeName}`
        }, 1000)
    })
}

export default addModal
