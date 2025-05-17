const currentMain = document.querySelector('main');
let clicked = false;

function addModal(currentMain, html, badgeName) {
	const divModal = document.createElement('div');
	divModal.style.display = 'flex';
	divModal.classList.add('appear-animation', 'modal');
	divModal.innerHTML = html;

	currentMain.appendChild(divModal);

	const badgeDiv = divModal.querySelector('.badge-div');
	badgeDiv.classList.add('spinning-animation');

	const badge = divModal.querySelector('.badge');
	badge.src = `/images/profile_images/${badgeName}_badge.png`;
	badge.classList.add('scale-up-animation');

	const badgeTitle = divModal.querySelector('h1');
	badgeTitle.classList.add('resizing-big-animation');

	setTimeout(() => {
		badgeDiv.classList.remove('spinning-animation');
		badge.classList.remove('scale-up-animation');
	}, 2000);

	const saveBadgeButton = divModal.querySelector('.save-badge-button');
	const badgeInnerDiv = divModal.querySelector('.badge-inner-div');
	saveBadgeButton.addEventListener('click', () => {
		badge.classList.add('scale-down-animation');
		badgeInnerDiv.classList.add('centralizing-badge', 'to-profile-animation');
		setTimeout(() => {
			window.location.href = `/addBadge/${badgeName}`;
		}, 1000);
	});
}

if (currentMain.classList.contains('profile-main')) {
	const badgesDiv = document.querySelector('.badges-div');
	const badges = badgesDiv.querySelectorAll('img');

	badges.forEach((badge) => {
		badge.addEventListener('click', () => {
			if (!clicked) {
				clicked = true;
				if (badge.classList.contains('unlocked-badge')) {
					fetch(`/getBadgeModal/${badge.id}`)
						.then((res) => res.text())
						.then((html) => {
							fetch('/getBadges')
								.then((res) => res.json())
								.then((userBadges) => {
									userBadges.forEach((item) => {
										if (item[0] === badge.id) {
											addBadgeModal(badgesDiv, html, item[1]);
											clicked = false;
										}
									});
								});
						});
				}
			}
		});
	});

	const lockedBadges = document.querySelectorAll('.locked-badge');
	lockedBadges.forEach((div) => {
		div.addEventListener('click', () => {
			if (!clicked) {
				clicked = true;
				const badge = div.previousElementSibling;
				fetch(`/getBadgeHintModal/${badge.id}`)
					.then((res) => res.text())
					.then((html) => {
						addBadgeModal(badgesDiv, html);
						clicked = false;
					});
			}
		});
	});
}

function addBadgeModal(badgesDiv, html, date) {
	const modalBadgeDiv = document.createElement('div');
	if (date) {
		modalBadgeDiv.innerHTML = html.replace('{{date}}', date);
		modalBadgeDiv.style.background =
			'rgba(0, 0, 0, 0.9) url(/images/confetti.gif) center';
		modalBadgeDiv.style.backgroundSize = 'contain';
	} else {
		modalBadgeDiv.innerHTML = html;
	}
	modalBadgeDiv.classList.add('modal-badge-div', 'fast-appear-animation');
	badgesDiv.appendChild(modalBadgeDiv);

	const closeModalIcon = modalBadgeDiv.querySelector('.close-modal-icon');
	closeModalIcon.addEventListener('click', () => {
		modalBadgeDiv.classList.remove('fast-appear-animation');
		modalBadgeDiv.classList.add('disappear-animation');
		setTimeout(() => {
			badgesDiv.removeChild(modalBadgeDiv);
		}, 500);
	});
}

export default addModal;
