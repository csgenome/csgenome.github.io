webpackHotUpdate("static/development/pages/vistest1.js",{

/***/ "./src/dndtree.js":
/*!************************!*\
  !*** ./src/dndtree.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return drawTheTree; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _observablehq_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @observablehq/stdlib */ "./node_modules/@observablehq/stdlib/src/index.js");
// There is a d3 version 3 (v3) version at http://bl.ocks.org/robschmuecker/7880033 with features such as zoom/pan.
// The version below is the d3 version 5 (v5) version taken from Bostock's observable at
// https://observablehq.com/@d3/tidy-tree


var DOM = _observablehq_stdlib__WEBPACK_IMPORTED_MODULE_1__["Library"].DOM;
console.dir(DOM); // Get JSON data

function drawTheTree(treeContainer, treeData) {
  var width = 932;

  var tree = function tree(data) {
    var root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data);
    root.dx = 10;
    root.dy = width / (root.height + 1);
    return d3__WEBPACK_IMPORTED_MODULE_0__["tree"]().nodeSize([root.dx, root.dy])(root);
  };

  var data = treeData;

  function chart() {
    var root = tree(data);
    var x0 = Infinity;
    var x1 = -x0;
    root.each(function (d) {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
    });
    var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](DOM.svg(width, x1 - x0 + root.dx * 2)).style("width", "100%").style("height", "auto");
    var g = svg.append("g").attr("font-family", "sans-serif").attr("font-size", 10).attr("transform", "translate(".concat(root.dy / 3, ",").concat(root.dx - x0, ")"));
    var link = g.append("g").attr("fill", "none").attr("stroke", "#555").attr("stroke-opacity", 0.4).attr("stroke-width", 1.5).selectAll("path").data(root.links()).join("path").attr("d", d3__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"]().x(function (d) {
      return d.y;
    }).y(function (d) {
      return d.x;
    }));
    var node = g.append("g").attr("stroke-linejoin", "round").attr("stroke-width", 3).selectAll("g").data(root.descendants()).join("g").attr("transform", function (d) {
      return "translate(".concat(d.y, ",").concat(d.x, ")");
    });
    node.append("circle").attr("fill", function (d) {
      return d.children ? "#555" : "#999";
    }).attr("r", 2.5);
    node.append("text").attr("dy", "0.31em").attr("x", function (d) {
      return d.children ? -6 : 6;
    }).attr("text-anchor", function (d) {
      return d.children ? "end" : "start";
    }).text(function (d) {
      return d.data.name;
    }).clone(true).lower().attr("stroke", "white");
    return svg.node();
  }

  treeContainer.appendChild(chart());
}

/***/ })

})
//# sourceMappingURL=vistest1.js.3c642e39dd2d6e000790.hot-update.js.map