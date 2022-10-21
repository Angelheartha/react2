/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".main.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/static/frontend/public/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontendend/src/axiosApi.js":
/*!*************************************!*\
  !*** ./frontendend/src/axiosApi.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// djsr/frontend/src/axiosApi.js\n\nvar baseURL = 'http://127.0.0.1:8000/cores';\nvar axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: baseURL,\n  timeout: 5000,\n  headers: {\n    'Authorization': localStorage.getItem('access_token') ? \"JWT \" + localStorage.getItem('access_token') : null,\n    'Content-Type': 'application/json',\n    'accept': 'application/json'\n  }\n});\naxiosInstance.interceptors.response.use(function (response) {\n  return response;\n}, function (error) {\n  var originalRequest = error.config; // Prevent infinite loops early\n\n  if (error.response.status === 401 && originalRequest.url === baseURL + 'token/refresh/') {\n    window.location.href = '/login/';\n    return Promise.reject(error);\n  }\n\n  if (error.response.data.code === \"token_not_valid\" && error.response.status === 401 && error.response.statusText === \"Unauthorized\") {\n    var refreshToken = localStorage.getItem('refresh_token');\n\n    if (refreshToken) {\n      var tokenParts = JSON.parse(atob(refreshToken.split('.')[1])); // exp date in token is expressed in seconds, while now() returns milliseconds:\n\n      var now = Math.ceil(Date.now() / 1000);\n      console.log(tokenParts.exp);\n\n      if (tokenParts.exp > now) {\n        return axiosInstance.post('/token/refresh/', {\n          refresh: refreshToken\n        }).then(function (response) {\n          localStorage.setItem('access_token', response.data.access);\n          localStorage.setItem('refresh_token', response.data.refresh);\n          axiosInstance.defaults.headers['Authorization'] = \"JWT \" + response.data.access;\n          originalRequest.headers['Authorization'] = \"JWT \" + response.data.access;\n          return axiosInstance(originalRequest);\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n      } else {\n        console.log(\"Refresh token is expired\", tokenParts.exp, now);\n        window.location.href = '/login/';\n      }\n    } else {\n      console.log(\"Refresh token not available.\");\n      window.location.href = '/login/';\n    }\n  } // specific error handling done elsewhere\n\n\n  return Promise.reject(error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (axiosInstance);\n\n//# sourceURL=webpack:///./frontendend/src/axiosApi.js?");

/***/ }),

