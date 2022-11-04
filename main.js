/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-bg-color:  rgb(17,24,39);\n    --active-color: #f472b5f5;\n    --content-bg-color: #1f2937;\n}\n\n.content{\n    height: 100vh;\n    /* width: 100vw; */\n    background-color: var(--content-bg-color);\n}\n\n.header {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--header-bg-color);\n    color: white;\n    border-radius: 0.5rem;\n    border-bottom: 3px solid rgb(0, 0, 0, 0.3);\n}\n\n.links, .logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n}\n\n.links {\n    gap: 50px;\n    font-weight: 600;\n    font-size: 1.3rem;\n    margin-right: 100px;\n}\n\n.links > * {\n    border-bottom: 3px solid white;\n    color: white;\n    text-decoration: none;\n    letter-spacing: 3px;\n}\n\n.active {\n    color: white;\n    border-bottom: 3px solid var(--active-color)  ;\n}\n\n#odinLogo {\n    width: 50px;\n    margin-left: 100px;\n}\n\n#nameLogo {\n    width: 80px;\n    color: var(--active-color);\n    font-weight: 600;\n    font-size: 1.7rem;\n}\n\n.descriptionContainer {\n    display: flex;\n    width: 100%;\n    margin-top: 10%;\n    align-items: center;\n    justify-content: center;\n    color: white;\n}\n\n.descriptionImg {\n    width: 20%;\n    display: flex;\n    justify-content: center;\n}\n\n.descriptionImg > img {\n    width: 400px;\n}\n\n.descriptionText {\n    background-color: rgb(0, 0, 0, 0.3);\n    border-radius: 1rem;\n    padding: 30px;\n    margin-left: 30px;\n    letter-spacing: 2px;\n    font-size: 1.5rem;\n    width: 40%;\n}\n\n.meals {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    /* grid-template-rows: repeat(auto-fill, 300px); */\n    /* grid-template-columns: repeat(auto-fill, 400px); */\n    margin: 50px 0;\n    gap: 30px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .meal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 400px;\n    height: 400px;\n    padding: 10px;\n    color: white;\n    background-color: rgb(0, 0, 0, 0.3);\n    border-radius: 1rem;\n  }\n\n  .meal > * {\n    margin-bottom: 30px;\n  }\n\n  .meal > img {\n    width: 200px;\n  }\n\n  .mealName {\n    font-size: 1.7rem;\n    font-weight: 600;\n    color: #f472b5f5;\n  }\n\n  .mealIngredients {\n    color: #666e7a;\n    text-align: center;\n  }\n\n  .mealPrice {\n    color: green;\n    font-weight: 600;\n    letter-spacing: 2px;\n  }\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactDetails,\n  .contactMap {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .contactDetails > *,\n  .contactMap {\n    background-color: rgb(0, 0, 0, 0.3);\n    border-radius: 1rem;\n  }\n\n  .contactDetails {\n    margin-bottom: 30px;\n    margin-top: 30px;\n  }\n\n  .contactLogo,\n  .contactAddress {\n    /* margin-right: 30px; */\n    padding: 20px;\n  }\n\n  .contactAddress {\n    font-size: 1.5rem;\n    letter-spacing: 2px;\n    color: white;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n  }\n\n  .contactLogo > img {\n    height: 200px;\n  }\n\n  .contactMap {\n    position: relative;\n    text-align: right;\n    height: 400px;\n    width: 600px;\n    padding: 30px;\n  }\n\n.footer {\n    position:absolute;\n    bottom:0;\n    padding: 10px;\n    color: var(--active-color);\n    border-radius: 0.5em;\n    display: flex;\n    width: 90%;\n    justify-content: center;\n}\n\n.footer > .footerText > a {\n    text-decoration: none;\n    color: var(--active-color);\n}\n\n@media only screen and (max-width: 1000px) {\n    .content {\n        height: 100%;\n        width: 100%;\n    }\n\n    .descriptionContainer {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .footer {\n        position: inherit;\n        visibility: hidden;\n    }\n\n    .links, #nameLogo, #odinLogo {\n      margin: 0;\n      gap: 20px;\n  }\n  }\n\n  @media only screen and (max-width: 600px) {\n    .content {\n      height: 100%;\n    }\n    \n    .links, #nameLogo, #odinLogo {\n        font-size: 0.8rem;\n        margin: 0;\n        gap: 20px;\n    }\n\n    #odinLogo {\n        width: 30px;\n    }\n\n    .descriptionText {\n        width: 60%;\n    }\n\n    .descriptionImg > img{\n        width: 300px;\n    }\n\n    .footer {\n      visibility: hidden;\n    }\n  }\n\n  @media only screen and (max-width: 420px) {\n    .content {\n      height: 100%;\n    }\n\n    .links, #odinLogo {\n        font-size: 0.8rem;\n        margin: 0;\n        gap: 20px;\n    }\n\n    #odinLogo {\n        width: 30px;\n    }\n\n    .descriptionText {\n        width: 60%;\n    }\n\n    .descriptionImg > img{\n        width: 300px;\n    }\n\n    .contactMap{\n      width: 200px;\n      height: 200px;\n      margin-top: 30px;\n    }\n\n    .content {\n      height: 100%;\n    }\n\n    .footer {\n      visibility: hidden;\n    }\n  }\n\n  @media only screen and (max-width: 390px) {\n    .content {\n      height: 100%;\n    }\n\n    .links, #odinLogo {\n        font-size: 0.8rem;\n        margin: 0;\n        gap: 20px;\n    }\n\n    #odinLogo {\n        width: 30px;\n    }\n\n    .descriptionText {\n        width: 60%;\n    }\n\n    .descriptionImg > img{\n        width: 300px;\n    }\n\n    .contactMap{\n      width: 200px;\n      height: 200px;\n      margin-top: 30px;\n    }\n\n    .content {\n      height: 100%;\n    }\n\n    .footer {\n      visibility: hidden;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header-bg-color:  rgb(17,24,39);\n    --active-color: #f472b5f5;\n    --content-bg-color: #1f2937;\n}\n\n.content{\n    height: 100vh;\n    /* width: 100vw; */\n    background-color: var(--content-bg-color);\n}\n\n.header {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--header-bg-color);\n    color: white;\n    border-radius: 0.5rem;\n    border-bottom: 3px solid rgb(0, 0, 0, 0.3);\n}\n\n.links, .logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n}\n\n.links {\n    gap: 50px;\n    font-weight: 600;\n    font-size: 1.3rem;\n    margin-right: 100px;\n}\n\n.links > * {\n    border-bottom: 3px solid white;\n    color: white;\n    text-decoration: none;\n    letter-spacing: 3px;\n}\n\n.active {\n    color: white;\n    border-bottom: 3px solid var(--active-color)  ;\n}\n\n#odinLogo {\n    width: 50px;\n    margin-left: 100px;\n}\n\n#nameLogo {\n    width: 80px;\n    color: var(--active-color);\n    font-weight: 600;\n    font-size: 1.7rem;\n}\n\n.descriptionContainer {\n    display: flex;\n    width: 100%;\n    margin-top: 10%;\n    align-items: center;\n    justify-content: center;\n    color: white;\n}\n\n.descriptionImg {\n    width: 20%;\n    display: flex;\n    justify-content: center;\n}\n\n.descriptionImg > img {\n    width: 400px;\n}\n\n.descriptionText {\n    background-color: rgb(0, 0, 0, 0.3);\n    border-radius: 1rem;\n    padding: 30px;\n    margin-left: 30px;\n    letter-spacing: 2px;\n    font-size: 1.5rem;\n    width: 40%;\n}\n\n.meals {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    /* grid-template-rows: repeat(auto-fill, 300px); */\n    /* grid-template-columns: repeat(auto-fill, 400px); */\n    margin: 50px 0;\n    gap: 30px;\n    width: 100%;\n    height: 100%;\n  }\n\n  .meal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 400px;\n    height: 400px;\n    padding: 10px;\n    color: white;\n    background-color: rgb(0, 0, 0, 0.3);\n    border-radius: 1rem;\n  }\n\n  .meal > * {\n    margin-bottom: 30px;\n  }\n\n  .meal > img {\n    width: 200px;\n  }\n\n  .mealName {\n    font-size: 1.7rem;\n    font-weight: 600;\n    color: #f472b5f5;\n  }\n\n  .mealIngredients {\n    color: #666e7a;\n    text-align: center;\n  }\n\n  .mealPrice {\n    color: green;\n    font-weight: 600;\n    letter-spacing: 2px;\n  }\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactDetails,\n  .contactMap {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .contactDetails > *,\n  .contactMap {\n    background-color: rgb(0, 0, 0, 0.3);\n    border-radius: 1rem;\n  }\n\n  .contactDetails {\n    margin-bottom: 30px;\n    margin-top: 30px;\n  }\n\n  .contactLogo,\n  .contactAddress {\n    /* margin-right: 30px; */\n    padding: 20px;\n  }\n\n  .contactAddress {\n    font-size: 1.5rem;\n    letter-spacing: 2px;\n    color: white;\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n  }\n\n  .contactLogo > img {\n    height: 200px;\n  }\n\n  .contactMap {\n    position: relative;\n    text-align: right;\n    height: 400px;\n    width: 600px;\n    padding: 30px;\n  }\n\n.footer {\n    position:absolute;\n    bottom:0;\n    padding: 10px;\n    color: var(--active-color);\n    border-radius: 0.5em;\n    display: flex;\n    width: 90%;\n    justify-content: center;\n}\n\n.footer > .footerText > a {\n    text-decoration: none;\n    color: var(--active-color);\n}\n\n@media only screen and (max-width: 1000px) {\n    .content {\n        height: 100%;\n        width: 100%;\n    }\n\n    .descriptionContainer {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .footer {\n        position: inherit;\n        visibility: hidden;\n    }\n\n    .links, #nameLogo, #odinLogo {\n      margin: 0;\n      gap: 20px;\n  }\n  }\n\n  @media only screen and (max-width: 600px) {\n    .content {\n      height: 100%;\n    }\n    \n    .links, #nameLogo, #odinLogo {\n        font-size: 0.8rem;\n        margin: 0;\n        gap: 20px;\n    }\n\n    #odinLogo {\n        width: 30px;\n    }\n\n    .descriptionText {\n        width: 60%;\n    }\n\n    .descriptionImg > img{\n        width: 300px;\n    }\n\n    .footer {\n      visibility: hidden;\n    }\n  }\n\n  @media only screen and (max-width: 420px) {\n    .content {\n      height: 100%;\n    }\n\n    .links, #odinLogo {\n        font-size: 0.8rem;\n        margin: 0;\n        gap: 20px;\n    }\n\n    #odinLogo {\n        width: 30px;\n    }\n\n    .descriptionText {\n        width: 60%;\n    }\n\n    .descriptionImg > img{\n        width: 300px;\n    }\n\n    .contactMap{\n      width: 200px;\n      height: 200px;\n      margin-top: 30px;\n    }\n\n    .content {\n      height: 100%;\n    }\n\n    .footer {\n      visibility: hidden;\n    }\n  }\n\n  @media only screen and (max-width: 390px) {\n    .content {\n      height: 100%;\n    }\n\n    .links, #odinLogo {\n        font-size: 0.8rem;\n        margin: 0;\n        gap: 20px;\n    }\n\n    #odinLogo {\n        width: 30px;\n    }\n\n    .descriptionText {\n        width: 60%;\n    }\n\n    .descriptionImg > img{\n        width: 300px;\n    }\n\n    .contactMap{\n      width: 200px;\n      height: 200px;\n      margin-top: 30px;\n    }\n\n    .content {\n      height: 100%;\n    }\n\n    .footer {\n      visibility: hidden;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/mealCard.js":
/*!************************************!*\
  !*** ./src/components/mealCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMeal)
/* harmony export */ });
function createMeal(meal) {
    const card = document.createElement("div");
    card.classList.add("meal");

    const image = new Image();
    image.src = meal.img;
    image.setAttribute("alt", "Meal");

    const mealName = document.createElement("p");
    mealName.classList.add("mealName");
    mealName.textContent = meal.name;

    const mealIngredients = document.createElement("p");
    mealIngredients.classList.add("mealIngredients");
    meal.ingredients.forEach((ingredient,index) => {
        mealIngredients.textContent += ingredient;
        mealIngredients.textContent += 
        index != meal.ingredients.length -1 ? ", " : ".";
    });

    const mealPrice = document.createElement("p");
    mealPrice.classList.add("mealPrice");
    mealPrice.textContent = meal.price;

    card.append(image,mealName,mealIngredients,mealPrice);
    return card;
}

