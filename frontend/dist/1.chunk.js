webpackJsonp([1,6],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_dropdown__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_about_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_contact_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_resource_details_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_search_search_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_modal_component_modal_login__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_register_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_profile_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__public_routing_module__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_modal_profile_component_modal_profile_edit__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_modal_biography_component_modal_biography_edit__ = __webpack_require__(597);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var PublicModule = (function () {
    function PublicModule() {
    }
    return PublicModule;
}());
PublicModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_16__public_routing_module__["a" /* PublicRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_dropdown__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__public_component__["a" /* PublicComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_resource_details_component__["a" /* ResourceDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_modal_component_modal_login__["a" /* ModalLogin */],
            __WEBPACK_IMPORTED_MODULE_14__login_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__user_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_modal_profile_component_modal_profile_edit__["a" /* ModalProfileEdit */],
            __WEBPACK_IMPORTED_MODULE_19__user_modal_biography_component_modal_biography_edit__["a" /* ModalBiographyEdit */]
        ]
    })
], PublicModule);

//# sourceMappingURL=public.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(router, activatedRoute) {
        this.router = router;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(626)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AboutComponent);

var _a, _b;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(router, activatedRoute) {
        this.router = router;
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(627)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_action_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_file_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_resource_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_resource_copy_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = (function () {
    function HomeComponent(resourceService, sessionService, sanitizer, fileService, actionService, resourceCopyService, userService) {
        this.resourceService = resourceService;
        this.sessionService = sessionService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this.actionService = actionService;
        this.resourceCopyService = resourceCopyService;
        this.userService = userService;
        this.books = [];
        this.booksPage = 0;
        this.errorMessage = false;
        this.img_url = __WEBPACK_IMPORTED_MODULE_1__util__["d" /* BOOKS_IMG_URL */];
        this.isLogged = false;
        this.magazines = [];
        this.magazinesPage = 0;
        this.moreBooksActive = false;
        this.moreMagazActive = false;
        this.successMessage = false;
        this.addBooks(true);
        this.addMagazines(true);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLogged = this.sessionService.checkCredentials();
        this.user = this.userService.getUserCompleted();
    };
    HomeComponent.prototype.ngDoCheck = function () {
        if (this.isLogged != this.sessionService.checkCredentials()) {
            this.ngOnInit();
        }
    };
    HomeComponent.prototype.addBooks = function (userReq) {
        var _this = this;
        this.resourceService.getAllResources('Libro', this.booksPage).subscribe(function (books) {
            if (books[1] === undefined) {
                console.log('No hay más libros.');
                _this.moreBooksActive = false;
            }
            else if (userReq) {
                _this.moreBooksActive = true;
                _this.booksPage++;
                _this.books = _this.books.concat(books);
                _this.downloadImages(_this.books);
                _this.addBooks(false);
            }
        }, function (error) { return console.log('Fail trying to get BREMS books.'); });
    };
    HomeComponent.prototype.addMagazines = function (userReq) {
        var _this = this;
        this.resourceService.getAllResources('Revista', this.magazinesPage).subscribe(function (magazines) {
            if (magazines[1] == null) {
                _this.moreMagazActive = false;
            }
            else if (userReq) {
                _this.moreMagazActive = true;
                _this.magazinesPage++;
                _this.magazines = _this.magazines.concat(magazines);
                _this.downloadImages(_this.magazines);
                _this.addMagazines(false);
            }
        }, function (error) { return console.log('Fail trying to get BREMS magazines.'); });
    };
    HomeComponent.prototype.downloadImages = function (resources) {
        console.log('Downloading images from server...');
        var _loop_1 = function (resource) {
            this_1.fileService.getResourceFile(resource.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                resource.image = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log('Fail adding resource ' + resource.title + 'image.'); });
        };
        var this_1 = this;
        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
            var resource = resources_1[_i];
            _loop_1(resource);
        }
    };
    HomeComponent.prototype.reserveResource = function (resource) {
        var _this = this;
        console.log('Trying to find a reserve copy avaible of ' + resource.title + '...');
        this.resourceCopyService.getResourceCopies().subscribe(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var copy = response_1[_i];
                if (copy.locationCode === resource.noReservedCopies[0]) {
                    var action = void 0;
                    action = { copy: copy, user: _this.user };
                    _this.actionService.postAction(action).subscribe(function (response) {
                        _this.errorMessage = false;
                        _this.successMessage = true;
                        _this.message = 'La reserva se ha realizado exitosamente.';
                        console.log('Reserve successfully completed.');
                    }, function (error) { return console.log('Fail trying to make the reserve.'); });
                }
            }
        }, function (error) {
            console.log('Not enough copies or user is not allow to make the reserve.');
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'La reserva no se ha podido realizar.';
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(628)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_resource_service__["a" /* ResourceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_file_service__["a" /* FileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_action_service__["a" /* ActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_action_service__["a" /* ActionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_resource_copy_service__["a" /* ResourceCopyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_resource_copy_service__["a" /* ResourceCopyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _g || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_resource_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_file_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResourceDetailsComponent = (function () {
    function ResourceDetailsComponent(activatedRoute, resourceService, sanitizer, fileService) {
        this.activatedRoute = activatedRoute;
        this.resourceService = resourceService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
    }
    ResourceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService.getResource(this.activatedRoute.snapshot.params['id']).subscribe(function (resource) {
            _this.resource = resource;
            console.log(_this.resource.title);
        }, function (error) { return console.log(error); });
        this.fileService.getResourceFile(this.activatedRoute.snapshot.params['id']).subscribe(function (data) {
            var dataRecieved = data.split('"');
            _this.resource.image = 'data:image/png;base64,' + dataRecieved[3];
        }, function (error) { return console.log("FILAZO"); });
    };
    return ResourceDetailsComponent;
}());
ResourceDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(629)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_resource_service__["a" /* ResourceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_file_service__["a" /* FileService */]) === "function" && _d || Object])
], ResourceDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=resource-details.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_resource_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_genre_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_file_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = (function () {
    function SearchComponent(router, route, genreService, resourceService, sessionService, sanitizer, fileService) {
        this.router = router;
        this.route = route;
        this.genreService = genreService;
        this.resourceService = resourceService;
        this.sessionService = sessionService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this.genres = [];
        this.genresPage = 0;
        this.resourcesPage = 0;
        this.isLogged = false;
        this.resources = [];
        this.visible = true;
        this.showMore = 'No hay resultados para ';
        this.activeSearch = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genreService.getAllGenres(this.genresPage).subscribe(function (genres) { return _this.genres = genres; }, function (error) { return console.log(error); });
        this.isLogged = this.sessionService.checkCredentials();
        this.route.queryParams.subscribe(function (params) {
            _this.searchResourcesByName(params['name']);
            _this.search = (params['name']);
            if (params['name'] != null)
                _this.showMore = 'Ver más resultados para ';
        }, function (error) { return console.log(error); });
        this.search2 = this.search;
    };
    SearchComponent.prototype.ngDoCheck = function () {
        if (this.search != this.search2) {
            this.search2 = this.search;
            this.searchResourcesByName(this.search);
        }
    };
    SearchComponent.prototype.searchResourcesByGenre = function (id) {
        var _this = this;
        this.activeSearch = false;
        this.showMore = 'Ver más resultados';
        this.search = '';
        this.search2 = '';
        this.visible = true;
        this.genreService.getGenre(id).subscribe(function (genre) {
            _this.resources = genre;
            _this.uploadImages(_this.resources);
        }, function (error) { return console.log(error); });
    };
    SearchComponent.prototype.searchResourcesByName = function (name) {
        var _this = this;
        this.activeSearch = true;
        this.visible = true;
        this.resourcesPage = 0;
        this.resourceService.searchResources(name, this.resourcesPage).subscribe(function (search) {
            _this.resources = search;
            _this.uploadImages(_this.resources);
        }, function (error) {
            console.log(error);
            _this.resources = [];
            _this.showMore = 'No hay resultados para ';
        });
    };
    SearchComponent.prototype.addSearch = function () {
        var _this = this;
        if (this.resources == null || this.activeSearch == false)
            return;
        this.resourcesPage++;
        this.resourceService.searchResources(this.search, this.resourcesPage).subscribe(function (search) {
            _this.resources = _this.resources.concat(search);
            _this.uploadImages(_this.resources);
        }, function (error) { return _this.showMore = 'No hay más resultados para '; });
    };
    SearchComponent.prototype.uploadImages = function (resources) {
        var _loop_1 = function (resource) {
            this_1.fileService.getResourceFile(resource.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                resource.image = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log("Fail adding resource " + resource.title + "image."); });
        };
        var this_1 = this;
        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
            var resource = resources_1[_i];
            _loop_1(resource);
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(630)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_genre_service__["a" /* GenreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_genre_service__["a" /* GenreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_resource_service__["a" /* ResourceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_session_service__["a" /* SessionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */]) === "function" && _g || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    LoginComponent.prototype.logIn = function (username, password) {
        var _this = this;
        this.sessionService.logIn(username, password).subscribe(function (user) {
            _this.user = user;
            _this.router.navigate(['']);
        }, function (error) { return console.log("Fail trying to login."); });
    };
    LoginComponent.prototype.logOut = function () {
        this.sessionService.logOut();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(631)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLogin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalLogin = (function () {
    // ------------------------------------------------------------------------------------------------------------------
    function ModalLogin(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.visible = false;
    }
    // ------------------------------------------------------------------------------------------------------------------
    ModalLogin.prototype.logIn = function (username, password) {
        var _this = this;
        this.sessionService.logIn(username, password).subscribe(function () {
            _this.close();
            _this.router.navigate(['']);
        }, function (error) {
            console.log(error);
            console.log('fail');
            _this.close();
        });
    };
    // ------------------------------------------------------------------------------------------------------------------
    ModalLogin.prototype.close = function () {
        this.visible = false;
    };
    ModalLogin.prototype.open = function () {
        if (!this.visible)
            this.visible = true;
    };
    return ModalLogin;
}());
ModalLogin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-login',
        template: __webpack_require__(632),
        styles: ["\n    .hide{display: none}"],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* style */])({ transform: 'scale3d(.3, .3, .3)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ModalLogin);

var _a, _b;
//# sourceMappingURL=modal-login.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function (firstName, lastName1, lastName2, username, password, dni, email, phone) {
        var _this = this;
        this.sessionService.register(firstName, lastName1, lastName2, username, password, dni, email, phone).subscribe(function (user) { _this.router.navigate(['/']); }, function (error) { return console.log("Fail trying to register new account."); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(633)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_modal_component_modal_login__ = __webpack_require__(594);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicComponent = (function () {
    function PublicComponent() {
        if (localStorage.getItem('user') !== 'sergiob') {
            localStorage.clear();
        }
    }
    PublicComponent.prototype.openLogin = function () {
        this.modalLogin.open();
    };
    return PublicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__login_modal_component_modal_login__["a" /* ModalLogin */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_modal_component_modal_login__["a" /* ModalLogin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_modal_component_modal_login__["a" /* ModalLogin */]) === "function" && _a || Object)
], PublicComponent.prototype, "modalLogin", void 0);
PublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public',
        template: __webpack_require__(634),
        styles: [__webpack_require__(610)]
    }),
    __metadata("design:paramtypes", [])
], PublicComponent);