/***/ "./frontendend/src/components/App.js":
/*!*******************************************!*\
  !*** ./frontendend/src/components/App.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ \"./frontendend/src/components/login.js\");\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ \"./frontendend/src/components/signup.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./frontendend/src/components/home.js\");\n/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard */ \"./frontendend/src/components/Dashboard.js\");\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../axiosApi */ \"./frontendend/src/axiosApi.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ \"./frontendend/src/components/Modal.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-alert */ \"./node_modules/react-alert/dist/esm/react-alert.js\");\nvar _this = undefined;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      viewCompleted = _useState2[0],\n      setViewCompleted = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      todoList = _useState4[0],\n      setTodoList = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      modal = _useState6[0],\n      setModal = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState8 = _slicedToArray(_useState7, 2),\n      how = _useState8[0],\n      setHow = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      what = _useState10[0],\n      setWhat = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: \"\",\n    description: \"\",\n    completed: false\n  }),\n      _useState12 = _slicedToArray(_useState11, 2),\n      activeItem = _useState12[0],\n      setActiveItem = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState14 = _slicedToArray(_useState13, 2),\n      isModalOpen = _useState14[0],\n      setIsModalOpen = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState16 = _slicedToArray(_useState15, 2),\n      description = _useState16[0],\n      setDescription = _useState16[1];\n\n  var alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_9__[\"useAlert\"])();\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState18 = _slicedToArray(_useState17, 2),\n      input = _useState18[0],\n      setInput = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState20 = _slicedToArray(_useState19, 2),\n      textarea = _useState20[0],\n      setTextarea = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"未ログイン\"),\n      _useState22 = _slicedToArray(_useState21, 2),\n      loggedInStatus = _useState22[0],\n      setLoggedInStatus = _useState22[1]; //const [user, setUser]=useState({});//\n\n\n  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useLocation\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    refreshList();\n    checkLoginStatus();\n    checkLoginStatus();\n  }, []); // useEffect(() => {\n  //checkLoginStatus()\n  //})\n\n  var checkLoginStatus = function checkLoginStatus() {\n    _axiosApi__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"core/token/refresh\", {\n      withCredentials: true\n    }).then(function (response) {\n      if (response.statusText && loggedInStatus === \"未ログイン\") {\n        setLoggedInStatus(\"ログインなう\");\n        console.log(\"loo\"); //setUser(response.data.user)\n      } else if (!response.statusText && loggedInStatus === \"ログインなう\") {\n        console.log(\"lo\");\n        setLoggedInStatus(\"未ログイン\"); //setUser({})\n      }\n    })[\"catch\"](function (error) {\n      console.log(\"ログインエラー\", error);\n    });\n  };\n\n  var handleLogout = function handleLogout() {\n    setLoggedInStatus(\"未ログイン\"); //setUser({})\n  };\n\n  var handleLogin = function handleLogin() {\n    setLoggedInStatus(\"ログインなう\"); //setUser(data.user)//\n  };\n\n  var handleSuccessfulAuthentication = function handleSuccessfulAuthentication() {\n    console.log('miss');\n    navigate(\"/Dashboard\");\n    handleLogin();\n  };\n\n  var componentDidMount = function componentDidMount(props) {\n    refreshList();\n  };\n\n  var refreshList = function refreshList(props) {\n    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"http://localhost:8000/api/todos/\").then(function (res) {\n      return setTodoList(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var Act = function Act(props) {\n    var alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_9__[\"useAlert\"])();\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"overlay\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"modal\",\n      className: \"modall\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: function onSubmit() {\n        _this.handleSubmit();\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"E-mail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Message\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"I am available at this moment!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: props.onClick\n    }, \"Close\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: aalert\n    }, \"Submit\")))));\n  };\n\n  var aalert = function aalert() {\n    alert.success('your message is already sent!! i reply in 5 days bussine daysss');\n    setInput([]);\n    setTextarea([]);\n  };\n\n  var toggle = function toggle() {\n    setModal(!modal);\n  };\n\n  var handleSubmit = function handleSubmit(item, props) {\n    setModal(!modal);\n\n    if (item.id) {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.put(\"http://localhost:8000/api/todos/\".concat(item.id, \"/\"), item).then(function () {\n        return refreshList();\n      });\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:8000/api/todos/\", item).then(function () {\n      return refreshList();\n    });\n    alert.success('Well done!!!');\n  };\n\n  var handleDelete = function handleDelete(item, props) {\n    axios__WEBPACK_IMPORTED_MODULE_8___default.a[\"delete\"](\"http://localhost:8000/api/todos/\".concat(item.id, \"/\")).then(function (res) {\n      return refreshList();\n    });\n    alert.success('Bye-Bye');\n  };\n\n  var createItem = function createItem(props) {\n    var item = {\n      title: \"\",\n      description: \"\",\n      completed: false\n    };\n    setActiveItem(item);\n    setModal(!modal);\n  };\n\n  var editItem = function editItem(item, props) {\n    setActiveItem(item);\n    setModal(!modal);\n  };\n\n  var displayCompleted = function displayCompleted(status) {\n    if (status) {\n      return setViewCompleted(true);\n    } else {\n      return setViewCompleted(false);\n    }\n\n    ;\n  };\n\n  var renderTabList = function renderTabList(props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"nav nav-tabs\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      onClick: function onClick() {\n        return displayCompleted(true);\n      },\n      className: viewCompleted ? \"btn btn-danger active\" : \"btn btn-light\"\n    }, \"Complete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      onClick: function onClick() {\n        return displayCompleted(false);\n      },\n      className: viewCompleted ? \"btn btn-light\" : \"btn btn-danger active\"\n    }, \"Incomplete\"));\n  };\n\n  var renderItems = function renderItems(props) {\n    var newItems = todoList.filter(function (item) {\n      return item.completed === viewCompleted;\n    });\n    return newItems.map(function (item, props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"list-group-item d-flex justify-content-between align-items-center\",\n        key: item.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"todo-title mr-2 \".concat(viewCompleted ? \"completed-todo\" : \"\"),\n        title: item.description\n      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"btn btn-secondary mr-2\",\n        onClick: function onClick() {\n          return editItem(item);\n        }\n      }, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"btn btn-danger\",\n        onClick: function onClick() {\n          return handleDelete(item);\n        }\n      }, \"Delete\")));\n    });\n  };\n\n  var whattodo = function whattodo() {\n    setDescription(\"You can write any recommendations for language studies on the Description. anything is ok\");\n  };\n\n  var howtodo = function howtodo() {\n    setDescription(\"You should write the day and to whom you write on the Title.⇒(ex).title:7/7 for Hamuster\");\n  };\n\n  var closeModal = function closeModal() {\n    setIsModalOpen(false);\n  };\n\n  var openModal = function openModal() {\n    setIsModalOpen(true);\n  };\n\n  var todolist = function todolist() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"nav-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"navi white How btn btn-primary\",\n      onClick: howtodo\n    }, \"How to use\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"navi What btn btn-primary\",\n      onClick: whattodo\n    }, \"What to write\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"navi contact btn btn-primary\",\n      onClick: function onClick() {\n        openModal();\n      }\n    }, \"Contact\")), isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Act, {\n      onClick: function onClick() {\n        closeModal();\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"howtitle\"\n    }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"text-uppercase text-center my-4\"\n    }, \"Memo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-6 col-sm-10 mx-auto p-0\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card p-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"mb-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn btn-primary\",\n      onClick: createItem\n    }, \"Add\")), renderTabList(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"list-group list-group-flush border-top-0\"\n    }, renderItems()))))), modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      activeItem: activeItem,\n      toggle: toggle,\n      onSave: handleSubmit\n    }));\n  }; //const handleLogout = async () => {\n  //    try {\n  //        const response = await axiosInstance.post('/blacklist/', {\n  //            \"refresh_token\": localStorage.getItem(\"refresh_token\")\n  //        });\n  //        localStorage.removeItem('access_token');\n  //        localStorage.removeItem('refresh_token');\n  //        axiosInstance.defaults.headers['Authorization'] = null;\n  //        return response;\n  //    }\n  //    catch (e) {\n  //        console.log(e);\n  //    }\n  //};\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"site\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"bottonss\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-linkk\",\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-linkk\",\n    to: \"/login/\"\n  }, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-linkk\",\n    to: \"/signup/\"\n  }, \"Signup\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"nav-linkk\",\n    to: \"/Dashboard/\"\n  }, \"Dashboard\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"nav-bot\",\n    onClick: handleLogout\n  }, \"Logout\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"golinks\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"message\"\n  }, \"You are always welcome!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Routes\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/login/\",\n    element:\n    /*#__PURE__*/\n    //<Login/>\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      handleSuccessfulAuthentication: handleSuccessfulAuthentication,\n      handleLogin: handleLogin\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/signup/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      handleLogin: handleLogin\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      handleLogin: handleLogin,\n      handleLogout: handleLogout,\n      loggedInStatus: loggedInStatus\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/Dashboard/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      loggedInStatus: loggedInStatus\n    })\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./frontendend/src/components/App.js?");