/***/ }),

/***/ "./src/data/meals.js":
/*!***************************!*\
  !*** ./src/data/meals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_img_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/img/burger.png */ "./src/assets/img/burger.png");
/* harmony import */ var _src_assets_img_burrito_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/img/burrito.png */ "./src/assets/img/burrito.png");
/* harmony import */ var _src_assets_img_chipsGuacamole_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/img/chipsGuacamole.png */ "./src/assets/img/chipsGuacamole.png");
/* harmony import */ var _src_assets_img_openTaco_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/assets/img/openTaco.png */ "./src/assets/img/openTaco.png");
/* harmony import */ var _src_assets_img_quesadilla_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/assets/img/quesadilla.png */ "./src/assets/img/quesadilla.png");
/* harmony import */ var _src_assets_img_salad_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/assets/img/salad.png */ "./src/assets/img/salad.png");
/* harmony import */ var _src_assets_img_tacos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/assets/img/tacos.png */ "./src/assets/img/tacos.png");
/* harmony import */ var _src_assets_img_pastries_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/assets/img/pastries.png */ "./src/assets/img/pastries.png");









const meals = [
    {
        img: _src_assets_img_burrito_png__WEBPACK_IMPORTED_MODULE_1__,
        name: "Burrito",
        ingredients: [
            "Beef",
            "White rice",
            "Corn",
            "Black beans",
            "Cabbage",
            "Tomato",
            "Onion",
            "Cheese",
            "Cilantro"
        ],
        price: "$13.00",
    },
    {
        img: _src_assets_img_tacos_png__WEBPACK_IMPORTED_MODULE_6__,
        name: "Tacos",
        ingredients: [
            "Beef",
            "Chili powder",
            "Onion powder",
            "Lettuce",
            "Tomato sauce",
            "Cheddar",
            "Salsa"
        ],
        price: "$10.50",
    },
    {
        img: _src_assets_img_quesadilla_png__WEBPACK_IMPORTED_MODULE_4__,
        name: "Quesadilla",
        ingredients: [
            "Mushrooms",
            "Avocado",
            "Lettuce",
            "Chicken",
            "Tomato",
            "Green Onion",
            "Cheddar",
            "Butter"
        ],
        price: "$15.50",
    },
    {
        img: _src_assets_img_salad_png__WEBPACK_IMPORTED_MODULE_5__,
        name: "Salad",
        ingredients: [
            "Chicken",
            "Avocado",
            "Lettuce",
            "Tomato",
            "Green Onion",
            "Salsa"
        ],
        price: "$15.50",
    },
    {
        img: _src_assets_img_openTaco_png__WEBPACK_IMPORTED_MODULE_3__,
        name: "Open Taco",
        ingredients: [
            "Chicken",
            "Paprika",
            "Oregano",
            "Garlic Powder",
            "Avocado",
            "Green Onion",
            "Lime",
            "Canola Oil"
        ],
        price: "$13.50",
    },
    {
        img: _src_assets_img_burger_png__WEBPACK_IMPORTED_MODULE_0__,
        name: "Beef Burger",
        ingredients: [
            "Lean Beef",
            "Egg",
            "Onion",
            "Garlic",
            "Mayo",
            "Ketchup",
            "Cheddar",
            "Lettuce"
        ],
        price: "$18.50",
    },
    {
        img: _src_assets_img_pastries_png__WEBPACK_IMPORTED_MODULE_7__,
        name: "Pastries",
        ingredients: [
            "Apples",
            "Raisins",
            "Egg",
            "Cinnamon",
            "Powdered Sugar",
            "Sugar",
        ],
        price: "$6.00",
    },
    {
        img: _src_assets_img_chipsGuacamole_png__WEBPACK_IMPORTED_MODULE_2__,
        name: "Guacamole Chips",
        ingredients: [
            "Avocado",
            "Red onion",
            "Jalapeno",
            "Cilantro",
            "Lime juice",
            "Tortilla chips",
        ],
        price: "$8.00",
    },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meals);

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _sections_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/header */ "./src/sections/header.js");
/* harmony import */ var _sections_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/home */ "./src/sections/home.js");



