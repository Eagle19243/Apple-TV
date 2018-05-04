/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nApp.onLaunch = function (options) {\n    var baseURL = options.BASEURL;\n    var scriptURLs = [\"Constants\", \"Utils\"].map(function (moduleName) {\n        return \"./\" + moduleName + \".js\";\n    });\n    console.log(location.href);\n    console.log(scriptURLs);\n    evaluateScripts(scriptURLs, function (success) {\n        if (success) {\n            var loadingDoc = CreateLoadingDocument();\n            navigationDocument.pushDocument(loadingDoc);\n        } else {\n            var alertDoc = CreateAlertDocument();\n            navigationDocument.pushDocument(alertDoc);\n            throw new EvalError(\"Internet Archive application.js: unable to evaluate scripts.\");\n        }\n    });\n};\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// constants.js\n\n\n//# sourceURL=webpack:///./src/js/constants.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// utils\n/**\n * Convenience function to create a TVML loading document with a specified title.\n */\nfunction CreateLoadingDocument(title) {\n    // If no title has been specified, fall back to \"Loading...\".\n    title = title || \"Loading...\";\n\n    var template = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" ?>\\n        <document>\\n            <loadingTemplate>\\n                <activityIndicator>\\n                    <title>\" + title + \"</title>\\n                </activityIndicator>\\n            </loadingTemplate>\\n        </document>\";\n\n    return new DOMParser().parseFromString(template, \"application/xml\");\n}\n\n/**\n * Convenience function to create a TVML alert document with a title and description.\n */\nfunction CreateAlertDocument(title, description) {\n    var template = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" ?>\\n        <document>\\n            <alertTemplate>\\n                <title>\" + title + \"</title>\\n                <description>\" + description + \"</description>\\n            </alertTemplate>\\n        </document>\\n    \";\n\n    return new DOMParser().parseFromString(template, \"application/xml\");\n}\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./src/js/app.js ./src/js/utils.js ./src/js/constants.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\n__webpack_require__(/*! ./src/js/utils.js */\"./src/js/utils.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/constants.js */\"./src/js/constants.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/js/utils.js_./src/js/constants.js?");

/***/ })

/******/ });