"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/TaskList.tsx":
/*!*********************************!*\
  !*** ./components/TaskList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/TaskStore */ \"(app-client)/./stores/TaskStore.ts\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"(app-client)/./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"(app-client)/./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TaskList = ()=>{\n    _s();\n    const [selectedTask, setSelectedTask] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleCheck = (id)=>{\n        const newSelectedTask = [\n            ...selectedTask\n        ];\n        const isTaskSelected = newSelectedTask.indexOf(id) !== -1;\n        if (isTaskSelected) {\n            newSelectedTask.splice(newSelectedTask.indexOf(id), 1);\n        } else {\n            newSelectedTask.push(id);\n        }\n        setSelectedTask(newSelectedTask);\n    };\n    const handleDelete = ()=>{\n        // checking opened task\n        if (_stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].task.id) {\n            let isPresent = selectedTask.filter((id, i)=>id === _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].task.id);\n            if (isPresent) {\n                _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetTask();\n            }\n        }\n        _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteTask(selectedTask);\n        setSelectedTask([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between p-2 shadow-lg bg-slate-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Total: \",\n                                    _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: selectedTask.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-fit\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDelete, {\n                                    className: \"w-5 h-5 text-red-500 hover:scale-110 hover:text-red-600\",\n                                    onClick: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm\",\n                                    children: selectedTask.length\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[calc(100%-100px)] flex justify-center items-center overflow-hidden overflow-y-auto \",\n                children: _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"table w-full h-full \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"w-full max-h-[calc(100%-100px)] overflow-hidden overflow-y-auto bg-transparent\",\n                        children: _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.map((task)=>{\n                            var _task_date, _task_date1;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                onClick: ()=>{\n                                    setActive(task.id);\n                                    _stores_TaskStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setTask(task);\n                                },\n                                className: active === task.id ? \"m-1 flex items-center bg-teal-200 justify-between w-full p-1 cursor-pointer group hover:bg-teal-300\" : \"flex  items-center justify-between w-full p-1 cursor-pointer group hover:bg-teal-300\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"cursor-\",\n                                                name: \"\",\n                                                id: \"\",\n                                                onChange: (e)=>handleCheck(task.id),\n                                                onClick: (e)=>e.stopPropagation()\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            \" \",\n                                            task.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"p-1 text-xs \".concat(task.status === \"To Do\" ? \"bg-red-300\" : task.status === \"In Progress\" ? \"bg-yellow-300\" : \"bg-green-300\", \" rounded-md group-hover:cursor-text\"),\n                                            children: task.status\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: (_task_date = task.date) === null || _task_date === void 0 ? void 0 : _task_date.split(\",\")[0]\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 13\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xs\",\n                                                    children: (_task_date1 = task.date) === null || _task_date1 === void 0 ? void 0 : _task_date1.split(\",\")[1].trim()\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 13\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, task.id, true, {\n                                fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No Task Found\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 4\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bkcja\\\\Desktop\\\\Projects\\\\task-management\\\\components\\\\TaskList.tsx\",\n        lineNumber: 39,\n        columnNumber: 4\n    }, undefined);\n};\n_s(TaskList, \"xyxbn9kqdSJAOsP+Ry602SaWWzU=\");\n_c = TaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(TaskList));\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskList\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixhQUFBQSxLQUFLMkIsSUFBSSxjQUFUM0IsaUNBQUFBLFdBQVc0QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs4REFDNUIsOERBQUNoQjtvREFBRUwsV0FBVTsrREFBV1AsY0FBQUEsS0FBSzJCLElBQUksY0FBVDNCLGtDQUFBQSxZQUFXNEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFUaEQ3QixLQUFLUCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OENBZXJCLDhEQUFDbUI7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTU47R0E3RU0xQjtLQUFBQTtBQStFTiwrREFBZSxNQUFBRixvREFBUUEsQ0FBQ0UsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2tMaXN0LnRzeD85N2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHRhc2tTdG9yZSBmcm9tICdAL3N0b3Jlcy9UYXNrU3RvcmUnXHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCB7IE1kRGVsZXRlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5cclxuXHJcbmNvbnN0IFRhc2tMaXN0OlJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhc2ssIHNldFNlbGVjdGVkVGFza10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG5jb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG5cclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVDaGVjayA9ICggaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBuZXdTZWxlY3RlZFRhc2sgPSBbLi4uc2VsZWN0ZWRUYXNrXTtcclxuICAgIGNvbnN0IGlzVGFza1NlbGVjdGVkID0gbmV3U2VsZWN0ZWRUYXNrLmluZGV4T2YoaWQpICE9PSAtMTtcclxuICAgIGlmKGlzVGFza1NlbGVjdGVkKXtcclxuICAgICAgbmV3U2VsZWN0ZWRUYXNrLnNwbGljZShuZXdTZWxlY3RlZFRhc2suaW5kZXhPZihpZCksIDEpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIG5ld1NlbGVjdGVkVGFzay5wdXNoKGlkKTtcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkVGFzayhuZXdTZWxlY3RlZFRhc2spO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgLy8gY2hlY2tpbmcgb3BlbmVkIHRhc2tcclxuICAgIGlmKHRhc2tTdG9yZS50YXNrLmlkKXtcclxuICAgICAgbGV0IGlzUHJlc2VudCA9IHNlbGVjdGVkVGFzay5maWx0ZXIoKGlkLGkpPT5pZD09PXRhc2tTdG9yZS50YXNrLmlkKVxyXG4gICAgIGlmKGlzUHJlc2VudCl7XHJcbiAgICAgICB0YXNrU3RvcmUucmVzZXRUYXNrKClcclxuICAgICB9XHJcbiAgICB9XHJcbiAgICB0YXNrU3RvcmUuZGVsZXRlVGFzayhzZWxlY3RlZFRhc2spO1xyXG4gICAgc2V0U2VsZWN0ZWRUYXNrKFtdKTtcclxuICB9XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtWzEwMCVdICc+XHJcbnsvKmNyZWF0ZSBUYWcgd2hpY2ggc2hvdyB0b3RvbCB0YXNrcywgc2VsZWN0ZWQgdGFza3MgZXRjLi4qL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHAtMiBzaGFkb3ctbGcgYmctc2xhdGUtNTAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHctZnVsbCc+XHJcbiAgICAgICAgICA8c3Bhbj5Ub3RhbDoge3Rhc2tTdG9yZS50YXNrcy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZml0Jz5cclxuICAgICAgICAgICAgICA8TWREZWxldGUgY2xhc3NOYW1lPSd3LTUgaC01IHRleHQtcmVkLTUwMCBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6dGV4dC1yZWQtNjAwJyAgb25DbGljaz17aGFuZGxlRGVsZXRlfS8+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSc+e3NlbGVjdGVkVGFzay5sZW5ndGh9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bY2FsYygxMDAlLTEwMHB4KV0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LXktYXV0byAnPlxyXG4gICAgIHtcclxuICAgICAgdGFza1N0b3JlLnRhc2tzLmxlbmd0aD4wP1xyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB3LWZ1bGwgaC1mdWxsICc+XHJcbiAgICAgIDx0Ym9keSBjbGFzc05hbWU9J3ctZnVsbCBtYXgtaC1bY2FsYygxMDAlLTEwMHB4KV0gb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LXktYXV0byBiZy10cmFuc3BhcmVudCc+XHJcbiAgICAgIHt0YXNrU3RvcmUudGFza3MubWFwKCh0YXNrKSA9PiAoXHJcbiAgICAgICAgPHRyIGtleT17dGFzay5pZH0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgIHNldEFjdGl2ZSh0YXNrLmlkKTtcclxuICAgICAgICAgIHRhc2tTdG9yZS5zZXRUYXNrKHRhc2spO1xyXG4gICAgICAgIH19IFxyXG4gICAgICAgIGNsYXNzTmFtZT17YWN0aXZlPT09dGFzay5pZD8nbS0xIGZsZXggaXRlbXMtY2VudGVyIGJnLXRlYWwtMjAwIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcC0xIGN1cnNvci1wb2ludGVyIGdyb3VwIGhvdmVyOmJnLXRlYWwtMzAwJzonZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcC0xIGN1cnNvci1wb2ludGVyIGdyb3VwIGhvdmVyOmJnLXRlYWwtMzAwJ30+ICBcclxuICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPSdjdXJzb3ItJyBuYW1lPVwiXCIgaWQ9XCJcIiBvbkNoYW5nZT17KGUpPT5oYW5kbGVDaGVjayh0YXNrLmlkKX0gb25DbGljaz17KGUpPT5lLnN0b3BQcm9wYWdhdGlvbigpfSAvPiB7dGFzay50aXRsZX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxzcGFuIGNsYXNzTmFtZT17YHAtMSB0ZXh0LXhzICR7dGFzay5zdGF0dXM9PT1cIlRvIERvXCI/XCJiZy1yZWQtMzAwXCI6KHRhc2suc3RhdHVzPT09XCJJbiBQcm9ncmVzc1wiP1wiYmcteWVsbG93LTMwMFwiOlwiYmctZ3JlZW4tMzAwXCIpfSByb3VuZGVkLW1kIGdyb3VwLWhvdmVyOmN1cnNvci10ZXh0YH0+e3Rhc2suc3RhdHVzfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgPHRkPjxkaXY+XHJcbiAgICAgICAgICAgIDxwPnt0YXNrLmRhdGU/LnNwbGl0KFwiLFwiKVswXX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyc+e3Rhc2suZGF0ZT8uc3BsaXQoXCIsXCIpWzFdLnRyaW0oKX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgKSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPjpcclxuICAgPHA+Tm8gVGFzayBGb3VuZDwvcD5cclxuICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoVGFza0xpc3QpXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRhc2tTdG9yZSIsIm9ic2VydmVyIiwiTWREZWxldGUiLCJUYXNrTGlzdCIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2hlY2siLCJpZCIsIm5ld1NlbGVjdGVkVGFzayIsImlzVGFza1NlbGVjdGVkIiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJoYW5kbGVEZWxldGUiLCJ0YXNrIiwiaXNQcmVzZW50IiwiZmlsdGVyIiwiaSIsInJlc2V0VGFzayIsImRlbGV0ZVRhc2siLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidGFza3MiLCJsZW5ndGgiLCJvbkNsaWNrIiwicCIsInRhYmxlIiwidGJvZHkiLCJtYXAiLCJ0ciIsInNldFRhc2siLCJ0ZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0aXRsZSIsInN0YXR1cyIsImRhdGUiLCJzcGxpdCIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/TaskList.tsx\n"));

/***/ })

});