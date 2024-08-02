/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/frontend/css/galaxies/general_galaxies.css":
/*!*********************************************************!*\
  !*** ./docs/frontend/css/galaxies/general_galaxies.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/galaxies/main_galaxies.css":
/*!******************************************************!*\
  !*** ./docs/frontend/css/galaxies/main_galaxies.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/general/fonts.css":
/*!*********************************************!*\
  !*** ./docs/frontend/css/general/fonts.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/general/footer.css":
/*!**********************************************!*\
  !*** ./docs/frontend/css/general/footer.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/general/header.css":
/*!**********************************************!*\
  !*** ./docs/frontend/css/general/header.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/general/window.css":
/*!**********************************************!*\
  !*** ./docs/frontend/css/general/window.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/index/general_index.css":
/*!***************************************************!*\
  !*** ./docs/frontend/css/index/general_index.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/index/main_index.css":
/*!************************************************!*\
  !*** ./docs/frontend/css/index/main_index.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/popups/desktop_popups.css":
/*!*****************************************************!*\
  !*** ./docs/frontend/css/popups/desktop_popups.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/popups/footer_popups.css":
/*!****************************************************!*\
  !*** ./docs/frontend/css/popups/footer_popups.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./docs/frontend/css/popups/idea_popup.css":
/*!*************************************************!*\
  !*** ./docs/frontend/css/popups/idea_popup.css ***!
  \*************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************************************!*\
  !*** ./docs/frontend/js/index_animations.js ***!
  \**********************************************/
// ---------- HTML ELEMENTS ----------

var milkywayBtn = document.querySelector('#milkyway-btn');
var andromedaBtn = document.querySelector('#andromeda-btn');
var triangleBtn = document.querySelector('#triangle-btn');
var milkywayRocket = document.querySelector('#milkyway-rocket');
var andromedaRocket = document.querySelector('#andromeda-rocket');
var triangleRocket = document.querySelector('#triangle-rocket');

// ---------- NAVEGATION ----------

if (milkywayBtn) {
  milkywayBtn.addEventListener('click', function () {
    window.location.href = 'milkyway';
  });
}
if (andromedaBtn) {
  andromedaBtn.addEventListener('click', function () {
    window.location.href = 'andromeda';
  });
}
if (triangleBtn) {
  triangleBtn.addEventListener('click', function () {
    window.location.href = 'triangle';
  });
}

// ---------- ROCKET ANIMATION ----------

