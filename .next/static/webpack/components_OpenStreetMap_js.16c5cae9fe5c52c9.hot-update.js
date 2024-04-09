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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Map2 = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: -4.043477,\n        lng: 39.668205\n    }), center = ref[0], setCenter = ref[1];\n    var ZOOM_LEVEL = 9;\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\"\n                }, void 0, false, {\n                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n                                center: center,\n                                zoom: ZOOM_LEVEL,\n                                ref: mapRef,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                                        position: [\n                                            51.505,\n                                            -0.09\n                                        ],\n                                        image: \"/image45.png\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Popup, {\n                                            children: [\n                                                \"A pretty CSS3 popup. \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 27\n                                                }, _this),\n                                                \" Easily customizable.\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 5\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 16\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                                        position: [\n                                            51.605,\n                                            -0.09\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Popup, {\n                                            children: [\n                                                \"A pretty CSS3 popup. \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 27\n                                                }, _this),\n                                                \" Easily customizable.\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 5\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 4\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mint/Documents/github/sonlana1/components/OpenStreetMap.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Map2, \"ybVgWjHX369t5SNGSa4oAOj7LhY=\");\n_c = Map2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map2);\nvar _c;\n$RefreshReg$(_c, \"Map2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5TdHJlZXRNYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0M7QUFDd0I7QUFDckM7QUFDUztBQUMyQzs7QUFFdEYsSUFBTU8sSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQTRCTixHQUE0QyxHQUE1Q0EsK0NBQVEsQ0FBQztRQUFFTyxHQUFHLEVBQUUsQ0FBQyxRQUFRO1FBQUVDLEdBQUcsRUFBRSxTQUFTO0tBQUUsQ0FBQyxFQUFqRUMsTUFBTSxHQUFlVCxHQUE0QyxHQUEzRCxFQUFFVSxTQUFTLEdBQUlWLEdBQTRDLEdBQWhEO0lBQ3hCLElBQU1XLFVBQVUsR0FBRyxDQUFDO0lBQ3BCLElBQU1DLE1BQU0sR0FBR1gsNkNBQU0sRUFBRTtJQUV2QixxQkFDRTtrQkFDRSw0RUFBQ1ksS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVzs7OEJBQ3hCLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7Ozs7eUJBQ3BCOzhCQUNOLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsS0FBSzs4QkFDbEIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxLQUFLO2tDQUNsQiw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFdBQVc7c0NBQ3hCLDRFQUFDWix1REFBWTtnQ0FBQ08sTUFBTSxFQUFFQSxNQUFNO2dDQUFFTSxJQUFJLEVBQUVKLFVBQVU7Z0NBQUVLLEdBQUcsRUFBRUosTUFBTTs7a0RBQ3pELDhEQUFDVCxvREFBUzt3Q0FDUmMsV0FBVyxFQUFDLHVGQUF5Rjt3Q0FDckdDLEdBQUcsRUFBQyxvREFBb0Q7Ozs7OzZDQUN4RDtrREFDSCw4REFBQ2QsaURBQU07d0NBQUNlLFFBQVEsRUFBRTtBQUFDLGtEQUFNOzRDQUFFLENBQUMsSUFBSTt5Q0FBQzt3Q0FBRUMsS0FBSyxFQUFDLGNBQWM7a0RBQ2xFLDRFQUFDZixnREFBSzs7Z0RBQUMsdUJBQ2U7OERBQUEsOERBQUNnQixJQUFFOzs7O3lEQUFHO2dEQUFBLHVCQUM1Qjs7Ozs7O2lEQUFROzs7Ozs2Q0FDQTtrREFFVCw4REFBQ2pCLGlEQUFNO3dDQUFDZSxRQUFRLEVBQUU7QUFBQyxrREFBTTs0Q0FBRSxDQUFDLElBQUk7eUNBQUM7a0RBQ2hDLDRFQUFDZCxnREFBSzs7Z0RBQUMsdUJBQ2U7OERBQUEsOERBQUNnQixJQUFFOzs7O3lEQUFHO2dEQUFBLHVCQUM1Qjs7Ozs7O2lEQUFROzs7Ozs2Q0FDQTs7Ozs7O3FDQUNLOzs7OztpQ0FDQzs7Ozs7NkJBQ0Y7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7cUJBQ0wsQ0FDSjtDQUNGO0dBcENLZixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFzQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcGVuU3RyZWV0TWFwLmpzP2U2MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xuaW1wb3J0IFwibGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5XCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzXCI7XG5cbmNvbnN0IE1hcDIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7IGxhdDogLTQuMDQzNDc3LCBsbmc6IDM5LjY2ODIwNSB9KVxuICBjb25zdCBaT09NX0xFVkVMID0gOVxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxNYXBDb250YWluZXIgY2VudGVyPXtjZW50ZXJ9IHpvb209e1pPT01fTEVWRUx9IHJlZj17bWFwUmVmfT5cbiAgICAgICAgICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgICAgICAgICB1cmw9J2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtbNTEuNTA1LCAtMC4wOV19IGltYWdlPVwiL2ltYWdlNDUucG5nXCI+XG5cdFx0XHRcdDxQb3B1cD5cblx0XHRcdFx0XHRBIHByZXR0eSBDU1MzIHBvcHVwLiA8YnIgLz4gRWFzaWx5IGN1c3RvbWl6YWJsZS5cblx0XHRcdFx0PC9Qb3B1cD5cblx0XHRcdDwvTWFya2VyPlxuXG5cdFx0XHQ8TWFya2VyIHBvc2l0aW9uPXtbNTEuNjA1LCAtMC4wOV19PlxuXHRcdFx0XHQ8UG9wdXA+XG5cdFx0XHRcdFx0QSBwcmV0dHkgQ1NTMyBwb3B1cC4gPGJyIC8+IEVhc2lseSBjdXN0b21pemFibGUuXG5cdFx0XHRcdDwvUG9wdXA+XG5cdFx0XHQ8L01hcmtlcj5cblx0XHQ8L01hcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJNYXAyIiwibGF0IiwibG5nIiwiY2VudGVyIiwic2V0Q2VudGVyIiwiWk9PTV9MRVZFTCIsIm1hcFJlZiIsImRpdiIsImNsYXNzTmFtZSIsInpvb20iLCJyZWYiLCJhdHRyaWJ1dGlvbiIsInVybCIsInBvc2l0aW9uIiwiaW1hZ2UiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/OpenStreetMap.js\n"));

/***/ })

});