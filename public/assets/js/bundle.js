/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/js/edit_profile_animations.js":
/*!************************************************!*\
  !*** ./frontend/js/edit_profile_animations.js ***!
  \************************************************/
/***/ (() => {

// ---------- HTML ELEMENTS ----------

var editProfileMain = document.querySelector('.edit-profile-main');
var profileImgEdit = document.querySelector('.profile-img-edit');
var saveImgEditButton = document.querySelectorAll('.save-img-edit-button');
var bioTextarea = document.querySelector('.bio-textarea');
var caractersSpan = document.querySelector('.caracters-span');

// ---------- EVENTOS DA SEÇÃO DE EDIÇÃO DO PERFIL ----------

if (editProfileMain) {
  var iconImagesEdit = profileImgEdit.querySelectorAll('img');
  if (iconImagesEdit) {
    iconImagesEdit.forEach(function (element) {
      element.addEventListener('click', function () {
        iconImagesEdit.forEach(function (img) {
          if (img.classList.contains('outline-icons')) {
            img.classList.remove('outline-icons');
          }
        });
        element.classList.add('outline-icons');
        sessionStorage.setItem('profileImg', element.id);
      });
    });
  }

  // ---------- BOTÃO DE ATUALIZAR IMAGEM ----------

  saveImgEditButton.forEach(function (element) {
    element.addEventListener('click', function () {
      window.location.href = "/profileImg/".concat(sessionStorage.getItem('profileImg'));
    });
  });

  // ---------- EVENTOS PARA ATUALIZAÇÃO DA ÁREA DE TEXTO DA BIO ----------

  caractersSpan.innerHTML = Array.from(bioTextarea.value).length;
  bioTextarea.addEventListener('keydown', function () {
    caractersSpan.innerHTML = Array.from(bioTextarea.value).length;
  });
  bioTextarea.addEventListener('keyup', function () {
    caractersSpan.innerHTML = Array.from(bioTextarea.value).length;
  });
}

/***/ }),

/***/ "./frontend/js/footer_animations.js":
/*!******************************************!*\
  !*** ./frontend/js/footer_animations.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal_animations */ "./frontend/js/modal_animations.js");


// ---------- HTML ELEMENTS ----------

var footer = document.querySelector('footer');
var topBtn = document.querySelector('.top-btn');
var cowboyBebopDiv = document.querySelector('.cowboy-bebop-div');
var swordfishDiv = document.querySelector('.swordfish-div');
var currentMain = document.querySelector('main');

// ---------- TOP BUTTON ----------

topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ---------- COWBOY BEBOP ANIMATION ----------

cowboyBebopDiv.addEventListener('click', function () {
  swordfishDiv.classList.add('travel-animation');
  swordfishDiv.style.display = 'block';
  swordfishDiv.addEventListener('click', swordFishClick);
  setTimeout(function () {
    swordfishDiv.classList.remove('travel-animation');
    swordfishDiv.removeEventListener('click', swordFishClick);
    swordfishDiv.style.display = 'none';
  }, 2000);
});
function swordFishClick() {
  fetch('/loggedIn').then(function (res) {
    return res.json();
  }).then(function (bool) {
    if (bool) {
      fetch('/getModal').then(function (data) {
        return data.text();
      }).then(function (html) {
        (0,_modal_animations__WEBPACK_IMPORTED_MODULE_0__["default"])(currentMain, html, 'space_cowboy');
      })["catch"](function () {});
    }
  });
}

// ---------- TROCANDO AS CORES DO RODAPÉ AO ENTRAR NO PERFIL DO USUÁRIO ----------

if (currentMain.classList.contains('profile-main') || currentMain.classList.contains('edit-profile-main')) {
  footer.classList.add('profile-footer');
} else {
  footer.classList.remove('profile-footer');
}

/***/ }),

/***/ "./frontend/js/forms_animations.js":
/*!*****************************************!*\
  !*** ./frontend/js/forms_animations.js ***!
  \*****************************************/
