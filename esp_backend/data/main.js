/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#container {\\r\\n    display: flex;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.wrap-folded {\\r\\n    box-shadow: inset 0 0 10vw rgba(0, 0, 0, 0.25);\\r\\n    flex-grow: 1;\\r\\n    transition: left .2s ease;\\r\\n}\\r\\n\\r\\n.wrap {\\r\\n    box-shadow: inset 0 0 10vw rgba(0, 0, 0, 0.25);\\r\\n    flex-grow: 1;\\r\\n    border: brown 4px double;\\r\\n}\\r\\n\\r\\n.wrap-controls {\\r\\n    position: relative;\\r\\n    width: 1px;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n#control-panel {\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    width: auto;\\r\\n    padding: 20px;\\r\\n    background-color: rgba(50, 50, 50, 0.5);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    font-size: 24px;\\r\\n    background-color: rgb(75, 60, 208);\\r\\n    color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n#save-wraps {\\r\\n    float: right;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    font-size: 8vw;\\r\\n    font-weight: bold;\\r\\n    font-family: sans-serif;\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    bottom: 30px;\\r\\n    color: #fff;\\r\\n    text-align: center;\\r\\n    text-shadow: 0 1px 0 #d9d9d9, 0 2px 0 #cccccc, 0 3px 0 #bfbfbf, 0 4px 0 #b3b3b3, 0 6px 12px rgba(0, 0, 0, 0.35);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://colorpicker/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://colorpicker/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://colorpicker/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://colorpicker/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://colorpicker/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://colorpicker/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://colorpicker/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://colorpicker/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://colorpicker/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/trash.svg":
/*!***********************!*\
  !*** ./src/trash.svg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgNGEyIDIgMCAwIDEgMi0yaDZhMiAyIDAgMCAxIDIgMnYyaDRhMSAxIDAgMSAxIDAgMmgtMS4wNjlsLS44NjcgMTIuMTQyQTIgMiAwIDAgMSAxNy4wNjkgMjJINi45M2EyIDIgMCAwIDEtMS45OTUtMS44NThMNC4wNyA4SDNhMSAxIDAgMCAxIDAtMmg0VjR6bTIgMmg2VjRIOXYyek02LjA3NCA4bC44NTcgMTJIMTcuMDdsLjg1Ny0xMkg2LjA3NHpNMTAgMTBhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDEgMS0yIDB2LTZhMSAxIDAgMCAxIDEtMXptNCAwYTEgMSAwIDAgMSAxIDF2NmExIDEgMCAxIDEtMiAwdi02YTEgMSAwIDAgMSAxLTF6IiBmaWxsPSIjMEQwRDBEIi8+PC9zdmc+\");\n\n//# sourceURL=webpack://colorpicker/./src/trash.svg?");

/***/ }),

