"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/not-found",{

/***/ "(app-pages-browser)/./src/lib/content/projects.ts":
/*!*************************************!*\
  !*** ./src/lib/content/projects.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsSection: function() { return /* binding */ projectsSection; }\n/* harmony export */ });\n/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/utils/helper */ \"(app-pages-browser)/./src/lib/utils/helper.ts\");\n\nconst projectsSection = {\n    title: \"my projects\",\n    projects: [\n        {\n            id: (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getId)(),\n            name: \"Kart-On\",\n            url: \"#\",\n            repo: \"https://github.com/imrohitkr/Kart-On\",\n            img: \"https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg\",\n            year: 2023,\n            tags: [\n                \"PHP\",\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\",\n                \"MySQL\"\n            ]\n        },\n        {\n            id: (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getId)(),\n            name: \"Friends App\",\n            url: \"https://radiant-pika-105ad2.netlify.app/\",\n            repo: \"https://github.com/imrohitkr/friends-app\",\n            img: \"https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg\",\n            year: 2023,\n            tags: [\n                \"React\",\n                \"firebase\"\n            ]\n        },\n        {\n            id: (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getId)(),\n            name: \"Care Club\",\n            url: \"https://coruscating-moonbeam-c9c0a0.netlify.app/\",\n            repo: \"https://github.com/imrohitkr/Care_Club\",\n            img: \"https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg\",\n            year: 2023,\n            tags: [\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\"\n            ]\n        },\n        {\n            id: (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_0__.getId)(),\n            name: \"Chat App\",\n            url: \"#\",\n            repo: \"https://github.com/imrohitkr/Chat-App\",\n            img: \"https://www.homemakerproperties.com/wp-content/uploads/bb-plugin/cache/homemaker-placeholder-landscape-0adac48ba04ee236c85908e6dd3f2b46-.jpg\",\n            year: 2023,\n            tags: [\n                \"React\",\n                \"CSS\",\n                \"Javascript\"\n            ]\n        }\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvY29udGVudC9wcm9qZWN0cy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUMyQztBQUdwQyxNQUFNQyxrQkFBdUM7SUFDaERDLE9BQU87SUFDUEMsVUFBVTtRQUNWO1lBQ0lDLElBQUlKLHdEQUFLQTtZQUNUSyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBTztnQkFBUTtnQkFBTztnQkFBYzthQUFRO1FBQ3ZEO1FBQ0E7WUFDSU4sSUFBSUosd0RBQUtBO1lBQ1RLLE1BQU07WUFDTkMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxNQUFNO2dCQUFDO2dCQUFTO2FBQVc7UUFDL0I7UUFDQTtZQUNJTixJQUFJSix3REFBS0E7WUFDVEssTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE1BQU07Z0JBQUM7Z0JBQVE7Z0JBQU87YUFBYTtRQUN2QztRQUNBO1lBQ0lOLElBQUlKLHdEQUFLQTtZQUNUSyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBUztnQkFBTzthQUFhO1FBQ3hDO0tBQ0M7QUFDTCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvY29udGVudC9wcm9qZWN0cy50cz9mZTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RzU2VjdGlvblR5cGUgfSBmcm9tICdAL2xpYi90eXBlcy9zZWN0aW9ucydcclxuaW1wb3J0IHsgZ2V0SWQgfSBmcm9tICdAL2xpYi91dGlscy9oZWxwZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c1NlY3Rpb246IFByb2plY3RzU2VjdGlvblR5cGUgPSB7XHJcbiAgICB0aXRsZTogJ215IHByb2plY3RzJyxcclxuICAgIHByb2plY3RzOiBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGdldElkKCksXHJcbiAgICAgICAgbmFtZTogJ0thcnQtT24nLFxyXG4gICAgICAgIHVybDogJyMnLFxyXG4gICAgICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW1yb2hpdGtyL0thcnQtT24nLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vd3d3LmhvbWVtYWtlcnByb3BlcnRpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9iYi1wbHVnaW4vY2FjaGUvaG9tZW1ha2VyLXBsYWNlaG9sZGVyLWxhbmRzY2FwZS0wYWRhYzQ4YmEwNGVlMjM2Yzg1OTA4ZTZkZDNmMmI0Ni0uanBnJyxcclxuICAgICAgICB5ZWFyOiAyMDIzLFxyXG4gICAgICAgIHRhZ3M6IFsnUEhQJywgJ0hUTUwnLCAnQ1NTJywgJ0phdmFzY3JpcHQnLCAnTXlTUUwnXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IGdldElkKCksXHJcbiAgICAgICAgbmFtZTogJ0ZyaWVuZHMgQXBwJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3JhZGlhbnQtcGlrYS0xMDVhZDIubmV0bGlmeS5hcHAvJyxcclxuICAgICAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ltcm9oaXRrci9mcmllbmRzLWFwcCcsXHJcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cuaG9tZW1ha2VycHJvcGVydGllcy5jb20vd3AtY29udGVudC91cGxvYWRzL2JiLXBsdWdpbi9jYWNoZS9ob21lbWFrZXItcGxhY2Vob2xkZXItbGFuZHNjYXBlLTBhZGFjNDhiYTA0ZWUyMzZjODU5MDhlNmRkM2YyYjQ2LS5qcGcnLFxyXG4gICAgICAgIHllYXI6IDIwMjMsXHJcbiAgICAgICAgdGFnczogWydSZWFjdCcsICdmaXJlYmFzZSddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogZ2V0SWQoKSxcclxuICAgICAgICBuYW1lOiAnQ2FyZSBDbHViJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL2NvcnVzY2F0aW5nLW1vb25iZWFtLWM5YzBhMC5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW1yb2hpdGtyL0NhcmVfQ2x1YicsXHJcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly93d3cuaG9tZW1ha2VycHJvcGVydGllcy5jb20vd3AtY29udGVudC91cGxvYWRzL2JiLXBsdWdpbi9jYWNoZS9ob21lbWFrZXItcGxhY2Vob2xkZXItbGFuZHNjYXBlLTBhZGFjNDhiYTA0ZWUyMzZjODU5MDhlNmRkM2YyYjQ2LS5qcGcnLFxyXG4gICAgICAgIHllYXI6IDIwMjMsXHJcbiAgICAgICAgdGFnczogWydIVE1MJywgJ0NTUycsICdKYXZhc2NyaXB0J10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBnZXRJZCgpLFxyXG4gICAgICAgIG5hbWU6ICdDaGF0IEFwcCcsXHJcbiAgICAgICAgdXJsOiAnIycsXHJcbiAgICAgICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pbXJvaGl0a3IvQ2hhdC1BcHAnLFxyXG4gICAgICAgIGltZzogJ2h0dHBzOi8vd3d3LmhvbWVtYWtlcnByb3BlcnRpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9iYi1wbHVnaW4vY2FjaGUvaG9tZW1ha2VyLXBsYWNlaG9sZGVyLWxhbmRzY2FwZS0wYWRhYzQ4YmEwNGVlMjM2Yzg1OTA4ZTZkZDNmMmI0Ni0uanBnJyxcclxuICAgICAgICB5ZWFyOiAyMDIzLFxyXG4gICAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ1NTJywgJ0phdmFzY3JpcHQnXSxcclxuICAgIH1cclxuICAgIF0sXHJcbn07Il0sIm5hbWVzIjpbImdldElkIiwicHJvamVjdHNTZWN0aW9uIiwidGl0bGUiLCJwcm9qZWN0cyIsImlkIiwibmFtZSIsInVybCIsInJlcG8iLCJpbWciLCJ5ZWFyIiwidGFncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/content/projects.ts\n"));

/***/ })

});