/***/ }),

/***/ "./frontendend/src/components/Dashboard.js":
/*!*************************************************!*\
  !*** ./frontendend/src/components/Dashboard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./frontendend/src/components/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./frontendend/src/components/login.js\");\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup */ \"./frontendend/src/components/signup.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ \"./frontendend/src/components/home.js\");\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../axiosApi */ \"./frontendend/src/axiosApi.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ \"./frontendend/src/components/Modal.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-alert */ \"./node_modules/react-alert/dist/esm/react-alert.js\");\nvar _this = undefined;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Dashboard = function Dashboard(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    refreshList();\n  }, []);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      viewCompleted = _useState2[0],\n      setViewCompleted = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      todoList = _useState4[0],\n      setTodoList = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      modal = _useState6[0],\n      setModal = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState8 = _slicedToArray(_useState7, 2),\n      how = _useState8[0],\n      setHow = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState10 = _slicedToArray(_useState9, 2),\n      what = _useState10[0],\n      setWhat = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    title: \"\",\n    description: \"\",\n    completed: false\n  }),\n      _useState12 = _slicedToArray(_useState11, 2),\n      activeItem = _useState12[0],\n      setActiveItem = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState14 = _slicedToArray(_useState13, 2),\n      isModalOpen = _useState14[0],\n      setIsModalOpen = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState16 = _slicedToArray(_useState15, 2),\n      description = _useState16[0],\n      setDescription = _useState16[1];\n\n  var alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_9__[\"useAlert\"])();\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState18 = _slicedToArray(_useState17, 2),\n      input = _useState18[0],\n      setInput = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState20 = _slicedToArray(_useState19, 2),\n      textarea = _useState20[0],\n      setTextarea = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"未ログイン\"),\n      _useState22 = _slicedToArray(_useState21, 2),\n      loggedInStatus = _useState22[0],\n      setLoggedInStatus = _useState22[1];\n\n  var whattodo = function whattodo() {\n    setDescription(\"You can write any recommendations for language studies on the Description. anything is ok\");\n  };\n\n  var howtodo = function howtodo() {\n    setDescription(\"You should write the day and to whom you write on the Title.⇒(ex).title:7/7 for Hamuster\");\n  };\n\n  var closeModal = function closeModal() {\n    setIsModalOpen(false);\n  };\n\n  var openModal = function openModal() {\n    setIsModalOpen(true);\n  };\n\n  var createItem = function createItem(props) {\n    var item = {\n      title: \"\",\n      description: \"\",\n      completed: false\n    };\n    setActiveItem(item);\n    setModal(!modal);\n  };\n\n  var renderTabList = function renderTabList(props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"nav nav-tabs\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n      onClick: function onClick() {\n        return displayCompleted(true);\n      },\n      className: viewCompleted ? \"btn btn-danger active\" : \"btn btn-light\"\n    }, \"Complete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n      onClick: function onClick() {\n        return displayCompleted(false);\n      },\n      className: viewCompleted ? \"btn btn-light\" : \"btn btn-danger active\"\n    }, \"Incomplete\"));\n  };\n\n  var renderItems = function renderItems(props) {\n    var newItems = todoList.filter(function (item) {\n      return item.completed === viewCompleted;\n    });\n    return newItems.map(function (item, props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n        className: \"list-group-item d-flex justify-content-between align-items-center\",\n        key: item.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n        className: \"todo-title mr-2 \".concat(viewCompleted ? \"completed-todo\" : \"\"),\n        title: item.description\n      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n        className: \"btn btn-secondary mr-2\",\n        onClick: function onClick() {\n          return editItem(item);\n        }\n      }, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n        className: \"btn btn-danger\",\n        onClick: function onClick() {\n          return handleDelete(item);\n        }\n      }, \"Delete\")));\n    });\n  };\n\n  var toggle = function toggle() {\n    setModal(!modal);\n  };\n\n  var handleSubmit = function handleSubmit(item, props) {\n    setModal(!modal);\n\n    if (item.id) {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.put(\"http://localhost:8000/api/todos/\".concat(item.id, \"/\"), item).then(function () {\n        return refreshList();\n      });\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:8000/api/todos/\", item).then(function () {\n      return refreshList();\n    });\n    alert.success('Well done!!!');\n  };\n\n  var refreshList = function refreshList(props) {\n    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"http://localhost:8000/api/todos/\").then(function (res) {\n      return setTodoList(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  var displayCompleted = function displayCompleted(status) {\n    if (status) {\n      return setViewCompleted(true);\n    } else {\n      return setViewCompleted(false);\n    }\n\n    ;\n  };\n\n  var editItem = function editItem(item, props) {\n    setActiveItem(item);\n    setModal(!modal);\n  };\n\n  var handleDelete = function handleDelete(item, props) {\n    axios__WEBPACK_IMPORTED_MODULE_8___default.a[\"delete\"](\"http://localhost:8000/api/todos/\".concat(item.id, \"/\")).then(function (res) {\n      return refreshList();\n    });\n    alert.success('Bye-Bye');\n  };\n\n  var Act = function Act(props) {\n    var alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_9__[\"useAlert\"])();\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      id: \"overlay\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      id: \"modal\",\n      className: \"modall\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n      onSubmit: function onSubmit() {\n        _this.handleSubmit();\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"E-mail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Message\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"I am available at this moment!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      onClick: props.onClick\n    }, \"Close\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: aalert\n    }, \"Submit\")))));\n  };\n\n  var aalert = function aalert() {\n    alert.success('your message is already sent!! i reply in 5 days bussine daysss');\n    setInput([]);\n    setTextarea([]);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Dashboard\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"\\u30ED\\u30B0\\u30A4\\u30F3\\u72B6\\u614B:\", props.loggedInStatus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"main\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"nav-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"button3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"navi white How btn btn-primary\",\n    onClick: howtodo\n  }, \"How to use\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"navi What btn btn-primary\",\n    onClick: whattodo\n  }, \"What to write\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"navi contact btn btn-primary\",\n    onClick: function onClick() {\n      openModal();\n    }\n  }, \"Contact\")), isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Act, {\n    onClick: function onClick() {\n      closeModal();\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    className: \"howtitle\"\n  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", {\n    className: \"text-uppercase text-center my-4\"\n  }, \"Memo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"col-md-6 col-sm-10 mx-auto p-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"card p-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"mb-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"btn btn-primary\",\n    onClick: createItem\n  }, \"Add\")), renderTabList(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    className: \"list-group list-group-flush border-top-0\"\n  }, renderItems()))))), modal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    activeItem: activeItem,\n    toggle: toggle,\n    onSave: handleSubmit\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\n//# sourceURL=webpack:///./frontendend/src/components/Dashboard.js?");