function loadPage() {
    let contentContainer = document.querySelector(".content");
    contentContainer.append((0,_sections_header__WEBPACK_IMPORTED_MODULE_0__["default"])(),(0,_sections_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    return contentContainer;
}

/***/ }),

/***/ "./src/sections/contact.js":
/*!*********************************!*\
  !*** ./src/sections/contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("contact");

    const details = document.createElement("div");
    details.classList.add("contactDetails");

    const contactLogo = document.createElement("div");
    contactLogo.classList.add("contactLogo");
    const logo = document.createElement("img");
    logo.src = "/src/assets/img/odin.png";
    contactLogo.append(logo);

    const address = document.createElement("div");
    address.classList.add("contactAddress");
    const add1 = document.createElement("p");
    add1.textContent = "Old Scandinavia";
    const add2 = document.createElement("p");
    add2.textContent = "Corner of the Sky in Valhalla";
    const add3 = document.createElement("p");
    add3.textContent = "Old Norse";
    address.append(add1,add2,add3);

    const map = document.createElement("div");
    map.classList.add("contactMap");
    const frame = document.createElement("iframe");
    frame.style.height = "400px";
    frame.style.width = "600px";
    frame.src = "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed";
    map.append(frame);

    details.append(contactLogo,address);
    parentContainer.append(details,map);

    return parentContainer;
}

/***/ }),

