// ---------- HTML ELEMENTS ----------

const mainProfile = document.querySelector('.profile-main');
const mainEditProfile = document.querySelector('.edit-profile-main');
const profileNav = document.querySelector('.profile-nav');

const rightArrowIcon = document.querySelector('.right-arrow-icon');
const leftArrowIcon = document.querySelector('.left-arrow-icon');
const editImageIcon = document.querySelector('.edit-img-icon');
const pencilIcon = document.querySelector('.pencil-icon');

const profileImgPopup = document.querySelector('.profile-img-popup');
const profileImgCloseIcon = document.querySelector('.profile-img-close-icon');
const saveImgButton = document.querySelector('.save-img-btn');

const removeAccountBtn = document.querySelector('.remove-account-btn');
const deleteAccountPopup = document.querySelector('.delete-account-popup');
const backBtn = document.querySelector('.back-btn');
const continueBtn = document.querySelector('.continue-btn');

const shootingStar = document.querySelector('.shooting-star');

// ---------- NAV ANIMATION ----------

if (rightArrowIcon) {
	rightArrowIcon.addEventListener('click', () => {
		const profileNavDisplay = window.getComputedStyle(profileNav).display;
		if (profileNavDisplay === 'none') {
			profileNav.classList.remove('to-left-animation');
			profileNav.style.display = 'flex';
			profileNav.classList.add('to-right-animation');
			rightArrowIcon.style.display = 'none';
			leftArrowIcon.style.display = 'inline';

			leftArrowIcon.addEventListener('click', () => {
				profileNav.classList.remove('to-right-animation');
				profileNav.classList.add('to-left-animation');
				setTimeout(() => {
					profileNav.classList.remove('show-profile-nav');
					profileNav.style.display = 'none';
					profileNav.classList.remove('to-left-animation');
					leftArrowIcon.style.display = 'none';
					rightArrowIcon.style.display = 'inline';
				}, 500);
			});
		}
	});
}

// ---------- PROFILE ICON ANIMATION ----------

if (mainProfile) {
	profileImgCloseIcon.addEventListener('click', () => {
		if (window.getComputedStyle(profileImgPopup).display === 'flex') {
			profileImgPopup.classList.add('disappear-animation');
			setTimeout(() => {
				profileImgPopup.style.display = 'none';
				profileImgPopup.classList.remove('disappear-animation');
			}, 500);
		}
	});

	editImageIcon.addEventListener('click', () => {
		if (window.getComputedStyle(profileImgPopup).display === 'none') {
			profileImgPopup.classList.add('fast-appear-animation');
			profileImgPopup.style.display = 'flex';
			setTimeout(() => {
				profileImgPopup.classList.remove('fast-appear-animation');
			}, 500);
		}
	});

	const iconImages = profileImgPopup.querySelectorAll('img');
	if (iconImages) {
		iconImages.forEach((element) => {
			if (element !== profileImgCloseIcon) {
				element.addEventListener('click', () => {
					iconImages.forEach((img) => {
						if (img.classList.contains('outline-icons')) {
							img.classList.remove('outline-icons');
						}
					});
					element.classList.add('outline-icons');
					sessionStorage.setItem('profileImg', element.id);
				});
			}
		});
	}

	if (saveImgButton) {
		saveImgButton.addEventListener('click', () => {
			window.location.href = `/profileImg/${sessionStorage.getItem('profileImg')}`;
		});
	}

	pencilIcon.addEventListener('click', () => {
		window.location.href = `/account/profile/editProfile`;
	});

	// ---------- SHOOTING STAR ANIMATION ----------

	const styleSheet = document.createElement('style');
	if (shootingStar) {
		document.head.appendChild(styleSheet);
		setInterval(() => {
			const animationHeight = (Math.random() * window.innerHeight) / 2;
			styleSheet.innerHTML = `@keyframes shooting-star{
                                    from{
                                        right: -200px;
                                        top: ${animationHeight}px;
                                    }
                                    to{
                                        right: 100vw;
                                        top: ${animationHeight + window.innerHeight / 2}px;
                                    }
                                }`;
			shootingStar.style.animation = 'shooting-star 1s linear 0s 1 normal both';
			shootingStar.style.display = 'inline';
			setTimeout(() => {
				shootingStar.style.display = 'none';
				shootingStar.style.animation = '';
			}, 1000);
		}, 4000);
	}
}

if (mainEditProfile) {
	// ---------- REMOVE ACCOUNT ANIMATIONS ----------

	removeAccountBtn.addEventListener('click', () => {
		deleteAccountPopup.classList.add('fast-appear-animation');
		deleteAccountPopup.style.display = 'flex';
		setTimeout(() => {
			deleteAccountPopup.classList.remove('fast-appear-animation');
		}, 500);
	});

	backBtn.addEventListener('click', () => {
		deleteAccountPopup.classList.add('disappear-animation');
		setTimeout(() => {
			deleteAccountPopup.style.display = 'none';
			deleteAccountPopup.classList.remove('disappear-animation');
		}, 500);
	});

	continueBtn.addEventListener('click', () => {
		window.location.href = '/deleteAccount';
	});
}