/***/ }),

/***/ "./frontendend/src/components/Modal.js":
/*!*********************************************!*\
  !*** ./frontendend/src/components/Modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CustomModal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// frontend/src/components/Modal.js\n\n\n\nvar CustomModal = /*#__PURE__*/function (_Component) {\n  _inherits(CustomModal, _Component);\n\n  var _super = _createSuper(CustomModal);\n\n  function CustomModal(props) {\n    var _this;\n\n    _classCallCheck(this, CustomModal);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (e) {\n      var _e$target = e.target,\n          name = _e$target.name,\n          value = _e$target.value;\n\n      if (e.target.type === \"checkbox\") {\n        value = e.target.checked;\n      }\n\n      var activeItem = _objectSpread(_objectSpread({}, _this.state.activeItem), {}, _defineProperty({}, name, value));\n\n      _this.setState({\n        activeItem: activeItem\n      });\n    });\n\n    _this.state = {\n      activeItem: _this.props.activeItem\n    };\n    return _this;\n  }\n\n  _createClass(CustomModal, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          toggle = _this$props.toggle,\n          onSave = _this$props.onSave;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        isOpen: true,\n        toggle: toggle\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n        toggle: toggle\n      }, \" Todo Item \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        \"for\": \"title\"\n      }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"text\",\n        name: \"title\",\n        value: this.state.activeItem.title,\n        onChange: this.handleChange,\n        placeholder: \"Enter Todo Title\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        \"for\": \"description\"\n      }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"text\",\n        name: \"description\",\n        value: this.state.activeItem.description,\n        onChange: this.handleChange,\n        placeholder: \"Enter Todo description\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n        check: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n        \"for\": \"completed\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        type: \"checkbox\",\n        name: \"completed\",\n        checked: this.state.activeItem.completed,\n        onChange: this.handleChange\n      }), \"Completed\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalFooter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        color: \"success\",\n        onClick: function onClick() {\n          return onSave(_this2.state.activeItem);\n        }\n      }, \"Save\")));\n    }\n  }]);\n\n  return CustomModal;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./frontendend/src/components/Modal.js?");

/***/ }),

/***/ "./frontendend/src/components/home.js":
/*!********************************************!*\
  !*** ./frontendend/src/components/home.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup */ \"./frontendend/src/components/signup.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axiosApi */ \"./frontendend/src/axiosApi.js\");\n\n\n\n\n\n\nvar Home = function Home(props) {\n  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useNavigate\"])();\n\n  var handleSuccessfulAuthentication = function handleSuccessfulAuthentication(data) {\n    navigate(\"/Dashboard\");\n    props.handleLogin(data);\n  };\n\n  var handleLogoutClick = function handleLogoutClick() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"http://127.0.0.1:8000/\", {\n      withCredentials: true\n    }).then(function (response) {\n      props.handleLogout();\n      console.log(\"ll\");\n    })[\"catch\"](function (error) {\n      return console.log(\"ログアウトエラー\", error);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30ED\\u30B0\\u30A4\\u30F3\\u72B6\\u614B:\", props.loggedInStatus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleLogoutClick\n  }, \"\\u30ED\\u30B0\\u30A2\\u30A6\\u30C8\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./frontendend/src/components/home.js?");

/***/ }),