/***/ (() => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// ---------- HTML ELEMENTS ----------

// ---------- FORM MAIN ----------
var registerMain = document.querySelector('.register-main');

// ---------- ICONS ---------- 
var eyeIcons = document.querySelectorAll('.eye-icon');
var crosslines = document.querySelectorAll('.crossline');
var requirementsIcon = document.querySelector('.requirements-icon');
var requirementsDiv = document.querySelector('.password-requirements');

// ---------- FORMS ----------
var registerForm = document.querySelector('.register-form');
var codeForm = document.querySelector('.code-form');
var loginForm = document.querySelector('.login-form');
var passwordForm = document.querySelector('.password-form');

// ---------- INPUTS ----------
var inputs = document.querySelectorAll('input');

// ---------- BUTTONS ----------
var resendEmailBtn = document.querySelector('.resend-email');

// ---------- REGISTER FORM ANIMATIONS ----------

if (registerForm || codeForm || loginForm || passwordForm) {
  var _iterator = _createForOfIteratorHelper(inputs),
    _step;
  try {
    var _loop = function _loop() {
      var input = _step.value;
      if (input.type !== 'submit' && input.type !== 'button') {
        input.addEventListener('click', function () {
          input.placeholder = '';
        });
        input.addEventListener('focus', function () {
          input.placeholder = '';
        });
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
if (Array.from(eyeIcons).length > 0 && Array.from(crosslines).length > 0) {
  eyeIcons.forEach(function (element) {
    element.addEventListener('click', function () {
      return showPassword(element);
    });
  });
  crosslines.forEach(function (element) {
    element.addEventListener('click', function () {
      return showPassword(element);
    });
  });
}
function showPassword(element) {
  var input = element.previousElementSibling;
  if (input.type === 'password') {
    input.type = 'text';
    element.classList.contains('crossline') ? element.style.display = 'none' : element.nextElementSibling.style.display = 'none';
  } else {
    input.type = 'password';
    element.classList.contains('crossline') ? element.style.display = 'block' : element.nextElementSibling.style.display = 'block';
  }
}
if (requirementsIcon) {
  requirementsIcon.addEventListener('click', function () {
    var requirementsDivStyles = window.getComputedStyle(requirementsDiv);
    if (requirementsDivStyles.display === 'none') {
      requirementsDiv.classList.remove('disappear-animation');
      requirementsDiv.classList.add('fast-appear-animation');
      setTimeout(function () {
        requirementsDiv.style.display = 'flex';
      }, 500);
      hideRequirements(requirementsDivStyles);
    } else if (requirementsDivStyles.display === 'flex') {
      requirementsDiv.classList.remove('fast-appear-animation');
      requirementsDiv.classList.add('disappear-animation');
      setTimeout(function () {
        requirementsDiv.style.display = 'none';
      }, 500);
    }
  });
}
function hideRequirements(requirementsDivStyles) {
  registerMain.addEventListener('click', function (e) {
    var element = e.target;
    if (!element.classList.contains('password-requirements') || !element.closest('div').classList.contains('password-requirements')) {
      if (requirementsDivStyles.display === 'flex') {
        requirementsDiv.classList.remove('fast-appear-animation');
        requirementsDiv.classList.add('disappear-animation');
        setTimeout(function () {
          requirementsDiv.style.display = 'none';
        }, 500);
      }
    }
  });
}

// ---------- VALIDATION POPUP ANIMATIONS ----------

if (resendEmailBtn) {
  resendEmailBtn.addEventListener('click', function () {
    sessionStorage.setItem('emailSent', 'true');
    window.location.href = '/resendEmail?prevPage=' + encodeURIComponent(window.location.href);
  });
}

/***/ }),

/***/ "./frontend/js/general_animations.js":
/*!*******************************************!*\
  !*** ./frontend/js/general_animations.js ***!
  \*******************************************/
/***/ (() => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// ---------- HTML ELEMENTS ----------

// Intro and footer
var introSection = document.querySelector('.intro-section');
var footer = document.querySelector('footer');

// Buttons
var backHomePageBtn = document.querySelector('.back-homepage-btn');

// Audio elements
var mscPopup = document.querySelector('.msc-popup');
var audioDiv = document.querySelector('.audio-div');
var soundOn = document.querySelector('.sound-on');
var soundOff = document.querySelector('.sound-off');
var musicIcon = document.querySelector('.music-icon');
var playlistDiv = document.querySelector('.playlist-div');
var musics = document.querySelectorAll('.musics');
var toStopAudio = '';
var toPlayAudio = '';
var lastSoundWaveIcon = '';

// Ideaform main
var ideaformMain = document.querySelector('.ideaform-main');
var loginMain = document.querySelector('.login-main');
var passwordMain = document.querySelector('.password-main');

// ---------- PLAY POPUP ----------

if (introSection) {
  var mscPopupCloseIcon = document.querySelector('.msc-popup-close-icon');
  var play = document.querySelector('.play');
  var introSectionRect = introSection.getBoundingClientRect();

  // Evento para aparição do popup para início da trilha sonora:
  window.addEventListener('load', function () {
    var audioStatus = sessionStorage.getItem('audioStatus');
    // Adicionando caso a tela ultrapasse ou não o fim da seção de introdução:
    if (window.scrollY <= introSectionRect.bottom && audioStatus !== 'false') {
      mscPopup.classList.add('msc-popup-appear-animation');
    } else {
      document.body.removeChild(mscPopup);
    }
  });
  window.addEventListener('scroll', function () {
    // Removendo o popup para início da trilha sonora caso ele passa o fim da seção de introdução:
    if (window.scrollY >= introSectionRect.bottom) {
      if (mscPopup && mscPopup.parentElement) {
        mscPopup.classList.remove('msc-popup-appear-animation');
        mscPopup.classList.add('disappear-animation');
        setTimeout(function () {
          if (mscPopup && mscPopup.parentElement) {
            document.body.removeChild(mscPopup);
          }
        }, 500);
      }
    }
  });
  play.addEventListener('click', function () {
    var currentAudio = sessionStorage.getItem('currentAudio');
    var redbonesSoundWaveIcon = document.querySelector('#redbone').querySelector('.sound-wave-icon');
    if (currentAudio) {
      toPlayAudio = getMusic(currentAudio);
      toPlayAudio.play();
      sessionStorage.setItem('audioStatus', toPlayAudio.paused);
    } else {
      toPlayAudio = getMusic('redbone');
      toPlayAudio.play();
      sessionStorage.setItem('currentAudio', 'redbone');
      sessionStorage.setItem('audioStatus', toPlayAudio.paused);
      redbonesSoundWaveIcon.style.display = 'block';
      lastSoundWaveIcon = redbonesSoundWaveIcon;
    }
    document.body.removeChild(mscPopup);
    soundOn.style.display = 'block';
    soundOff.style.display = 'none';
  });
  mscPopupCloseIcon.addEventListener('click', function () {
    document.body.removeChild(mscPopup);
  });
}
if (audioDiv) {
  // ---------- SOUND ICON ----------

  soundOn.addEventListener('click', function () {
    var currentAudio = sessionStorage.getItem('currentAudio');
    if (currentAudio) {
      toStopAudio = getMusic(currentAudio);
      toStopAudio.pause();
      sessionStorage.setItem('audioTime', toStopAudio.currentTime);
      sessionStorage.setItem('audioStatus', toStopAudio.paused);
      soundOn.style.display = 'none';
      soundOff.style.display = 'block';
    }
  });
  soundOff.addEventListener('click', function () {
    var currentAudio = sessionStorage.getItem('currentAudio');
    if (currentAudio) {
      toPlayAudio = getMusic(currentAudio);
      var audioTime = sessionStorage.getItem('audioTime');
      toPlayAudio.currentTime = audioTime;
      toPlayAudio.play();
      soundOn.style.display = 'block';
      soundOff.style.display = 'none';
    } else {
      toPlayAudio = getMusic('redbone');
      toPlayAudio.play();
      soundOn.style.display = 'block';
      soundOff.style.display = 'none';
    }
    if (mscPopup && mscPopup.parentElement) {
      document.body.removeChild(mscPopup);
    }
    sessionStorage.setItem('audioStatus', toPlayAudio.paused);
  });

  // ---------- MUSIC ICON ----------

  musicIcon.addEventListener('click', function () {
    if (window.getComputedStyle(playlistDiv).display === 'none') {
      playlistDiv.classList.add('fast-appear-animation');
      playlistDiv.style.display = 'block';
      setTimeout(function () {
        playlistDiv.classList.remove('fast-appear-animation');
      }, 500);
    } else {
      playlistDiv.classList.add('disappear-animation');
      setTimeout(function () {
        playlistDiv.style.display = 'none';
        playlistDiv.classList.remove('disappear-animation');
      }, 500);
    }
  });

  // ---------- PLAYLIST ----------

  playlistDiv.addEventListener('click', function (e) {
    var element = e.target;
    var soundWaveIcon = '';
    if (element.tagName.toLowerCase() !== 'div') {
      element = element.closest('div');
      soundWaveIcon = element.querySelector('.sound-wave-icon');
    } else {
      soundWaveIcon = element.querySelector('.sound-wave-icon');
    }
    var music = getMusic(element.id);
    var currentAudio = sessionStorage.getItem('currentAudio');
    if (currentAudio) {
      lastSoundWaveIcon = document.getElementById(currentAudio).querySelector('.sound-wave-icon');
      toStopAudio = getMusic(currentAudio);
      toStopAudio.pause();
      soundOff.style.display = 'block';
      soundOn.style.display = 'none';
      if (lastSoundWaveIcon) {
        lastSoundWaveIcon.style.display = 'none';
      }
    }
    sessionStorage.setItem('audioStatus', toPlayAudio.paused);
    sessionStorage.setItem('currentAudio', element.id);
    music.play();
    soundWaveIcon.style.display = 'block';
    lastSoundWaveIcon = soundWaveIcon;
    soundOff.style.display = 'none';
    soundOn.style.display = 'block';
    if (mscPopup && mscPopup.parentElement) {
      document.body.removeChild(mscPopup);
    }
  });
}
function getMusic(id) {
  var _iterator = _createForOfIteratorHelper(musics),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var music = _step.value;
      if (music.classList.contains(id)) {
        return music;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// ---------- EVENTO PARA DESAPARECIMENTO DA PLAYLIST ----------

window.addEventListener('click', function (e) {
  var element = e.target;
  if (!playlistDiv.contains(element) && element !== musicIcon && window.getComputedStyle(playlistDiv).display === 'block') {
    playlistDiv.classList.add('disappear-animation');
    setTimeout(function () {
      playlistDiv.style.display = 'none';
      playlistDiv.classList.remove('disappear-animation');
    }, 500);
  }
});

// ---------- AUDIO DIV ----------

if (audioDiv && !ideaformMain && !loginMain && !passwordMain) {
  var footerRectTop = footer.getBoundingClientRect().top;
  var audioDivRectBottom = audioDiv.getBoundingClientRect().bottom;
  window.addEventListener('scroll', function () {
    if (window.scrollY >= footerRectTop - audioDivRectBottom) {
      audioDiv.style.position = 'absolute';
      playlistDiv.style.position = 'absolute';
    } else {
      audioDiv.style.position = 'fixed';
      playlistDiv.style.position = 'fixed';
    }
  });
}
if (ideaformMain || loginMain || passwordMain) {
  audioDiv.style.position = 'absolute';
  audioDiv.style.flexFlow = 'row nowrap';
  soundOff.style.margin = '0 auto 0 10px';
  soundOn.style.margin = '0 auto 0 10px';
  playlistDiv.style.position = 'absolute';
  playlistDiv.style.bottom = '70px';
}

// ---------- 404 BUTTON ----------

if (backHomePageBtn) {
  backHomePageBtn.addEventListener('click', function () {
    window.location.href = '/';
  });
}

/***/ }),

/***/ "./frontend/js/header_animations.js":
/*!******************************************!*\
  !*** ./frontend/js/header_animations.js ***!
  \******************************************/
/***/ (() => {

// Elementos do cabeçalho
var menuIcon = document.querySelector('.menu-icon');
var header = document.querySelector('header');
var fluidHeader = document.querySelector('.fluid-header');
var profileMain = document.querySelector('.profile-main');
var editProfileMain = document.querySelector('.edit-profile-main');

// Evento para animações do cabeçalho fluido
menuIcon.addEventListener('click', function () {
  var fluidHeaderDisplay = window.getComputedStyle(fluidHeader).display;
  menuIcon.classList.add('shake-animation');
  if (fluidHeaderDisplay === 'none') {
    fluidHeader.classList.remove('get-up-animation');
    fluidHeader.style.display = 'block';
    fluidHeader.classList.add('get-down-animation');
  } else if (fluidHeaderDisplay === 'block') {
    fluidHeader.classList.remove('get-down-animation');
    fluidHeader.classList.add('get-up-animation');
    setTimeout(function () {
      fluidHeader.style.display = 'none';
      fluidHeader.classList.remove('get-up-animation');
    }, 500);
  }
  setTimeout(function () {
    menuIcon.classList.remove('shake-animation');
  }, 500);
});

// Trocando cores do cabeçalho ao entrar no perfil do usuário
if (profileMain || editProfileMain) {
  header.classList.add('profile-header');
  var galaxiesLinks = header.querySelector('ul').querySelectorAll('a');
  galaxiesLinks.forEach(function (element) {
    element.classList.add('profile-galaxies-links');
  });
  var fluidHeaderLinks = fluidHeader.querySelectorAll('li');
  fluidHeaderLinks.forEach(function (element) {
    element.classList.add('profile-fluid-header-links');
  });
} else {
  header.classList.remove('profile-header');
  var _galaxiesLinks = header.querySelector('ul').querySelectorAll('a');
  _galaxiesLinks.forEach(function (element) {
    element.classList.remove('profile-galaxies-links');
  });
  var _fluidHeaderLinks = fluidHeader.querySelectorAll('li');
  _fluidHeaderLinks.forEach(function (element) {
    element.classList.remove('profile-fluid-header-links');
  });
}

/***/ }),

/***/ "./frontend/js/index_animations.js":
/*!*****************************************!*\
  !*** ./frontend/js/index_animations.js ***!
  \*****************************************/
/***/ (() => {

// ---------- HTML ELEMENTS ----------

var indexMain = document.querySelector('.index-main');
var startingBtn = document.querySelector('.intro-btn');
var milkywaySection = document.querySelector('.milkyway-section');
var introductionSection = document.querySelector('.intro-section');

// ---------- ROCKET ANIMATION ----------

if (indexMain) {
  indexMain.addEventListener('mouseover', function (e) {
    var element = e.target;
    if (element.tagName.toLowerCase() === 'a') {
      var rocket = element.nextElementSibling;
      rocket.innerHTML = '🚀';
      rocket.classList.add('rocket');
      removeRocket(element, rocket);
    }
  });
}
function removeRocket(element, rocket) {
  element.addEventListener('mouseout', function () {
    rocket.innerHTML = '';
    rocket.classList.remove('rocket');
  });
}

// ---------- INTRO BUTTON ----------

if (startingBtn) {
  startingBtn.addEventListener('click', function () {
    if (introductionSection.classList.contains('appear-animation')) {
      introductionSection.classList.remove('appear-animation');
    }
    introductionSection.classList.add('squish-animation');
    setTimeout(function () {
      introductionSection.classList.remove('squish-animation');
      milkywaySection.scrollIntoView({
        behavior: "smooth"
      });
    }, 998);
  });
  window.addEventListener('load', function () {
    introductionSection.classList.add('intro-appear-animation');
    setTimeout(function () {
      introductionSection.classList.remove('intro-appear-animation');
      introductionSection.style.opacity = '1';
    }, 999);
  });
}

/***/ }),

/***/ "./frontend/js/modal_animations.js":
/*!*****************************************!*\
  !*** ./frontend/js/modal_animations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addModal(currentMain, html, badgeName) {
  var divModal = document.createElement('div');
  divModal.style.display = 'flex';
  divModal.classList.add('appear-animation', 'modal');
  divModal.innerHTML = html;
  currentMain.appendChild(divModal);
  var badgeDiv = divModal.querySelector('.badge-div');
  badgeDiv.classList.add('spinning-animation');
  var badge = divModal.querySelector('.badge');
  badge.src = "/images/profile_images/".concat(badgeName, "_badge.png");
  badge.classList.add('scaleUp-animation');
  setTimeout(function () {
    badgeDiv.classList.remove('spinning-animation');
    var badgeTitle = divModal.querySelector('h1');
    badgeTitle.classList.add('resizing-big-animation');
  }, 2000);
  var saveBadgeButton = divModal.querySelector('.save-badge-button');
  saveBadgeButton.addEventListener('click', function () {
    badge.classList.add('centralizing-badge', 'shake-animation', 'to-profile-animation');
    setTimeout(function () {
      window.location.href = "/addBadge/".concat(badgeName);
    }, 1000);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addModal);

/***/ }),

/***/ "./frontend/js/popups.js":
/*!*******************************!*\
  !*** ./frontend/js/popups.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal_animations */ "./frontend/js/modal_animations.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var images = document.querySelectorAll('img');
var currentMain = document.querySelector('main');
if (currentMain.classList.contains('galaxies-main') || currentMain.classList.contains('profile-main')) {
  // Fetch para a requisição dos popups
  document.addEventListener('click', function (e) {
    var element = e.target;
    if (element.tagName.toLowerCase() === "img" && element.classList.contains('celestial-body-img')) {
      var _iterator = _createForOfIteratorHelper(images),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var image = _step.value;
          if (element.id === image.id) {
            fetch("/popup/".concat(element.id)).then(function (res) {
              if (!res.ok) {
                throw new Error('Erro na requisição do popup.');
              } else {
                fetch('/loggedIn').then(function (res) {
                  return res.json();
                }).then(function (bool) {
                  if (bool) {
                    fetch('/getVisitedBodies').then(function (res) {
                      return res.json();
                    }).then(function (visitedBodies) {
                      if (visitedBodies.length === 12) {
                        setTimeout(function () {
                          fetch('/getModal').then(function (data) {
                            return data.text();
                          }).then(function (html) {
                            (0,_modal_animations__WEBPACK_IMPORTED_MODULE_0__["default"])(currentMain, html, 'galactic_explorer');
                          })["catch"](function () {});
                        }, 1000);
                      }
                    });
                  }
                });
                res.text().then(function (html) {
                  getPopup(html, currentMain, element.id);
                });
              }
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
}

// Função para adição do conteúdo obtido na página
function getPopup(html, currentMain, celestialBody) {
  var divPopup = document.createElement('div');
  divPopup.style.display = 'flex';
  divPopup.classList.add('appear-animation', 'popup');
  divPopup.innerHTML = html;
  if (currentMain.classList.contains('profile-main')) {
    divPopup.querySelector('.popup-content').style.backgroundColor = '#040216';
  }
  currentMain.appendChild(divPopup);
  var closeIcon = divPopup.querySelector('.close-icon');
  closeIcon.addEventListener('click', function () {
    divPopup.classList.add('disappear-animation');
    setTimeout(function () {
      currentMain.removeChild(divPopup);
    }, 500);
  });
  var ideaIcon = document.querySelector('.idea-icon');
  ideaIcon.addEventListener('click', function () {
    window.location.href = '/ideaForm';
  });
  var starIcon = document.querySelector('.star-icon');
  var selectedStarIcon = document.querySelector('.selected-star-icon');
  fetch('/loggedIn').then(function (res) {
    return res.json();
  }).then(function (bool) {
    if (bool) {
      fetch('/getFavBody').then(function (res) {
        return res.json();
      }).then(function (favBody) {
        if (favBody === celestialBody) {
          starIcon.style.display = 'none';
          selectedStarIcon.style.display = 'block';
        } else {
          starIcon.style.display = 'block';
          selectedStarIcon.style.display = 'none';
          starIcon.addEventListener('click', function () {
            window.location.href = "/favBody/".concat(celestialBody);
          });
        }
      });
    } else {
      starIcon.style.display = 'block';
      selectedStarIcon.style.display = 'none';
      starIcon.addEventListener('click', function () {
        window.location.href = '/account';
      });
    }
  });
}

/***/ }),

/***/ "./frontend/js/profile_animations.js":
/*!*******************************************!*\
  !*** ./frontend/js/profile_animations.js ***!
  \*******************************************/
/***/ (() => {

// ---------- HTML ELEMENTS ----------

var mainProfile = document.querySelector('.profile-main');
var mainEditProfile = document.querySelector('.edit-profile-main');
var profileNav = document.querySelector('.profile-nav');
var rightArrowIcon = document.querySelector('.right-arrow-icon');
var leftArrowIcon = document.querySelector('.left-arrow-icon');
var editImageIcon = document.querySelector('.edit-img-icon');
var pencilIcon = document.querySelector('.pencil-icon');
var profileImgPopup = document.querySelector('.profile-img-popup');
var profileImgCloseIcon = document.querySelector('.profile-img-close-icon');
var saveImgButton = document.querySelector('.save-img-btn');
var removeAccountBtn = document.querySelector('.remove-account-btn');
var deleteAccountPopup = document.querySelector('.delete-account-popup');
var backBtn = document.querySelector('.back-btn');
var continueBtn = document.querySelector('.continue-btn');
var shootingStar = document.querySelector('.shooting-star');

// ---------- NAV ANIMATION ----------

if (rightArrowIcon) {
  rightArrowIcon.addEventListener('click', function () {
    var profileNavDisplay = window.getComputedStyle(profileNav).display;
    if (profileNavDisplay === 'none') {
      profileNav.classList.remove('to-left-animation');
      profileNav.style.display = 'flex';
      profileNav.classList.add('to-right-animation');
      rightArrowIcon.style.display = 'none';
      leftArrowIcon.style.display = 'inline';
      leftArrowIcon.addEventListener('click', function () {
        profileNav.classList.remove('to-right-animation');
        profileNav.classList.add('to-left-animation');
        setTimeout(function () {
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
  profileImgCloseIcon.addEventListener('click', function () {
    if (window.getComputedStyle(profileImgPopup).display === 'flex') {
      profileImgPopup.classList.add('disappear-animation');
      setTimeout(function () {
        profileImgPopup.style.display = 'none';
        profileImgPopup.classList.remove('disappear-animation');
      }, 500);
    }
  });
  editImageIcon.addEventListener('click', function () {
    if (window.getComputedStyle(profileImgPopup).display === 'none') {
      profileImgPopup.classList.add('fast-appear-animation');
      profileImgPopup.style.display = 'flex';
      setTimeout(function () {
        profileImgPopup.classList.remove('fast-appear-animation');
      }, 500);
    }
  });
  var iconImages = profileImgPopup.querySelectorAll('img');
  if (iconImages) {
    iconImages.forEach(function (element) {
      if (element !== profileImgCloseIcon) {
        element.addEventListener('click', function () {
          iconImages.forEach(function (img) {
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
    saveImgButton.addEventListener('click', function () {
      window.location.href = "/profileImg/".concat(sessionStorage.getItem('profileImg'));
    });
  }
  pencilIcon.addEventListener('click', function () {
    window.location.href = "/account/profile/editProfile";
  });

  // ---------- SHOOTING STAR ANIMATION ----------

  var styleSheet = document.createElement('style');
  if (shootingStar) {
    document.head.appendChild(styleSheet);
    setInterval(function () {
      var starHeight = Math.random() * window.innerHeight / 2;
      styleSheet.innerHTML = "@keyframes shooting-star{\n                                    from{\n                                        right: -200px;\n                                        top: ".concat(starHeight, "px;\n                                    }\n                                    to{\n                                        right: 100vw;\n                                        top: ").concat(starHeight + window.innerHeight / 2, "px;\n                                    }\n                                }");
      shootingStar.style.animation = 'shooting-star 1s linear 0s 1 normal both';
      shootingStar.style.display = 'inline';
      setTimeout(function () {
        shootingStar.style.display = 'none';
        shootingStar.style.animation = '';
      }, 1499);
    }, 3500);
  } else {
    document.removeChild(styleSheet);
  }
}
if (mainEditProfile) {
  // ---------- REMOVE ACCOUNT ANIMATIONS ----------

  removeAccountBtn.addEventListener('click', function () {
    deleteAccountPopup.classList.add('fast-appear-animation');
    deleteAccountPopup.style.display = 'flex';
    setTimeout(function () {
      deleteAccountPopup.classList.remove('fast-appear-animation');
    }, 500);
  });
  backBtn.addEventListener('click', function () {
    deleteAccountPopup.classList.add('disappear-animation');
    setTimeout(function () {
      deleteAccountPopup.style.display = 'none';
      deleteAccountPopup.classList.remove('disappear-animation');
    }, 500);
  });
  continueBtn.addEventListener('click', function () {
    window.location.href = '/deleteAccount';
  });
}

/***/ }),

/***/ "./frontend/js/style_imports.js":
/*!**************************************!*\
  !*** ./frontend/js/style_imports.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_account_profile_tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/account/profile/tailwind.css */ "./frontend/css/account/profile/tailwind.css");
/* harmony import */ var _css_general_window_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/general/window.css */ "./frontend/css/general/window.css");
/* harmony import */ var _css_general_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/general/footer.css */ "./frontend/css/general/footer.css");
/* harmony import */ var _css_general_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/general/header.css */ "./frontend/css/general/header.css");
/* harmony import */ var _css_general_fonts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/general/fonts.css */ "./frontend/css/general/fonts.css");
/* harmony import */ var _css_general_ideaform_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/general/ideaform.css */ "./frontend/css/general/ideaform.css");
/* harmony import */ var _css_general_error404_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/general/error404.css */ "./frontend/css/general/error404.css");
/* harmony import */ var _css_general_fluid_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/general/fluid_header.css */ "./frontend/css/general/fluid_header.css");
/* harmony import */ var _css_general_playlist_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/general/playlist.css */ "./frontend/css/general/playlist.css");
/* harmony import */ var _css_general_animation_classes_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/general/animation_classes.css */ "./frontend/css/general/animation_classes.css");
/* harmony import */ var _css_general_general_keyframes_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/general/general_keyframes.css */ "./frontend/css/general/general_keyframes.css");
/* harmony import */ var _css_general_aboutme_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/general/aboutme.css */ "./frontend/css/general/aboutme.css");
/* harmony import */ var _css_index_general_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/index/general_index.css */ "./frontend/css/index/general_index.css");
/* harmony import */ var _css_index_index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/index/index.css */ "./frontend/css/index/index.css");
/* harmony import */ var _css_galaxies_general_galaxies_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/galaxies/general_galaxies.css */ "./frontend/css/galaxies/general_galaxies.css");
/* harmony import */ var _css_galaxies_main_galaxies_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/galaxies/main_galaxies.css */ "./frontend/css/galaxies/main_galaxies.css");
/* harmony import */ var _css_popups_popups_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/popups/popups.css */ "./frontend/css/popups/popups.css");
/* harmony import */ var _css_account_account_page_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/account/account_page.css */ "./frontend/css/account/account_page.css");
/* harmony import */ var _css_account_login_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/account/login.css */ "./frontend/css/account/login.css");
/* harmony import */ var _css_account_register_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../css/account/register.css */ "./frontend/css/account/register.css");
/* harmony import */ var _css_account_password_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../css/account/password.css */ "./frontend/css/account/password.css");
/* harmony import */ var _css_account_change_password_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../css/account/change_password.css */ "./frontend/css/account/change_password.css");
/* harmony import */ var _css_badge_modal_badge_modal_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../css/badge_modal/badge_modal.css */ "./frontend/css/badge_modal/badge_modal.css");
/* harmony import */ var _css_badge_modal_badge_modal_keyframes_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../css/badge_modal/badge_modal_keyframes.css */ "./frontend/css/badge_modal/badge_modal_keyframes.css");
/* harmony import */ var _css_media_queries_index_media_queries_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../css/media_queries/index_media_queries.css */ "./frontend/css/media_queries/index_media_queries.css");
/* harmony import */ var _css_media_queries_header_media_queries_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../css/media_queries/header_media_queries.css */ "./frontend/css/media_queries/header_media_queries.css");
/* harmony import */ var _css_media_queries_footer_media_queries_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../css/media_queries/footer_media_queries.css */ "./frontend/css/media_queries/footer_media_queries.css");
/* harmony import */ var _css_media_queries_galaxies_media_queries_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../css/media_queries/galaxies_media_queries.css */ "./frontend/css/media_queries/galaxies_media_queries.css");
/* harmony import */ var _css_media_queries_popup_media_queries_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../css/media_queries/popup_media_queries.css */ "./frontend/css/media_queries/popup_media_queries.css");
/* harmony import */ var _css_media_queries_error404_media_queries_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../css/media_queries/error404_media_queries.css */ "./frontend/css/media_queries/error404_media_queries.css");
/* harmony import */ var _css_media_queries_ideaform_media_queries_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../css/media_queries/ideaform_media_queries.css */ "./frontend/css/media_queries/ideaform_media_queries.css");
/* harmony import */ var _css_media_queries_playlist_media_queries_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../css/media_queries/playlist_media_queries.css */ "./frontend/css/media_queries/playlist_media_queries.css");
/* harmony import */ var _css_media_queries_aboutme_media_queries_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../css/media_queries/aboutme_media_queries.css */ "./frontend/css/media_queries/aboutme_media_queries.css");
/* harmony import */ var _css_media_queries_account_page_media_queries_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../css/media_queries/account_page_media_queries.css */ "./frontend/css/media_queries/account_page_media_queries.css");
/* harmony import */ var _css_media_queries_login_media_queries_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../css/media_queries/login_media_queries.css */ "./frontend/css/media_queries/login_media_queries.css");
/* harmony import */ var _css_media_queries_register_media_queries_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../css/media_queries/register_media_queries.css */ "./frontend/css/media_queries/register_media_queries.css");
/* harmony import */ var _css_media_queries_password_media_queries_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../css/media_queries/password_media_queries.css */ "./frontend/css/media_queries/password_media_queries.css");
/* harmony import */ var _css_media_queries_change_password_media_queries_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../css/media_queries/change_password_media_queries.css */ "./frontend/css/media_queries/change_password_media_queries.css");
// TAILWIND


