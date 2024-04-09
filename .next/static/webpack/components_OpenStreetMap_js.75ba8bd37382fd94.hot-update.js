"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_OpenStreetMap_js",{

/***/ "./components/OpenStreetMap.js":
/*!*************************************!*\
  !*** ./components/OpenStreetMap.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Map2 = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: -4.043477,\n        lng: 39.668205\n    }), center = ref[0], setCenter = ref[1];\n    var ZOOM_LEVEL = 9;\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\"\n                }, void 0, false, {\n                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.MapContainer, {\n                                center: center,\n                                zoom: ZOOM_LEVEL,\n                                ref: mapRef,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.TileLayer, {\n                                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                        position: [\n                                            51.505,\n                                            -0.09\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup, {\n                                            children: [\n                                                \"A pretty CSS3 popup. \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                                    lineNumber: 25,\n                                                    columnNumber: 27\n                                                }, _this),\n                                                \" Easily customizable.\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 5\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 16\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                        position: [\n                                            51.605,\n                                            -0.09\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Popup, {\n                                            children: [\n                                                \"A pretty CSS3 popup. \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 27\n                                                }, _this),\n                                                \" Easily customizable.\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 5\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 4\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Map2, \"ybVgWjHX369t5SNGSa4oAOj7LhY=\");\n_c = Map2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map2);\nvar _c;\n$RefreshReg$(_c, \"Map2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5TdHJlZXRNYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBK0M7QUFDZ0I7QUFDOUI7O0FBRWpDLElBQU1NLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUE0QkwsR0FBNEMsR0FBNUNBLCtDQUFRLENBQUM7UUFBRU0sR0FBRyxFQUFFLENBQUMsUUFBUTtRQUFFQyxHQUFHLEVBQUUsU0FBUztLQUFFLENBQUMsRUFBakVDLE1BQU0sR0FBZVIsR0FBNEMsR0FBM0QsRUFBRVMsU0FBUyxHQUFJVCxHQUE0QyxHQUFoRDtJQUN4QixJQUFNVSxVQUFVLEdBQUcsQ0FBQztJQUNwQixJQUFNQyxNQUFNLEdBQUdWLDZDQUFNLEVBQUU7SUFFdkIscUJBQ0U7a0JBQ0UsNEVBQUNXLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzhCQUN4Qiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFdBQVc7Ozs7O3lCQUNwQjs4QkFDTiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLEtBQUs7OEJBQ2xCLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsS0FBSztrQ0FDbEIsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxXQUFXO3NDQUN4Qiw0RUFBQ1gsdURBQVk7Z0NBQUNNLE1BQU0sRUFBRUEsTUFBTTtnQ0FBRU0sSUFBSSxFQUFFSixVQUFVO2dDQUFFSyxHQUFHLEVBQUVKLE1BQU07O2tEQUN6RCw4REFBQ1Isb0RBQVM7d0NBQ1JhLFdBQVcsRUFBQyx1RkFBeUY7d0NBQ3JHQyxHQUFHLEVBQUMsb0RBQW9EOzs7Ozs2Q0FDeEQ7a0RBQ0gsOERBQUNiLGlEQUFNO3dDQUFDYyxRQUFRLEVBQUU7QUFBQyxrREFBTTs0Q0FBRSxDQUFDLElBQUk7eUNBQUM7a0RBQzVDLDRFQUFDQyxLQUFLOztnREFBQyx1QkFDZTs4REFBQSw4REFBQ0MsSUFBRTs7Ozt5REFBRztnREFBQSx1QkFDNUI7Ozs7OztpREFBUTs7Ozs7NkNBQ0E7a0RBRVQsOERBQUNoQixpREFBTTt3Q0FBQ2MsUUFBUSxFQUFFO0FBQUMsa0RBQU07NENBQUUsQ0FBQyxJQUFJO3lDQUFDO2tEQUNoQyw0RUFBQ0MsS0FBSzs7Z0RBQUMsdUJBQ2U7OERBQUEsOERBQUNDLElBQUU7Ozs7eURBQUc7Z0RBQUEsdUJBQzVCOzs7Ozs7aURBQVE7Ozs7OzZDQUNBOzs7Ozs7cUNBQ0s7Ozs7O2lDQUNDOzs7Ozs2QkFDRjs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRjtxQkFDTCxDQUNKO0NBQ0Y7R0FwQ0tmLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXNDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09wZW5TdHJlZXRNYXAuanM/ZTYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcydcblxuY29uc3QgTWFwMiA9ICgpID0+IHtcbiAgY29uc3QgW2NlbnRlciwgc2V0Q2VudGVyXSA9IHVzZVN0YXRlKHsgbGF0OiAtNC4wNDM0NzcsIGxuZzogMzkuNjY4MjA1IH0pXG4gIGNvbnN0IFpPT01fTEVWRUwgPSA5XG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgPE1hcENvbnRhaW5lciBjZW50ZXI9e2NlbnRlcn0gem9vbT17Wk9PTV9MRVZFTH0gcmVmPXttYXBSZWZ9PlxuICAgICAgICAgICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICAgICAgICAgIHVybD0naHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e1s1MS41MDUsIC0wLjA5XX0+XG5cdFx0XHRcdDxQb3B1cD5cblx0XHRcdFx0XHRBIHByZXR0eSBDU1MzIHBvcHVwLiA8YnIgLz4gRWFzaWx5IGN1c3RvbWl6YWJsZS5cblx0XHRcdFx0PC9Qb3B1cD5cblx0XHRcdDwvTWFya2VyPlxuXG5cdFx0XHQ8TWFya2VyIHBvc2l0aW9uPXtbNTEuNjA1LCAtMC4wOV19PlxuXHRcdFx0XHQ8UG9wdXA+XG5cdFx0XHRcdFx0QSBwcmV0dHkgQ1NTMyBwb3B1cC4gPGJyIC8+IEVhc2lseSBjdXN0b21pemFibGUuXG5cdFx0XHRcdDwvUG9wdXA+XG5cdFx0XHQ8L01hcmtlcj5cblx0XHQ8L01hcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiTWFwMiIsImxhdCIsImxuZyIsImNlbnRlciIsInNldENlbnRlciIsIlpPT01fTEVWRUwiLCJtYXBSZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJ6b29tIiwicmVmIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJwb3NpdGlvbiIsIlBvcHVwIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OpenStreetMap.js\n"));

/***/ })

});