/***/ "./frontendend/src/components/login.js":
/*!*********************************************!*\
  !*** ./frontendend/src/components/login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosApi */ \"./frontendend/src/axiosApi.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n // Login関数コンポーネントへ書き換え\n\nfunction Login(props) {\n  // password_confirmationフィールドを削除\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      username = _useState6[0],\n      setUsername = _useState6[1];\n\n  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"useNavigate\"])();\n\n  var handleSuccessfulAuthentication = function handleSuccessfulAuthentication(data) {\n    navigate(\"/Dashboard\");\n    props.handleLogin();\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    // 通信先のURLを/loginに書き換え\n    _axiosApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/token/obtain/\", {\n      // ここのpassword_confirmationフィールドも削除\n      username: username,\n      email: email,\n      password: password\n    }, {\n      withCredentials: true\n    }).then(function (response) {\n      //props.handleLogin()//\n      //console.log(response)//\n      console.log(response);\n\n      if (response.statusText === \"OK\") {\n        handleSuccessfulAuthentication(response.data);\n        console.log(response);\n      }\n    })[\"catch\"](function (error) {\n      console.log(\"registration error\", error);\n    });\n    event.preventDefault();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u30ED\\u30B0\\u30A4\\u30F3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\",\n    value: email,\n    onChange: function onChange(event) {\n      return setEmail(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    placeholder: \"\\u30D1\\u30B9\\u30EF\\u30FC\\u30C9\",\n    value: password,\n    onChange: function onChange(event) {\n      return setPassword(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"username\",\n    name: \"username\",\n    placeholder: \"\\u30E6\\u30FC\\u30B6\\u30FC\\u540D\",\n    value: username,\n    onChange: function onChange(event) {\n      return setUsername(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \"\\u30ED\\u30B0\\u30A4\\u30F3\")));\n}\n\n//# sourceURL=webpack:///./frontendend/src/components/login.js?");

