webpackHotUpdate("static/development/pages/vistest1.js",{

/***/ "./pages/vistest1.js":
/*!***************************!*\
  !*** ./pages/vistest1.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisTest1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _src_MainTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/MainTemplate */ "./src/MainTemplate.js");
/* harmony import */ var _src_dndtree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/dndtree */ "./src/dndtree.js");
/* harmony import */ var _src_flare_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/flare.json */ "./src/flare.json");
var _src_flare_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/flare.json */ "./src/flare.json", 1);
var _jsxFileName = "/home/gback/csgenome/pages/vistest1.js";

 // import NextLink from '../src/Link';




function VisTest1() {
  var divref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var div = divref.current;
    var treeContainer = document.createElement("div");
    div.appendChild(treeContainer);
    Object(_src_dndtree__WEBPACK_IMPORTED_MODULE_3__["default"])(treeContainer, _src_flare_json__WEBPACK_IMPORTED_MODULE_4__);
    return function () {
      div.removeChild(treeContainer);
    };
  }, [divref.current]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_MainTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: divref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=vistest1.js.02d106e9c7545f800b3a.hot-update.js.map