/***/ "./src/components/Wrap.js":
/*!********************************!*\
  !*** ./src/components/Wrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrap\": () => (/* binding */ Wrap)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/utils.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trash.svg */ \"./src/trash.svg\");\n\r\n\r\nconsole.log(_trash_svg__WEBPACK_IMPORTED_MODULE_1__.default)\r\nclass Wrap {\r\n    constructor(hue, saturation, lightness, isFolded, parent) {\r\n        this.hue = hue;\r\n        this.saturation = saturation;\r\n        this.lightness = lightness;\r\n        this.isFolded = isFolded;\r\n        this.parent = parent;\r\n\r\n        this.createDOMNode();\r\n        this.initializeEventHandlers();\r\n    }\r\n\r\n    get rgb(){\r\n        let constraint = (x) => Math.min(Math.max(x, 0), 1);\r\n\r\n        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.hslToRgb)(\r\n            constraint(this.hue/360), \r\n            constraint(this.saturation/100), \r\n            constraint(this.lightness/100)\r\n        );\r\n    }\r\n\r\n    createDOMNode() {\r\n        this._el = document.createElement(\"div\");\r\n        this.parent.appendChild(this._el);\r\n        this.setFoldedClass();\r\n        this.createDOMControls();\r\n        this.render();\r\n    }\r\n\r\n    createDOMControls(){\r\n        let deleteButton = document.createElement(\"button\");\r\n        deleteButton.innerHTML = \"-\"\r\n\r\n        deleteButton.addEventListener(\"click\", () => {\r\n            this.remove();\r\n        })\r\n\r\n        let controls = document.createElement(\"div\");\r\n        controls.setAttribute(\"class\", \"wrap-controls\");\r\n\r\n        controls.appendChild(deleteButton);\r\n        this._el.appendChild(controls);\r\n    }\r\n\r\n    render() {\r\n        this._el.style.backgroundColor = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.constructHSLString)(\r\n            this.hue,\r\n            this.saturation,\r\n            this.lightness\r\n        );\r\n    }\r\n\r\n    setFoldedClass() {\r\n        this._el.setAttribute(\"class\", this.isFolded ? \"wrap-folded\" : \"wrap\");\r\n    }\r\n\r\n    initializeEventHandlers() {\r\n        this._el.addEventListener(\"mousemove\", (e) => {\r\n            this.mouseMoveHandler(e);\r\n        });\r\n\r\n        this._el.addEventListener(\"click\", (e) => {\r\n            this.isFolded = !this.isFolded;\r\n            this.setFoldedClass();\r\n        });\r\n    }\r\n\r\n    remove(){\r\n        this.parent.dispatchEvent(new CustomEvent(\"delete-wrap\", {detail: this}));\r\n        this._el.remove();\r\n    }\r\n\r\n    mouseMoveHandler(e) {\r\n        // Hue is relative to horizontal position of the mouse\r\n        // Saturation is relative to vertical position of the mouse\r\n        if (!this.isFolded) {\r\n            this.hue = Math.round(\r\n                e.offsetX / (e.originalTarget.clientWidth / 360)\r\n            );\r\n            this.saturation = Math.round(\r\n                e.offsetY / (e.originalTarget.clientHeight / 100)\r\n            );\r\n            this.render();\r\n        }\r\n    }\r\n\r\n    increaseLightness() {\r\n        this.lightness++;\r\n        this.render();\r\n    }\r\n\r\n    decreaseLightness() {\r\n        this.lightness--;\r\n        this.render();\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://colorpicker/./src/components/Wrap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_Wrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Wrap.js */ \"./src/components/Wrap.js\");\n\r\n\r\n\r\n// TODO: Store these in EEPROM\r\nlet colors = [\r\n    [150, 150, 40],\r\n];\r\n\r\nlet wraps = [];\r\nconst wrapsParent = document.getElementById(\"container\");\r\n\r\nfunction initializeWraps() {\r\n    colors.forEach((color) => {\r\n        const wrap = new _components_Wrap_js__WEBPACK_IMPORTED_MODULE_1__.Wrap(...color, true, wrapsParent);\r\n        wraps.push(wrap);\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        wraps.forEach((wrap) => {\r\n            if (!wrap.isFolded){\r\n                if (e.code == \"ArrowUp\" && wrap.lightness < 100) wrap.increaseLightness(); \r\n                if (e.code == \"ArrowDown\" && wrap.lightness > 0) wrap.decreaseLightness();\r\n            }\r\n        })\r\n    });\r\n\r\n    wrapsParent.addEventListener('delete-wrap', (e) => {\r\n        let wrapID = wraps.indexOf(e.detail);\r\n        wraps.splice(wrapID, 1);        \r\n    })\r\n}\r\n\r\ndocument.body.onload = initializeWraps;\r\ndocument.getElementById(\"add-wrap\").addEventListener('click', () => {\r\n    wraps.push(new _components_Wrap_js__WEBPACK_IMPORTED_MODULE_1__.Wrap(...[50, 50, 50], false, wrapsParent))\r\n});\r\n\r\ndocument.getElementById(\"save-wraps\").addEventListener('click', () => {\r\n    let newColors = wraps.map((wrap) => wrap.rgb)\r\n    console.log(newColors);\r\n});\n\n//# sourceURL=webpack://colorpicker/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("function constructHSLString(h, s, l) {\r\n    return \"hsl(\" + h + \", \" + s + \"%, \" + l + \"%)\";\r\n}\r\n\r\nfunction hslToRgb(h, s, l) {\r\n    var r, g, b;\r\n\r\n    if (s == 0) {\r\n        r = g = b = l; // achromatic\r\n    } else {\r\n        var hue2rgb = function hue2rgb(p, q, t) {\r\n            if (t < 0) t += 1;\r\n            if (t > 1) t -= 1;\r\n            if (t < 1 / 6) return p + (q - p) * 6 * t;\r\n            if (t < 1 / 2) return q;\r\n            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;\r\n            return p;\r\n        };\r\n\r\n        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;\r\n        var p = 2 * l - q;\r\n        r = hue2rgb(p, q, h + 1 / 3);\r\n        g = hue2rgb(p, q, h);\r\n        b = hue2rgb(p, q, h - 1 / 3);\r\n    }\r\n\r\n    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];\r\n}\r\n\r\nfunction rgbToHsl(r, g, b) {\r\n    (r /= 255), (g /= 255), (b /= 255);\r\n    var max = Math.max(r, g, b),\r\n        min = Math.min(r, g, b);\r\n    var h,\r\n        s,\r\n        l = (max + min) / 2;\r\n\r\n    if (max == min) {\r\n        h = s = 0; // achromatic\r\n    } else {\r\n        var d = max - min;\r\n        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\r\n        switch (max) {\r\n            case r:\r\n                h = (g - b) / d + (g < b ? 6 : 0);\r\n                break;\r\n            case g:\r\n                h = (b - r) / d + 2;\r\n                break;\r\n            case b:\r\n                h = (r - g) / d + 4;\r\n                break;\r\n        }\r\n        h /= 6;\r\n    }\r\n\r\n    return [h, s, l];\r\n}\r\n\r\nmodule.exports = { rgbToHsl, hslToRgb, constructHSLString };\r\n\n\n//# sourceURL=webpack://colorpicker/./src/utils.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;