document.addEventListener('mouseover', function (e) {
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
document.addEventListener('mouseout', function (e) {
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

var startingBtn = document.querySelector('.intro-btn');
var milkywaySection = document.querySelector('.milkyway-section');
var introSection = document.querySelector('.intro-section');
if (startingBtn) {
  startingBtn.addEventListener('click', function () {
    if (introSection.classList.contains('appear-animation')) {
      introSection.classList.remove('appear-animation');
    }
    introSection.classList.add('squish-animation');
    setTimeout(function () {
      introSection.classList.remove('squish-animation');
      milkywaySection.scrollIntoView({
        behavior: "smooth"
      });
    }, 999);
  });
}
if (introSection) {
  window.addEventListener('load', function () {
    introSection.classList.add('appear-animation');
    setTimeout(function () {
      introSection.classList.remove('appear-animation');
      introSection.style.opacity = '1';
    }, 1000);
  });
}
var topBtn = document.querySelector('.top-btn');

// ---------- TOP BUTTON ----------

topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************************************!*\
  !*** ./docs/frontend/js/planets_popups.js ***!
  \********************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var images = document.querySelectorAll('img');
var galaxiesMain = document.querySelector('.galaxies-main');
var indexMain = document.querySelector('.index-main');
var footerLinks = ['aboutme', 'references', 'inspirations'];

// Fetch para a requisição dos popups
document.addEventListener('click', function (e) {
  var element = e.target;
  if (element.tagName.toLowerCase() === "img" && !element.classList.contains('close-icon') && !element.classList.contains('idea-icon')) {
    var _iterator = _createForOfIteratorHelper(images),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var image = _step.value;
        if (element.id === image.id) {
          fetch("http://localhost:8080/popup/".concat(element.id)).then(function (res) {
            if (!res.ok) {
              throw new Error('Erro na requisição do popup.');
            } else {
              res.text().then(function (html) {
                getPopup(html, galaxiesMain);
              });
            }
          });
        }
      }
      // Fetch para requisição dos popups do rodapé
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (footerLinks.includes(element.id)) {
    fetch("http://localhost:8080/popup/".concat(element.id)).then(function (res) {
      if (!res.ok) {
        throw new Error("Erro na requisi\xE7\xE3o do popup ".concat(element.id));
      } else {
        res.text().then(function (html) {
          if (indexMain) {
            console.log('passei aqui');
            getPopup(html, indexMain);
          } else if (galaxiesMain) {
            getPopup(html, galaxiesMain);
          }
        });
      }
    });
  }
});

// Função para a requisição do pupup de idéias
function openIdeaPopup(ideaIcon) {
  ideaIcon.addEventListener('click', function () {
    fetch("http://localhost:8080/popup/idea").then(function (res) {
      if (!res.ok) {
        throw new Error('Erro na requisição do popup de idéias.');
      } else {
        res.text().then(function (html) {
          if (indexMain) {
            getPopup(html, indexMain);
          } else if (galaxiesMain) {
            getPopup(html, galaxiesMain);
          }
        });
      }
    });
  });
}

// Função para adição do conteúdo obtido na página
function getPopup(_x, _x2) {
  return _getPopup.apply(this, arguments);
} // Função do botão de fechar o popup
function _getPopup() {
  _getPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(html, main) {
    var divPopup, ideaIcon;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          divPopup = document.createElement('div');
          divPopup.style.display = 'flex';
          divPopup.classList.add('appear-animation', 'popup');
          divPopup.innerHTML = html;
          main.appendChild(divPopup);
          closeAction(main, divPopup, divPopup.querySelector('.close-icon'));
          ideaIcon = document.querySelector('.idea-icon');
          if (ideaIcon) {
            openIdeaPopup(ideaIcon);
          }
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getPopup.apply(this, arguments);
}
function closeAction(main, divPopup, closeIcon) {
  closeIcon.addEventListener('click', function () {
    main.removeChild(divPopup);
  });
}
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************************!*\
  !*** ./docs/frontend/js/window_animations.js ***!
  \***********************************************/
var introductionSection = document.querySelector(".intro-section");
var headerSection = document.querySelector("header");
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
}
var galaxiesMainGridDiv = document.querySelector('.galaxies-main-grid-div');
if (galaxiesMainGridDiv) {
  document.body.classList.add('change-scrollbar');
}
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./docs/frontend/js/style_imports.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_general_window_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/general/window.css */ "./docs/frontend/css/general/window.css");
/* harmony import */ var _css_index_general_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index/general_index.css */ "./docs/frontend/css/index/general_index.css");
/* harmony import */ var _css_general_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/general/header.css */ "./docs/frontend/css/general/header.css");
/* harmony import */ var _css_index_main_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/index/main_index.css */ "./docs/frontend/css/index/main_index.css");
/* harmony import */ var _css_general_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/general/footer.css */ "./docs/frontend/css/general/footer.css");
/* harmony import */ var _css_popups_footer_popups_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/popups/footer_popups.css */ "./docs/frontend/css/popups/footer_popups.css");
/* harmony import */ var _css_general_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/general/fonts.css */ "./docs/frontend/css/general/fonts.css");
/* harmony import */ var _css_galaxies_general_galaxies_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/galaxies/general_galaxies.css */ "./docs/frontend/css/galaxies/general_galaxies.css");
/* harmony import */ var _css_galaxies_main_galaxies_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/galaxies/main_galaxies.css */ "./docs/frontend/css/galaxies/main_galaxies.css");
/* harmony import */ var _css_popups_desktop_popups_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/popups/desktop_popups.css */ "./docs/frontend/css/popups/desktop_popups.css");
/* harmony import */ var _css_popups_idea_popup_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/popups/idea_popup.css */ "./docs/frontend/css/popups/idea_popup.css");











})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map