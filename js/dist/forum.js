module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/states/ComposerState */ "flarum/forum/states/ComposerState");
/* harmony import */ var flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/ComposerBody */ "flarum/forum/components/ComposerBody");
/* harmony import */ var flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_5__);
/*
 * This file is part of zerosonesfun/composer-preview.
 *
 * Copyright (c) 2021 Rafael Horvat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('zerosonesfun-composer-preview', function () {
  // For the `DiscussionComposer` add a property to the `ComposerState` used to
  // check if the preview is being whown or not. The will be accessible globally by
  // accessing `app.composer.showPreview`.
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_states_ComposerState__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'load', function (_, componentClass) {
    if (componentClass === flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4___default.a) {
      this.showPreview = false;
    }
  }); // Add an empty element to the `ComposerBody.headerItems`. This will be filled with content
  // once the preview is shown.

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'headerItems', function (items) {
    items.add('preview-discussion', m("div", {
      className: "Composer-preview Post-body " + (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.composer.showPreview ? '' : 'hidden')
    }), 50);
  }); // Add a `jumpToPreview` method to the `DiscussionComposer`. Doing that implies
  // that the button for preview will be shown in the `controlItems` of the `TextEditor`.
  // Thiw method will be the callback called when this button is clicked.

  flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.jumpToPreview = function (e) {
    // Prevent fof/upload to trigger the preview:
    if (!(e instanceof MouseEvent)) {
      return;
    } // Update the state


    this.composer.showPreview = !this.composer.showPreview; // If we need to show the preview...

    if (this.composer.showPreview) {
      // ... Set the content of the dedicated element using the `s9e.TextFormatter`
      s9e.TextFormatter.preview(this.composer.fields.content(), this.$('.Composer-preview')[0]);
    }
  }; // To make that the preview container has the right size and position (including when the composer
  // is resized) we need to continually update it.


  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'oncreate', function () {
    setInterval(function () {
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.composer.showPreview) {
        var $textarea = this.$('.TextEditor textarea');

        if ($textarea.offset()) {
          this.$('.Composer-preview').css({
            width: $textarea.width(),
            height: $textarea.height() + 10,
            top: $textarea.offset().top - $('.Composer').offset().top,
            left: $textarea.offset().left - $('.Composer').offset().left
          });
        }
      }
    }, 100);
  });
});

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/ComposerBody":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ComposerBody']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/ComposerBody'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/states/ComposerState":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/states/ComposerState']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/states/ComposerState'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map