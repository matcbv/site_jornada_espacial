/******/ (() => { // webpackBootstrap
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************************************!*\
  !*** ./docs/frontend/js/index_animations.js ***!
  \**********************************************/
// ---------- HTML ELEMENTS ----------

const milkywayBtn = document.querySelector('#milkyway-btn');
const andromedaBtn = document.querySelector('#andromeda-btn');
const triangleBtn = document.querySelector('#triangle-btn');
const milkywayRocket = document.querySelector('#milkyway-rocket');
const andromedaRocket = document.querySelector('#andromeda-rocket');
const triangleRocket = document.querySelector('#triangle-rocket');

// ---------- NAVEGATION ----------

milkywayBtn.addEventListener('click', () => {
  window.location.assign('milkyway.html');
});
andromedaBtn.addEventListener('click', () => {
  window.location.assign('andromeda.html');
});
triangleBtn.addEventListener('click', () => {
  window.location.assign('triangle.html');
});

// ---------- ROCKET ANIMATION ----------

document.addEventListener('mouseover', e => {
  if (e.target.id == 'milkyway-btn') {
    milkywayRocket.innerHTML = '🚀';
    milkywayRocket.classList.add('rocket');
  } else if (e.target.id == 'andromeda-btn') {
    andromedaRocket.innerHTML = '🚀';
    andromedaRocket.classList.add('rocket');
  } else if (e.target.id == 'triangle-btn') {
    triangleRocket.innerHTML = '🚀';
    triangleRocket.classList.add('rocket');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.id == 'milkyway-btn') {
    milkywayRocket.innerHTML = '';
    milkywayRocket.classList.remove('rocket');
  } else if (e.target.id == 'andromeda-btn') {
    andromedaRocket.innerHTML = '';
    andromedaRocket.classList.remove('rocket');
  } else if (e.target.id == 'triangle-btn') {
    triangleRocket.innerHTML = '';
    triangleRocket.classList.remove('rocket');
  }
});

// ---------- INTRO BUTTON ----------

const startingBtn = document.querySelector('.intro-btn');
const milkywaySection = document.querySelector('.milkyway-section');
const introSection = document.querySelector('.intro-section');
startingBtn.addEventListener('click', () => {
  if (introSection.classList.contains('appear-animation')) {
    introSection.classList.remove('appear-animation');
  }
  introSection.classList.add('squish-animation');
  setTimeout(() => {
    introSection.classList.remove('squish-animation');
    milkywaySection.scrollIntoView({
      behavior: "smooth"
    });
  }, 999);
});
window.addEventListener('load', () => {
  introSection.classList.add('appear-animation');
  setTimeout(() => {
    introSection.classList.remove('appear-animation');
    introSection.style.opacity = '1';
  }, 1000);
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************************************!*\
  !*** ./docs/frontend/js/planets_popups.js ***!
  \********************************************/
const images = document.querySelectorAll('img');
const divPopup = document.querySelector('.popup');
document.addEventListener('click', e => {
  const element = e.target;
  if (element.tagName.toLowerCase() === "img") {
    for (const image of images) {
      if (element.id === image.id) {
        fetch(`./popups_html/${element.id}_popup.html`).then(res => {
          if (!res.ok) {
            throw new Error('Erro na requisição do popup');
          } else {
            res.text().then(html => {
              getPopup(html);
            });
          }
        });
      }
    }
  }
});
async function getPopup(html) {
  divPopup.style.display = 'flex';
  divPopup.classList.add('appear-animation');
  divPopup.innerHTML = html;
  closeAction(document.querySelector('#close-icon'));
}
function closeAction(closeIcon) {
  closeIcon.addEventListener('click', () => {
    divPopup.style.display = 'none';
    divPopup.innerHTML = '';
    divPopup.classList.remove('appear-animation');
  });
}
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************************!*\
  !*** ./docs/frontend/js/window_animations.js ***!
  \***********************************************/
const introRect = document.querySelector(".intro-section").getBoundingClientRect();
const introVh = introRect.height;
const headerRect = document.querySelector("header").getBoundingClientRect();
const headerVh = headerRect.height;
document.addEventListener("scroll", () => {
  const verticalScroll = window.scrollY;
  if (verticalScroll >= introVh - headerVh) {
    document.body.classList.add('change-scrollbar');
  } else if (verticalScroll < introVh - headerVh) {
    document.body.classList.remove('change-scrollbar');
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************************!*\
  !*** ./docs/frontend/js/footer_animations.js ***!
  \***********************************************/
// ---------- FOOTER POPUPS ----------

const divPopupFooter = document.querySelector('.popup');
const aboutMeLink = document.getElementById('about-me');
const referencesLink = document.getElementById('references');
const inspirations = document.getElementById('inspirations');
aboutMeLink.addEventListener('click', () => {
  fetch(`./popups_html/about_me_popup.html`).then(res => {
    if (!res.ok) {
      throw new Error('Erro na requisição do popup');
    } else {
      res.text().then(html => {
        getPopup(html);
      });
    }
  });
});
async function getPopup(html) {
  divPopupFooter.style.display = 'flex';
  divPopupFooter.classList.add('appear-animation');
  divPopupFooter.innerHTML = html;
  closeAction(document.querySelector('#close-icon'));
}
function closeAction(closeIcon) {
  closeIcon.addEventListener('click', () => {
    divPopupFooter.style.display = 'none';
    divPopupFooter.innerHTML = '';
    divPopupFooter.classList.remove('appear-animation');
  });
}

// ---------- BEGINNING BUTTON ----------

const beginningBtn = document.querySelector('.beginning-btn');
beginningBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map