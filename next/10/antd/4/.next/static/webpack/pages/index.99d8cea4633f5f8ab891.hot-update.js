webpackHotUpdate_N_E('pages/index', {
  /***/ './src/hooks/useStorage.js':
    /*!*********************************!*\
  !*** ./src/hooks/useStorage.js ***!
  \*********************************/
    /*! exports provided: useStorage */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return useStorage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nvar ERROR_MESSAGE = \'Get Storage Item Failed\';\nfunction useStorage(storageName, key, defaultValue) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),\n      storage = _useState[0],\n      setStorage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    setStorage(window[storageName]);\n  }, []);\n\n  var setData = function setData(keyValue) {\n    if (!storage) return;\n\n    try {\n      storage.setItem(key, JSON.stringify(keyValue));\n      setValue(keyValue);\n    } catch (e) {\n      console.error(ERROR_MESSAGE);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    if (!storage) return;\n    console.log(storage);\n\n    try {\n      var stringfiedValue = storage.getItem(key);\n\n      if (stringfiedValue !== null) {\n        setValue(JSON.parse(stringfiedValue));\n      } else {\n        setData(defaultValue);\n      }\n    } catch (e) {\n      console.error(ERROR_MESSAGE);\n    }\n  }, [storage]);\n  return [value, setValue];\n}\n\n_s(useStorage, "zRg9+y0++R+g3GeFvupOPuQcFYk=");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../.yarn/__virtual__/next-virtual-4b188ea935/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "./.yarn/__virtual__/next-virtual-4b188ea935/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVN0b3JhZ2UuanM/ODY3YyJdLCJuYW1lcyI6WyJFUlJPUl9NRVNTQUdFIiwidXNlU3RvcmFnZSIsInN0b3JhZ2VOYW1lIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJzdG9yYWdlIiwic2V0U3RvcmFnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzZXREYXRhIiwia2V5VmFsdWUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJzdHJpbmdmaWVkVmFsdWUiLCJnZXRJdGVtIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLHlCQUF0QjtBQUVPLFNBQVNDLFVBQVQsQ0FBb0JDLFdBQXBCLEVBQWlDQyxHQUFqQyxFQUFzQ0MsWUFBdEMsRUFBb0Q7QUFBQTs7QUFBQSxrQkFDM0JDLHNEQUFRLENBQUMsSUFBRCxDQURtQjtBQUFBLE1BQ2xEQyxPQURrRDtBQUFBLE1BQ3pDQyxVQUR5Qzs7QUFBQSxtQkFFL0JGLHNEQUFRLENBQUNELFlBQUQsQ0FGdUI7QUFBQSxNQUVsREksS0FGa0Q7QUFBQSxNQUUzQ0MsUUFGMkM7O0FBSXpEQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsY0FBVSxDQUFDSSxNQUFNLENBQUNULFdBQUQsQ0FBUCxDQUFWO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQWM7QUFDNUIsUUFBSSxDQUFDUCxPQUFMLEVBQWM7O0FBRWQsUUFBSTtBQUNGQSxhQUFPLENBQUNRLE9BQVIsQ0FBZ0JYLEdBQWhCLEVBQXFCWSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsUUFBZixDQUFyQjtBQUNBSixjQUFRLENBQUNJLFFBQUQsQ0FBUjtBQUNELEtBSEQsQ0FHRSxPQUFPSSxDQUFQLEVBQVU7QUFDVkMsYUFBTyxDQUFDQyxLQUFSLENBQWNuQixhQUFkO0FBQ0Q7QUFDRixHQVREOztBQVdBVSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNKLE9BQUwsRUFBYztBQUVkWSxXQUFPLENBQUNFLEdBQVIsQ0FBWWQsT0FBWjs7QUFFQSxRQUFJO0FBQ0YsVUFBTWUsZUFBZSxHQUFHZixPQUFPLENBQUNnQixPQUFSLENBQWdCbkIsR0FBaEIsQ0FBeEI7O0FBRUEsVUFBSWtCLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QlosZ0JBQVEsQ0FBQ00sSUFBSSxDQUFDUSxLQUFMLENBQVdGLGVBQVgsQ0FBRCxDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0xULGVBQU8sQ0FBQ1IsWUFBRCxDQUFQO0FBQ0Q7QUFDRixLQVJELENBUUUsT0FBT2EsQ0FBUCxFQUFVO0FBQ1ZDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjbkIsYUFBZDtBQUNEO0FBQ0YsR0FoQlEsRUFnQk4sQ0FBQ00sT0FBRCxDQWhCTSxDQUFUO0FBa0JBLFNBQU8sQ0FBQ0UsS0FBRCxFQUFRQyxRQUFSLENBQVA7QUFDRDs7R0F0Q2VSLFUiLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU3RvcmFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFUlJPUl9NRVNTQUdFID0gJ0dldCBTdG9yYWdlIEl0ZW0gRmFpbGVkJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JhZ2Uoc3RvcmFnZU5hbWUsIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gIGNvbnN0IFtzdG9yYWdlLCBzZXRTdG9yYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdG9yYWdlKHdpbmRvd1tzdG9yYWdlTmFtZV0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0RGF0YSA9IChrZXlWYWx1ZSkgPT4ge1xuICAgIGlmICghc3RvcmFnZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGtleVZhbHVlKSk7XG4gICAgICBzZXRWYWx1ZShrZXlWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihFUlJPUl9NRVNTQUdFKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXN0b3JhZ2UpIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmluZ2ZpZWRWYWx1ZSA9IHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICBpZiAoc3RyaW5nZmllZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKEpTT04ucGFyc2Uoc3RyaW5nZmllZFZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREYXRhKGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihFUlJPUl9NRVNTQUdFKTtcbiAgICB9XG4gIH0sIFtzdG9yYWdlXSk7XG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useStorage.js\n'
      );

      /***/
    },
});