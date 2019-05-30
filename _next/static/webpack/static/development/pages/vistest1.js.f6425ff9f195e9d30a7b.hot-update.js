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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var _src_MainTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/MainTemplate */ "./src/MainTemplate.js");
/* harmony import */ var _src_dndtree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/dndtree */ "./src/dndtree.js");
/* harmony import */ var _src_flare_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/flare.json */ "./src/flare.json");
var _src_flare_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/flare.json */ "./src/flare.json", 1);
var _jsxFileName = "/home/gback/csgenome/pages/vistest1.js";






function VisTest1() {
  var divref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var div = divref.current;
    div.appendChild(tree);
    var tree = Object(_src_dndtree__WEBPACK_IMPORTED_MODULE_4__["default"])(_src_flare_json__WEBPACK_IMPORTED_MODULE_5__);
    return function () {
      div.removeChild(tree);
    };
  }, [divref.current]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_MainTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Source: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "https://observablehq.com/@d3/tidy-tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "@d3/tidy-tree")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: divref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=vistest1.js.f6425ff9f195e9d30a7b.hot-update.js.map