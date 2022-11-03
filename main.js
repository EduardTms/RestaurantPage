/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sections/header.js":
/*!********************************!*\
  !*** ./src/sections/header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
    // -----Header-----
    const header = document.createElement("div");
    header.classList.add("header");

    // -----Logo/Name Container-----
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo");

    const odinPicture = document.createElement("img");
    odinPicture.src = "../src/assets/img/odin.png";
    odinPicture.setAttribute("id", "odinLogo");
    const restaurantName = document.createElement("p");
    restaurantName.setAttribute("id", "nameLogo");
    restaurantName.textContent = "Odin's Cooking";

    // -----Links Container-----
    const links = document.createElement("div");
    links.classList.add("links");

    const homeLink = document.createElement("a");
    homeLink.classList.add("home");
    homeLink.textContent = "Home";
    homeLink.setAttribute("href", "#");
    homeLink.classList.add("active");
    const menuLink = document.createElement("a");
    menuLink.classList.add('ourMenu');
    menuLink.setAttribute("href", "#");
    menuLink.textContent = "Menu";
    const contactLink = document.createElement("a");
    contactLink.classList.add('contact');
    contactLink.setAttribute("href", "#");
    contactLink.textContent = "Contact";

    logoContainer.append(odinPicture,restaurantName);
    links.append(homeLink,menuLink,contactLink);
    header.append(logoContainer,links);

    return header;
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/header */ "./src/sections/header.js");


const contentContainer = document.querySelector('.content');
contentContainer.append((0,_sections_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=main.js.map