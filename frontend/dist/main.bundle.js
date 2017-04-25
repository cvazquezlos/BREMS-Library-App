webpackJsonp([4,6],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.setAuthHeaders = function (authCreds) {
        this.authCreds = authCreds;
    };
    UserService.prototype.getUserCompleted = function () {
        return this.user;
    };
    UserService.prototype.getUsers = function (page) {
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        var url = (page) ? __WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */] + '?page=' + page : __WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */];
        return this.http.get(url, { headers: headers })
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    UserService.prototype.getUser = function (id) {
        var _this = this;
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */] + '/' + id.toString(), { headers: headers })
            .map(function (response) {
            _this.user = response.json();
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    UserService.prototype.updateUser = function (user, current) {
        var _this = this;
        this.authCreds = localStorage.getItem("creds");
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */] + '/' + user.id, body, { headers: headers })
            .map(function (response) {
            if (current) {
                _this.getUser(user.id).subscribe(function (user) { return _this.user = user; }, function (error) { return error; });
            }
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    UserService.prototype.updateFile = function (formData, user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */] + '/' + user.id + '/upload', formData, { headers: headers })
            .map(function (response) { return console.log("Success. The file has been successfully added to server directories."); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    UserService.prototype.deleteUser = function (id) {
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */] + '/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    UserService.prototype.createUser = function (user) {
        this.authCreds = localStorage.getItem("creds");
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__util__["g" /* USER_URL */], body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileService = (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.setAuthHeaders = function (authCreds) {
        this.authCreds = authCreds;
    };
    FileService.prototype.getUserFile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["j" /* FILE_URL */] + '/user/' + id)
            .map(function (response) { return JSON.stringify(response); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    FileService.prototype.getResourceFile = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["j" /* FILE_URL */] + '/resource/' + id)
            .map(function (response) { return JSON.stringify(response); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return FileService;
}());
FileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FileService);

var _a;
//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionService = (function () {
    function ActionService(http) {
        this.http = http;
    }
    ActionService.prototype.setAuthHeaders = function (authCreds) {
        this.authCreds = authCreds;
    };
    ActionService.prototype.getAllActions = function (page, finished) {
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        /*let url = ACTION_URL;
        if (page)
            url += '?page=' + page;
        if (finished)
            url += '&finished=' + finished;*/
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["k" /* ACTION_URL */] + '?page=' + page + '&finished=' + finished, { headers: headers })
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ActionService.prototype.postAction = function (action) {
        this.authCreds = localStorage.getItem("creds");
        var body = JSON.stringify(action);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__util__["k" /* ACTION_URL */], body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ActionService.prototype.updateAction = function (loan, action) {
        this.authCreds = localStorage.getItem("creds");
        var body = JSON.stringify(loan);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        var url = __WEBPACK_IMPORTED_MODULE_4__util__["k" /* ACTION_URL */] + '/' + loan.id + '?action=' + action;
        return this.http.put(url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ActionService.prototype.deleteAction = function (id) {
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__util__["k" /* ACTION_URL */] + '/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return ActionService;
}());
ActionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ActionService);

var _a;
//# sourceMappingURL=action.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FineService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FineService = (function () {
    function FineService(http) {
        this.http = http;
    }
    FineService.prototype.setAuthHeaders = function (authCreds) {
        this.authCreds = authCreds;
    };
    FineService.prototype.getAllFines = function (page) {
        this.authCreds = localStorage.getItem('creds');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["i" /* FINE_URL */] + '?page=' + page, { headers: headers })
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    FineService.prototype.deleteFine = function (id) {
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__util__["i" /* FINE_URL */] + '/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return FineService;
}());
FineService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FineService);

var _a;
//# sourceMappingURL=fine.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceCopyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResourceCopyService = (function () {
    function ResourceCopyService(http) {
        this.http = http;
        this.resourceCopies = [];
    }
    ResourceCopyService.prototype.setAuthHeaders = function (authCreds) {
        this.authCreds = authCreds;
    };
    ResourceCopyService.prototype.getResourceCopies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["e" /* RESOURCECOPY_URL */], { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return ResourceCopyService;
}());
ResourceCopyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ResourceCopyService);

var _a;
//# sourceMappingURL=resource-copy.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    API_URL: 'https://localhost:8443/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./component/admin/admin.module": [
		575,
		0
	],
	"./component/public/public.module": [
		576,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 216;


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(162);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_action_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_file_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_fine_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_resource_copy_service__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SessionService = (function () {
    function SessionService(http, userService, actionService, fineService, fileService, resourceCopyService) {
        this.http = http;
        this.userService = userService;
        this.actionService = actionService;
        this.fineService = fineService;
        this.fileService = fileService;
        this.resourceCopyService = resourceCopyService;
        this.isLogged = false;
        this.isAdmin = false;
    }
    SessionService.prototype.ngOnDestroy = function () {
        console.log("localStorage called from ngOnDestroy");
        localStorage.clear();
    };
    SessionService.prototype.logIn = function (username, password) {
        var _this = this;
        this.authCreds = btoa(username + ':' + password);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* LOGIN_URL */], { headers: headers })
            .map(function (response) {
            var id = response.json().id;
            localStorage.setItem('creds', _this.authCreds);
            localStorage.setItem('id', String(id));
            _this.userService.setAuthHeaders(_this.authCreds);
            _this.userService.getUser(id).subscribe(function (user) {
                _this.user = user;
                if (_this.user.roles.includes('ROLE_ADMIN', 0))
                    _this.isAdmin = true;
            }, function (error) { return console.log(error); });
            localStorage.setItem('user', username);
            localStorage.setItem('password', password);
            _this.actionService.setAuthHeaders(_this.authCreds);
            _this.fileService.setAuthHeaders(_this.authCreds);
            _this.fineService.setAuthHeaders(_this.authCreds);
            _this.resourceCopyService.setAuthHeaders(_this.authCreds);
            _this.isLogged = true;
            return _this.user;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    SessionService.prototype.logOut = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* BASE_URL */] + 'logOut', { headers: headers })
            .map(function (response) {
            localStorage.clear();
            _this.isLogged = false;
            _this.user = null;
            return true;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    SessionService.prototype.checkCredentials = function () {
        return (localStorage.getItem("user") !== null);
    };
    SessionService.prototype.register = function (firstName, lastName1, lastName2, username, password, dni, email, phone) {
        var newUser;
        newUser = { name: username, passwordHash: password, dni: dni, firstName: firstName, lastName1: lastName1, lastName2: lastName2, email: email, telephone: phone, hasPhoto: false, viewTelephone: false };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* BASE_URL */] + 'register', newUser);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__service_action_service__["a" /* ActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_action_service__["a" /* ActionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__service_fine_service__["a" /* FineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_fine_service__["a" /* FineService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__service_resource_copy_service__["a" /* ResourceCopyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_resource_copy_service__["a" /* ResourceCopyService */]) === "function" && _f || Object])
], SessionService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResourceService = (function () {
    function ResourceService(http) {
        this.http = http;
    }
    ResourceService.prototype.setAuthHeaders = function (authCreds) {
        this.authCreds = authCreds;
    };
    ResourceService.prototype.getResource = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.getAllResources = function (type, page) {
        var url = __WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '?type=' + type + '&page=' + page;
        return this.http.get(url)
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.getAllListResources = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '/all';
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.getPageResources = function (page) {
        var url = (page) ? __WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '?page=' + page : __WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */];
        return this.http.get(url)
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.searchResources = function (name, page) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '?name=' + name + '&page=' + page)
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.updateResource = function (resource) {
        var body = JSON.stringify(resource);
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '/' + resource.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.createResource = function (resource) {
        var body = JSON.stringify(resource);
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */], body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.updateFile = function (formData, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '/' + id + '/upload', formData, { headers: headers })
            .map(function (response) { return console.log("Success. The file has been successfully added to server directories."); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.deleteResource = function (id) {
        this.authCreds = localStorage.getItem("creds");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Authorization', 'Basic ' + this.authCreds);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__util__["f" /* RESOURCES_URL */] + '/' + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ResourceService.prototype.getResourcesTypes = function () {
        var url = 'https://localhost:8443/api/resourcetypes';
        return this.http.get(url)
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return ResourceService;
}());
ResourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ResourceService);

var _a;
//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GenreService = (function () {
    function GenreService(http) {
        this.http = http;
    }
    GenreService.prototype.getAllGenres = function (page) {
        var url = (page) ? __WEBPACK_IMPORTED_MODULE_4__util__["h" /* GENRE_URL */] + '?page=' + page : __WEBPACK_IMPORTED_MODULE_4__util__["h" /* GENRE_URL */];
        return this.http.get(url)
            .map(function (response) { return response.json().content; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GenreService.prototype.getGenre = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__util__["h" /* GENRE_URL */] + '/' + id)
            .map(function (response) { return response.json().resources; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    return GenreService;
}());
GenreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], GenreService);

var _a;
//# sourceMappingURL=genre.service.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', loadChildren: './component/public/public.module#PublicModule' },
    { path: 'admin', loadChildren: './component/admin/admin.module#AdminModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('Killing proccesses...');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(304),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_dropdown__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_action_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_file_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_fine_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_genre_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_resource_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_resource_copy_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_dropdown__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__service_action_service__["a" /* ActionService */],
            __WEBPACK_IMPORTED_MODULE_10__service_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_11__service_fine_service__["a" /* FineService */],
            __WEBPACK_IMPORTED_MODULE_12__service_genre_service__["a" /* GenreService */],
            __WEBPACK_IMPORTED_MODULE_13__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__service_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_15__service_resource_copy_service__["a" /* ResourceCopyService */],
            __WEBPACK_IMPORTED_MODULE_16__service_session_service__["a" /* SessionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_environments_environment__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ACTION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FINE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FILE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GENRE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RESOURCES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESOURCECOPY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BOOKS_IMG_URL; });
/* unused harmony export IMG_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADMIN_IMG_URL; });
/* unused harmony export STATUS_NO_CONTENT */

var BASE_URL = __WEBPACK_IMPORTED_MODULE_0_environments_environment__["a" /* environment */].API_URL;
var LOGIN_URL = BASE_URL + "login";
var ACTION_URL = BASE_URL + "loans";
var FINE_URL = BASE_URL + 'fines';
var FILE_URL = BASE_URL + 'files';
var GENRE_URL = BASE_URL + 'genres';
var RESOURCES_URL = BASE_URL + 'resources';
var RESOURCECOPY_URL = BASE_URL + 'resourcecopies';
var USER_URL = BASE_URL + 'users';
var BOOKS_IMG_URL = "./assets/img/books/";
var IMG_URL = "./assets/img/";
var ADMIN_IMG_URL = "../../../assets/img/";
var STATUS_NO_CONTENT = 204;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(217);


/***/ })

},[573]);
//# sourceMappingURL=main.bundle.js.map