/***/ }),

/***/ "./frontendend/src/components/reportWebVitals.js":
/*!*******************************************************!*\
  !*** ./frontendend/src/components/reportWebVitals.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reportWebVitals = function reportWebVitals(onPerfEntry) {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ \"./node_modules/web-vitals/dist/web-vitals.js\")).then(function (_ref) {\n      var getCLS = _ref.getCLS,\n          getFID = _ref.getFID,\n          getFCP = _ref.getFCP,\n          getLCP = _ref.getLCP,\n          getTTFB = _ref.getTTFB;\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reportWebVitals);\n\n//# sourceURL=webpack:///./frontendend/src/components/reportWebVitals.js?");

/***/ }),

/***/ "./frontendend/src/components/signup.js":
/*!**********************************************!*\
  !*** ./frontendend/src/components/signup.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _axiosApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosApi */ \"./frontendend/src/axiosApi.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Signup = function Signup(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      username = _useState6[0],\n      setUsername = _useState6[1];\n\n  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useNavigate\"])();\n\n  var handleSuccessfulAuthentication = function handleSuccessfulAuthentication(data) {\n    navigate(\"/Dashboard\"); //props.handleLogin()//\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    _axiosApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/user/create/', {\n      username: username,\n      email: email,\n      password: password\n    }, {\n      withCredentials: true\n    }).then(function (response) {\n      props.handleLogin();\n\n      if (response.statusText === 'Created') {\n        handleSuccessfulAuthentication(response.data);\n      }\n    })[\"catch\"](function (error) {\n      console.log(\"registration error\");\n    });\n    event.preventDefault();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Signup\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"form\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\",\n    value: email,\n    onChange: function onChange(event) {\n      return setEmail(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    placeholder: \"\\u30D1\\u30B9\\u30EF\\u30FC\\u30C9\",\n    value: password,\n    onChange: function onChange(event) {\n      return setPassword(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"username\",\n    name: \"username\",\n    placeholder: \"\\u30E6\\u30FC\\u30B6\\u30FC\\u540D\",\n    value: username,\n    onChange: function onChange(event) {\n      return setUsername(event.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \"\\u767B\\u9332\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./frontendend/src/components/signup.js?");

/***/ }),