// GENERAL STYLES












// INDEX STYLES



// GALAXIES STYLES



// POPUPS STYLES


// ACCOUNT STYLES






//MODAL STYLES



// MEDIA QUERIES















/***/ }),

/***/ "./frontend/js/window_animations.js":
/*!******************************************!*\
  !*** ./frontend/js/window_animations.js ***!
  \******************************************/
/***/ (() => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// ---------- HTML ELEMENTS ----------

var headerSection = document.querySelector("header");
var introductionSection = document.querySelector(".intro-section");
var galaxiesMain = document.querySelector('.galaxies-main');
var soundOn = document.querySelector(".sound-on");
var soundOff = document.querySelector(".sound-off");
var playlistMusics = document.querySelectorAll('.musics');
var fluidHeader = document.querySelector('.fluid-header');
var profileImgPopup = document.querySelector('.profile-img-popup');
var resendEmailBtn = document.querySelector('.resend-email');
var timerSpan = document.querySelector('.timer');
var profileMain = document.querySelector('.profile-main');
var editProfileMain = document.querySelector('.edit-profile-main');

// ---------- EVENTOS PARA MUDAR A COR DO SCROLLBAR ----------

if (introductionSection && headerSection) {
  var introVh = introductionSection.getBoundingClientRect().height;
  var headerVh = headerSection.getBoundingClientRect().height;
  document.addEventListener("scroll", function () {
    var verticalScroll = window.scrollY;
    if (verticalScroll >= introVh - headerVh) {
      document.body.classList.add('change-scrollbar');
    } else if (verticalScroll < introVh - headerVh) {
      document.body.classList.remove('change-scrollbar');
    }
  });
} else if (galaxiesMain || editProfileMain || profileMain) {
  document.body.classList.add('change-scrollbar');
}

// ---------- EVENTOS PARA OBTER E ALTERAR ESTADO DO ÁUDIO ----------

window.addEventListener('beforeunload', function () {
  var currentAudio = sessionStorage.getItem('currentAudio');
  if (currentAudio) {
    var audio = getMusic(currentAudio);
    sessionStorage.setItem('audioTime', audio.currentTime);
    sessionStorage.setItem('audioStatus', audio.paused);
  }
});
window.addEventListener('load', function () {
  var currentAudio = sessionStorage.getItem('currentAudio');
  if (currentAudio) {
    var soundWaveIcon = document.getElementById(currentAudio).querySelector('.sound-wave-icon');
    var audio = getMusic(currentAudio);
    var audioStatus = sessionStorage.getItem('audioStatus');
    if (audioStatus === 'false') {
      var audioTime = sessionStorage.getItem('audioTime');
      audio.currentTime = audioTime;
      audio.play();
      soundOn.style.display = 'block';
      soundOff.style.display = 'none';
      soundWaveIcon.style.display = 'block';
    } else {
      soundOn.style.display = 'none';
      soundOff.style.display = 'block';
      soundWaveIcon.style.display = 'none';
    }
  }
});
function getMusic(id) {
  var _iterator = _createForOfIteratorHelper(playlistMusics),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var music = _step.value;
      if (music.classList.contains(id)) {
        return music;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// ---------- EVENTO PARA EXCLUSÃO DA MENSAGEM DE SUCESSO ----------

window.addEventListener('load', function () {
  var ideaformMain = document.querySelector('.ideaform-main');
  var successPopup = document.querySelector('.success-popup');
  if (successPopup) {
    setTimeout(function () {
      successPopup.classList.add('disappear-animation');
      setTimeout(function () {
        ideaformMain.removeChild(successPopup);
      }, 500);
    }, 3000);
  }
});

// ---------- EVENTO PARA FECHAMENTO DO CABECALHO FLUIDO AO AUMENTAR A TELA ----------

window.addEventListener('resize', function () {
  if (window.innerWidth >= 992) {
    if (fluidHeader) {
      fluidHeader.style.display = 'none';
    }
  }
  if (window.innerWidth <= 992) {
    if (profileImgPopup) {
      profileImgPopup.style.display = 'none';
    }
  }
});

// ---------- EVENTO PARA DESABILITAR O BOTÃO DE REENVIAR EMAIL ----------

window.addEventListener('load', function () {
  if (sessionStorage.getItem('emailSent') === 'true' && resendEmailBtn) {
    resendEmailBtn.disabled = true;
    timerSpan.style.display = 'flex';
    timerSpan.classList.add('disabled-btn');
    var s = 15;
    var counter = setInterval(function () {
      timerSpan.innerHTML = "".concat(s);
      s--;
    }, 1000);
    setTimeout(function () {
      clearInterval(counter);
      resendEmailBtn.disabled = false;
      timerSpan.innerHTML = '';
      timerSpan.style.display = 'none';
      timerSpan.classList.remove('disabled-btn');
      sessionStorage.setItem('emailSent', 'false');
    }, 15000);
  }
});

/***/ }),

/***/ "./frontend/css/account/account_page.css":
/*!***********************************************!*\
  !*** ./frontend/css/account/account_page.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/account/change_password.css":
/*!**************************************************!*\
  !*** ./frontend/css/account/change_password.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/account/login.css":
/*!****************************************!*\
  !*** ./frontend/css/account/login.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/account/password.css":
/*!*******************************************!*\
  !*** ./frontend/css/account/password.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/account/profile/tailwind.css":
/*!***************************************************!*\
  !*** ./frontend/css/account/profile/tailwind.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/account/register.css":
/*!*******************************************!*\
  !*** ./frontend/css/account/register.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/badge_modal/badge_modal.css":
/*!**************************************************!*\
  !*** ./frontend/css/badge_modal/badge_modal.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/badge_modal/badge_modal_keyframes.css":
/*!************************************************************!*\
  !*** ./frontend/css/badge_modal/badge_modal_keyframes.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/galaxies/general_galaxies.css":
/*!****************************************************!*\
  !*** ./frontend/css/galaxies/general_galaxies.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/galaxies/main_galaxies.css":
/*!*************************************************!*\
  !*** ./frontend/css/galaxies/main_galaxies.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/aboutme.css":
/*!******************************************!*\
  !*** ./frontend/css/general/aboutme.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/animation_classes.css":
/*!****************************************************!*\
  !*** ./frontend/css/general/animation_classes.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/error404.css":
/*!*******************************************!*\
  !*** ./frontend/css/general/error404.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/fluid_header.css":
/*!***********************************************!*\
  !*** ./frontend/css/general/fluid_header.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/fonts.css":
/*!****************************************!*\
  !*** ./frontend/css/general/fonts.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/footer.css":
/*!*****************************************!*\
  !*** ./frontend/css/general/footer.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/general_keyframes.css":
/*!****************************************************!*\
  !*** ./frontend/css/general/general_keyframes.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/header.css":
/*!*****************************************!*\
  !*** ./frontend/css/general/header.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/ideaform.css":
/*!*******************************************!*\
  !*** ./frontend/css/general/ideaform.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/playlist.css":
/*!*******************************************!*\
  !*** ./frontend/css/general/playlist.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/general/window.css":
/*!*****************************************!*\
  !*** ./frontend/css/general/window.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/index/general_index.css":
/*!**********************************************!*\
  !*** ./frontend/css/index/general_index.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/index/index.css":
/*!**************************************!*\
  !*** ./frontend/css/index/index.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/aboutme_media_queries.css":
/*!**************************************************************!*\
  !*** ./frontend/css/media_queries/aboutme_media_queries.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/account_page_media_queries.css":
/*!*******************************************************************!*\
  !*** ./frontend/css/media_queries/account_page_media_queries.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/change_password_media_queries.css":
/*!**********************************************************************!*\
  !*** ./frontend/css/media_queries/change_password_media_queries.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/error404_media_queries.css":
/*!***************************************************************!*\
  !*** ./frontend/css/media_queries/error404_media_queries.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/footer_media_queries.css":
/*!*************************************************************!*\
  !*** ./frontend/css/media_queries/footer_media_queries.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/galaxies_media_queries.css":
/*!***************************************************************!*\
  !*** ./frontend/css/media_queries/galaxies_media_queries.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/header_media_queries.css":
/*!*************************************************************!*\
  !*** ./frontend/css/media_queries/header_media_queries.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/ideaform_media_queries.css":
/*!***************************************************************!*\
  !*** ./frontend/css/media_queries/ideaform_media_queries.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/index_media_queries.css":
/*!************************************************************!*\
  !*** ./frontend/css/media_queries/index_media_queries.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/login_media_queries.css":
/*!************************************************************!*\
  !*** ./frontend/css/media_queries/login_media_queries.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/password_media_queries.css":
/*!***************************************************************!*\
  !*** ./frontend/css/media_queries/password_media_queries.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/playlist_media_queries.css":
/*!***************************************************************!*\
  !*** ./frontend/css/media_queries/playlist_media_queries.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/popup_media_queries.css":
/*!************************************************************!*\
  !*** ./frontend/css/media_queries/popup_media_queries.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/media_queries/register_media_queries.css":
/*!***************************************************************!*\
  !*** ./frontend/css/media_queries/register_media_queries.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/css/popups/popups.css":
/*!****************************************!*\
  !*** ./frontend/css/popups/popups.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./frontend/js/index_animations.js");
/******/ 	__webpack_require__("./frontend/js/header_animations.js");
/******/ 	__webpack_require__("./frontend/js/general_animations.js");
/******/ 	__webpack_require__("./frontend/js/popups.js");
/******/ 	__webpack_require__("./frontend/js/window_animations.js");
/******/ 	__webpack_require__("./frontend/js/footer_animations.js");
/******/ 	__webpack_require__("./frontend/js/forms_animations.js");
/******/ 	__webpack_require__("./frontend/js/profile_animations.js");
/******/ 	__webpack_require__("./frontend/js/edit_profile_animations.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./frontend/js/modal_animations.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/js/style_imports.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map