var _a;
//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBiographyEdit; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalBiographyEdit = (function () {
    function ModalBiographyEdit(userService, router) {
        this.userService = userService;
        this.router = router;
        this.visible = false;
    }
    ModalBiographyEdit.prototype.edit = function (biography) {
        var _this = this;
        var updatedUser = {
            id: this.user.id, name: this.user.name, dni: this.user.dni, firstName: this.user.firstName,
            lastName1: this.user.lastName1, lastName2: this.user.lastName2, email: this.user.email,
            telephone: this.user.telephone, viewTelephone: this.user.viewTelephone, address: this.user.address,
            biography: biography
        };
        this.userService.updateUser(updatedUser, true).subscribe(function (response) {
            console.log(_this.user.name + " successfully updated.");
            _this.user = _this.userService.getUserCompleted();
            _this.router.navigate(['/profile']);
            _this.close();
        }, function (error) { return console.log("Fail trying to modify " + _this.user.name + "'s biography."); });
    };
    ModalBiographyEdit.prototype.close = function () {
        this.visible = false;
    };
    ModalBiographyEdit.prototype.open = function (user) {
        if (!this.visible) {
            this.visible = true;
        }
        this.user = user;
    };
    return ModalBiographyEdit;
}());
ModalBiographyEdit = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-biography-edit',
        template: __webpack_require__(635),
        styles: ["\n    .hide {\n      display: none\n    }"],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* style */])({ transform: 'scale3d(.3, .3, .3)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ModalBiographyEdit);

var _a, _b;
//# sourceMappingURL=modal-biography-edit.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProfileEdit; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalProfileEdit = (function () {
    function ModalProfileEdit(userService, router) {
        this.userService = userService;
        this.router = router;
        this.visible = false;
    }
    ModalProfileEdit.prototype.edit = function (firstName, lastName1, lastName2, email, telephone, viewTelephone, address) {
        var _this = this;
        var updatedUser = {
            id: this.user.id, name: this.user.name, dni: this.user.dni, firstName: firstName,
            lastName1: lastName1, lastName2: lastName2, email: email, telephone: telephone,
            viewTelephone: viewTelephone, address: address, biography: this.user.biography
        };
        this.userService.updateUser(updatedUser, true).subscribe(function (response) {
            if (_this.userImage !== undefined) {
                console.log("Uploading file...");
                var formData = new FormData();
                formData.append('file', _this.userImage, _this.userImage.name);
                _this.userService.updateFile(formData, updatedUser).subscribe();
            }
            console.log(_this.user.name + " successfully updated.");
            _this.user = _this.userService.getUserCompleted();
            _this.router.navigate(['/profile']);
            _this.close();
        }, function (error) { return console.log("Fail trying to modify " + _this.user.name + "."); });
    };
    ModalProfileEdit.prototype.selectFile = function ($event) {
        this.userImage = $event.target.files[0];
        console.log("Selected file: " + this.userImage.name + " type:" + this.userImage.type + " size:" + this.userImage.size);
    };
    ModalProfileEdit.prototype.close = function () {
        this.visible = false;
    };
    ModalProfileEdit.prototype.open = function (user) {
        if (!this.visible) {
            this.visible = true;
        }
        this.user = user;
    };
    return ModalProfileEdit;
}());
ModalProfileEdit = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-profile-edit',
        template: __webpack_require__(636),
        styles: ["\n    .hide {\n      display: none\n    }"],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('dialog', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* style */])({ transform: 'scale3d(.3, .3, .3)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* animate */])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ModalProfileEdit);

var _a, _b;
//# sourceMappingURL=modal-profile-edit.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_action_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_fine_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_file_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_profile_component_modal_profile_edit__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_biography_component_modal_biography_edit__ = __webpack_require__(597);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfileComponent = (function () {
    function ProfileComponent(router, userService, sessionService, actionService, fineService, sanitizer, fileService) {
        this.router = router;
        this.userService = userService;
        this.sessionService = sessionService;
        this.actionService = actionService;
        this.fineService = fineService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this.currentActions = [];
        this.currentActionsPage = 0;
        this.fines = [];
        this.finePage = 0;
        this.history = [];
        this.historyPage = 0;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sessionService.checkCredentials())
            this.router.navigate(['/login']);
        else {
            var resources_1;
            this.user = this.userService.getUserCompleted();
            this.actionService.getAllActions(this.currentActionsPage, false).subscribe(function (actions) {
                _this.currentActions = actions;
                for (var _i = 0, _a = _this.currentActions; _i < _a.length; _i++) {
                    var action = _a[_i];
                    resources_1.push(action.copy.resource);
                }
                _this.currentActionsPage++;
                _this.downloadImages(resources_1);
            }, function (error) { return console.log('Fail trying to charge ' + _this.user.name + " current loans."); });
            this.fineService.getAllFines(this.finePage).subscribe(function (fines) {
                _this.fines = fines;
                _this.finePage++;
            }, function (error) { return console.log("Fail trying to charge " + _this.user.name + " fines."); });
            resources_1 = [];
            this.actionService.getAllActions(this.historyPage, true).subscribe(function (actions) {
                _this.history = actions;
                for (var _i = 0, _a = _this.history; _i < _a.length; _i++) {
                    var action = _a[_i];
                    resources_1.push(action.copy.resource);
                }
                _this.historyPage++;
                _this.downloadImages(resources_1);
            }, function (error) { return console.log("Fail trying to charge " + _this.user.name + " history."); });
            this.fileService.getUserFile(this.user.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                _this.userImage = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log("Fail trying to charge " + _this.user.name + " image."); });
        }
    };
    ProfileComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.user != this.userService.getUserCompleted()) {
            this.ngOnInit();
            this.userImage = null;
            this.fileService.getUserFile(this.user.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                _this.userImage = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log("Fail trying to charge " + _this.user.name + " image."); });
        }
    };
    ProfileComponent.prototype.downloadImages = function (resources) {
        console.log('Downloading images from server...');
        var _loop_1 = function (resource) {
            this_1.fileService.getResourceFile(resource.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                resource.image = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log('Fail adding resource ' + resource.title + 'image.'); });
        };
        var this_1 = this;
        for (var _i = 0, resources_2 = resources; _i < resources_2.length; _i++) {
            var resource = resources_2[_i];
            _loop_1(resource);
        }
    };
    ProfileComponent.prototype.editProfile = function () {
        this.modalProfileEdit.open(this.user);
    };
    ProfileComponent.prototype.editBiography = function () {
        this.modalBiographyEdit.open(this.user);
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__modal_profile_component_modal_profile_edit__["a" /* ModalProfileEdit */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__modal_profile_component_modal_profile_edit__["a" /* ModalProfileEdit */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__modal_profile_component_modal_profile_edit__["a" /* ModalProfileEdit */]) === "function" && _a || Object)
], ProfileComponent.prototype, "modalProfileEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__modal_biography_component_modal_biography_edit__["a" /* ModalBiographyEdit */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__modal_biography_component_modal_biography_edit__["a" /* ModalBiographyEdit */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__modal_biography_component_modal_biography_edit__["a" /* ModalBiographyEdit */]) === "function" && _b || Object)
], ProfileComponent.prototype, "modalBiographyEdit", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(637)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_session_service__["a" /* SessionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_action_service__["a" /* ActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_action_service__["a" /* ActionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__service_fine_service__["a" /* FineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_fine_service__["a" /* FineService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_file_service__["a" /* FileService */]) === "function" && _j || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(624)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.aboutActive = false;
        this.contactActive = false;
        this.indexActive = true;
        this.profileActive = false;
        this.openModalLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isAdmin = false;
    }
    HeaderComponent.prototype.gotoSearch = function (search) {
        this.router.navigate(['/search'], { queryParams: { name: search } });
        this.update('index');
    };
    HeaderComponent.prototype.login = function () {
        this.openModalLogin.emit();
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.sessionService.logOut().subscribe(function (success) {
            _this.router.navigate(['']);
        }, function (fail) { return console.log(fail); });
    };
    HeaderComponent.prototype.update = function (page) {
        switch (page) {
            case 'index':
                this.aboutActive = false;
                this.contactActive = false;
                this.indexActive = true;
                this.profileActive = false;
                break;
            case 'profile':
                this.aboutActive = false;
                this.contactActive = false;
                this.indexActive = false;
                this.profileActive = true;
                break;
            case 'about':
                this.aboutActive = false;
                this.contactActive = false;
                this.indexActive = false;
                this.profileActive = false;
                break;
            case 'contact':
                this.aboutActive = false;
                this.contactActive = true;
                this.indexActive = false;
                this.profileActive = false;
                break;
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HeaderComponent.prototype, "openModalLogin", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(625)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_about_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_contact_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_resource_details_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_search_search_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_register_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_component__ = __webpack_require__(599);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var publicRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__public_component__["a" /* PublicComponent */],
        children: [
            {
                path: '',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__home_about_component__["a" /* AboutComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__home_contact_component__["a" /* ContactComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__user_profile_component__["a" /* ProfileComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__login_register_component__["a" /* RegisterComponent */] },
                    { path: 'resource/:id', component: __WEBPACK_IMPORTED_MODULE_6__home_resource_details_component__["a" /* ResourceDetailsComponent */] },
                    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_7__home_search_search_component__["a" /* SearchComponent */] }
                ]
            }
        ]
    }
];
var PublicRoutingModule = (function () {
    function PublicRoutingModule() {
    }
    return PublicRoutingModule;
}());
PublicRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(publicRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], PublicRoutingModule);

