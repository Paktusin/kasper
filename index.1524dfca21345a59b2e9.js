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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _localStorageService = __webpack_require__(10);

var _localStorageService2 = _interopRequireDefault(_localStorageService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StorageService = function (_LocalStorageService) {
    _inherits(StorageService, _LocalStorageService);

    function StorageService() {
        _classCallCheck(this, StorageService);

        return _possibleConstructorReturn(this, (StorageService.__proto__ || Object.getPrototypeOf(StorageService)).call(this, 'kasper'));
    }

    return StorageService;
}(_localStorageService2.default);

var storageService = angular.module('storageService', []).service('storageService', StorageService);

exports.default = storageService;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dataService = __webpack_require__(3);

var _dataService2 = _interopRequireDefault(_dataService);

var _storageService = __webpack_require__(0);

var _storageService2 = _interopRequireDefault(_storageService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @ngInject */
var AuthorService = function (_DataService) {
    AuthorService.$inject = ["storageService", "$q"];

    _inherits(AuthorService, _DataService);

    function AuthorService(storageService, $q) {
        _classCallCheck(this, AuthorService);

        var _this = _possibleConstructorReturn(this, (AuthorService.__proto__ || Object.getPrototypeOf(AuthorService)).call(this, storageService, $q));

        _this.name = 'author';
        _this.model = {
            name: '',
            last_name: ''
        };
        return _this;
    }

    return AuthorService;
}(_dataService2.default);

var authorService = angular.module('authorService', [_storageService2.default.name]).service('authorService', AuthorService);

exports.default = authorService;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dataService = __webpack_require__(3);

var _dataService2 = _interopRequireDefault(_dataService);

var _storageService = __webpack_require__(0);

var _storageService2 = _interopRequireDefault(_storageService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @ngInject */
var BookService = function (_DataService) {
    BookService.$inject = ["storageService", "$q"];

    _inherits(BookService, _DataService);

    function BookService(storageService, $q) {
        _classCallCheck(this, BookService);

        var _this = _possibleConstructorReturn(this, (BookService.__proto__ || Object.getPrototypeOf(BookService)).call(this, storageService, $q));

        _this.name = 'book';
        _this.model = {
            title: '',
            authors: [],
            pages: 0,
            publisher: null,
            publish_year: null,
            date: null,
            isbn: null,
            image: null
        };
        return _this;
    }

    return BookService;
}(_dataService2.default);

var bookService = angular.module('bookService', [_storageService2.default.name]).service('bookService', BookService);

exports.default = bookService;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var DataService = function () {
    function DataService(storageService, $q) {
        _classCallCheck(this, DataService);

        this.storageService = storageService;
        this.$q = $q;
        this.name = 'object';
        this.model = {};
    }

    _createClass(DataService, [{
        key: 'list',
        value: function list() {
            var _this = this;

            return this.$q(function (resolve) {
                return setTimeout(function () {
                    return resolve(_this.storageService.get(_this.name) || []);
                }, 500);
            });
        }
    }, {
        key: 'add',
        value: function add(object) {
            var _this2 = this;

            return this.$q(function (resolve) {
                _this2.list().then(function (objects) {
                    _this2.save([].concat(_toConsumableArray(objects), [object]));
                    resolve([].concat(_toConsumableArray(objects), [object]));
                });
            });
        }
    }, {
        key: 'save',
        value: function save(objects) {
            this.storageService.put(this.name, objects);
        }
    }, {
        key: 'update',
        value: function update(object) {
            var _this3 = this;

            return this.$q(function (resolve) {
                _this3.list().then(function (objects) {
                    var index = objects.findIndex(function (f_object) {
                        return f_object.id === object.id;
                    });
                    if (index === -1) throw Error(_this3.name + ' not found');
                    objects[index] = object;
                    _this3.save([].concat(_toConsumableArray(objects)));
                    resolve([].concat(_toConsumableArray(objects)));
                });
            });
        }
    }, {
        key: 'new',
        value: function _new() {
            var _this4 = this;

            return this.$q(function (resolve) {
                return _this4.getLastId().then(function (id) {
                    return resolve(_extends({}, _this4.model, { id: id }));
                });
            });
        }
    }, {
        key: 'remove',
        value: function remove(object) {
            var _this5 = this;

            var ask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.$q(function (resolve, reject) {
                if (ask && !confirm('\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u044B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C ' + _this5.name)) return reject();
                _this5.list().then(function (objects) {
                    var index = objects.findIndex(function (f_object) {
                        return f_object.id === object.id;
                    });
                    if (index === -1) throw Error(_this5.name + ' not found');
                    objects.splice(index, 1);
                    _this5.save([].concat(_toConsumableArray(objects)));
                    resolve([].concat(_toConsumableArray(objects)));
                });
            });
        }
    }, {
        key: 'getLastId',
        value: function getLastId() {
            var _this6 = this;

            return this.$q(function (resolve) {
                _this6.list().then(function (objects) {
                    return resolve(objects.reduce(function (id, object) {
                        return object.id >= id ? object.id : id;
                    }, 1) + 1);
                });
            });
        }
    }, {
        key: 'find',
        value: function find(id) {
            var _this7 = this;

            return this.$q(function (resolve) {
                _this7.list().then(function (objects) {
                    var object = objects.find(function (f_object) {
                        return f_object.id === id;
                    });
                    if (!object) throw Error(_this7.name + ' not found');
                    resolve(object);
                });
            });
        }
    }]);

    return DataService;
}();

exports.default = DataService;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

var _errorCatcher = __webpack_require__(29);

var _errorCatcher2 = _interopRequireDefault(_errorCatcher);

var _propsFilter = __webpack_require__(30);

var _propsFilter2 = _interopRequireDefault(_propsFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
    angular.bootstrap(document, [_app2.default.name, _errorCatcher2.default.name, _propsFilter2.default.name]);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _app = __webpack_require__(7);

var _app2 = _interopRequireDefault(_app);

var _bookList = __webpack_require__(8);

var _bookList2 = _interopRequireDefault(_bookList);

var _mainNav = __webpack_require__(13);

var _mainNav2 = _interopRequireDefault(_mainNav);

var _bookEdit = __webpack_require__(15);

var _bookEdit2 = _interopRequireDefault(_bookEdit);

var _authorEdit = __webpack_require__(24);

var _authorEdit2 = _interopRequireDefault(_authorEdit);

var _authorList = __webpack_require__(26);

var _authorList2 = _interopRequireDefault(_authorList);

var _storageService = __webpack_require__(0);

var _storageService2 = _interopRequireDefault(_storageService);

var _translate = __webpack_require__(28);

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject*/
var AppCtrl = function AppCtrl(storageService) {
    _classCallCheck(this, AppCtrl);

    var sampleAuthor = {
        id: 1,
        name: 'Александр',
        last_name: 'Пушкин'
    };
    var sampleBook = {
        id: 1,
        title: 'Все сказки Пушкина',
        pages: 144,
        authors: [sampleAuthor],
        date: '2013-11-13T21:00:00.000Z',
        isbn: '048665088X',
        publish_year: 2013,
        publisher: 'Просвещение',
        image: 'data:image/jpeg;base64,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'
    };
    if (!storageService.get('book') && !storageService.get('author')) {
        storageService.put('book', [sampleBook, _extends({}, sampleBook, { title: 'Еще сказки', publish_year: 2009 })]);
        storageService.put('author', [sampleAuthor]);
    }
};

AppCtrl.$inject = ["storageService"];


var appName = 'app';
var app = angular.module(appName, ['ui.router', _bookList2.default.name, _mainNav2.default.name, _bookEdit2.default.name, _authorEdit2.default.name, _authorList2.default.name, 'ngSanitize', _storageService2.default.name]).config( /*@ngInject*/["$urlRouterProvider", function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]).filter('translate', function () {
    return function (items, props) {
        return _translate2.default[items.toLowerCase()] || items;
    };
}).component(appName, {
    templateUrl: _app2.default,
    controller: AppCtrl
});
exports.default = app;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5be6a536fed29bd2e7a1cba7d3ab4f26.html";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bookList = __webpack_require__(9);

var _bookList2 = _interopRequireDefault(_bookList);

var _bookService = __webpack_require__(2);

var _bookService2 = _interopRequireDefault(_bookService);

var _storageService = __webpack_require__(0);

var _storageService2 = _interopRequireDefault(_storageService);

var _loader = __webpack_require__(11);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject*/
var BookListCtrl = function () {
    function BookListCtrl(bookService, $stateParams, storageService) {
        _classCallCheck(this, BookListCtrl);

        this.books = [];
        this.bookService = bookService;
        this.isLoading = false;
        this.isAdmin = $stateParams.admin;
        this.query = '';
        this.storageService = storageService;
        this.order = this.storageService.get('order') || { field: 'title', asc: 1 };
    }

    _createClass(BookListCtrl, [{
        key: 'setOrder',
        value: function setOrder(newOrder) {
            this.order = newOrder;
            this.storageService.put('order', this.order);
        }
    }, {
        key: 'filteredBooks',
        value: function filteredBooks() {
            var _this = this;

            return this.books.filter(function (book) {
                return _this.query.length === 0 || book.title.toLowerCase().indexOf(_this.query.toLowerCase()) !== -1;
            }).sort(function (bookA, bookB) {
                return bookA[_this.order.field] < bookB[_this.order.field] ? _this.order.asc ? -1 : 1 : _this.order.asc ? 1 : -1;
            });
        }
    }, {
        key: '$onInit',
        value: function $onInit() {
            this.refreshBooks();
        }
    }, {
        key: 'remove',
        value: function remove(book) {
            var _this2 = this;

            this.bookService.remove(book).then(function (books) {
                _this2.books = books;
            });
        }
    }, {
        key: 'refreshBooks',
        value: function refreshBooks() {
            var _this3 = this;

            this.isLoading = true;
            this.bookService.list().then(function (books) {
                _this3.isLoading = false;
                _this3.books = books;
            });
        }
    }]);

    return BookListCtrl;
}();

var bookListName = 'bookList';
var bookList = angular.module(bookListName, [_bookService2.default.name, _storageService2.default.name, _loader2.default.name]).component(bookListName, {
    templateUrl: _bookList2.default,
    controller: BookListCtrl
}).config( /* @ngInject*/['$stateProvider', function ($stateProvider) {
    $stateProvider.state('list', {
        url: '/',
        component: bookListName
    }).state('bookAdmin', {
        url: '/admin/book',
        component: bookListName,
        params: {
            admin: true
        }
    });
}]);

exports.default = bookList;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b6659f88075ad72c00fc976658f69ee.html";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorageService = function () {
    function LocalStorageService() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, LocalStorageService);

        this.prefix = prefix + '_';
    }

    _createClass(LocalStorageService, [{
        key: '_get',
        value: function _get(name) {
            return localStorage.getItem(this.prefix + name);
        }
    }, {
        key: '_put',
        value: function _put(name, value) {
            localStorage.setItem(this.prefix + name, value);
        }
    }, {
        key: 'has',
        value: function has(name) {
            return this._get(name) !== null;
        }
    }, {
        key: 'remove',
        value: function remove(name) {
            localStorage.removeItem(this.prefix + name);
        }
    }, {
        key: 'get',
        value: function get(name) {
            var obj = JSON.parse(this._get(name));
            return obj && obj.hasOwnProperty('value') ? obj.value : null;
        }
    }, {
        key: 'put',
        value: function put(name, value) {
            this._put(name, JSON.stringify({ time: Date.now(), value: value }));
        }
    }, {
        key: 'time',
        value: function time(name) {
            var obj = JSON.parse(this._get(name));
            return obj.time;
        }
    }, {
        key: 'fresh',
        value: function fresh(name, time) {
            return this.has(name) && this.time(name) > time;
        }
    }]);

    return LocalStorageService;
}();

exports.default = LocalStorageService;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var loaderCtrl = function () {
    function loaderCtrl() {
        _classCallCheck(this, loaderCtrl);

        this.load = false;
    }

    _createClass(loaderCtrl, [{
        key: '$onChanges',
        value: function $onChanges(change) {
            if (change.load !== undefined) this.load = change.load.currentValue;
        }
    }, {
        key: 'style',
        value: function style() {
            return {
                position: this.position || 'absolute',
                backgroundColor: this.transparent ? 'transparent' : 'rgba(0,0,0,.3)'
            };
        }
    }]);

    return loaderCtrl;
}();

var loader = angular.module('loader', []).component('loader', {
    template: '<div class="loader animate-show-hide" ng-show="$ctrl.load" ng-style="$ctrl.style()">\n    <div class="progress">\n        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"\n             aria-valuemin="0" aria-valuemax="100" style="width: 100%">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\n        </div>\n    </div>\n</div>\n',
    controller: loaderCtrl,
    bindings: {
        load: '<',
        position: '@',
        transparent: '@'
    }
});

exports.default = loader;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mainNav = __webpack_require__(14);

var _mainNav2 = _interopRequireDefault(_mainNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainNav = angular.module('mainNav', []).component('mainNav', {
    templateUrl: _mainNav2.default,
    controller: function controller() {}
});

exports.default = mainNav;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b21601443245554de2e3206635aa8db.html";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bookEdit = __webpack_require__(16);

var _bookEdit2 = _interopRequireDefault(_bookEdit);

var _isbnValidator = __webpack_require__(17);

var _isbnValidator2 = _interopRequireDefault(_isbnValidator);

var _uiSelect = __webpack_require__(21);

var _uiSelect2 = _interopRequireDefault(_uiSelect);

var _bookService = __webpack_require__(2);

var _bookService2 = _interopRequireDefault(_bookService);

var _authorService = __webpack_require__(1);

var _authorService2 = _interopRequireDefault(_authorService);

var _imageInput = __webpack_require__(23);

var _imageInput2 = _interopRequireDefault(_imageInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var bookEditCtrl = function () {
    bookEditCtrl.$inject = ['$stateParams', 'bookService', 'authorService', '$state'];

    function bookEditCtrl($stateParams, bookService, authorService, $state) {
        _classCallCheck(this, bookEditCtrl);

        this.book = null;
        this.isLoading = false;
        this.bookService = bookService;
        this.authorService = authorService;
        this.editId = $stateParams.id ? parseInt($stateParams.id) : null;
        this.authors = [];
        this.$state = $state;
    }

    _createClass(bookEditCtrl, [{
        key: 'imageChange',
        value: function imageChange(image) {
            this.book.image = image;
        }
    }, {
        key: '$onInit',
        value: function $onInit() {
            var _this = this;

            if (this.editId) {
                this.bookService.find(this.editId).then(function (book) {
                    _this.book = _extends({}, book, { date: moment(book.date).toDate() });
                });
            } else {
                this.bookService.new().then(function (book) {
                    _this.book = book;
                });
            }
            this.authorService.list().then(function (authors) {
                _this.authors = authors;
            });
        }
    }, {
        key: 'save',
        value: function save() {
            var _this2 = this;

            this.bookService[this.editId ? 'update' : 'add'](this.book).then(function (_) {
                _this2.$state.go('bookAdmin');
            });
        }
    }, {
        key: 'valid',
        value: function valid(form) {
            return this.book.authors.length > 0 && form.$valid;
        }
    }]);

    return bookEditCtrl;
}();

var bookEdit = angular.module('bookEdit', [_isbnValidator2.default.name, _uiSelect2.default, _bookService2.default.name, _authorService2.default.name, _imageInput2.default.name]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('bookEdit', {
        url: '/book/edit/:id',
        component: 'bookEdit'
    }).state('bookNew', {
        url: '/book/new',
        component: 'bookEdit'
    });
}]).component('bookEdit', {
    templateUrl: _bookEdit2.default,
    controller: bookEditCtrl
});

exports.default = bookEdit;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7597469799d9c8e683184140f8acbcb1.html";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isbnValidate = __webpack_require__(18);

var _isbnValidate2 = _interopRequireDefault(_isbnValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbnValidator = angular.module('isbnValidator', []).directive('isbn', function () {
    return {
        require: 'ngModel',
        link: function link(scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function (modelValue, viewValue) {
                // console.log(modelValue,viewValue);
                return ctrl.$isEmpty(modelValue) || _isbnValidate2.default.Validate(viewValue);
            };
        }
    };
});

exports.default = isbnValidator;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 * @author: Tomasz Sochacki
 * ISBN-13 and ISBN-10 validator.
 */

var regexp = __webpack_require__(19);
var checksum = __webpack_require__(20);

var ISBN = function () {
    function ISBN() {
        _classCallCheck(this, ISBN);
    }

    _createClass(ISBN, null, [{
        key: 'Validate',
        value: function Validate(isbn) {
            //Method always retruns boolean value!

            //Remove optional prefix:
            isbn = isbn.replace(regexp.PREFIX, '');

            if (!regexp.ISBN.test(isbn)) {
                return false;
            }

            return checksum(isbn); //true or false
        }
    }]);

    return ISBN;
}();

module.exports = ISBN;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* 
 * @author: Tomasz Sochacki
 * Regular Expression for validate ISBN-10 and ISB-13
 */

/*
 * Regexp for remove prefix in ISBN number.
 * Example prefixes which will be removed:
 * ISBN number
 * ISBN: number
 * ISBN-10 number
 * ISBN-13 number
 * ISBN-10: number
 * ISBN-13: number
 * 
 * Regexp description:
 * /^ISBN       on start 'ISBN' or 'isbn'
 * (?:-1[03])?  optional prefix -10 or -13
 * :?           optional colon ":"
 * \x20+        minimum one space
 * /i           case insensitive
 */
var PREFIX = /^ISBN(?:-1[03])?:?\x20+/i;

/*
 * Regexp for validate ISBN (only nubers or char "X").
 * Example for ISBN-10: "048665088X", "0306406152".
 * Example for ISBN-13: "9788371815102".
 * 
 * Regexp description:
 * /^          start of string
 * (?:
 *    \d{9}    9 digits
 *    [\dXx]   and of end one digit or char "X"/"x"
 *    |\d{13}  or 13 digits (ISBN-13)
 * )$/         and of string
 */
var ISBN = /^(?:\d{9}[\dXx]|\d{13})$/;

module.exports = {
  PREFIX: PREFIX,
  ISBN: ISBN
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* 
 * @author: Tomasz Sochacki
 * Checksum for validate ISBN-10 and ISBN-13.
 */

var checksum = function checksum(isbn) {
    //isbn have to be number or string (composed only of digits or char "X"):
    isbn = isbn.toString();

    //Remove last digit (control digit):
    var number = isbn.slice(0, -1);

    //Convert number to array (with only digits):
    number = number.split('').map(Number);

    //Save last digit (control digit):
    var last = isbn.slice(-1);
    var lastDigit = last !== 'X' ? parseInt(last, 10) : 'X';

    //Algorithm for checksum calculation (digit * position):
    number = number.map(function (digit, index) {
        return digit * (index + 1);
    });

    //Calculate checksum from array:
    var sum = number.reduce(function (a, b) {
        return a + b;
    }, 0);

    //Validate control digit:
    var controlDigit = sum % 11;
    return lastDigit === (controlDigit !== 10 ? controlDigit : 'X');
};

module.exports = checksum;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);
module.exports = 'ui.select';

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.19.8 - 2017-04-18T05:43:43.673Z
 * License: MIT
 */

(function () {
  "use strict";

  var KEY = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 36,
    END: 35,
    BACKSPACE: 8,
    DELETE: 46,
    COMMAND: 91,

    MAP: { 91: "COMMAND", 8: "BACKSPACE", 9: "TAB", 13: "ENTER", 16: "SHIFT", 17: "CTRL", 18: "ALT", 19: "PAUSEBREAK", 20: "CAPSLOCK", 27: "ESC", 32: "SPACE", 33: "PAGE_UP", 34: "PAGE_DOWN", 35: "END", 36: "HOME", 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN", 43: "+", 44: "PRINTSCREEN", 45: "INSERT", 46: "DELETE", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 61: "=", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NUMLOCK", 145: "SCROLLLOCK", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"
    },

    isControl: function isControl(e) {
      var k = e.which;
      switch (k) {
        case KEY.COMMAND:
        case KEY.SHIFT:
        case KEY.CTRL:
        case KEY.ALT:
          return true;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return true;

      return false;
    },
    isFunctionKey: function isFunctionKey(k) {
      k = k.which ? k.which : k;
      return k >= 112 && k <= 123;
    },
    isVerticalMovement: function isVerticalMovement(k) {
      return ~[KEY.UP, KEY.DOWN].indexOf(k);
    },
    isHorizontalMovement: function isHorizontalMovement(k) {
      return ~[KEY.LEFT, KEY.RIGHT, KEY.BACKSPACE, KEY.DELETE].indexOf(k);
    },
    toSeparator: function toSeparator(k) {
      var sep = { ENTER: "\n", TAB: "\t", SPACE: " " }[k];
      if (sep) return sep;
      // return undefined for special keys other than enter, tab or space.
      // no way to use them to cut strings.
      return KEY[k] ? undefined : k;
    }
  };

  function isNil(value) {
    return angular.isUndefined(value) || value === null;
  }

  /**
   * Add querySelectorAll() to jqLite.
   *
   * jqLite find() is limited to lookups by tag name.
   * TODO This will change with future versions of AngularJS, to be removed when this happens
   *
   * See jqLite.find - why not use querySelectorAll? https://github.com/angular/angular.js/issues/3586
   * See feat(jqLite): use querySelectorAll instead of getElementsByTagName in jqLite.find https://github.com/angular/angular.js/pull/3598
   */
  if (angular.element.prototype.querySelectorAll === undefined) {
    angular.element.prototype.querySelectorAll = function (selector) {
      return angular.element(this[0].querySelectorAll(selector));
    };
  }

  /**
   * Add closest() to jqLite.
   */
  if (angular.element.prototype.closest === undefined) {
    angular.element.prototype.closest = function (selector) {
      var elem = this[0];
      var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

      while (elem) {
        if (matchesSelector.bind(elem)(selector)) {
          return elem;
        } else {
          elem = elem.parentElement;
        }
      }
      return false;
    };
  }

  var latestId = 0;

  var uis = angular.module('ui.select', []).constant('uiSelectConfig', {
    theme: 'bootstrap',
    searchEnabled: true,
    sortable: false,
    placeholder: '', // Empty by default, like HTML tag <select>
    refreshDelay: 1000, // In milliseconds
    closeOnSelect: true,
    skipFocusser: false,
    dropdownPosition: 'auto',
    removeSelected: true,
    resetSearchInput: true,
    generateId: function generateId() {
      return latestId++;
    },
    appendToBody: false,
    spinnerEnabled: false,
    spinnerClass: 'glyphicon glyphicon-refresh ui-select-spin',
    backspaceReset: true
  })

  // See Rename minErr and make it accessible from outside https://github.com/angular/angular.js/issues/6913
  .service('uiSelectMinErr', function () {
    var minErr = angular.$$minErr('ui.select');
    return function () {
      var error = minErr.apply(this, arguments);
      var message = error.message.replace(new RegExp('\nhttp://errors.angularjs.org/.*'), '');
      return new Error(message);
    };
  })

  // Recreates old behavior of ng-transclude. Used internally.
  .directive('uisTranscludeAppend', function () {
    return {
      link: function link(scope, element, attrs, ctrl, transclude) {
        transclude(scope, function (clone) {
          element.append(clone);
        });
      }
    };
  })

  /**
   * Highlights text that matches $select.search.
   *
   * Taken from AngularUI Bootstrap Typeahead
   * See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L340
   */
  .filter('highlight', function () {
    function escapeRegexp(queryToEscape) {
      return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    return function (matchItem, query) {
      return query && matchItem ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<span class="ui-select-highlight">$&</span>') : matchItem;
    };
  })

  /**
   * A read-only equivalent of jQuery's offset function: http://api.jquery.com/offset/
   *
   * Taken from AngularUI Bootstrap Position:
   * See https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js#L70
   */
  .factory('uisOffset', ['$document', '$window', function ($document, $window) {

    return function (element) {
      var boundingClientRect = element[0].getBoundingClientRect();
      return {
        width: boundingClientRect.width || element.prop('offsetWidth'),
        height: boundingClientRect.height || element.prop('offsetHeight'),
        top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
        left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
      };
    };
  }]);

  uis.directive('uiSelectChoices', ['uiSelectConfig', 'uisRepeatParser', 'uiSelectMinErr', '$compile', '$window', function (uiSelectConfig, RepeatParser, uiSelectMinErr, $compile, $window) {

    return {
      restrict: 'EA',
      require: '^uiSelect',
      replace: true,
      transclude: true,
      templateUrl: function templateUrl(tElement) {
        // Needed so the uiSelect can detect the transcluded content
        tElement.addClass('ui-select-choices');

        // Gets theme attribute from parent (ui-select)
        var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
        return theme + '/choices.tpl.html';
      },

      compile: function compile(tElement, tAttrs) {

        if (!tAttrs.repeat) throw uiSelectMinErr('repeat', "Expected 'repeat' expression.");

        // var repeat = RepeatParser.parse(attrs.repeat);
        var groupByExp = tAttrs.groupBy;
        var groupFilterExp = tAttrs.groupFilter;

        if (groupByExp) {
          var groups = tElement.querySelectorAll('.ui-select-choices-group');
          if (groups.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-group but got '{0}'.", groups.length);
          groups.attr('ng-repeat', RepeatParser.getGroupNgRepeatExpression());
        }

        var parserResult = RepeatParser.parse(tAttrs.repeat);

        var choices = tElement.querySelectorAll('.ui-select-choices-row');
        if (choices.length !== 1) {
          throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row but got '{0}'.", choices.length);
        }

        choices.attr('ng-repeat', parserResult.repeatExpression(groupByExp)).attr('ng-if', '$select.open'); //Prevent unnecessary watches when dropdown is closed


        var rowsInner = tElement.querySelectorAll('.ui-select-choices-row-inner');
        if (rowsInner.length !== 1) {
          throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row-inner but got '{0}'.", rowsInner.length);
        }
        rowsInner.attr('uis-transclude-append', ''); //Adding uisTranscludeAppend directive to row element after choices element has ngRepeat

        // If IE8 then need to target rowsInner to apply the ng-click attr as choices will not capture the event.
        var clickTarget = $window.document.addEventListener ? choices : rowsInner;
        clickTarget.attr('ng-click', '$select.select(' + parserResult.itemName + ',$select.skipFocusser,$event)');

        return function link(scope, element, attrs, $select) {

          $select.parseRepeatAttr(attrs.repeat, groupByExp, groupFilterExp); //Result ready at $select.parserResult
          $select.disableChoiceExpression = attrs.uiDisableChoice;
          $select.onHighlightCallback = attrs.onHighlight;
          $select.minimumInputLength = parseInt(attrs.minimumInputLength) || 0;
          $select.dropdownPosition = attrs.position ? attrs.position.toLowerCase() : uiSelectConfig.dropdownPosition;

          scope.$watch('$select.search', function (newValue) {
            if (newValue && !$select.open && $select.multiple) $select.activate(false, true);
            $select.activeIndex = $select.tagging.isActivated ? -1 : 0;
            if (!attrs.minimumInputLength || $select.search.length >= attrs.minimumInputLength) {
              $select.refresh(attrs.refresh);
            } else {
              $select.items = [];
            }
          });

          attrs.$observe('refreshDelay', function () {
            // $eval() is needed otherwise we get a string instead of a number
            var refreshDelay = scope.$eval(attrs.refreshDelay);
            $select.refreshDelay = refreshDelay !== undefined ? refreshDelay : uiSelectConfig.refreshDelay;
          });

          scope.$watch('$select.open', function (open) {
            if (open) {
              tElement.attr('role', 'listbox');
              $select.refresh(attrs.refresh);
            } else {
              element.removeAttr('role');
            }
          });
        };
      }
    };
  }]);

  /**
   * Contains ui-select "intelligence".
   *
   * The goal is to limit dependency on the DOM whenever possible and
   * put as much logic in the controller (instead of the link functions) as possible so it can be easily tested.
   */
  uis.controller('uiSelectCtrl', ['$scope', '$element', '$timeout', '$filter', '$$uisDebounce', 'uisRepeatParser', 'uiSelectMinErr', 'uiSelectConfig', '$parse', '$injector', '$window', function ($scope, $element, $timeout, $filter, $$uisDebounce, RepeatParser, uiSelectMinErr, uiSelectConfig, $parse, $injector, $window) {

    var ctrl = this;

    var EMPTY_SEARCH = '';

    ctrl.placeholder = uiSelectConfig.placeholder;
    ctrl.searchEnabled = uiSelectConfig.searchEnabled;
    ctrl.sortable = uiSelectConfig.sortable;
    ctrl.refreshDelay = uiSelectConfig.refreshDelay;
    ctrl.paste = uiSelectConfig.paste;
    ctrl.resetSearchInput = uiSelectConfig.resetSearchInput;
    ctrl.refreshing = false;
    ctrl.spinnerEnabled = uiSelectConfig.spinnerEnabled;
    ctrl.spinnerClass = uiSelectConfig.spinnerClass;
    ctrl.removeSelected = uiSelectConfig.removeSelected; //If selected item(s) should be removed from dropdown list
    ctrl.closeOnSelect = true; //Initialized inside uiSelect directive link function
    ctrl.skipFocusser = false; //Set to true to avoid returning focus to ctrl when item is selected
    ctrl.search = EMPTY_SEARCH;

    ctrl.activeIndex = 0; //Dropdown of choices
    ctrl.items = []; //All available choices

    ctrl.open = false;
    ctrl.focus = false;
    ctrl.disabled = false;
    ctrl.selected = undefined;

    ctrl.dropdownPosition = 'auto';

    ctrl.focusser = undefined; //Reference to input element used to handle focus events
    ctrl.multiple = undefined; // Initialized inside uiSelect directive link function
    ctrl.disableChoiceExpression = undefined; // Initialized inside uiSelectChoices directive link function
    ctrl.tagging = { isActivated: false, fct: undefined };
    ctrl.taggingTokens = { isActivated: false, tokens: undefined };
    ctrl.lockChoiceExpression = undefined; // Initialized inside uiSelectMatch directive link function
    ctrl.clickTriggeredSelect = false;
    ctrl.$filter = $filter;
    ctrl.$element = $element;

    // Use $injector to check for $animate and store a reference to it
    ctrl.$animate = function () {
      try {
        return $injector.get('$animate');
      } catch (err) {
        // $animate does not exist
        return null;
      }
    }();

    ctrl.searchInput = $element.querySelectorAll('input.ui-select-search');
    if (ctrl.searchInput.length !== 1) {
      throw uiSelectMinErr('searchInput', "Expected 1 input.ui-select-search but got '{0}'.", ctrl.searchInput.length);
    }

    ctrl.isEmpty = function () {
      return isNil(ctrl.selected) || ctrl.selected === '' || ctrl.multiple && ctrl.selected.length === 0;
    };

    function _findIndex(collection, predicate, thisArg) {
      if (collection.findIndex) {
        return collection.findIndex(predicate, thisArg);
      } else {
        var list = Object(collection);
        var length = list.length >>> 0;
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return i;
          }
        }
        return -1;
      }
    }

    // Most of the time the user does not want to empty the search input when in typeahead mode
    function _resetSearchInput() {
      if (ctrl.resetSearchInput) {
        ctrl.search = EMPTY_SEARCH;
        //reset activeIndex
        if (ctrl.selected && ctrl.items.length && !ctrl.multiple) {
          ctrl.activeIndex = _findIndex(ctrl.items, function (item) {
            return angular.equals(this, item);
          }, ctrl.selected);
        }
      }
    }

    function _groupsFilter(groups, groupNames) {
      var i,
          j,
          result = [];
      for (i = 0; i < groupNames.length; i++) {
        for (j = 0; j < groups.length; j++) {
          if (groups[j].name == [groupNames[i]]) {
            result.push(groups[j]);
          }
        }
      }
      return result;
    }

    // When the user clicks on ui-select, displays the dropdown list
    ctrl.activate = function (initSearchValue, avoidReset) {
      if (!ctrl.disabled && !ctrl.open) {
        if (!avoidReset) _resetSearchInput();

        $scope.$broadcast('uis:activate');
        ctrl.open = true;
        ctrl.activeIndex = ctrl.activeIndex >= ctrl.items.length ? 0 : ctrl.activeIndex;
        // ensure that the index is set to zero for tagging variants
        // that where first option is auto-selected
        if (ctrl.activeIndex === -1 && ctrl.taggingLabel !== false) {
          ctrl.activeIndex = 0;
        }

        var container = $element.querySelectorAll('.ui-select-choices-content');
        var searchInput = $element.querySelectorAll('.ui-select-search');
        if (ctrl.$animate && ctrl.$animate.on && ctrl.$animate.enabled(container[0])) {
          var animateHandler = function animateHandler(elem, phase) {
            if (phase === 'start' && ctrl.items.length === 0) {
              // Only focus input after the animation has finished
              ctrl.$animate.off('removeClass', searchInput[0], animateHandler);
              $timeout(function () {
                ctrl.focusSearchInput(initSearchValue);
              });
            } else if (phase === 'close') {
              // Only focus input after the animation has finished
              ctrl.$animate.off('enter', container[0], animateHandler);
              $timeout(function () {
                ctrl.focusSearchInput(initSearchValue);
              });
            }
          };

          if (ctrl.items.length > 0) {
            ctrl.$animate.on('enter', container[0], animateHandler);
          } else {
            ctrl.$animate.on('removeClass', searchInput[0], animateHandler);
          }
        } else {
          $timeout(function () {
            ctrl.focusSearchInput(initSearchValue);
            if (!ctrl.tagging.isActivated && ctrl.items.length > 1) {
              _ensureHighlightVisible();
            }
          });
        }
      } else if (ctrl.open && !ctrl.searchEnabled) {
        // Close the selection if we don't have search enabled, and we click on the select again
        ctrl.close();
      }
    };

    ctrl.focusSearchInput = function (initSearchValue) {
      ctrl.search = initSearchValue || ctrl.search;
      ctrl.searchInput[0].focus();
    };

    ctrl.findGroupByName = function (name) {
      return ctrl.groups && ctrl.groups.filter(function (group) {
        return group.name === name;
      })[0];
    };

    ctrl.parseRepeatAttr = function (repeatAttr, groupByExp, groupFilterExp) {
      function updateGroups(items) {
        var groupFn = $scope.$eval(groupByExp);
        ctrl.groups = [];
        angular.forEach(items, function (item) {
          var groupName = angular.isFunction(groupFn) ? groupFn(item) : item[groupFn];
          var group = ctrl.findGroupByName(groupName);
          if (group) {
            group.items.push(item);
          } else {
            ctrl.groups.push({ name: groupName, items: [item] });
          }
        });
        if (groupFilterExp) {
          var groupFilterFn = $scope.$eval(groupFilterExp);
          if (angular.isFunction(groupFilterFn)) {
            ctrl.groups = groupFilterFn(ctrl.groups);
          } else if (angular.isArray(groupFilterFn)) {
            ctrl.groups = _groupsFilter(ctrl.groups, groupFilterFn);
          }
        }
        ctrl.items = [];
        ctrl.groups.forEach(function (group) {
          ctrl.items = ctrl.items.concat(group.items);
        });
      }

      function setPlainItems(items) {
        ctrl.items = items || [];
      }

      ctrl.setItemsFn = groupByExp ? updateGroups : setPlainItems;

      ctrl.parserResult = RepeatParser.parse(repeatAttr);

      ctrl.isGrouped = !!groupByExp;
      ctrl.itemProperty = ctrl.parserResult.itemName;

      //If collection is an Object, convert it to Array

      var originalSource = ctrl.parserResult.source;

      //When an object is used as source, we better create an array and use it as 'source'
      var createArrayFromObject = function createArrayFromObject() {
        var origSrc = originalSource($scope);
        $scope.$uisSource = Object.keys(origSrc).map(function (v) {
          var result = {};
          result[ctrl.parserResult.keyName] = v;
          result.value = origSrc[v];
          return result;
        });
      };

      if (ctrl.parserResult.keyName) {
        // Check for (key,value) syntax
        createArrayFromObject();
        ctrl.parserResult.source = $parse('$uisSource' + ctrl.parserResult.filters);
        $scope.$watch(originalSource, function (newVal, oldVal) {
          if (newVal !== oldVal) createArrayFromObject();
        }, true);
      }

      ctrl.refreshItems = function (data) {
        data = data || ctrl.parserResult.source($scope);
        var selectedItems = ctrl.selected;
        //TODO should implement for single mode removeSelected
        if (ctrl.isEmpty() || angular.isArray(selectedItems) && !selectedItems.length || !ctrl.multiple || !ctrl.removeSelected) {
          ctrl.setItemsFn(data);
        } else {
          if (data !== undefined && data !== null) {
            var filteredItems = data.filter(function (i) {
              return angular.isArray(selectedItems) ? selectedItems.every(function (selectedItem) {
                return !angular.equals(i, selectedItem);
              }) : !angular.equals(i, selectedItems);
            });
            ctrl.setItemsFn(filteredItems);
          }
        }
        if (ctrl.dropdownPosition === 'auto' || ctrl.dropdownPosition === 'up') {
          $scope.calculateDropdownPos();
        }
        $scope.$broadcast('uis:refresh');
      };

      // See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L259
      $scope.$watchCollection(ctrl.parserResult.source, function (items) {
        if (items === undefined || items === null) {
          // If the user specifies undefined or null => reset the collection
          // Special case: items can be undefined if the user did not initialized the collection on the scope
          // i.e $scope.addresses = [] is missing
          ctrl.items = [];
        } else {
          if (!angular.isArray(items)) {
            throw uiSelectMinErr('items', "Expected an array but got '{0}'.", items);
          } else {
            //Remove already selected items (ex: while searching)
            //TODO Should add a test
            ctrl.refreshItems(items);

            //update the view value with fresh data from items, if there is a valid model value
            if (angular.isDefined(ctrl.ngModel.$modelValue)) {
              ctrl.ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
            }
          }
        }
      });
    };

    var _refreshDelayPromise;

    /**
     * Typeahead mode: lets the user refresh the collection using his own function.
     *
     * See Expose $select.search for external / remote filtering https://github.com/angular-ui/ui-select/pull/31
     */
    ctrl.refresh = function (refreshAttr) {
      if (refreshAttr !== undefined) {
        // Debounce
        // See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L155
        // FYI AngularStrap typeahead does not have debouncing: https://github.com/mgcrea/angular-strap/blob/v2.0.0-rc.4/src/typeahead/typeahead.js#L177
        if (_refreshDelayPromise) {
          $timeout.cancel(_refreshDelayPromise);
        }
        _refreshDelayPromise = $timeout(function () {
          if ($scope.$select.search.length >= $scope.$select.minimumInputLength) {
            var refreshPromise = $scope.$eval(refreshAttr);
            if (refreshPromise && angular.isFunction(refreshPromise.then) && !ctrl.refreshing) {
              ctrl.refreshing = true;
              refreshPromise.finally(function () {
                ctrl.refreshing = false;
              });
            }
          }
        }, ctrl.refreshDelay);
      }
    };

    ctrl.isActive = function (itemScope) {
      if (!ctrl.open) {
        return false;
      }
      var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
      var isActive = itemIndex == ctrl.activeIndex;

      if (!isActive || itemIndex < 0) {
        return false;
      }

      if (isActive && !angular.isUndefined(ctrl.onHighlightCallback)) {
        itemScope.$eval(ctrl.onHighlightCallback);
      }

      return isActive;
    };

    var _isItemSelected = function _isItemSelected(item) {
      return ctrl.selected && angular.isArray(ctrl.selected) && ctrl.selected.filter(function (selection) {
        return angular.equals(selection, item);
      }).length > 0;
    };

    var disabledItems = [];

    function _updateItemDisabled(item, isDisabled) {
      var disabledItemIndex = disabledItems.indexOf(item);
      if (isDisabled && disabledItemIndex === -1) {
        disabledItems.push(item);
      }

      if (!isDisabled && disabledItemIndex > -1) {
        disabledItems.splice(disabledItemIndex, 1);
      }
    }

    function _isItemDisabled(item) {
      return disabledItems.indexOf(item) > -1;
    }

    ctrl.isDisabled = function (itemScope) {

      if (!ctrl.open) return;

      var item = itemScope[ctrl.itemProperty];
      var itemIndex = ctrl.items.indexOf(item);
      var isDisabled = false;

      if (itemIndex >= 0 && (angular.isDefined(ctrl.disableChoiceExpression) || ctrl.multiple)) {

        if (item.isTag) return false;

        if (ctrl.multiple) {
          isDisabled = _isItemSelected(item);
        }

        if (!isDisabled && angular.isDefined(ctrl.disableChoiceExpression)) {
          isDisabled = !!itemScope.$eval(ctrl.disableChoiceExpression);
        }

        _updateItemDisabled(item, isDisabled);
      }

      return isDisabled;
    };

    // When the user selects an item with ENTER or clicks the dropdown
    ctrl.select = function (item, skipFocusser, $event) {
      if (isNil(item) || !_isItemDisabled(item)) {

        if (!ctrl.items && !ctrl.search && !ctrl.tagging.isActivated) return;

        if (!item || !_isItemDisabled(item)) {
          // if click is made on existing item, prevent from tagging, ctrl.search does not matter
          ctrl.clickTriggeredSelect = false;
          if ($event && ($event.type === 'click' || $event.type === 'touchend') && item) ctrl.clickTriggeredSelect = true;

          if (ctrl.tagging.isActivated && ctrl.clickTriggeredSelect === false) {
            // if taggingLabel is disabled and item is undefined we pull from ctrl.search
            if (ctrl.taggingLabel === false) {
              if (ctrl.activeIndex < 0) {
                if (item === undefined) {
                  item = ctrl.tagging.fct !== undefined ? ctrl.tagging.fct(ctrl.search) : ctrl.search;
                }
                if (!item || angular.equals(ctrl.items[0], item)) {
                  return;
                }
              } else {
                // keyboard nav happened first, user selected from dropdown
                item = ctrl.items[ctrl.activeIndex];
              }
            } else {
              // tagging always operates at index zero, taggingLabel === false pushes
              // the ctrl.search value without having it injected
              if (ctrl.activeIndex === 0) {
                // ctrl.tagging pushes items to ctrl.items, so we only have empty val
                // for `item` if it is a detected duplicate
                if (item === undefined) return;

                // create new item on the fly if we don't already have one;
                // use tagging function if we have one
                if (ctrl.tagging.fct !== undefined && typeof item === 'string') {
                  item = ctrl.tagging.fct(item);
                  if (!item) return;
                  // if item type is 'string', apply the tagging label
                } else if (typeof item === 'string') {
                  // trim the trailing space
                  item = item.replace(ctrl.taggingLabel, '').trim();
                }
              }
            }
            // search ctrl.selected for dupes potentially caused by tagging and return early if found
            if (_isItemSelected(item)) {
              ctrl.close(skipFocusser);
              return;
            }
          }
          _resetSearchInput();
          $scope.$broadcast('uis:select', item);

          if (ctrl.closeOnSelect) {
            ctrl.close(skipFocusser);
          }
        }
      }
    };

    // Closes the dropdown
    ctrl.close = function (skipFocusser) {
      if (!ctrl.open) return;
      if (ctrl.ngModel && ctrl.ngModel.$setTouched) ctrl.ngModel.$setTouched();
      ctrl.open = false;
      _resetSearchInput();
      $scope.$broadcast('uis:close', skipFocusser);
    };

    ctrl.setFocus = function () {
      if (!ctrl.focus) ctrl.focusInput[0].focus();
    };

    ctrl.clear = function ($event) {
      ctrl.select(null);
      $event.stopPropagation();
      $timeout(function () {
        ctrl.focusser[0].focus();
      }, 0, false);
    };

    // Toggle dropdown
    ctrl.toggle = function (e) {
      if (ctrl.open) {
        ctrl.close();
        e.preventDefault();
        e.stopPropagation();
      } else {
        ctrl.activate();
      }
    };

    // Set default function for locked choices - avoids unnecessary
    // logic if functionality is not being used
    ctrl.isLocked = function () {
      return false;
    };

    $scope.$watch(function () {
      return angular.isDefined(ctrl.lockChoiceExpression) && ctrl.lockChoiceExpression !== "";
    }, _initaliseLockedChoices);

    function _initaliseLockedChoices(doInitalise) {
      if (!doInitalise) return;

      var lockedItems = [];

      function _updateItemLocked(item, isLocked) {
        var lockedItemIndex = lockedItems.indexOf(item);
        if (isLocked && lockedItemIndex === -1) {
          lockedItems.push(item);
        }

        if (!isLocked && lockedItemIndex > -1) {
          lockedItems.splice(lockedItemIndex, 1);
        }
      }

      function _isItemlocked(item) {
        return lockedItems.indexOf(item) > -1;
      }

      ctrl.isLocked = function (itemScope, itemIndex) {
        var isLocked = false,
            item = ctrl.selected[itemIndex];

        if (item) {
          if (itemScope) {
            isLocked = !!itemScope.$eval(ctrl.lockChoiceExpression);
            _updateItemLocked(item, isLocked);
          } else {
            isLocked = _isItemlocked(item);
          }
        }

        return isLocked;
      };
    }

    var sizeWatch = null;
    var updaterScheduled = false;
    ctrl.sizeSearchInput = function () {

      var input = ctrl.searchInput[0],
          container = ctrl.$element[0],
          calculateContainerWidth = function calculateContainerWidth() {
        // Return the container width only if the search input is visible
        return container.clientWidth * !!input.offsetParent;
      },
          updateIfVisible = function updateIfVisible(containerWidth) {
        if (containerWidth === 0) {
          return false;
        }
        var inputWidth = containerWidth - input.offsetLeft;
        if (inputWidth < 50) inputWidth = containerWidth;
        ctrl.searchInput.css('width', inputWidth + 'px');
        return true;
      };

      ctrl.searchInput.css('width', '10px');
      $timeout(function () {
        //Give tags time to render correctly
        if (sizeWatch === null && !updateIfVisible(calculateContainerWidth())) {
          sizeWatch = $scope.$watch(function () {
            if (!updaterScheduled) {
              updaterScheduled = true;
              $scope.$$postDigest(function () {
                updaterScheduled = false;
                if (updateIfVisible(calculateContainerWidth())) {
                  sizeWatch();
                  sizeWatch = null;
                }
              });
            }
          }, angular.noop);
        }
      });
    };

    function _handleDropDownSelection(key) {
      var processed = true;
      switch (key) {
        case KEY.DOWN:
          if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
          else if (ctrl.activeIndex < ctrl.items.length - 1) {
              var idx = ++ctrl.activeIndex;
              while (_isItemDisabled(ctrl.items[idx]) && idx < ctrl.items.length) {
                ctrl.activeIndex = ++idx;
              }
            }
          break;
        case KEY.UP:
          var minActiveIndex = ctrl.search.length === 0 && ctrl.tagging.isActivated ? -1 : 0;
          if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
          else if (ctrl.activeIndex > minActiveIndex) {
              var idxmin = --ctrl.activeIndex;
              while (_isItemDisabled(ctrl.items[idxmin]) && idxmin > minActiveIndex) {
                ctrl.activeIndex = --idxmin;
              }
            }
          break;
        case KEY.TAB:
          if (!ctrl.multiple || ctrl.open) ctrl.select(ctrl.items[ctrl.activeIndex], true);
          break;
        case KEY.ENTER:
          if (ctrl.open && (ctrl.tagging.isActivated || ctrl.activeIndex >= 0)) {
            ctrl.select(ctrl.items[ctrl.activeIndex], ctrl.skipFocusser); // Make sure at least one dropdown item is highlighted before adding if not in tagging mode
          } else {
            ctrl.activate(false, true); //In case its the search input in 'multiple' mode
          }
          break;
        case KEY.ESC:
          ctrl.close();
          break;
        default:
          processed = false;
      }
      return processed;
    }

    // Bind to keyboard shortcuts
    ctrl.searchInput.on('keydown', function (e) {

      var key = e.which;

      if (~[KEY.ENTER, KEY.ESC].indexOf(key)) {
        e.preventDefault();
        e.stopPropagation();
      }

      $scope.$apply(function () {

        var tagged = false;

        if (ctrl.items.length > 0 || ctrl.tagging.isActivated) {
          if (!_handleDropDownSelection(key) && !ctrl.searchEnabled) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (ctrl.taggingTokens.isActivated) {
            for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {
              if (ctrl.taggingTokens.tokens[i] === KEY.MAP[e.keyCode]) {
                // make sure there is a new value to push via tagging
                if (ctrl.search.length > 0) {
                  tagged = true;
                }
              }
            }
            if (tagged) {
              $timeout(function () {
                ctrl.searchInput.triggerHandler('tagged');
                var newItem = ctrl.search.replace(KEY.MAP[e.keyCode], '').trim();
                if (ctrl.tagging.fct) {
                  newItem = ctrl.tagging.fct(newItem);
                }
                if (newItem) ctrl.select(newItem, true);
              });
            }
          }
        }
      });

      if (KEY.isVerticalMovement(key) && ctrl.items.length > 0) {
        _ensureHighlightVisible();
      }

      if (key === KEY.ENTER || key === KEY.ESC) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    ctrl.searchInput.on('paste', function (e) {
      var data;

      if (window.clipboardData && window.clipboardData.getData) {
        // IE
        data = window.clipboardData.getData('Text');
      } else {
        data = (e.originalEvent || e).clipboardData.getData('text/plain');
      }

      // Prepend the current input field text to the paste buffer.
      data = ctrl.search + data;

      if (data && data.length > 0) {
        // If tagging try to split by tokens and add items
        if (ctrl.taggingTokens.isActivated) {
          var items = [];
          for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {
            // split by first token that is contained in data
            var separator = KEY.toSeparator(ctrl.taggingTokens.tokens[i]) || ctrl.taggingTokens.tokens[i];
            if (data.indexOf(separator) > -1) {
              items = data.split(separator);
              break; // only split by one token
            }
          }
          if (items.length === 0) {
            items = [data];
          }
          var oldsearch = ctrl.search;
          angular.forEach(items, function (item) {
            var newItem = ctrl.tagging.fct ? ctrl.tagging.fct(item) : item;
            if (newItem) {
              ctrl.select(newItem, true);
            }
          });
          ctrl.search = oldsearch || EMPTY_SEARCH;
          e.preventDefault();
          e.stopPropagation();
        } else if (ctrl.paste) {
          ctrl.paste(data);
          ctrl.search = EMPTY_SEARCH;
          e.preventDefault();
          e.stopPropagation();
        }
      }
    });

    ctrl.searchInput.on('tagged', function () {
      $timeout(function () {
        _resetSearchInput();
      });
    });

    // See https://github.com/ivaynberg/select2/blob/3.4.6/select2.js#L1431
    function _ensureHighlightVisible() {
      var container = $element.querySelectorAll('.ui-select-choices-content');
      var choices = container.querySelectorAll('.ui-select-choices-row');
      if (choices.length < 1) {
        throw uiSelectMinErr('choices', "Expected multiple .ui-select-choices-row but got '{0}'.", choices.length);
      }

      if (ctrl.activeIndex < 0) {
        return;
      }

      var highlighted = choices[ctrl.activeIndex];
      var posY = highlighted.offsetTop + highlighted.clientHeight - container[0].scrollTop;
      var height = container[0].offsetHeight;

      if (posY > height) {
        container[0].scrollTop += posY - height;
      } else if (posY < highlighted.clientHeight) {
        if (ctrl.isGrouped && ctrl.activeIndex === 0) container[0].scrollTop = 0; //To make group header visible when going all the way up
        else container[0].scrollTop -= highlighted.clientHeight - posY;
      }
    }

    var onResize = $$uisDebounce(function () {
      ctrl.sizeSearchInput();
    }, 50);

    angular.element($window).bind('resize', onResize);

    $scope.$on('$destroy', function () {
      ctrl.searchInput.off('keyup keydown tagged blur paste');
      angular.element($window).off('resize', onResize);
    });

    $scope.$watch('$select.activeIndex', function (activeIndex) {
      if (activeIndex) $element.find('input').attr('aria-activedescendant', 'ui-select-choices-row-' + ctrl.generatedId + '-' + activeIndex);
    });

    $scope.$watch('$select.open', function (open) {
      if (!open) $element.find('input').removeAttr('aria-activedescendant');
    });
  }]);

  uis.directive('uiSelect', ['$document', 'uiSelectConfig', 'uiSelectMinErr', 'uisOffset', '$compile', '$parse', '$timeout', function ($document, uiSelectConfig, uiSelectMinErr, uisOffset, $compile, $parse, $timeout) {

    return {
      restrict: 'EA',
      templateUrl: function templateUrl(tElement, tAttrs) {
        var theme = tAttrs.theme || uiSelectConfig.theme;
        return theme + (angular.isDefined(tAttrs.multiple) ? '/select-multiple.tpl.html' : '/select.tpl.html');
      },
      replace: true,
      transclude: true,
      require: ['uiSelect', '^ngModel'],
      scope: true,

      controller: 'uiSelectCtrl',
      controllerAs: '$select',
      compile: function compile(tElement, tAttrs) {

        // Allow setting ngClass on uiSelect
        var match = /{(.*)}\s*{(.*)}/.exec(tAttrs.ngClass);
        if (match) {
          var combined = '{' + match[1] + ', ' + match[2] + '}';
          tAttrs.ngClass = combined;
          tElement.attr('ng-class', combined);
        }

        //Multiple or Single depending if multiple attribute presence
        if (angular.isDefined(tAttrs.multiple)) tElement.append('<ui-select-multiple/>').removeAttr('multiple');else tElement.append('<ui-select-single/>');

        if (tAttrs.inputId) tElement.querySelectorAll('input.ui-select-search')[0].id = tAttrs.inputId;

        return function (scope, element, attrs, ctrls, transcludeFn) {

          var $select = ctrls[0];
          var ngModel = ctrls[1];

          $select.generatedId = uiSelectConfig.generateId();
          $select.baseTitle = attrs.title || 'Select box';
          $select.focusserTitle = $select.baseTitle + ' focus';
          $select.focusserId = 'focusser-' + $select.generatedId;

          $select.closeOnSelect = function () {
            if (angular.isDefined(attrs.closeOnSelect)) {
              return $parse(attrs.closeOnSelect)();
            } else {
              return uiSelectConfig.closeOnSelect;
            }
          }();

          scope.$watch('skipFocusser', function () {
            var skipFocusser = scope.$eval(attrs.skipFocusser);
            $select.skipFocusser = skipFocusser !== undefined ? skipFocusser : uiSelectConfig.skipFocusser;
          });

          $select.onSelectCallback = $parse(attrs.onSelect);
          $select.onRemoveCallback = $parse(attrs.onRemove);

          //Set reference to ngModel from uiSelectCtrl
          $select.ngModel = ngModel;

          $select.choiceGrouped = function (group) {
            return $select.isGrouped && group && group.name;
          };

          if (attrs.tabindex) {
            attrs.$observe('tabindex', function (value) {
              $select.focusInput.attr('tabindex', value);
              element.removeAttr('tabindex');
            });
          }

          scope.$watch(function () {
            return scope.$eval(attrs.searchEnabled);
          }, function (newVal) {
            $select.searchEnabled = newVal !== undefined ? newVal : uiSelectConfig.searchEnabled;
          });

          scope.$watch('sortable', function () {
            var sortable = scope.$eval(attrs.sortable);
            $select.sortable = sortable !== undefined ? sortable : uiSelectConfig.sortable;
          });

          attrs.$observe('backspaceReset', function () {
            // $eval() is needed otherwise we get a string instead of a boolean
            var backspaceReset = scope.$eval(attrs.backspaceReset);
            $select.backspaceReset = backspaceReset !== undefined ? backspaceReset : true;
          });

          attrs.$observe('limit', function () {
            //Limit the number of selections allowed
            $select.limit = angular.isDefined(attrs.limit) ? parseInt(attrs.limit, 10) : undefined;
          });

          scope.$watch('removeSelected', function () {
            var removeSelected = scope.$eval(attrs.removeSelected);
            $select.removeSelected = removeSelected !== undefined ? removeSelected : uiSelectConfig.removeSelected;
          });

          attrs.$observe('disabled', function () {
            // No need to use $eval() (thanks to ng-disabled) since we already get a boolean instead of a string
            $select.disabled = attrs.disabled !== undefined ? attrs.disabled : false;
          });

          attrs.$observe('resetSearchInput', function () {
            // $eval() is needed otherwise we get a string instead of a boolean
            var resetSearchInput = scope.$eval(attrs.resetSearchInput);
            $select.resetSearchInput = resetSearchInput !== undefined ? resetSearchInput : true;
          });

          attrs.$observe('paste', function () {
            $select.paste = scope.$eval(attrs.paste);
          });

          attrs.$observe('tagging', function () {
            if (attrs.tagging !== undefined) {
              // $eval() is needed otherwise we get a string instead of a boolean
              var taggingEval = scope.$eval(attrs.tagging);
              $select.tagging = { isActivated: true, fct: taggingEval !== true ? taggingEval : undefined };
            } else {
              $select.tagging = { isActivated: false, fct: undefined };
            }
          });

          attrs.$observe('taggingLabel', function () {
            if (attrs.tagging !== undefined) {
              // check eval for FALSE, in this case, we disable the labels
              // associated with tagging
              if (attrs.taggingLabel === 'false') {
                $select.taggingLabel = false;
              } else {
                $select.taggingLabel = attrs.taggingLabel !== undefined ? attrs.taggingLabel : '(new)';
              }
            }
          });

          attrs.$observe('taggingTokens', function () {
            if (attrs.tagging !== undefined) {
              var tokens = attrs.taggingTokens !== undefined ? attrs.taggingTokens.split('|') : [',', 'ENTER'];
              $select.taggingTokens = { isActivated: true, tokens: tokens };
            }
          });

          attrs.$observe('spinnerEnabled', function () {
            // $eval() is needed otherwise we get a string instead of a boolean
            var spinnerEnabled = scope.$eval(attrs.spinnerEnabled);
            $select.spinnerEnabled = spinnerEnabled !== undefined ? spinnerEnabled : uiSelectConfig.spinnerEnabled;
          });

          attrs.$observe('spinnerClass', function () {
            var spinnerClass = attrs.spinnerClass;
            $select.spinnerClass = spinnerClass !== undefined ? attrs.spinnerClass : uiSelectConfig.spinnerClass;
          });

          //Automatically gets focus when loaded
          if (angular.isDefined(attrs.autofocus)) {
            $timeout(function () {
              $select.setFocus();
            });
          }

          //Gets focus based on scope event name (e.g. focus-on='SomeEventName')
          if (angular.isDefined(attrs.focusOn)) {
            scope.$on(attrs.focusOn, function () {
              $timeout(function () {
                $select.setFocus();
              });
            });
          }

          function onDocumentClick(e) {
            if (!$select.open) return; //Skip it if dropdown is close

            var contains = false;

            if (window.jQuery) {
              // Firefox 3.6 does not support element.contains()
              // See Node.contains https://developer.mozilla.org/en-US/docs/Web/API/Node.contains
              contains = window.jQuery.contains(element[0], e.target);
            } else {
              contains = element[0].contains(e.target);
            }

            if (!contains && !$select.clickTriggeredSelect) {
              var skipFocusser;
              if (!$select.skipFocusser) {
                //Will lose focus only with certain targets
                var focusableControls = ['input', 'button', 'textarea', 'select'];
                var targetController = angular.element(e.target).controller('uiSelect'); //To check if target is other ui-select
                skipFocusser = targetController && targetController !== $select; //To check if target is other ui-select
                if (!skipFocusser) skipFocusser = ~focusableControls.indexOf(e.target.tagName.toLowerCase()); //Check if target is input, button or textarea
              } else {
                skipFocusser = true;
              }
              $select.close(skipFocusser);
              scope.$digest();
            }
            $select.clickTriggeredSelect = false;
          }

          // See Click everywhere but here event http://stackoverflow.com/questions/12931369
          $document.on('click', onDocumentClick);

          scope.$on('$destroy', function () {
            $document.off('click', onDocumentClick);
          });

          // Move transcluded elements to their correct position in main template
          transcludeFn(scope, function (clone) {
            // See Transclude in AngularJS http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html

            // One day jqLite will be replaced by jQuery and we will be able to write:
            // var transcludedElement = clone.filter('.my-class')
            // instead of creating a hackish DOM element:
            var transcluded = angular.element('<div>').append(clone);

            var transcludedMatch = transcluded.querySelectorAll('.ui-select-match');
            transcludedMatch.removeAttr('ui-select-match'); //To avoid loop in case directive as attr
            transcludedMatch.removeAttr('data-ui-select-match'); // Properly handle HTML5 data-attributes
            if (transcludedMatch.length !== 1) {
              throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-match but got '{0}'.", transcludedMatch.length);
            }
            element.querySelectorAll('.ui-select-match').replaceWith(transcludedMatch);

            var transcludedChoices = transcluded.querySelectorAll('.ui-select-choices');
            transcludedChoices.removeAttr('ui-select-choices'); //To avoid loop in case directive as attr
            transcludedChoices.removeAttr('data-ui-select-choices'); // Properly handle HTML5 data-attributes
            if (transcludedChoices.length !== 1) {
              throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-choices but got '{0}'.", transcludedChoices.length);
            }
            element.querySelectorAll('.ui-select-choices').replaceWith(transcludedChoices);

            var transcludedNoChoice = transcluded.querySelectorAll('.ui-select-no-choice');
            transcludedNoChoice.removeAttr('ui-select-no-choice'); //To avoid loop in case directive as attr
            transcludedNoChoice.removeAttr('data-ui-select-no-choice'); // Properly handle HTML5 data-attributes
            if (transcludedNoChoice.length == 1) {
              element.querySelectorAll('.ui-select-no-choice').replaceWith(transcludedNoChoice);
            }
          });

          // Support for appending the select field to the body when its open
          var appendToBody = scope.$eval(attrs.appendToBody);
          if (appendToBody !== undefined ? appendToBody : uiSelectConfig.appendToBody) {
            scope.$watch('$select.open', function (isOpen) {
              if (isOpen) {
                positionDropdown();
              } else {
                resetDropdown();
              }
            });

            // Move the dropdown back to its original location when the scope is destroyed. Otherwise
            // it might stick around when the user routes away or the select field is otherwise removed
            scope.$on('$destroy', function () {
              resetDropdown();
            });
          }

          // Hold on to a reference to the .ui-select-container element for appendToBody support
          var placeholder = null,
              originalWidth = '';

          function positionDropdown() {
            // Remember the absolute position of the element
            var offset = uisOffset(element);

            // Clone the element into a placeholder element to take its original place in the DOM
            placeholder = angular.element('<div class="ui-select-placeholder"></div>');
            placeholder[0].style.width = offset.width + 'px';
            placeholder[0].style.height = offset.height + 'px';
            element.after(placeholder);

            // Remember the original value of the element width inline style, so it can be restored
            // when the dropdown is closed
            originalWidth = element[0].style.width;

            // Now move the actual dropdown element to the end of the body
            $document.find('body').append(element);

            element[0].style.position = 'absolute';
            element[0].style.left = offset.left + 'px';
            element[0].style.top = offset.top + 'px';
            element[0].style.width = offset.width + 'px';
          }

          function resetDropdown() {
            if (placeholder === null) {
              // The dropdown has not actually been display yet, so there's nothing to reset
              return;
            }

            // Move the dropdown element back to its original location in the DOM
            placeholder.replaceWith(element);
            placeholder = null;

            element[0].style.position = '';
            element[0].style.left = '';
            element[0].style.top = '';
            element[0].style.width = originalWidth;

            // Set focus back on to the moved element
            $select.setFocus();
          }

          // Hold on to a reference to the .ui-select-dropdown element for direction support.
          var dropdown = null,
              directionUpClassName = 'direction-up';

          // Support changing the direction of the dropdown if there isn't enough space to render it.
          scope.$watch('$select.open', function () {

            if ($select.dropdownPosition === 'auto' || $select.dropdownPosition === 'up') {
              scope.calculateDropdownPos();
            }
          });

          var setDropdownPosUp = function setDropdownPosUp(offset, offsetDropdown) {

            offset = offset || uisOffset(element);
            offsetDropdown = offsetDropdown || uisOffset(dropdown);

            dropdown[0].style.position = 'absolute';
            dropdown[0].style.top = offsetDropdown.height * -1 + 'px';
            element.addClass(directionUpClassName);
          };

          var setDropdownPosDown = function setDropdownPosDown(offset, offsetDropdown) {

            element.removeClass(directionUpClassName);

            offset = offset || uisOffset(element);
            offsetDropdown = offsetDropdown || uisOffset(dropdown);

            dropdown[0].style.position = '';
            dropdown[0].style.top = '';
          };

          var calculateDropdownPosAfterAnimation = function calculateDropdownPosAfterAnimation() {
            // Delay positioning the dropdown until all choices have been added so its height is correct.
            $timeout(function () {
              if ($select.dropdownPosition === 'up') {
                //Go UP
                setDropdownPosUp();
              } else {
                //AUTO
                element.removeClass(directionUpClassName);

                var offset = uisOffset(element);
                var offsetDropdown = uisOffset(dropdown);

                //https://code.google.com/p/chromium/issues/detail?id=342307#c4
                var scrollTop = $document[0].documentElement.scrollTop || $document[0].body.scrollTop; //To make it cross browser (blink, webkit, IE, Firefox).

                // Determine if the direction of the dropdown needs to be changed.
                if (offset.top + offset.height + offsetDropdown.height > scrollTop + $document[0].documentElement.clientHeight) {
                  //Go UP
                  setDropdownPosUp(offset, offsetDropdown);
                } else {
                  //Go DOWN
                  setDropdownPosDown(offset, offsetDropdown);
                }
              }

              // Display the dropdown once it has been positioned.
              dropdown[0].style.opacity = 1;
            });
          };

          var opened = false;

          scope.calculateDropdownPos = function () {
            if ($select.open) {
              dropdown = angular.element(element).querySelectorAll('.ui-select-dropdown');

              if (dropdown.length === 0) {
                return;
              }

              // Hide the dropdown so there is no flicker until $timeout is done executing.
              if ($select.search === '' && !opened) {
                dropdown[0].style.opacity = 0;
                opened = true;
              }

              if (!uisOffset(dropdown).height && $select.$animate && $select.$animate.on && $select.$animate.enabled(dropdown)) {
                var needsCalculated = true;

                $select.$animate.on('enter', dropdown, function (elem, phase) {
                  if (phase === 'close' && needsCalculated) {
                    calculateDropdownPosAfterAnimation();
                    needsCalculated = false;
                  }
                });
              } else {
                calculateDropdownPosAfterAnimation();
              }
            } else {
              if (dropdown === null || dropdown.length === 0) {
                return;
              }

              // Reset the position of the dropdown.
              dropdown[0].style.opacity = 0;
              dropdown[0].style.position = '';
              dropdown[0].style.top = '';
              element.removeClass(directionUpClassName);
            }
          };
        };
      }
    };
  }]);

  uis.directive('uiSelectMatch', ['uiSelectConfig', function (uiSelectConfig) {
    return {
      restrict: 'EA',
      require: '^uiSelect',
      replace: true,
      transclude: true,
      templateUrl: function templateUrl(tElement) {
        // Needed so the uiSelect can detect the transcluded content
        tElement.addClass('ui-select-match');

        var parent = tElement.parent();
        // Gets theme attribute from parent (ui-select)
        var theme = getAttribute(parent, 'theme') || uiSelectConfig.theme;
        var multi = angular.isDefined(getAttribute(parent, 'multiple'));

        return theme + (multi ? '/match-multiple.tpl.html' : '/match.tpl.html');
      },
      link: function link(scope, element, attrs, $select) {
        $select.lockChoiceExpression = attrs.uiLockChoice;
        attrs.$observe('placeholder', function (placeholder) {
          $select.placeholder = placeholder !== undefined ? placeholder : uiSelectConfig.placeholder;
        });

        function setAllowClear(allow) {
          $select.allowClear = angular.isDefined(allow) ? allow === '' ? true : allow.toLowerCase() === 'true' : false;
        }

        attrs.$observe('allowClear', setAllowClear);
        setAllowClear(attrs.allowClear);

        if ($select.multiple) {
          $select.sizeSearchInput();
        }
      }
    };

    function getAttribute(elem, attribute) {
      if (elem[0].hasAttribute(attribute)) return elem.attr(attribute);

      if (elem[0].hasAttribute('data-' + attribute)) return elem.attr('data-' + attribute);

      if (elem[0].hasAttribute('x-' + attribute)) return elem.attr('x-' + attribute);
    }
  }]);

  uis.directive('uiSelectMultiple', ['uiSelectMinErr', '$timeout', function (uiSelectMinErr, $timeout) {
    return {
      restrict: 'EA',
      require: ['^uiSelect', '^ngModel'],

      controller: ['$scope', '$timeout', function ($scope, $timeout) {

        var ctrl = this,
            $select = $scope.$select,
            ngModel;

        if (angular.isUndefined($select.selected)) $select.selected = [];

        //Wait for link fn to inject it
        $scope.$evalAsync(function () {
          ngModel = $scope.ngModel;
        });

        ctrl.activeMatchIndex = -1;

        ctrl.updateModel = function () {
          ngModel.$setViewValue(Date.now()); //Set timestamp as a unique string to force changes
          ctrl.refreshComponent();
        };

        ctrl.refreshComponent = function () {
          //Remove already selected items
          //e.g. When user clicks on a selection, the selected array changes and
          //the dropdown should remove that item
          if ($select.refreshItems) {
            $select.refreshItems();
          }
          if ($select.sizeSearchInput) {
            $select.sizeSearchInput();
          }
        };

        // Remove item from multiple select
        ctrl.removeChoice = function (index) {

          // if the choice is locked, don't remove it
          if ($select.isLocked(null, index)) return false;

          var removedChoice = $select.selected[index];

          var locals = {};
          locals[$select.parserResult.itemName] = removedChoice;

          $select.selected.splice(index, 1);
          ctrl.activeMatchIndex = -1;
          $select.sizeSearchInput();

          // Give some time for scope propagation.
          $timeout(function () {
            $select.onRemoveCallback($scope, {
              $item: removedChoice,
              $model: $select.parserResult.modelMapper($scope, locals)
            });
          });

          ctrl.updateModel();

          return true;
        };

        ctrl.getPlaceholder = function () {
          //Refactor single?
          if ($select.selected && $select.selected.length) return;
          return $select.placeholder;
        };
      }],
      controllerAs: '$selectMultiple',

      link: function link(scope, element, attrs, ctrls) {

        var $select = ctrls[0];
        var ngModel = scope.ngModel = ctrls[1];
        var $selectMultiple = scope.$selectMultiple;

        //$select.selected = raw selected objects (ignoring any property binding)

        $select.multiple = true;

        //Input that will handle focus
        $select.focusInput = $select.searchInput;

        //Properly check for empty if set to multiple
        ngModel.$isEmpty = function (value) {
          return !value || value.length === 0;
        };

        //From view --> model
        ngModel.$parsers.unshift(function () {
          var locals = {},
              result,
              resultMultiple = [];
          for (var j = $select.selected.length - 1; j >= 0; j--) {
            locals = {};
            locals[$select.parserResult.itemName] = $select.selected[j];
            result = $select.parserResult.modelMapper(scope, locals);
            resultMultiple.unshift(result);
          }
          return resultMultiple;
        });

        // From model --> view
        ngModel.$formatters.unshift(function (inputValue) {
          var data = $select.parserResult && $select.parserResult.source(scope, { $select: { search: '' } }),
              //Overwrite $search
          locals = {},
              result;
          if (!data) return inputValue;
          var resultMultiple = [];
          var checkFnMultiple = function checkFnMultiple(list, value) {
            if (!list || !list.length) return;
            for (var p = list.length - 1; p >= 0; p--) {
              locals[$select.parserResult.itemName] = list[p];
              result = $select.parserResult.modelMapper(scope, locals);
              if ($select.parserResult.trackByExp) {
                var propsItemNameMatches = /(\w*)\./.exec($select.parserResult.trackByExp);
                var matches = /\.([^\s]+)/.exec($select.parserResult.trackByExp);
                if (propsItemNameMatches && propsItemNameMatches.length > 0 && propsItemNameMatches[1] == $select.parserResult.itemName) {
                  if (matches && matches.length > 0 && result[matches[1]] == value[matches[1]]) {
                    resultMultiple.unshift(list[p]);
                    return true;
                  }
                }
              }
              if (angular.equals(result, value)) {
                resultMultiple.unshift(list[p]);
                return true;
              }
            }
            return false;
          };
          if (!inputValue) return resultMultiple; //If ngModel was undefined
          for (var k = inputValue.length - 1; k >= 0; k--) {
            //Check model array of currently selected items
            if (!checkFnMultiple($select.selected, inputValue[k])) {
              //Check model array of all items available
              if (!checkFnMultiple(data, inputValue[k])) {
                //If not found on previous lists, just add it directly to resultMultiple
                resultMultiple.unshift(inputValue[k]);
              }
            }
          }
          return resultMultiple;
        });

        //Watch for external model changes
        scope.$watchCollection(function () {
          return ngModel.$modelValue;
        }, function (newValue, oldValue) {
          if (oldValue != newValue) {
            //update the view value with fresh data from items, if there is a valid model value
            if (angular.isDefined(ngModel.$modelValue)) {
              ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
            }
            $selectMultiple.refreshComponent();
          }
        });

        ngModel.$render = function () {
          // Make sure that model value is array
          if (!angular.isArray(ngModel.$viewValue)) {
            // Have tolerance for null or undefined values
            if (isNil(ngModel.$viewValue)) {
              ngModel.$viewValue = [];
            } else {
              throw uiSelectMinErr('multiarr', "Expected model value to be array but got '{0}'", ngModel.$viewValue);
            }
          }
          $select.selected = ngModel.$viewValue;
          $selectMultiple.refreshComponent();
          scope.$evalAsync(); //To force $digest
        };

        scope.$on('uis:select', function (event, item) {
          if ($select.selected.length >= $select.limit) {
            return;
          }
          $select.selected.push(item);
          var locals = {};
          locals[$select.parserResult.itemName] = item;

          $timeout(function () {
            $select.onSelectCallback(scope, {
              $item: item,
              $model: $select.parserResult.modelMapper(scope, locals)
            });
          });
          $selectMultiple.updateModel();
        });

        scope.$on('uis:activate', function () {
          $selectMultiple.activeMatchIndex = -1;
        });

        scope.$watch('$select.disabled', function (newValue, oldValue) {
          // As the search input field may now become visible, it may be necessary to recompute its size
          if (oldValue && !newValue) $select.sizeSearchInput();
        });

        $select.searchInput.on('keydown', function (e) {
          var key = e.which;
          scope.$apply(function () {
            var processed = false;
            // var tagged = false; //Checkme
            if (KEY.isHorizontalMovement(key)) {
              processed = _handleMatchSelection(key);
            }
            if (processed && key != KEY.TAB) {
              //TODO Check si el tab selecciona aun correctamente
              //Crear test
              e.preventDefault();
              e.stopPropagation();
            }
          });
        });
        function _getCaretPosition(el) {
          if (angular.isNumber(el.selectionStart)) return el.selectionStart;
          // selectionStart is not supported in IE8 and we don't want hacky workarounds so we compromise
          else return el.value.length;
        }
        // Handles selected options in "multiple" mode
        function _handleMatchSelection(key) {
          var caretPosition = _getCaretPosition($select.searchInput[0]),
              length = $select.selected.length,

          // none  = -1,
          first = 0,
              last = length - 1,
              curr = $selectMultiple.activeMatchIndex,
              next = $selectMultiple.activeMatchIndex + 1,
              prev = $selectMultiple.activeMatchIndex - 1,
              newIndex = curr;

          if (caretPosition > 0 || $select.search.length && key == KEY.RIGHT) return false;

          $select.close();

          function getNewActiveMatchIndex() {
            switch (key) {
              case KEY.LEFT:
                // Select previous/first item
                if (~$selectMultiple.activeMatchIndex) return prev;
                // Select last item
                else return last;
                break;
              case KEY.RIGHT:
                // Open drop-down
                if (!~$selectMultiple.activeMatchIndex || curr === last) {
                  $select.activate();
                  return false;
                }
                // Select next/last item
                else return next;
                break;
              case KEY.BACKSPACE:
                // Remove selected item and select previous/first
                if (~$selectMultiple.activeMatchIndex) {
                  if ($selectMultiple.removeChoice(curr)) {
                    return prev;
                  } else {
                    return curr;
                  }
                } else {
                  // If nothing yet selected, select last item
                  return last;
                }
                break;
              case KEY.DELETE:
                // Remove selected item and select next item
                if (~$selectMultiple.activeMatchIndex) {
                  $selectMultiple.removeChoice($selectMultiple.activeMatchIndex);
                  return curr;
                } else return false;
            }
          }

          newIndex = getNewActiveMatchIndex();

          if (!$select.selected.length || newIndex === false) $selectMultiple.activeMatchIndex = -1;else $selectMultiple.activeMatchIndex = Math.min(last, Math.max(first, newIndex));

          return true;
        }

        $select.searchInput.on('keyup', function (e) {

          if (!KEY.isVerticalMovement(e.which)) {
            scope.$evalAsync(function () {
              $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
            });
          }
          // Push a "create new" item into array if there is a search string
          if ($select.tagging.isActivated && $select.search.length > 0) {

            // return early with these keys
            if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || KEY.isVerticalMovement(e.which)) {
              return;
            }
            // always reset the activeIndex to the first item when tagging
            $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
            // taggingLabel === false bypasses all of this
            if ($select.taggingLabel === false) return;

            var items = angular.copy($select.items);
            var stashArr = angular.copy($select.items);
            var newItem;
            var item;
            var hasTag = false;
            var dupeIndex = -1;
            var tagItems;
            var tagItem;

            // case for object tagging via transform `$select.tagging.fct` function
            if ($select.tagging.fct !== undefined) {
              tagItems = $select.$filter('filter')(items, { 'isTag': true });
              if (tagItems.length > 0) {
                tagItem = tagItems[0];
              }
              // remove the first element, if it has the `isTag` prop we generate a new one with each keyup, shaving the previous
              if (items.length > 0 && tagItem) {
                hasTag = true;
                items = items.slice(1, items.length);
                stashArr = stashArr.slice(1, stashArr.length);
              }
              newItem = $select.tagging.fct($select.search);
              // verify the new tag doesn't match the value of a possible selection choice or an already selected item.
              if (stashArr.some(function (origItem) {
                return angular.equals(origItem, newItem);
              }) || $select.selected.some(function (origItem) {
                return angular.equals(origItem, newItem);
              })) {
                scope.$evalAsync(function () {
                  $select.activeIndex = 0;
                  $select.items = items;
                });
                return;
              }
              if (newItem) newItem.isTag = true;
              // handle newItem string and stripping dupes in tagging string context
            } else {
              // find any tagging items already in the $select.items array and store them
              tagItems = $select.$filter('filter')(items, function (item) {
                return item.match($select.taggingLabel);
              });
              if (tagItems.length > 0) {
                tagItem = tagItems[0];
              }
              item = items[0];
              // remove existing tag item if found (should only ever be one tag item)
              if (item !== undefined && items.length > 0 && tagItem) {
                hasTag = true;
                items = items.slice(1, items.length);
                stashArr = stashArr.slice(1, stashArr.length);
              }
              newItem = $select.search + ' ' + $select.taggingLabel;
              if (_findApproxDupe($select.selected, $select.search) > -1) {
                return;
              }
              // verify the the tag doesn't match the value of an existing item from
              // the searched data set or the items already selected
              if (_findCaseInsensitiveDupe(stashArr.concat($select.selected))) {
                // if there is a tag from prev iteration, strip it / queue the change
                // and return early
                if (hasTag) {
                  items = stashArr;
                  scope.$evalAsync(function () {
                    $select.activeIndex = 0;
                    $select.items = items;
                  });
                }
                return;
              }
              if (_findCaseInsensitiveDupe(stashArr)) {
                // if there is a tag from prev iteration, strip it
                if (hasTag) {
                  $select.items = stashArr.slice(1, stashArr.length);
                }
                return;
              }
            }
            if (hasTag) dupeIndex = _findApproxDupe($select.selected, newItem);
            // dupe found, shave the first item
            if (dupeIndex > -1) {
              items = items.slice(dupeIndex + 1, items.length - 1);
            } else {
              items = [];
              if (newItem) items.push(newItem);
              items = items.concat(stashArr);
            }
            scope.$evalAsync(function () {
              $select.activeIndex = 0;
              $select.items = items;

              if ($select.isGrouped) {
                // update item references in groups, so that indexOf will work after angular.copy
                var itemsWithoutTag = newItem ? items.slice(1) : items;
                $select.setItemsFn(itemsWithoutTag);
                if (newItem) {
                  // add tag item as a new group
                  $select.items.unshift(newItem);
                  $select.groups.unshift({ name: '', items: [newItem], tagging: true });
                }
              }
            });
          }
        });
        function _findCaseInsensitiveDupe(arr) {
          if (arr === undefined || $select.search === undefined) {
            return false;
          }
          var hasDupe = arr.filter(function (origItem) {
            if ($select.search.toUpperCase() === undefined || origItem === undefined) {
              return false;
            }
            return origItem.toUpperCase() === $select.search.toUpperCase();
          }).length > 0;

          return hasDupe;
        }
        function _findApproxDupe(haystack, needle) {
          var dupeIndex = -1;
          if (angular.isArray(haystack)) {
            var tempArr = angular.copy(haystack);
            for (var i = 0; i < tempArr.length; i++) {
              // handle the simple string version of tagging
              if ($select.tagging.fct === undefined) {
                // search the array for the match
                if (tempArr[i] + ' ' + $select.taggingLabel === needle) {
                  dupeIndex = i;
                }
                // handle the object tagging implementation
              } else {
                var mockObj = tempArr[i];
                if (angular.isObject(mockObj)) {
                  mockObj.isTag = true;
                }
                if (angular.equals(mockObj, needle)) {
                  dupeIndex = i;
                }
              }
            }
          }
          return dupeIndex;
        }

        $select.searchInput.on('blur', function () {
          $timeout(function () {
            $selectMultiple.activeMatchIndex = -1;
          });
        });
      }
    };
  }]);

  uis.directive('uiSelectNoChoice', ['uiSelectConfig', function (uiSelectConfig) {
    return {
      restrict: 'EA',
      require: '^uiSelect',
      replace: true,
      transclude: true,
      templateUrl: function templateUrl(tElement) {
        // Needed so the uiSelect can detect the transcluded content
        tElement.addClass('ui-select-no-choice');

        // Gets theme attribute from parent (ui-select)
        var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
        return theme + '/no-choice.tpl.html';
      }
    };
  }]);

  uis.directive('uiSelectSingle', ['$timeout', '$compile', function ($timeout, $compile) {
    return {
      restrict: 'EA',
      require: ['^uiSelect', '^ngModel'],
      link: function link(scope, element, attrs, ctrls) {

        var $select = ctrls[0];
        var ngModel = ctrls[1];

        //From view --> model
        ngModel.$parsers.unshift(function (inputValue) {
          // Keep original value for undefined and null
          if (isNil(inputValue)) {
            return inputValue;
          }

          var locals = {},
              result;
          locals[$select.parserResult.itemName] = inputValue;
          result = $select.parserResult.modelMapper(scope, locals);
          return result;
        });

        //From model --> view
        ngModel.$formatters.unshift(function (inputValue) {
          // Keep original value for undefined and null
          if (isNil(inputValue)) {
            return inputValue;
          }

          var data = $select.parserResult && $select.parserResult.source(scope, { $select: { search: '' } }),
              //Overwrite $search
          locals = {},
              result;
          if (data) {
            var checkFnSingle = function checkFnSingle(d) {
              locals[$select.parserResult.itemName] = d;
              result = $select.parserResult.modelMapper(scope, locals);
              return result === inputValue;
            };
            //If possible pass same object stored in $select.selected
            if ($select.selected && checkFnSingle($select.selected)) {
              return $select.selected;
            }
            for (var i = data.length - 1; i >= 0; i--) {
              if (checkFnSingle(data[i])) return data[i];
            }
          }
          return inputValue;
        });

        //Update viewValue if model change
        scope.$watch('$select.selected', function (newValue) {
          if (ngModel.$viewValue !== newValue) {
            ngModel.$setViewValue(newValue);
          }
        });

        ngModel.$render = function () {
          $select.selected = ngModel.$viewValue;
        };

        scope.$on('uis:select', function (event, item) {
          $select.selected = item;
          var locals = {};
          locals[$select.parserResult.itemName] = item;

          $timeout(function () {
            $select.onSelectCallback(scope, {
              $item: item,
              $model: isNil(item) ? item : $select.parserResult.modelMapper(scope, locals)
            });
          });
        });

        scope.$on('uis:close', function (event, skipFocusser) {
          $timeout(function () {
            $select.focusser.prop('disabled', false);
            if (!skipFocusser) $select.focusser[0].focus();
          }, 0, false);
        });

        scope.$on('uis:activate', function () {
          focusser.prop('disabled', true); //Will reactivate it on .close()
        });

        //Idea from: https://github.com/ivaynberg/select2/blob/79b5bf6db918d7560bdd959109b7bcfb47edaf43/select2.js#L1954
        var focusser = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
        $compile(focusser)(scope);
        $select.focusser = focusser;

        //Input that will handle focus
        $select.focusInput = focusser;

        element.parent().append(focusser);
        focusser.bind("focus", function () {
          scope.$evalAsync(function () {
            $select.focus = true;
          });
        });
        focusser.bind("blur", function () {
          scope.$evalAsync(function () {
            $select.focus = false;
          });
        });
        focusser.bind("keydown", function (e) {

          if (e.which === KEY.BACKSPACE && $select.backspaceReset !== false) {
            e.preventDefault();
            e.stopPropagation();
            $select.select(undefined);
            scope.$apply();
            return;
          }

          if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
            return;
          }

          if (e.which == KEY.DOWN || e.which == KEY.UP || e.which == KEY.ENTER || e.which == KEY.SPACE) {
            e.preventDefault();
            e.stopPropagation();
            $select.activate();
          }

          scope.$digest();
        });

        focusser.bind("keyup input", function (e) {

          if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || e.which == KEY.ENTER || e.which === KEY.BACKSPACE) {
            return;
          }

          $select.activate(focusser.val()); //User pressed some regular key, so we pass it to the search input
          focusser.val('');
          scope.$digest();
        });
      }
    };
  }]);

  // Make multiple matches sortable
  uis.directive('uiSelectSort', ['$timeout', 'uiSelectConfig', 'uiSelectMinErr', function ($timeout, uiSelectConfig, uiSelectMinErr) {
    return {
      require: ['^^uiSelect', '^ngModel'],
      link: function link(scope, element, attrs, ctrls) {
        if (scope[attrs.uiSelectSort] === null) {
          throw uiSelectMinErr('sort', 'Expected a list to sort');
        }

        var $select = ctrls[0];
        var $ngModel = ctrls[1];

        var options = angular.extend({
          axis: 'horizontal'
        }, scope.$eval(attrs.uiSelectSortOptions));

        var axis = options.axis;
        var draggingClassName = 'dragging';
        var droppingClassName = 'dropping';
        var droppingBeforeClassName = 'dropping-before';
        var droppingAfterClassName = 'dropping-after';

        scope.$watch(function () {
          return $select.sortable;
        }, function (newValue) {
          if (newValue) {
            element.attr('draggable', true);
          } else {
            element.removeAttr('draggable');
          }
        });

        element.on('dragstart', function (event) {
          element.addClass(draggingClassName);

          (event.dataTransfer || event.originalEvent.dataTransfer).setData('text', scope.$index.toString());
        });

        element.on('dragend', function () {
          removeClass(draggingClassName);
        });

        var move = function move(from, to) {
          /*jshint validthis: true */
          this.splice(to, 0, this.splice(from, 1)[0]);
        };

        var removeClass = function removeClass(className) {
          angular.forEach($select.$element.querySelectorAll('.' + className), function (el) {
            angular.element(el).removeClass(className);
          });
        };

        var dragOverHandler = function dragOverHandler(event) {
          event.preventDefault();

          var offset = axis === 'vertical' ? event.offsetY || event.layerY || (event.originalEvent ? event.originalEvent.offsetY : 0) : event.offsetX || event.layerX || (event.originalEvent ? event.originalEvent.offsetX : 0);

          if (offset < this[axis === 'vertical' ? 'offsetHeight' : 'offsetWidth'] / 2) {
            removeClass(droppingAfterClassName);
            element.addClass(droppingBeforeClassName);
          } else {
            removeClass(droppingBeforeClassName);
            element.addClass(droppingAfterClassName);
          }
        };

        var dropTimeout;

        var dropHandler = function dropHandler(event) {
          event.preventDefault();

          var droppedItemIndex = parseInt((event.dataTransfer || event.originalEvent.dataTransfer).getData('text'), 10);

          // prevent event firing multiple times in firefox
          $timeout.cancel(dropTimeout);
          dropTimeout = $timeout(function () {
            _dropHandler(droppedItemIndex);
          }, 20);
        };

        var _dropHandler = function _dropHandler(droppedItemIndex) {
          var theList = scope.$eval(attrs.uiSelectSort);
          var itemToMove = theList[droppedItemIndex];
          var newIndex = null;

          if (element.hasClass(droppingBeforeClassName)) {
            if (droppedItemIndex < scope.$index) {
              newIndex = scope.$index - 1;
            } else {
              newIndex = scope.$index;
            }
          } else {
            if (droppedItemIndex < scope.$index) {
              newIndex = scope.$index;
            } else {
              newIndex = scope.$index + 1;
            }
          }

          move.apply(theList, [droppedItemIndex, newIndex]);

          $ngModel.$setViewValue(Date.now());

          scope.$apply(function () {
            scope.$emit('uiSelectSort:change', {
              array: theList,
              item: itemToMove,
              from: droppedItemIndex,
              to: newIndex
            });
          });

          removeClass(droppingClassName);
          removeClass(droppingBeforeClassName);
          removeClass(droppingAfterClassName);

          element.off('drop', dropHandler);
        };

        element.on('dragenter', function () {
          if (element.hasClass(draggingClassName)) {
            return;
          }

          element.addClass(droppingClassName);

          element.on('dragover', dragOverHandler);
          element.on('drop', dropHandler);
        });

        element.on('dragleave', function (event) {
          if (event.target != element) {
            return;
          }

          removeClass(droppingClassName);
          removeClass(droppingBeforeClassName);
          removeClass(droppingAfterClassName);

          element.off('dragover', dragOverHandler);
          element.off('drop', dropHandler);
        });
      }
    };
  }]);

  /**
   * Debounces functions
   *
   * Taken from UI Bootstrap $$debounce source code
   * See https://github.com/angular-ui/bootstrap/blob/master/src/debounce/debounce.js
   *
   */
  uis.factory('$$uisDebounce', ['$timeout', function ($timeout) {
    return function (callback, debounceTime) {
      var timeoutPromise;

      return function () {
        var self = this;
        var args = Array.prototype.slice.call(arguments);
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }

        timeoutPromise = $timeout(function () {
          callback.apply(self, args);
        }, debounceTime);
      };
    };
  }]);

  uis.directive('uisOpenClose', ['$parse', '$timeout', function ($parse, $timeout) {
    return {
      restrict: 'A',
      require: 'uiSelect',
      link: function link(scope, element, attrs, $select) {
        $select.onOpenCloseCallback = $parse(attrs.uisOpenClose);

        scope.$watch('$select.open', function (isOpen, previousState) {
          if (isOpen !== previousState) {
            $timeout(function () {
              $select.onOpenCloseCallback(scope, {
                isOpen: isOpen
              });
            });
          }
        });
      }
    };
  }]);

  /**
   * Parses "repeat" attribute.
   *
   * Taken from AngularJS ngRepeat source code
   * See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L211
   *
   * Original discussion about parsing "repeat" attribute instead of fully relying on ng-repeat:
   * https://github.com/angular-ui/ui-select/commit/5dd63ad#commitcomment-5504697
   */

  uis.service('uisRepeatParser', ['uiSelectMinErr', '$parse', function (uiSelectMinErr, $parse) {
    var self = this;

    /**
     * Example:
     * expression = "address in addresses | filter: {street: $select.search} track by $index"
     * itemName = "address",
     * source = "addresses | filter: {street: $select.search}",
     * trackByExp = "$index",
     */
    self.parse = function (expression) {

      var match;
      //var isObjectCollection = /\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)/.test(expression);
      // If an array is used as collection

      // if (isObjectCollection){
      // 000000000000000000000000000000111111111000000000000000222222222222220033333333333333333333330000444444444444444444000000000000000055555555555000000000000000000000066666666600000000
      match = expression.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

      // 1 Alias
      // 2 Item
      // 3 Key on (key,value)
      // 4 Value on (key,value)
      // 5 Source expression (including filters)
      // 6 Track by

      if (!match) {
        throw uiSelectMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
      }

      var source = match[5],
          filters = '';

      // When using (key,value) ui-select requires filters to be extracted, since the object
      // is converted to an array for $select.items 
      // (in which case the filters need to be reapplied)
      if (match[3]) {
        // Remove any enclosing parenthesis
        source = match[5].replace(/(^\()|(\)$)/g, '');
        // match all after | but not after ||
        var filterMatch = match[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);
        if (filterMatch && filterMatch[1].trim()) {
          filters = filterMatch[1];
          source = source.replace(filters, '');
        }
      }

      return {
        itemName: match[4] || match[2], // (lhs) Left-hand side,
        keyName: match[3], //for (key, value) syntax
        source: $parse(source),
        filters: filters,
        trackByExp: match[6],
        modelMapper: $parse(match[1] || match[4] || match[2]),
        repeatExpression: function repeatExpression(grouped) {
          var expression = this.itemName + ' in ' + (grouped ? '$group.items' : '$select.items');
          if (this.trackByExp) {
            expression += ' track by ' + this.trackByExp;
          }
          return expression;
        }
      };
    };

    self.getGroupNgRepeatExpression = function () {
      return '$group in $select.groups track by $group.name';
    };
  }]);
})();
angular.module("ui.select").run(["$templateCache", function ($templateCache) {
  $templateCache.put("bootstrap/choices.tpl.html", "<ul class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\" ng-show=\"$select.open && $select.items.length > 0\"><li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div ng-attr-id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><span class=\"ui-select-choices-row-inner\"></span></div></li></ul>");
  $templateCache.put("bootstrap/match-multiple.tpl.html", "<span class=\"ui-select-match\"><span ng-repeat=\"$item in $select.selected track by $index\"><span class=\"ui-select-match-item btn btn-default btn-xs\" tabindex=\"-1\" type=\"button\" ng-disabled=\"$select.disabled\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span> <span uis-transclude-append=\"\"></span></span></span></span>");
  $templateCache.put("bootstrap/match.tpl.html", "<div class=\"ui-select-match\" ng-hide=\"$select.open && $select.searchEnabled\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" aria-label=\"{{ $select.baseTitle }} activate\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" style=\"outline: 0;\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <i class=\"caret pull-right\" ng-click=\"$select.toggle($event)\"></i> <a ng-show=\"$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\" ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right\"><i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i></a></span></div>");
  $templateCache.put("bootstrap/no-choice.tpl.html", "<ul class=\"ui-select-no-choice dropdown-menu\" ng-show=\"$select.items.length == 0\"><li ng-transclude=\"\"></li></ul>");
  $templateCache.put("bootstrap/select-multiple.tpl.html", "<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\" ng-class=\"{open: $select.open}\"><div><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"ui-select-search input-xs\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" ng-model=\"$select.search\" role=\"combobox\" aria-expanded=\"{{$select.open}}\" aria-label=\"{{$select.baseTitle}}\" ng-class=\"{\'spinner\': $select.refreshing}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
  $templateCache.put("bootstrap/select.tpl.html", "<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><span ng-show=\"$select.open && $select.refreshing && $select.spinnerEnabled\" class=\"ui-select-refreshing {{$select.spinnerClass}}\"></span> <input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"{{ $select.baseTitle }}\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" class=\"form-control ui-select-search\" ng-class=\"{ \'ui-select-search-hidden\' : !$select.searchEnabled }\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.open\"><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
  $templateCache.put("select2/choices.tpl.html", "<ul tabindex=\"-1\" class=\"ui-select-choices ui-select-choices-content select2-results\"><li class=\"ui-select-choices-group\" ng-class=\"{\'select2-result-with-children\': $select.choiceGrouped($group) }\"><div ng-show=\"$select.choiceGrouped($group)\" class=\"ui-select-choices-group-label select2-result-label\" ng-bind=\"$group.name\"></div><ul id=\"ui-select-choices-{{ $select.generatedId }}\" ng-class=\"{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }\"><li role=\"option\" ng-attr-id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}\"><div class=\"select2-result-label ui-select-choices-row-inner\"></div></li></ul></li></ul>");
  $templateCache.put("select2/match-multiple.tpl.html", "<span class=\"ui-select-match\"><li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"$item in $select.selected track by $index\" ng-class=\"{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span uis-transclude-append=\"\"></span> <a href=\"javascript:;\" class=\"ui-select-match-close select2-search-choice-close\" ng-click=\"$selectMultiple.removeChoice($index)\" tabindex=\"-1\"></a></li></span>");
  $templateCache.put("select2/match.tpl.html", "<a class=\"select2-choice ui-select-match\" ng-class=\"{\'select2-default\': $select.isEmpty()}\" ng-click=\"$select.toggle($event)\" aria-label=\"{{ $select.baseTitle }} select\"><span ng-show=\"$select.isEmpty()\" class=\"select2-chosen\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"select2-chosen\" ng-transclude=\"\"></span> <abbr ng-if=\"$select.allowClear && !$select.isEmpty()\" class=\"select2-search-choice-close\" ng-click=\"$select.clear($event)\"></abbr> <span class=\"select2-arrow ui-select-toggle\"><b></b></span></a>");
  $templateCache.put("select2/no-choice.tpl.html", "<div class=\"ui-select-no-choice dropdown\" ng-show=\"$select.items.length == 0\"><div class=\"dropdown-content\"><div data-selectable=\"\" ng-transclude=\"\"></div></div></div>");
  $templateCache.put("select2/select-multiple.tpl.html", "<div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}\"><ul class=\"select2-choices\"><span class=\"ui-select-match\"></span><li class=\"select2-search-field\"><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"select2-input ui-select-search\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-model=\"$select.search\" ng-click=\"$select.activate()\" style=\"width: 34px;\" ondrop=\"return false;\"></li></ul><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open || $select.items.length === 0}\"><div class=\"ui-select-choices\"></div></div></div>");
  $templateCache.put("select2/select.tpl.html", "<div class=\"ui-select-container select2 select2-container\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}\"><div class=\"ui-select-match\"></div><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"search-container\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled, \'select2-search\':$select.searchEnabled}\"><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" ng-class=\"{\'select2-active\': $select.refreshing}\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" class=\"ui-select-search select2-input\" ng-model=\"$select.search\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div></div>");
  $templateCache.put("selectize/choices.tpl.html", "<div ng-show=\"$select.open\" class=\"ui-select-choices ui-select-dropdown selectize-dropdown\" ng-class=\"{\'single\': !$select.multiple, \'multi\': $select.multiple}\"><div class=\"ui-select-choices-content selectize-dropdown-content\"><div class=\"ui-select-choices-group optgroup\"><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label optgroup-header\" ng-bind=\"$group.name\"></div><div role=\"option\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\"><div class=\"option ui-select-choices-row-inner\" data-selectable=\"\"></div></div></div></div></div>");
  $templateCache.put("selectize/match-multiple.tpl.html", "<div class=\"ui-select-match\" data-value=\"\" ng-repeat=\"$item in $select.selected track by $index\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'active\':$selectMultiple.activeMatchIndex === $index}\" ui-select-sort=\"$select.selected\"><span class=\"ui-select-match-item\" ng-class=\"{\'select-locked\':$select.isLocked(this, $index)}\"><span uis-transclude-append=\"\"></span> <span class=\"remove ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&times;</span></span></div>");
  $templateCache.put("selectize/match.tpl.html", "<div ng-hide=\"$select.searchEnabled && ($select.open || $select.isEmpty())\" class=\"ui-select-match\"><span ng-show=\"!$select.searchEnabled && ($select.isEmpty() || $select.open)\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty() || $select.open\" ng-transclude=\"\"></span></div>");
  $templateCache.put("selectize/no-choice.tpl.html", "<div class=\"ui-select-no-choice selectize-dropdown\" ng-show=\"$select.items.length == 0\"><div class=\"selectize-dropdown-content\"><div data-selectable=\"\" ng-transclude=\"\"></div></div></div>");
  $templateCache.put("selectize/select-multiple.tpl.html", "<div class=\"ui-select-container selectize-control multi plugin-remove_button\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled}\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-model=\"$select.search\" ng-disabled=\"$select.disabled\" aria-expanded=\"{{$select.open}}\" aria-label=\"{{ $select.baseTitle }}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
  $templateCache.put("selectize/select.tpl.html", "<div class=\"ui-select-container selectize-control single\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search ui-select-toggle\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled}\" ng-click=\"$select.toggle($event)\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-hide=\"!$select.isEmpty() && !$select.open\" ng-disabled=\"$select.disabled\" aria-label=\"{{ $select.baseTitle }}\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
}]);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*@ngInject*/
var imageInputCtrl = function () {
    imageInputCtrl.$inject = ['$element', '$scope'];

    function imageInputCtrl($element, $scope) {
        _classCallCheck(this, imageInputCtrl);

        this.$scope = $scope;
        $($element).find('input').on('change', this.fileChange.bind(this));
        this.reader = new FileReader();
        this.reader.onload = this.updateFile.bind(this);
    }

    _createClass(imageInputCtrl, [{
        key: 'updateFile',
        value: function updateFile(e) {
            this.$scope.$apply(this.reader);
            this.image = this.reader.result;
            this.$scope.$apply();
            this.onChange({ $value: this.image });
        }
    }, {
        key: 'fileChange',
        value: function fileChange(event) {
            if (event.target.files.length === 0) return;
            this.reader.readAsDataURL(event.target.files[0]);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.image = null;
            this.onChange({ $value: this.image });
        }
    }, {
        key: 'style',
        value: function style() {
            return {
                height: '200px',
                width: '100%',
                backgroundImage: 'url(' + this.image + ')',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            };
        }
    }]);

    return imageInputCtrl;
}();

var imageInput = angular.module('imageInput', []).component('imageInput', {
    template: '\n        <div class="card" ng-if="$ctrl.image">\n        <div class="card-body">\n        <div ng-style="$ctrl.style()" ></div>\n        </div>\n        </div>\n        <div class="input-group">\n        <div class="custom-file">\n            <input\n            class="custom-file-input" \n            id="inputGroupFile04" \n            aria-describedby="inputGroupFile04"\n            type="file" accept="image/*">\n            <label class="custom-file-label" for="inputGroupFile04">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B</label>\n        </div>\n        <div class="input-group-append" ng-if="$ctrl.image">\n            <button title="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" ng-click="$ctrl.clear()" class="btn btn-outline-secondary" type="button">\n                <span aria-hidden="true">&times;</span>\n            </button>\n        </div>\n        </div>\n        ',
    controller: imageInputCtrl,
    bindings: {
        onChange: '&',
        image: '<'
    }
});

exports.default = imageInput;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authorEdit = __webpack_require__(25);

var _authorEdit2 = _interopRequireDefault(_authorEdit);

var _authorService = __webpack_require__(1);

var _authorService2 = _interopRequireDefault(_authorService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var AuthorEditCtrl = function () {
    AuthorEditCtrl.$inject = ['authorService', '$stateParams', '$state'];

    function AuthorEditCtrl(authorService, $stateParams, $state) {
        _classCallCheck(this, AuthorEditCtrl);

        this.isLoading = false;
        this.authorService = authorService;
        this.editId = $stateParams.id ? parseInt($stateParams.id) : null;
        this.author = null;
        this.$state = $state;
    }

    _createClass(AuthorEditCtrl, [{
        key: '$onInit',
        value: function $onInit() {
            var _this = this;

            this.isLoading = true;
            if (this.editId) {
                this.authorService.find(this.editId).then(function (author) {
                    _this.author = author;
                    _this.isLoading = false;
                });
            } else {
                this.authorService.new().then(function (author) {
                    _this.author = author;
                    _this.isLoading = false;
                });
            }
        }
    }, {
        key: 'save',
        value: function save() {
            var _this2 = this;

            this.isLoading = true;
            this.authorService[this.editId ? 'update' : 'add'](this.author).then(function (_) {
                _this2.$state.go('authorAdmin');
            });
        }
    }]);

    return AuthorEditCtrl;
}();

var authorEdit = angular.module('authorEdit', [_authorService2.default.name]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('authorEdit', {
        url: '/author/edit/:id',
        component: 'authorEdit'
    }).state('authorNew', {
        url: '/author/new',
        component: 'authorEdit'
    });
}]).component('authorEdit', {
    templateUrl: _authorEdit2.default,
    controller: AuthorEditCtrl
});

exports.default = authorEdit;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b9f4dfebaf4118541ae9fc34861cc4d1.html";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authorList = __webpack_require__(27);

var _authorList2 = _interopRequireDefault(_authorList);

var _authorService = __webpack_require__(1);

var _authorService2 = _interopRequireDefault(_authorService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var authorListCtrl = function () {
    authorListCtrl.$inject = ['authorService'];

    function authorListCtrl(authorService) {
        _classCallCheck(this, authorListCtrl);

        this.isLoading = false;
        this.authorService = authorService;
        this.authors = [];
    }

    _createClass(authorListCtrl, [{
        key: '$onInit',
        value: function $onInit() {
            this.refreshAuthors();
        }
    }, {
        key: 'remove',
        value: function remove(author) {
            var _this = this;

            this.isLoading = true;
            this.authorService.remove(author).then(function (authors) {
                _this.authors = authors;
            }).catch(function (_) {}).finally(function (_) {
                _this.isLoading = false;
            });
        }
    }, {
        key: 'refreshAuthors',
        value: function refreshAuthors() {
            var _this2 = this;

            this.isLoading = true;
            this.authorService.list().then(function (authors) {
                _this2.authors = authors;
                _this2.isLoading = false;
            });
        }
    }]);

    return authorListCtrl;
}();

var authorEdit = angular.module('authorList', [_authorService2.default.name]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('authorAdmin', {
        url: '/admin/author',
        component: 'authorList'
    });
}]).component('authorList', {
    templateUrl: _authorList2.default,
    controller: authorListCtrl
});

exports.default = authorEdit;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "366de74bc059be3a02330fbc43def784.html";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    book_title: 'Заголовок',
    book_publish_year: 'Дата публикации'
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var modalTemplate = function modalTemplate(text) {
    return '\n<div id="modal" class="modal fade">\n  <div class="modal-dialog modal-lg modal-dialog-centered">\n    <div class="modal-content">\n      <div class="modal-body">\n      <div class="alert alert-danger">' + text + '</div>\n      </div>\n    </div>\n  </div>\n</div>\n';
};

var errorCatcher = angular.module('ErrorCatcher', []).factory('$exceptionHandler', function () {
    return function (err) {
        console.error(err);
        var modal = $(modalTemplate('<b>' + err.message + '</b><br/>' + err.stack));
        $(document.body).append(modal);
        modal.modal('show');
        modal.on('hidden.bs.modal', function () {
            return modal.remove();
        });
    };
});

exports.default = errorCatcher;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var propsFilter = angular.module('propsFilter', []).filter('propsFilter', function () {
    return function (items, props) {
        var out = [];
        if (angular.isArray(items)) {
            var keys = Object.keys(props);
            items.forEach(function (item) {
                var itemMatches = false;
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }
                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            out = items;
        }
        return out;
    };
});

exports.default = propsFilter;

/***/ })
/******/ ]);