/***/ "./src/sections/footer.js":
/*!********************************!*\
  !*** ./src/sections/footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });

function createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    const footerText = document.createElement("div");
    footerText.classList.add("footerText");
    footerText.textContent = "Copyright © 2022 EduardTms";

    const gitIcon = document.createElement("a");
    gitIcon.setAttribute("href", "https://github.com/EduardTms");
    gitIcon.classList.add("fa");
    gitIcon.classList.add("fa-github");

    footerText.append(gitIcon);
    footerContainer.append(footerText);

    return footerContainer;
}

/***/ }),

/***/ "./src/sections/header.js":
/*!********************************!*\
  !*** ./src/sections/header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _src_assets_img_odin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/img/odin.png */ "./src/assets/img/odin.png");


function createHeader() {
    // -----Header-----
    const header = document.createElement("div");
    header.classList.add("header");

    // -----Logo/Name Container-----
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo");

    const odinPicture = document.createElement("img");
    odinPicture.src = _src_assets_img_odin_png__WEBPACK_IMPORTED_MODULE_0__;
    odinPicture.setAttribute("id", "odinLogo");
    const restaurantName = document.createElement("p");
    restaurantName.setAttribute("id", "nameLogo");
    restaurantName.textContent = "Odin's Cooking";

    // -----Links Container-----
    const links = document.createElement("div");
    links.classList.add("links");

    const homeLink = document.createElement("a");
    homeLink.classList.add("home");
    homeLink.classList.add("headerLink");
    homeLink.style.cursor = "pointer";
    homeLink.textContent = "Home";
    homeLink.classList.add("active");
    const menuLink = document.createElement("a");
    menuLink.classList.add('ourMenu');
    menuLink.classList.add("headerLink");
    menuLink.style.cursor = "pointer";
    menuLink.textContent = "Menu";
    const contactLink = document.createElement("a");
    contactLink.classList.add('contact');
    contactLink.classList.add("headerLink");
    contactLink.style.cursor = "pointer";
    contactLink.textContent = "Contact";

    logoContainer.append(odinPicture,restaurantName);
    links.append(homeLink,menuLink,contactLink);
    header.append(logoContainer,links);

    return header;
}