//# sourceMappingURL=public-routing.module.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <span class=\"copyright\">Copyright 2017 BREMS | Todos los derechos reservados.</span>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<header class=\"headerWrapper\" style=\"position:relative !important\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-5 col-lg-5 logo\">\n        <a [routerLink]=\"['']\"> <img src=\"./assets/img/logo.png\" alt=\"logo brems\">\n          <h1>Book Reserve System Management</h1>\n        </a>\n      </div>\n      <div class=\"col-sm-12 col-md-5 col-lg-3 col-md-offset-2 col-lg-offset-4\">\n        <div id=\"search-input\">\n          <div class=\"input-group col-md-12\">\n            <input type=\"text\" #mySearch class=\"form-control input-lg\" name=\"mySearch\" placeholder=\"Buscar\" />\n            <span class=\"input-group-btn\"><button (click)=\"gotoSearch(mySearch.value)\" class=\"glyphicon glyphicon-search\" type=\"submit\"></button></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid menuNav\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Navegación</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li [class.active]=\"indexActive\"><a [routerLink]=\"['']\" (click)=\"update('index')\">Inicio</a></li>\n          <li [class.active]=\"profileActive\"><a [routerLink]=\"['/profile']\" (click)=\"update('profile')\">Perfil</a></li>\n          <li [class.active]=\"aboutActive\"><a [routerLink]=\"['/about']\" (click)=\"update('about')\">Sobre</a></li>\n          <li [class.active]=\"contactActive\"><a [routerLink]=\"['/contact']\" (click)=\"update('contact')\">Contacto</a></li>\n        </ul>\n        <div class=\"col-lg-7\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-lg-offset-7 paddingNone userDropdownMenu\">\n              <div *ngIf=\"sessionService.isLogged; else notLogged\">\n                <div class=\"dropdown\" dropdown>\n                  <button class=\"btn btn-primary dropdown-toggle\" dropdown-open>\n                    <img src=\"../../../assets/img/user_undefined_f_40x40.jpg\" class=\"img-circle\" />\n                    {{sessionService.user?.name}}</button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a [routerLink]=\"['/profile']\" (click)=\"update('profile')\">Perfil <span class=\"glyphicon glyphicon-user\"></span></a>\n                      <li *ngIf=\"sessionService.isAdmin\"><a [routerLink]=\"['/admin']\">Panel de administración <span class=\"glyphicon glyphicon-cog\"></span></a></li>\n                      <li><a href=\"#\" (click)=\"logOut()\">Cerrar sesión <span class=\"glyphicon glyphicon-log-out\"></span></a></li>\n                  </ul>\n                </div>\n              </div>\n              <ng-template #notLogged>\n                <div class=\"btn-group iconMenu\" role=\"group\" aria-label=\"...\">\n                  <div class=\"btn-group\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" (click)=\"login()\">\n                      <img src=\"../../../assets/img/user_undefined_f_40x40.jpg\" class=\"img-circle\" />\n                      <span>Iniciar sesión</span> <span class=\"fa fa-power-off\"></span>\n                    </button>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n      <li class=\"active\">Sobre BREMS</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-3 titulo\">\n    <h2>Sobre nosotros</h2></div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <img class=\"imag\" src=\"../../assets/img/others/library.jpg\">\n    <hr>\n    <p class=\"text-justify\">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.\n      Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.\n      del T. persona que se dedica a la imprenta) desconocido\n      usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo\n      sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando\n      esencialmente igual al\n      original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de\n      Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual\n      incluye versiones de\n      Lorem Ipsum.</p>\n    <p class=\"text-justify\">Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el\n      contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una\n      distribución más o menos normal de las letras, al contrario\n      de usar textos como por ejemplo \"Contenido aquí, contenido aquí\". Estos textos hacen parecerlo un español que\n      se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por\n      defecto, y al hacer\n      una búsqueda de \"Lorem Ipsum\" va a dar por resultado muchos sitios web que usan este texto si se encuentran en\n      estado de desarrollo. Muchas versiones han evolucionado.</p>\n    <p class=\"text-justify\">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto\n      aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de\n      Cristo, haciendo que este adquiera mas de 2000\n      años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,\n      encontró una de las palabras más oscuras de la lengua del latín, \"consecteur\", en un pasaje de Lorem Ipsum, y\n      al seguir leyendo\n      distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y\n      1.10.33 de \"de Finnibus Bonorum et Malorum\" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45\n      antes de Cristo. Este\n      libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem\n      Ipsum, \"Lorem ipsum dolor sit amet..\", viene de una linea en la sección 1.10.32</p>\n    <p class=\"text-justify\">Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió\n      alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un\n      poco creíbles. Si vas a utilizar un pasaje\n      de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos\n      los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea\n      necesario, haciendo\n      a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras\n      provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum\n      que parezca razonable.\n      Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características\n      del lenguaje, etc.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n      <li class=\"active\">Contacto</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <div id=\"map_model\">\n      <div id=\"gmap_canvas\"></div>\n    </div>\n  </div>\n</div>\n<br/>\n<!-- https://codepen.io/jaycbrf/pen/iBszr -->\n<form class=\"well form-horizontal\" action=\" \" method=\"post\" id=\"contact_form\">\n  <fieldset>\n    <!-- Form Name -->\n    <legend>¡Contáctanos!</legend>\n    <!-- Select Basic -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Motivo de su consulta</label>\n      <div class=\"col-md-4 selectContainer\">\n        <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n          <select name=\"state\" class=\"form-control selectpicker\">\n            <option value=\" \">Selecciona un motivo</option>\n            <option>Carnet bibliotecario</option>\n            <option>Sugerencia</option>\n            <option>Queja</option>\n            <option>Problema con un préstamo</option>\n            <option>Otro</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Nombre</label>\n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n          <input name=\"first_name\" placeholder=\"Nombre\" class=\"form-control\" type=\"text\"></div>\n      </div>\n    </div>\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">E-Mail</label>\n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n          <input name=\"email\" placeholder=\"Dirección de correo electrónico\" class=\"form-control\" type=\"text\"></div>\n      </div>\n    </div>\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Teléfono de contacto</label>\n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\n          <input name=\"phone\" placeholder=\"Ej. 603245678\" class=\"form-control\" type=\"text\"></div>\n      </div>\n    </div>\n    <!-- radio checks -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">¿Eres cliente de BREMS?</label>\n      <div class=\"col-md-4\">\n        <div class=\"radio\">\n          <label>\n            <input type=\"radio\" name=\"hosting\" value=\"yes\"/> Sí, lo soy. </label>\n        </div>\n        <div class=\"radio\">\n          <label>\n            <input type=\"radio\" name=\"hosting\" value=\"no\"/> No. </label>\n        </div>\n      </div>\n    </div>\n    <!-- Text area -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Mensaje</label>\n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n          <textarea class=\"form-control\" name=\"comment\" placeholder=\"Mensaje\"></textarea>\n        </div>\n      </div>\n    </div>\n    <!-- Success message -->\n    <div class=\"alert alert-success\" role=\"alert\" id=\"success_message\">¡Enviado! <i\n      class=\"glyphicon glyphicon-thumbs-up\"></i> Gracias por contactar con nosotros.\n    </div>\n    <!-- Button -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\"></label>\n      <div class=\"col-md-4\">\n        <button type=\"submit\" class=\"btn btn-warning\">Enviar <span class=\"glyphicon glyphicon-send\"></span></button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li class=\"active\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</li>\n    </ul>\n  </div>\n</div>\n<div *ngIf=\"successMessage\" class=\"alert alert-success\">\n  <strong>¡Reservado!</strong> {{message}}\n</div>\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  <strong>Algo ha ido mal...</strong> {{message}}\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <ngb-tabset>\n      <ngb-tab title=\"Libros\">\n        <template ngbTabContent>\n          <div class=\"listItems\">\n            <div *ngIf=\"books.length == 0; else chargedBooks\">\n              <img src=\"../../../../assets/img/loadingElements.gif\" style=\"margin-left: 40%;\">\n            </div>\n            <ng-template #chargedBooks>\n              <ng-template ngFor let-book [ngForOf]=\"books\">\n                <div class=\"row item\">\n                  <div class=\"col-sm-12 col-md-4 col-lg-3\">\n                    <div class=\"coverItem\">\n                      <div *ngIf=\"book.image == undefined; else chargedImage\">\n                        <img src=\"../../../../assets/img/loadingImages.svg\" width=\"50px\" height=\"50px\" align=\"middle\">\n                      </div>\n                      <ng-template #chargedImage>\n                        <img [src]=\"sanitizer.bypassSecurityTrustUrl(book.image)\" class=\"img-responsive\"/>\n                      </ng-template>\n                      <div>\n                        <div *ngIf=\"isLogged\">\n                          <div>\n                            <div *ngIf=\"book.avaiblereserve; else notEnough\">\n                              <button (click)=\"reserveResource(book)\" class=\"btn btn-reserve\">Reservar</button>\n                            </div>\n                            <ng-template #notEnough>\n                              <p class=\"btn btn-notEnough\">No disponible</p>\n                            </ng-template>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-8 col-lg-7 informationItem\">\n                    <h3 class=\"title\">{{book.title}}</h3>\n                    <h5 class=\"authorName\">por {{book.author}}</h5>\n                    <div class=\"description\">\n                      <p>\n                        {{book.description}}\n                        <span>...</span>\n                        <a [routerLink]=\"['/resource',book.id]\"> <span class=\"moreInfo\">+ info</span> </a>\n                      </p>\n                      <div class=\"available stockAvailable\">\n                        <span class=\"glyphicon glyphicon-ok-circle\"></span>\n                        <span class=\"textAvailable\">Disponible</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n              <div *ngIf=\"moreBooksActive\">\n                <button (click)=\"addBooks(true)\" type=\"button\" class=\"btn btn-lg btn-block btn-view-more\">Ver más\n                  libros\n                </button>\n              </div>\n            </ng-template>\n          </div>\n        </template>\n      </ngb-tab>\n      <ngb-tab title=\"Revistas\">\n        <template ngbTabContent>\n          <div class=\"listItems\">\n            <div *ngIf=\"magazines.length == 0; else chargedMagazines\">\n                <img src=\"../../../../assets/img/loadingElements.gif\" style=\"margin-left: 40%;\">\n            </div>\n            <ng-template #chargedMagazines>\n              <ng-template ngFor let-magazine [ngForOf]=\"magazines\">\n                <div class=\"row item\">\n                  <div class=\"col-sm-12 col-md-4 col-lg-3\">\n                    <div class=\"coverItem\">\n                      <div *ngIf=\"magazine.image == undefined; else chargedImage\">\n                        <img src=\"../../../../assets/img/loadingImages.svg\" width=\"50px\" height=\"50px\" align=\"middle\">\n                      </div>\n                      <ng-template #chargedImage>\n                        <img [src]=\"sanitizer.bypassSecurityTrustUrl(magazine.image)\" class=\"img-responsive\"/>\n                      </ng-template>\n                      <div>\n                        <div *ngIf=\"isLogged\">\n                          <div>\n                            <div *ngIf=\"magazine.avaiblereserve; else notEnough\">\n                              <button (click)=\"reserveResource(magazine)\" class=\"btn btn-reserve\">Reservar</button>\n                            </div>\n                            <ng-template #notEnough>\n                              <p class=\"btn btn-notEnough\">No disponible</p>\n                            </ng-template>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-8 col-lg-7 informationItem\">\n                    <h3 class=\"title\">{{magazine.title}}</h3>\n                    <h5 class=\"authorName\">por {{magazine.author}}</h5>\n                    <div class=\"description\">\n                      <p>\n                        {{magazine.description}}\n                        <span>...</span>\n                        <a [routerLink]=\"['/resource',magazine.id]\"> <span class=\"moreInfo\">+ info</span> </a>\n                      </p>\n                      <div class=\"available stockAvailable\">\n                        <span class=\"glyphicon glyphicon-ok-circle\"></span>\n                        <span class=\"textAvailable\">Disponible</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n              <div *ngIf=\"moreMagazActive\">\n                <button (click)=\"addMagazines(true)\" type=\"button\" class=\"btn btn-lg btn-block btn-view-more\">Ver más\n                  revistas\n                </button>\n              </div>\n            </ng-template>\n          </div>\n        </template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n      <li class=\"active\">{{resource?.title}}</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <h2>{{resource?.title}}</h2>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"coverItem\">\n          <img [src]=\"sanitizer.bypassSecurityTrustUrl(resource?.image)\" class=\"img-responsive\" />\n        </div>\n      </div>\n      <div class=\"col-lg-9 information\">\n        <h5 class=\"authorName\"><span>por </span>{{resource?.author}}</h5>\n        <div class=\"description\">\n          {{resource?.description}}\n        </div>\n        <button type=\"button\" class=\"btn btn-success\">Reservar</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n      <li class=\"active\">Búsqueda</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row contentMain\">\n  <div class=\"col-lg-12\">\n    <div class=\"col-lg-2\">\n      <div class=\"brands_products\">\n        <h3 class=\"title\">Género</h3>\n        <div class=\"well\">\n          <ul class=\"nav nav-pills nav-stacked\">\n            <ng-template ngFor let-genre [ngForOf]=\"genres\">\n              <li>\n                <a (click)=\"searchResourcesByGenre(genre.id)\">{{genre.name}} <span class=\"pull-right\">({{genre.resources?.length}})</span></a>\n              </li>\n            </ng-template>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-9\">\n        <h3 class=\"title\" id=\"searchName\">Resultados</h3>\n        <div class=\"well\" id=\"results\">\n          <ng-template [ngIf]=\"visible\">\n            <div class=\"listItems\">\n              <ng-template ngFor let-resource [ngForOf]=\"resources\">\n                <div class=\"row item\">\n                  <div class=\"col-sm-12 col-md-4 col-lg-3\">\n                    <div class=\"coverItem\">\n                      <img [src]=\"sanitizer.bypassSecurityTrustUrl(resource.image)\" class=\"img-responsive\" />\n                      <div>\n                        <div *ngIf=\"isLogged\">\n                          <button *ngIf=\"resource.avaiblereserve; else notEnough\" (click)=\"reserveResource(resource.id)\" class=\"btn btn-reserve\">Reservar</button>\n                          <ng-template #notEnough>\n                            <p class=\"btn btn-notEnough\">No disponible</p>\n                          </ng-template>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-8 col-lg-7 informationItem\">\n                    <h3 class=\"title\">{{resource.title}}</h3>\n                    <h5 class=\"authorName\">por {{resource.author}}</h5>\n                    <div class=\"description\">\n                      <p>\n                        {{resource.description}}\n                        <span>...</span>\n                        <a [routerLink]=\"['/resource', resource.id]\"> <span class=\"moreInfo\">+ info</span> </a>\n                      </p>\n                      <div class=\"available stockAvailable\">\n                        <span class=\"glyphicon glyphicon-ok-circle\"></span>\n                        <span class=\"textAvailable\">Disponible</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n              <button id=\"moreSearch\" (click)=\"addSearch()\" type=\"button\" class=\"btn btn-lg btn-block btn-view-more\">{{showMore}} {{search2}}</button>\n            </div>\n          </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n      <li class=\"active\">Iniciar sesión</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-3 col-md-3 col-lg-3\"></div>\n  <div class=\"col-sm-8 col-md-6 col-lg-6\">\n    <div class=\"modal-body\">\n      <div id=\"div-login-msg\">\n        <div id=\"icon-login-msg\" class=\"glyphicon glyphicon-chevron-right\"></div>\n        <span id=\"text-login-msg\">Escribe tu usuario</span>\n      </div>\n      <input id=\"username\" #username class=\"form-control\" name=\"username\" type=\"text\" placeholder=\"Usuario\" required>\n\n      <div id=\"div-login-msg\">\n        <div id=\"icon-login-msg\" class=\"glyphicon glyphicon-chevron-right\"></div>\n        <span id=\"text-login-msg\">Escribe tu contrase&ntilde;a</span>\n      </div>\n      <input id=\"password\" #password class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Contrase&ntilde;a\" required>\n      <div class=\"checkbox\">\n        <!--<label> <input type=\"checkbox\"> Recordar</label>-->\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <div>\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block submitButton\" (click)=\"logIn(username.value, password.value)\">Iniciar sesi&oacute;n</button>\n      </div>\n      <div>\n        <a [routerLink]=\"['']\"><button id=\"login_lost_btn\" type=\"button\" class=\"btn btn-link\">Olvid&eacute; mi contrase&ntilde;a</button></a>\n        <a [routerLink]=\"['/register']\"><button id=\"login_register_btn\" type=\"button\"class=\"btn btn-link\">Registrarse</button></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<div [@dialog]=\"visible\" [class.hide]=\"!visible\" class=\"modalAviso modal-dialog\">\n  <ng-content></ng-content>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\" align=\"center\">\n      <img id=\"img_logo\" src=\"./assets/img/logo.png\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n      </button>\n    </div>\n    <div id=\"div-forms\">\n      <div class=\"modal-body\">\n        <div id=\"div-login-msg\">\n          <div id=\"icon-login-msg\" class=\"glyphicon glyphicon-chevron-right\"></div>\n          <span id=\"text-login-msg\">Escribe tu usuario</span>\n        </div>\n        <input id=\"username\" #username class=\"form-control\" name=\"username\" type=\"text\"\n               placeholder=\"Usuario\" required>\n\n        <div id=\"div-login-msg\">\n          <div id=\"icon-login-msg\" class=\"glyphicon glyphicon-chevron-right\"></div>\n          <span id=\"text-login-msg\">Escribe tu contraseña</span>\n        </div>\n        <input id=\"password\" #password class=\"form-control\" name=\"password\" type=\"password\"\n               placeholder=\"Contraseña\" required>\n      </div>\n      <div class=\"modal-footer\">\n        <div>\n          <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"logIn(username.value, password.value)\">\n            Iniciar sesión</button>\n        </div>\n        <div>\n          <a [routerLink]=\"['']\">\n            <button id=\"login_lost_btn\" type=\"button\" class=\"btn btn-link\">Olvidé mi contraseña</button>\n          </a>\n          <a [routerLink]=\"['/register']\">\n            <button id=\"login_register_btn\" type=\"button\" class=\"btn btn-link\">Registrarse</button>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n\n"

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n        <ul class=\"breadcrumb\">\n            <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n            <li class=\"active\">Registro</li>\n        </ul>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3 col-md-3 col-lg-3\"></div>\n    <div class=\"col-sm-8 col-md-6 col-lg-6\">\n        <form id=\"register-form\" action=\"/register/add\" method=\"post\">\n            <div class=\"modal-body\">\n                <div id=\"div-login-msg\">\n                    <div id=\"icon-login-msg\" class=\"glyphicon glyphicon-chevron-right\"></div> <span id=\"text-login-msg\">Registro de usuario</span> </div>\n                <br>\n                <div class=\"form-group\">\n                    <label>Nombre y apellidos</label>\n                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"Nombre\" #firstName>\n                    <input type=\"text\" class=\"form-control\" name=\"lastName1\" placeholder=\"Primer apellido\" #lastName1>\n                    <input type=\"text\" class=\"form-control\" name=\"lastName2\" placeholder=\"Segundo apellido\" #lastName2>\n                </div>\n                <div class=\"form-group\">\n                    <label>Usuario </label>\n                    <input type=\"text\" class=\"form-control\" name=\"name\" #userName>\n                </div>\n                <div class=\"form-group\">\n                    <label>Contraseña</label>\n                    <input class=\"form-control\" name=\"password\" type=\"password\" #password>\n                </div>\n                <div class=\"form-group\">\n                    <label>D.N.I.</label>\n                    <input class=\"form-control\" name=\"dni\" type=\"text\" #dni>\n                </div>\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" #email>\n                </div>\n                <div class=\"form-group\">\n                    <label>Teléfono</label>\n                    <input class=\"form-control\" name=\"telephone\" type=\"text\" #phone>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div>\n                    <button (click)=\"register(firstName.value, lastName1.value, lastName2.value, userName.value, password.value, dni.value, email.value, phone.value)\"\n                            type=\"submit\" class=\"btn btn-primary btn-lg btn-block submitButton\">Registrarme</button>\n                </div>\n                <div>\n                    <a href=\"/\"><button id=\"login_lost_btn\" type=\"button\" class=\"btn btn-link\">Olvidé mi contraseña</button></a>\n                    <a href=\"/login\"><button id=\"login_register_btn\" type=\"button\" class=\"btn btn-link\">¿Ya tiene una cuenta?</button></a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\n<app-header (openModalLogin)=\"openLogin()\"></app-header>\n\n<!-- CONTENT -->\n<div class=\"container content\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- // Login modal -->\n<modal-login></modal-login>\n\n<!-- FOOTER -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div [@dialog]=\"visible\" [class.hide]=\"!visible\" class=\"modalAviso modalProfileEdit modal-dialog\">\n  <ng-content></ng-content>\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" align=\"center\">\n        <h3>Mi Biograf&iacute;a</h3>\n        <div class=\"bordeBottom\"></div>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n        </button>\n      </div>\n      <div id=\"div-forms\">\n        <div class=\"modal-body\">\n          <div class=\"form-group biographyEdit\">\n            <textarea name=\"biography\" rows=5 cols=75 #biography>{{user?.biography}}</textarea>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <div>\n            <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"edit(biography.value)\">Modificar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div [@dialog]=\"visible\" [class.hide]=\"!visible\" class=\"modalAviso modalProfileEdit modal-dialog\">\n  <ng-content></ng-content>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\" align=\"center\">\n      <h3>Información Básica</h3>\n      <div class=\"bordeBottom\"></div>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n      </button>\n    </div>\n    <div id=\"div-forms\">\n      <div class=\"modal-body modal-body-profile\">\n        <div class=\"form-group\">\n\n          <div class=\"form-group\">\n            <label for=\"userAvatar\">Modificar</label>\n            <input type=\"file\" (change)=\"selectFile($event)\" id=\"userAvatar\" name=\"avatar\">\n            <p class=\"help-block\">Selecciona una imagen</p>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"nombre\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"firstName\" placeholder=\"Nombre\" #firstName\n                 [value]=\"user?.firstName\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"apellido1\">Primer apellido</label>\n          <input type=\"text\" class=\"form-control\" id=\"apellido1\" name=\"lastName1\" placeholder=\"Primer Apellido\"\n                 #lastName1 [value]=\"user?.lastName1\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"apellido2\">Segundo apellido</label>\n          <input type=\"text\" class=\"form-control\" id=\"apellido2\" name=\"lastName2\" placeholder=\"Segundo Apellido\"\n                 #lastName2 [value]=\"user?.lastName2\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" #email\n                 [value]=\"user?.email\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"telefono\">Tel&eacute;fono</label>\n          <div class=\"checkbox viewTelephone\">\n            <label>\n              <input type=\"checkbox\" name=\"viewTelephone\" #viewTelephone [value]=\"user?.viewTelephone\"/> Mostrar en mi\n              perfil\n            </label>\n          </div>\n          <input type=\"text\" class=\"form-control\" id=\"telefono\" name=\"telephone\" placeholder=\"Telefono\" #telephone\n                 [value]=\"user?.telephone\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"telefono\">Direcci&oacute;n</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Dirección\" #address\n                 [value]=\"user?.address\">\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div>\n          <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"edit(firstName.value, lastName1.value,\n          lastName2.value, email.value, telephone.value, viewTelephone.value, address.value)\">Modificar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n\n"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <ul class=\"breadcrumb\">\n      <li><a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Inicio</a></li>\n      <li class=\"active\">Perfil</li>\n    </ul>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <ngb-tabset>\n      <ngb-tab title=\"Perfil\">\n        <template ngbTabContent>\n          <div class=\"row userProfile\">\n            <div class=\"col-lg-2 avatar\">\n              <div *ngIf=\"userImage == undefined; else chargedImage\">\n                <img src=\"../../../../assets/img/loadingImages.svg\" width=\"50px\" height=\"50px\" align=\"middle\">\n              </div>\n              <ng-template #chargedImage>\n                <img [src]=\"sanitizer.bypassSecurityTrustUrl(userImage)\" class=\"img-responsive avatar\" />\n              </ng-template>\n            </div>\n            <div class=\"col-lg-8\">\n              <h4>\n                Información Básica\n                <a data-toggle=\"modal\" aria-haspopup=\"true\" aria-expanded=\"false\" data-target=\"#editProfile-modal\" (click)=\"editProfile()\">\n                  <span class=\"glyphicon glyphicon-pencil\"></span>(Editar)\n                </a>\n              </h4>\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Nombre completo</th>\n                    <td>{{user?.firstName}} {{user?.lastName1}} {{user?.lastName2}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Usuario</th>\n                    <td>{{user?.name}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Email</th>\n                    <td>{{user?.email}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Tel&eacute;fono</th>\n                    <td>{{user?.telephone}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\" class=\"lastRow\">Última vez</th>\n                    <td>hace 34 minutos</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"row otherUserProfile\">\n            <div class=\"col-lg-4 biographic\">\n              <h4>\n                Mi Biografía\n                <a (click)=\"editBiography()\">\n                  <span class=\"glyphicon glyphicon-pencil\"></span >(Editar)\n                </a>\n              </h4>\n              <p *ngIf=\"user?.biography != null || user?.biography != ''; else notBiography\">{{user?.biography}}</p>\n\n              <ng-template #notBiography>\n                <p>(No hay información para mostrar)</p>\n              </ng-template>\n            </div>\n          </div>\n        </template>\n      </ngb-tab>\n      <ngb-tab title=\"Préstamos\">\n        <template ngbTabContent>\n          <div class=\"listItems\">\n            <ng-template ngFor let-action [ngForOf]=\"currentActions\">\n              <div class=\"row item\">\n                <div class=\"col-sm-6 col-md-4 col-lg-2\">\n                  <div class=\"coverItem\">\n                    <div *ngIf=\"action.copy.resource.image != undefined\">\n                      <img [src]=\"sanitizer.bypassSecurityTrustUrl(action.copy.resource.image)\" class=\"img-responsive\" />\n                    </div>\n                    <br>\n                    <a [routerLink]=\"['/resource',action.copy.resource.id]\"> <span class=\"glyphicon glyphicon-info-sign\"></span>ver\n                  libro\n                </a>\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-8 col-lg-7 detailsBorrow\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <th>Título</th>\n                  <td>{{action.copy.resource.title}}</td>\n                </tr>\n                <tr>\n                  <th>Autor</th>\n                  <td>{{action.copy.resource.author}}</td>\n                </tr>\n                <tr>\n                  <th>Fecha de solicitud de préstamo</th>\n                  <td>{{action.dateLoanInit}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n  </div>\n  </ng-template>\n</div>\n</template>\n</ngb-tab>\n<ngb-tab title=\"Historial\">\n  <template ngbTabContent>\n    <div class=\"listItems\">\n      <ng-template ngFor let-action [ngForOf]=\"history\">\n        <div class=\"row item\">\n          <div class=\"col-sm-6 col-md-4 col-lg-2\">\n            <div class=\"coverItem\">\n              <div *ngIf=\"action.copy.resource.image != undefined\">\n                <img [src]=\"sanitizer.bypassSecurityTrustUrl(action.copy.resource.image)\" class=\"img-responsive\" />\n              </div>\n              <br>\n              <a [routerLink]=\"['/resource',action.copy.resource.id]\"> <span class=\"glyphicon glyphicon-info-sign\"></span>ver libro\n              </a>\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-8 col-lg-7 detailsBorrow\">\n            <table class=\"table\">\n              <tbody>\n                <tr>\n                  <th>Título</th>\n                  <td>{{action.copy.resource.title}}</td>\n                </tr>\n                <tr>\n                  <th>Autor</th>\n                  <td>{{action.copy.resource.author}}</td>\n                </tr>\n                <tr>\n                  <th>Fecha de solicitud de préstamo</th>\n                  <td>{{action.dateLoanInit}}</td>\n                </tr>\n                <tr>\n                  <th>Fecha de recogida de préstamo</th>\n                  <td>{{action.dateLoanGiven}}</td>\n                </tr>\n                <tr>\n                  <th>Fecha de devolución</th>\n                  <td>{{action.dateLoanReturn}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </template>\n</ngb-tab>\n<ngb-tab title=\"Multas\">\n  <template ngbTabContent>\n    <div class=\"tab-pane\" id=\"bookFines\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Recurso</th>\n            <th>Fecha inicio</th>\n            <th>Fecha fin</th>\n          </tr>\n        </thead>\n        <ng-template ngFor let-fine [ngForOf]=\"fines\">\n          <tr class=\"warning\">\n            <td>{{fine.resourceCopy?.resource?.title}}</td>\n            <td>{{fine.initDate}}</td>\n            <td>{{fine.finishDate}}</td>\n          </tr>\n        </ng-template>\n      </table>\n    </div>\n  </template>\n</ngb-tab>\n</ngb-tabset>\n</div>\n</div>\n\n\n<!-- // profile edit modal-->\n<modal-profile-edit></modal-profile-edit>\n\n<!-- // biography edit modal-->\n<modal-biography-edit></modal-biography-edit>\n"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map