/***/ "./frontendend/src/index.js":
/*!**********************************!*\
  !*** ./frontendend/src/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./frontendend/src/components/App.js\");\n/* harmony import */ var _components_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/reportWebVitals */ \"./frontendend/src/components/reportWebVitals.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alert */ \"./node_modules/react-alert/dist/esm/react-alert.js\");\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alert-template-basic */ \"./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_9__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n //import ReactDOM from 'react-dom';\n\n //import 'bootstrap/dist/css/bootstrap.css';\n//import './components/index.css';\n\n\n\n\n\n\n\n\n //const root = createRoot(container);\n\nvar rootElement = document.getElementById('root');\nvar root = Object(react_dom_client__WEBPACK_IMPORTED_MODULE_1__[\"createRoot\"])(rootElement);\nvar options = {\n  // you can also just use 'bottom center'\n  position: react_alert__WEBPACK_IMPORTED_MODULE_5__[\"positions\"].BOTTOM_CENTER,\n  timeout: 2500,\n  offset: '240px',\n  // you can also just use 'scale'\n  transition: react_alert__WEBPACK_IMPORTED_MODULE_5__[\"transitions\"].SCALE\n};\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_alert__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], _extends({\n  template: react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));\n\n//# sourceURL=webpack:///./frontendend/src/index.js?");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\axios\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\babel-polyfill\\\\lib\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_cjs_js_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./bootstrap.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap/dist/css/bootstrap.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_css_loader_dist_cjs_js_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\bootstrap\\\\dist\\\\js\\\\bootstrap.js'\");\n\n//# sourceURL=webpack:///./node_modules/bootstrap/dist/js/bootstrap.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\bootstrap\\\\dist\\\\css\\\\bootstrap.css'\");\n\n//# sourceURL=webpack:///./node_modules/bootstrap/dist/css/bootstrap.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\react-alert-template-basic\\\\dist\\\\esm\\\\react-alert-template-basic.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js?");

/***/ }),

/***/ "./node_modules/react-alert/dist/esm/react-alert.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-alert/dist/esm/react-alert.js ***!
  \**********************************************************/
/*! exports provided: Provider, positions, transitions, types, useAlert, withAlert */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\react-alert\\\\dist\\\\esm\\\\react-alert.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-alert/dist/esm/react-alert.js?");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\react-dom\\\\client.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/client.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\react-dom\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/dist/index.js ***!
  \*****************************************************/
/*! exports provided: AbortedDeferredError, Await, MemoryRouter, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_DataStaticRouterContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_enhanceManualRouteObjects, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, renderMatches, resolvePath, useActionData, useAsyncError, useAsyncValue, useHref, useInRouterContext, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, BrowserRouter, Form, HashRouter, Link, NavLink, ScrollRestoration, createBrowserRouter, createHashRouter, createSearchParams, unstable_HistoryRouter, useFetcher, useFetchers, useFormAction, useLinkClickHandler, useSearchParams, useSubmit */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\react-router-dom\\\\dist\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-router-dom/dist/index.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\react\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/reactstrap/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/index.js ***!
  \*********************************************/
/*! exports provided: Container, Row, Col, Navbar, NavbarBrand, NavbarText, NavbarToggler, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem, Button, ButtonToggle, ButtonDropdown, ButtonGroup, ButtonToolbar, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, DropdownContext, Fade, Badge, Card, CardGroup, CardDeck, CardColumns, CardBody, CardLink, CardFooter, CardHeader, CardImg, CardImgOverlay, Carousel, UncontrolledCarousel, CarouselControl, CarouselItem, CarouselIndicators, CarouselCaption, CardSubtitle, CardText, CardTitle, CustomFileInput, CustomInput, PopperContent, PopperTargetHelper, Popover, UncontrolledPopover, PopoverHeader, PopoverBody, Progress, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip, Table, ListGroup, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Label, Media, Pagination, PaginationItem, PaginationLink, TabContent, TabPane, Jumbotron, Alert, Toast, ToastBody, ToastHeader, Collapse, ListGroupItem, ListGroupItemHeading, ListGroupItemText, List, ListInlineItem, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCollapse, UncontrolledDropdown, UncontrolledTooltip, Spinner, Util, Polyfill */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\reactstrap\\\\es\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/reactstrap/es/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\aisur\\\\PycharmProjects\\\\pythonProject9\\\\react2\\\\django-todo-react\\\\backend\\\\node_modules\\\\style-loader\\\\dist\\\\runtime\\\\injectStylesIntoStyleTag.js'\");\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi babel-polyfill ./frontendend/src/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\aisur\\PycharmProjects\\pythonProject9\\react2\\django-todo-react\\backend\\frontendend\\src\\index.js */\"./frontendend/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./frontendend/src/index.js?");

/***/ })

/******/ });