/***/ }),

/***/ "./src/sections/home.js":
/*!******************************!*\
  !*** ./src/sections/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDescription)
/* harmony export */ });
/* harmony import */ var _src_assets_img_descriptionImg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/img/descriptionImg.png */ "./src/assets/img/descriptionImg.png");


function createDescription() {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("descriptionContainer");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("descriptionImg");

    const descriptionImg = document.createElement("img");
    descriptionImg.src = _src_assets_img_descriptionImg_png__WEBPACK_IMPORTED_MODULE_0__;
    descriptionImg.alt = "OdinOnThrone";

    const textContainer = document.createElement("div");
    textContainer.classList.add("descriptionText");
    textContainer.textContent = `Odin's opened on Viking Age Alley in 9th century CE. Chef / Owner Odin
    began baking pies and selling them to restaurants and his neighbors
    out of a small kitchen at the corner of the Sky in Valhalla. Today,
    Valhalla's beloved restaurant and pie shop celebrates ~ years of
    classic, made from scratch Divine cooking.`;

    imgContainer.append(descriptionImg);
    parentContainer.append(imgContainer,textContainer);

    return parentContainer;
}

/***/ }),

/***/ "./src/sections/menu.js":
/*!******************************!*\
  !*** ./src/sections/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _components_mealCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/mealCard.js */ "./src/components/mealCard.js");
/* harmony import */ var _data_meals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/meals.js */ "./src/data/meals.js");



function createMenu() {
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("meals");

    _data_meals_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((meal) => {
        const card = (0,_components_mealCard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meal);
        parentContainer.append(card);
    });

    return parentContainer;
}

/***/ }),

/***/ "./src/assets/img/burger.png":
/*!***********************************!*\
  !*** ./src/assets/img/burger.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0563ceb7e20697625631.png";

/***/ }),

/***/ "./src/assets/img/burrito.png":
/*!************************************!*\
  !*** ./src/assets/img/burrito.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fec9a02d440db0ebf60.png";

/***/ }),

/***/ "./src/assets/img/chipsGuacamole.png":
/*!*******************************************!*\
  !*** ./src/assets/img/chipsGuacamole.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0571077af68ad8b49851.png";

/***/ }),

/***/ "./src/assets/img/descriptionImg.png":
/*!*******************************************!*\
  !*** ./src/assets/img/descriptionImg.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cddfae9a2501d5748742.png";

/***/ }),

/***/ "./src/assets/img/odin.png":
/*!*********************************!*\
  !*** ./src/assets/img/odin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76b0b5ce952f238d4768.png";

/***/ }),

/***/ "./src/assets/img/openTaco.png":
/*!*************************************!*\
  !*** ./src/assets/img/openTaco.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "149b927f533e899d4484.png";

/***/ }),

/***/ "./src/assets/img/pastries.png":
/*!*************************************!*\
  !*** ./src/assets/img/pastries.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4497b8ef9458c28458f0.png";

/***/ }),

/***/ "./src/assets/img/quesadilla.png":
/*!***************************************!*\
  !*** ./src/assets/img/quesadilla.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00e719edf1a8d75e27aa.png";

/***/ }),

/***/ "./src/assets/img/salad.png":
/*!**********************************!*\
  !*** ./src/assets/img/salad.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55aaa7001a47820e030a.png";

/***/ }),

/***/ "./src/assets/img/tacos.png":
/*!**********************************!*\
  !*** ./src/assets/img/tacos.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f3a1725169d5310b114.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _src_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _sections_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/contact */ "./src/sections/contact.js");
/* harmony import */ var _sections_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/footer */ "./src/sections/footer.js");
/* harmony import */ var _sections_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/header */ "./src/sections/header.js");
/* harmony import */ var _sections_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/home */ "./src/sections/home.js");
/* harmony import */ var _sections_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/menu */ "./src/sections/menu.js");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./load */ "./src/load.js");







const contentContainer = document.querySelector('.content');
const root = document.querySelector("html");

(0,_load__WEBPACK_IMPORTED_MODULE_6__["default"])();

function setActiveLink(newActive) {
    const currentActive = document.getElementsByClassName("active");
    console.log(newActive.textContent);
    if (newActive != currentActive) {
      currentActive[0].classList.toggle("active");
      newActive.classList.toggle("active");
    }
    if((newActive).textContent !== 'Menu') {
    }
    else{
        contentContainer.style.height = "100%";
        root.style.height = "100%";
    }
}

const menuLinks = document.querySelectorAll(".headerLink");
Array.from(menuLinks).forEach((link) => {
    link.addEventListener("click", (e) => {
        setActiveLink(e.target);
        switch ((e.target).textContent) {
            case "Menu":
                contentContainer.replaceChild((0,_sections_menu__WEBPACK_IMPORTED_MODULE_5__["default"])(),contentContainer.childNodes[1]);                
                while(contentContainer.childNodes[2]){
                    contentContainer.removeChild(contentContainer.childNodes[2]);
                }                
                break;

            case "Contact":
                contentContainer.replaceChild((0,_sections_contact__WEBPACK_IMPORTED_MODULE_1__["default"])(),contentContainer.childNodes[1]);
                    contentContainer.append((0,_sections_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
                     contentContainer.style.height = "100vh";
                break;
            default: 
                contentContainer.replaceChild((0,_sections_home__WEBPACK_IMPORTED_MODULE_4__["default"])(),contentContainer.childNodes[1]);
                    contentContainer.append((0,_sections_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
                contentContainer.style.height = "100vh";
                break;
        }
    });
});


})();

/******/ })()
;
//# sourceMappingURL=main.js.map