webpackJsonp([0,6],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_resources_manage_resources_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_resources_edit_edit_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_resources_create_create_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_users_edit_edit_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manage_loans_manage_loans_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manage_loans_create_create_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manage_fines_manage_fines_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manage_users_create_create_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_users_manage_users_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__(578);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__manage_resources_manage_resources_component__["a" /* ManageResourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__manage_resources_edit_edit_component__["a" /* EditResourceComponent */],
            __WEBPACK_IMPORTED_MODULE_11__manage_loans_manage_loans_component__["a" /* ManageLoansComponent */],
            __WEBPACK_IMPORTED_MODULE_12__manage_loans_create_create_component__["a" /* CreateLoanComponent */],
            __WEBPACK_IMPORTED_MODULE_13__manage_fines_manage_fines_component__["a" /* ManageFinesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__manage_users_manage_users_component__["a" /* ManageUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__manage_users_create_create_component__["a" /* CreateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_10__manage_users_edit_edit_component__["a" /* EditUserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__manage_resources_create_create_component__["a" /* CreateResourceComponent */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(sessionService) {
        this.sessionService = sessionService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(611)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(612)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_fine_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_session_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageFinesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageFinesComponent = (function () {
    function ManageFinesComponent(router, sessionService, fineService) {
        this.router = router;
        this.sessionService = sessionService;
        this.fineService = fineService;
        this.successMessage = false;
        this.errorMessage = false;
        this.pageFines = 0;
        this.showNextPage = false;
        this.showPreviousPage = false;
    }
    ManageFinesComponent.prototype.ngOnInit = function () {
        if (!this.sessionService.checkCredentials())
            this.router.navigate(['/login']);
        else {
            this.getFines();
            this.checkNextPage();
            this.checkPreviousPage();
        }
    };
    ManageFinesComponent.prototype.getFines = function () {
        var _this = this;
        this.fineService.getAllFines(this.pageFines).subscribe(function (fines) { return _this.fines = fines; }, function (error) { return console.log('Fail trying to get all fines.'); });
    };
    ManageFinesComponent.prototype.nextPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.pageFines++;
        this.getFines();
        this.checkNextPage();
        this.showPreviousPage = true;
    };
    ManageFinesComponent.prototype.previousPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.pageFines--;
        this.getFines();
        this.checkPreviousPage();
        this.showNextPage = true;
    };
    ManageFinesComponent.prototype.checkNextPage = function () {
        var _this = this;
        this.fineService.getAllFines(this.pageFines + 1).subscribe(function (fines) {
            if (Object.keys(fines).length === 0) {
                _this.showNextPage = false;
            }
            else {
                _this.showNextPage = true;
            }
        });
    };
    ManageFinesComponent.prototype.checkPreviousPage = function () {
        var _this = this;
        if (this.pageFines > 0) {
            this.fineService.getAllFines(this.pageFines - 1).subscribe(function (fines) {
                if (Object.keys(fines).length === 0) {
                    _this.showPreviousPage = false;
                }
                else {
                    _this.showPreviousPage = true;
                }
            });
        }
        else {
            this.showPreviousPage = false;
        }
    };
    ManageFinesComponent.prototype.delete = function (id) {
        var _this = this;
        this.fineService.deleteFine(id).subscribe(function (response) {
            _this.successMessage = true;
            _this.errorMessage = false;
            _this.message = 'Multa eliminada correctamente.';
            _this.pageFines = 0;
            console.log('Fine successfully deleted.');
            _this.getFines();
            _this.checkNextPage();
            _this.checkPreviousPage();
        }, function (error) {
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'No se ha podido eliminar la multa. Está activa.';
            console.log('Fail trying to delete selected fine.');
        });
    };
    return ManageFinesComponent;
}());
ManageFinesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(614)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_fine_service__["a" /* FineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_fine_service__["a" /* FineService */]) === "function" && _c || Object])
], ManageFinesComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-fines.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_action_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_resource_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLoanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateLoanComponent = (function () {
    function CreateLoanComponent(router, activatedRoute, sessionService, actionService, userService, resourceService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.actionService = actionService;
        this.userService = userService;
        this.resourceService = resourceService;
        this.loan = null;
        this.userSelect = null;
        this.resourceSelect = null;
        this.errorMessage = false;
    }
    CreateLoanComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
        else {
            this.userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
            this.resourceService.getAllListResources().subscribe(function (resources) { return _this.resources = resources; }, function (error) { return console.log(error); });
        }
    };
    CreateLoanComponent.prototype.createLoan = function () {
        var _this = this;
        var copy;
        if (this.resourceSelect.noReservedCopies.length != 0) {
            copy = this.resourceSelect.copies.find(function (x) { return x.locationCode == _this.resourceSelect.noReservedCopies[0]; });
            copy.resource = {
                id: this.resourceSelect.id,
                title: this.resourceSelect.title,
                author: this.resourceSelect.author,
                editorial: this.resourceSelect.editorial,
                avaiblereserve: this.resourceSelect.avaiblereserve,
                description: this.resourceSelect.description,
                hasPhoto: this.resourceSelect.hasPhoto,
                noReservedCopies: this.resourceSelect.noReservedCopies
            };
            this.loan = { copy: copy, user: this.userSelect };
            this.actionService.postAction(this.loan).subscribe(function (response) { return _this.router.navigate(["/admin/loans"]); }, function (error) {
                _this.errorMessage = true;
                _this.message = 'No se ha podido realizar la acción.';
            });
        }
    };
    return CreateLoanComponent;
}());
CreateLoanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(615)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_action_service__["a" /* ActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_action_service__["a" /* ActionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_resource_service__["a" /* ResourceService */]) === "function" && _f || Object])
], CreateLoanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_action_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageLoansComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageLoansComponent = (function () {
    function ManageLoansComponent(router, sessionService, actionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.actionService = actionService;
        this.loans = [];
        this.successMessage = false;
        this.errorMessage = false;
        this.loansPage = 0;
        this.showNextPage = false;
        this.showPreviousPage = false;
    }
    ManageLoansComponent.prototype.ngOnInit = function () {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
        else {
            this.getLoans();
            this.checkNextPage();
            this.checkPreviousPage();
        }
    };
    ManageLoansComponent.prototype.getLoans = function () {
        var _this = this;
        this.actionService.getAllActions(this.loansPage).subscribe(function (loans) { return _this.loans = loans; }, function (error) { return console.log(error); });
    };
    ManageLoansComponent.prototype.nextPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.loansPage++;
        this.getLoans();
        this.checkNextPage();
        this.showPreviousPage = true;
    };
    ManageLoansComponent.prototype.previousPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.loansPage--;
        this.getLoans();
        this.checkPreviousPage();
        this.showNextPage = true;
    };
    ManageLoansComponent.prototype.checkNextPage = function () {
        var _this = this;
        this.actionService.getAllActions(this.loansPage + 1).subscribe(function (loans) { return _this.showNextPage = (Object.keys(loans).length === 0) ? false : true; });
    };
    ManageLoansComponent.prototype.checkPreviousPage = function () {
        var _this = this;
        if (this.loansPage > 0) {
            this.actionService.getAllActions(this.loansPage - 1).subscribe(function (loans) { return _this.showPreviousPage = (Object.keys(loans).length === 0) ? false : true; });
        }
        else {
            this.showPreviousPage = false;
        }
    };
    ManageLoansComponent.prototype.updateLoan = function (id, action) {
        var _this = this;
        var loan;
        loan = this.loans.find(function (x) { return x.id === id; });
        this.actionService.updateAction(loan, action).subscribe(function (response) {
            _this.successMessage = true;
            _this.errorMessage = false;
            _this.message = 'Realizado correctamente.';
            _this.loansPage = 0;
            _this.getLoans();
            _this.checkNextPage();
            _this.checkPreviousPage();
        }, function (error) {
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'No se ha podido realizar la acción.';
        });
    };
    ManageLoansComponent.prototype.deleteLoan = function (id) {
        var _this = this;
        this.actionService.deleteAction(id).subscribe(function (response) {
            _this.successMessage = true;
            _this.errorMessage = false;
            _this.message = 'Prestamo eliminado correctamente.';
            _this.loansPage = 0;
            console.log('Loan successfully deleted.');
            _this.getLoans();
            _this.checkNextPage();
            _this.checkPreviousPage();
        }, function (error) {
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'No se ha podido eliminar el prestamo.';
            console.log('Fail trying to delete selected loan.');
        });
    };
    return ManageLoansComponent;
}());
ManageLoansComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(616),
        styles: [__webpack_require__(606)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_action_service__["a" /* ActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_action_service__["a" /* ActionService */]) === "function" && _c || Object])
], ManageLoansComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-loans.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_genre_service__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateResourceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateResourceComponent = (function () {
    function CreateResourceComponent(router, sessionService, resourceService, genreService) {
        this.router = router;
        this.sessionService = sessionService;
        this.resourceService = resourceService;
        this.genreService = genreService;
        this.newResource = {};
        this.newResource = {
            title: '',
            author: '',
            editorial: '',
            description: '',
            genre: null,
            resourceType: null,
            resourceCopiesNumber: 1
        };
    }
    CreateResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
        else {
            this.genreService.getAllGenres().subscribe(function (genres) { return _this.genres = genres; }, function (error) { return console.log(error); });
            this.resourceService.getResourcesTypes().subscribe(function (types) { return _this.types = types; }, function (error) { return console.log(error); });
        }
    };
    CreateResourceComponent.prototype.createResource = function () {
        var _this = this;
        this.resource = this.newResource;
        this.resourceService.createResource(this.resource).subscribe(function (response) {
            if (_this.resourceImage !== undefined) {
                var formData = new FormData();
                formData.append('file', _this.resourceImage, _this.resourceImage.name);
                _this.resourceService.updateFile(formData, response.id).subscribe();
            }
            _this.router.navigate(['/admin/resources']);
        }, function (error) {
            _this.errorMessage = true;
            _this.message = 'No se ha podido crear el recurso.';
        });
    };
    CreateResourceComponent.prototype.selectFile = function ($event) {
        this.resourceImage = $event.target.files[0];
    };
    return CreateResourceComponent;
}());
CreateResourceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(617),
        styles: [__webpack_require__(607)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__["a" /* ResourceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_genre_service__["a" /* GenreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_genre_service__["a" /* GenreService */]) === "function" && _d || Object])
], CreateResourceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_resource_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_genre_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_file_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditResourceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditResourceComponent = (function () {
    function EditResourceComponent(router, activatedRoute, sanitizer, sessionService, resourceService, genreService, fileService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.sessionService = sessionService;
        this.resourceService = resourceService;
        this.genreService = genreService;
        this.fileService = fileService;
        this.resource = {};
    }
    EditResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
        else {
            this.getResource();
            this.genreService.getAllGenres().subscribe(function (genres) { return _this.genres = genres; }, function (error) { return console.log(error); });
            this.resourceService.getResourcesTypes().subscribe(function (types) { return _this.types = types; }, function (error) { return console.log(error); });
        }
    };
    EditResourceComponent.prototype.getResource = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params['id'];
        this.resourceService.getResource(id).subscribe(function (resource) {
            _this.resource = resource;
            _this.fileService.getResourceFile(resource.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                resource.image = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log('Fail adding resource ' + resource.title + 'image.'); });
        }, function (error) { return console.log(error); });
    };
    EditResourceComponent.prototype.saveResource = function () {
        var _this = this;
        this.resourceService.updateResource(this.resource).subscribe(function (response) {
            if (_this.resourceImage !== undefined) {
                var formData = new FormData();
                formData.append('file', _this.resourceImage, _this.resourceImage.name);
                _this.resourceService.updateFile(formData, response.id).subscribe();
            }
            _this.successMessage = true;
            _this.errorMessage = false;
            _this.message = 'Recurso editado correctamente.';
            _this.getResource();
            _this.fileService.getResourceFile(_this.resource.id).subscribe(function (data) {
                var dataRecieved = data.split('"');
                _this.resource.image = 'data:image/png;base64,' + dataRecieved[3];
            }, function (error) { return console.log('Fail adding resource ' + _this.resource.title + 'image.'); });
        }, function (error) {
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'No se ha podido editar el recurso.';
        });
    };
    EditResourceComponent.prototype.selectFile = function ($event) {
        this.resourceImage = $event.target.files[0];
    };
    return EditResourceComponent;
}());
EditResourceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(618),
        styles: [__webpack_require__(608)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_resource_service__["a" /* ResourceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_genre_service__["a" /* GenreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_genre_service__["a" /* GenreService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_service_file_service__["a" /* FileService */]) === "function" && _g || Object])
], EditResourceComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageResourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageResourcesComponent = (function () {
    function ManageResourcesComponent(router, sessionService, ResourceService) {
        this.router = router;
        this.sessionService = sessionService;
        this.ResourceService = ResourceService;
        this.resources = [];
        this.successMessage = false;
        this.errorMessage = false;
        this.resourcesPage = 0;
        this.showNextPage = false;
        this.showPreviousPage = false;
    }
    ManageResourcesComponent.prototype.ngOnInit = function () {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
        else {
            this.getResources();
            this.checkNextPage();
            this.checkPreviousPage();
        }
    };
    ManageResourcesComponent.prototype.getResources = function () {
        var _this = this;
        this.ResourceService.getPageResources(this.resourcesPage).subscribe(function (resources) { return _this.resources = resources; }, function (error) { return console.log("Fail trying to get current page of resources."); });
    };
    ManageResourcesComponent.prototype.nextPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.resourcesPage++;
        this.getResources();
        this.checkNextPage();
        this.showPreviousPage = true;
    };
    ManageResourcesComponent.prototype.previousPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.resourcesPage--;
        this.getResources();
        this.checkPreviousPage();
        this.showNextPage = true;
    };
    ManageResourcesComponent.prototype.checkNextPage = function () {
        var _this = this;
        this.ResourceService.getPageResources(this.resourcesPage + 1).subscribe(function (resources) { return _this.showNextPage = (Object.keys(resources).length === 0) ? false : true; });
    };
    ManageResourcesComponent.prototype.checkPreviousPage = function () {
        var _this = this;
        if (this.resourcesPage > 0) {
            this.ResourceService.getPageResources(this.resourcesPage - 1).subscribe(function (resources) { return _this.showPreviousPage = (Object.keys(resources).length === 0) ? false : true; });
        }
        else {
            this.showPreviousPage = false;
        }
    };
    ManageResourcesComponent.prototype.deleteResource = function (id) {
        var _this = this;
        this.ResourceService.deleteResource(id).subscribe(function (response) {
            _this.successMessage = true;
            _this.errorMessage = false;
            _this.message = 'Recurso eliminado correctamente.';
            _this.resourcesPage = 0;
            _this.getResources();
            _this.checkNextPage();
            _this.checkPreviousPage();
        }, function (error) {
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'No se ha podido eliminar el recurso.';
        });
    };
    return ManageResourcesComponent;
}());
ManageResourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(619),
        styles: [__webpack_require__(609)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_resource_service__["a" /* ResourceService */]) === "function" && _c || Object])
], ManageResourcesComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-resources.component.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateUserComponent = (function () {
    function CreateUserComponent(router, userService, sessionService) {
        this.router = router;
        this.userService = userService;
        this.sessionService = sessionService;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(['/login']);
        }
    };
    CreateUserComponent.prototype.create = function (firstName, lastName1, lastName2, name, email, password, dni, telephone) {
        var _this = this;
        var roles;
        if (this.typeuser === 'Administrator') {
            roles = ['ROLE_USER', 'ROLE_ADMIN'];
        }
        else {
            roles = ['ROLE_USER'];
        }
        var createdUser = {
            name: name, passwordHash: password, dni: dni, firstName: firstName, lastName1: lastName1, lastName2: lastName2, email: email,
            telephone: telephone, literaryHobby: [], roles: roles
        };
        this.userService.createUser(createdUser).subscribe(function (response) {
            console.log(name + ' successfully created.');
            _this.router.navigate(['/admin/users']);
        }, function (error) { return console.log('Fail trying to register new user.'); });
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(620)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateUserComponent);

var _a, _b, _c;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = (function () {
    function EditUserComponent(activatedRoute, router, userService, sessionService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.sessionService = sessionService;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(['/login']);
        }
        else {
            this.userService.getUser(this.activatedRoute.snapshot.params['id']).subscribe(function (response) { return _this.user = response; }, function (error) { return console.log('Fail trying to access to user details.'); });
        }
    };
    EditUserComponent.prototype.edit = function (firstName, lastName1, lastName2, email, dni) {
        var _this = this;
        var updatedUser = {
            id: this.user.id, name: this.user.name, dni: this.user.dni, firstName: firstName,
            lastName1: lastName1, lastName2: lastName2, email: email, telephone: this.user.telephone,
            viewTelephone: this.user.viewTelephone, address: this.user.address, biography: this.user.biography
        };
        this.userService.updateUser(updatedUser, false).subscribe(function (response) {
            console.log(_this.user.name + " successfully updated.");
            _this.router.navigate(['/admin/users']);
        }, function (error) { return console.log("Fail trying to modify " + _this.user.name + "."); });
    };
    return EditUserComponent;
}());
EditUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(621)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _d || Object])
], EditUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_session_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersComponent = (function () {
    function ManageUsersComponent(router, userService, sessionService) {
        this.router = router;
        this.userService = userService;
        this.sessionService = sessionService;
        this.successMessage = false;
        this.errorMessage = false;
        this.users = [];
        this.usersPage = 0;
        this.showNextPage = false;
        this.showPreviousPage = false;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        }
        else {
            this.getUsers();
            this.checkNextPage();
            this.checkPreviousPage();
        }
    };
    ManageUsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers(this.usersPage).subscribe(function (users) { return _this.users = users; }, function (error) { return console.log("Fail trying to get current page of users."); });
    };
    ManageUsersComponent.prototype.nextPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.usersPage++;
        this.getUsers();
        this.checkNextPage();
        this.showPreviousPage = true;
    };
    ManageUsersComponent.prototype.previousPage = function () {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.usersPage--;
        this.getUsers();
        this.checkPreviousPage();
        this.showNextPage = true;
    };
    ManageUsersComponent.prototype.checkNextPage = function () {
        var _this = this;
        this.userService.getUsers(this.usersPage + 1).subscribe(function (users) {
            if (Object.keys(users).length === 0) {
                _this.showNextPage = false;
            }
            else {
                _this.showNextPage = true;
            }
        });
    };
    ManageUsersComponent.prototype.checkPreviousPage = function () {
        var _this = this;
        if (this.usersPage > 0) {
            this.userService.getUsers(this.usersPage - 1).subscribe(function (users) {
                if (Object.keys(users).length === 0) {
                    _this.showPreviousPage = false;
                }
                else {
                    _this.showPreviousPage = true;
                }
            });
        }
        else {
            this.showPreviousPage = false;
        }
    };
    ManageUsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (response) {
            _this.successMessage = true;
            _this.errorMessage = false;
            _this.message = 'Usuario eliminado correctamente.';
            _this.usersPage = 0;
            console.log('User successfully deleted.');
            _this.getUsers();
            _this.checkNextPage();
            _this.checkPreviousPage();
        }, function (error) {
            _this.successMessage = false;
            _this.errorMessage = true;
            _this.message = 'No se ha podido eliminar al usuario. Tiene un préstamo o una multa activa.';
            console.log('Fail trying to delete selected user.');
        });
    };
    return ManageUsersComponent;
}());
ManageUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(622)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], ManageUsersComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-users.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_resources_manage_resources_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_resources_edit_edit_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_resources_create_create_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_loans_manage_loans_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_loans_create_create_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_fines_manage_fines_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_users_create_create_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manage_users_edit_edit_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manage_users_manage_users_component__ = __webpack_require__(587);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var adminRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: '',
                children: [
                    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_4__manage_resources_manage_resources_component__["a" /* ManageResourcesComponent */] },
                    { path: 'resources/new', component: __WEBPACK_IMPORTED_MODULE_6__manage_resources_create_create_component__["a" /* CreateResourceComponent */] },
                    { path: 'resources/:id', component: __WEBPACK_IMPORTED_MODULE_5__manage_resources_edit_edit_component__["a" /* EditResourceComponent */] },
                    { path: 'loans', component: __WEBPACK_IMPORTED_MODULE_7__manage_loans_manage_loans_component__["a" /* ManageLoansComponent */] },
                    { path: 'loans/new', component: __WEBPACK_IMPORTED_MODULE_8__manage_loans_create_create_component__["a" /* CreateLoanComponent */] },
                    { path: 'fines', component: __WEBPACK_IMPORTED_MODULE_9__manage_fines_manage_fines_component__["a" /* ManageFinesComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_12__manage_users_manage_users_component__["a" /* ManageUsersComponent */] },
                    { path: 'users/new', component: __WEBPACK_IMPORTED_MODULE_10__manage_users_create_create_component__["a" /* CreateUserComponent */] },
                    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_11__manage_users_edit_edit_component__["a" /* EditUserComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_file_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__(112);
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
    function HeaderComponent(fileService, sanitizer, userService) {
        this.fileService = fileService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.imgLogo = __WEBPACK_IMPORTED_MODULE_2__util__["c" /* ADMIN_IMG_URL */] + 'logo.png';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser(Number(localStorage.getItem('id'))).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log("Fail trying to get user information."); });
        this.fileService.getUserFile(Number(localStorage.getItem('id'))).subscribe(function (data) {
            var dataRecieved = data.split('"');
            _this.userImage = 'data:image/png;base64,' + dataRecieved[3];
        }, function (error) { return console.log("Fail trying to charge " + _this.user.name + " image."); });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-header',
        template: __webpack_require__(613)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_file_service__["a" /* FileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_file_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(fileService, sanitizer, userService) {
        this.fileService = fileService;
        this.sanitizer = sanitizer;
        this.userService = userService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.update('index');
        this.userService.getUser(Number(localStorage.getItem('id'))).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log("Fail trying to get user information."); });
        this.fileService.getUserFile(Number(localStorage.getItem('id'))).subscribe(function (data) {
            var dataRecieved = data.split('"');
            _this.userImage = 'data:image/png;base64,' + dataRecieved[3];
        }, function (error) { return console.log("Fail trying to charge " + _this.user.name + " image."); });
    };
    SidebarComponent.prototype.update = function (page) {
        switch (page) {
            case 'index':
                this.indexActive = true;
                this.resourcesActive = false;
                this.loansActive = false;
                this.finesActive = false;
                this.usersActive = false;
                break;
            case 'resources':
                this.indexActive = false;
                this.resourcesActive = true;
                this.loansActive = false;
                this.finesActive = false;
                this.usersActive = false;
                break;
            case 'loans':
                this.indexActive = false;
                this.resourcesActive = false;
                this.loansActive = true;
                this.finesActive = false;
                this.usersActive = false;
                break;
            case 'fines':
                this.indexActive = false;
                this.resourcesActive = false;
                this.loansActive = false;
                this.finesActive = true;
                this.usersActive = false;
                break;
            case 'users':
                this.indexActive = false;
                this.resourcesActive = false;
                this.loansActive = false;
                this.finesActive = false;
                this.usersActive = true;
                break;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-sidebar',
        template: __webpack_require__(623)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "table {\n  background-color: white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "table {\n  background-color: white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-admin-header></app-admin-header>\n  <app-admin-sidebar></app-admin-sidebar>\n  <div class=\"content-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n  <footer class=\"main-footer\">\n    <strong>Copyright &copy; 2017 <a href=\"/\">BREMS</a>.</strong> Todos los derechos reservados.\n  </footer>\n</div>\n"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>Inicio <small>Información reciente</small></h1>\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-xs-6\">\n      <div class=\"small-box bg-aqua\">\n        <div class=\"inner\">\n          <h3></h3>\n          <p>Recursos</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-bag\"></i>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\">\n      <div class=\"small-box bg-green\">\n        <div class=\"inner\">\n          <h3></h3>\n          <p>Recursos reservados</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-stats-bars\"></i>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\">\n      <div class=\"small-box bg-yellow\">\n        <div class=\"inner\">\n          <h3></h3>\n          <p>Usuarios registrados</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-person-add\"></i>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-xs-6\">\n      <div class=\"small-box bg-red\">\n        <div class=\"inner\">\n          <h3></h3>\n          <p>Multas</p>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion ion-pie-graph\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\">\n          <i class=\"ion ion-clipboard\"></i>\n          <h3 class=\"box-title\">Por hacer</h3>\n        </div>\n        <div class=\"box-body\">\n          <ul class=\" todo-list \">\n            <li>\n              <span class=\"handle \">\n                  <i class=\"fa fa-ellipsis-v \"></i>\n                  <i class=\"fa fa-ellipsis-v \"></i>\n              </span>\n              <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" value=\"\">\n                  <span class=\"text \">Añadir novelas de Miguel de Cervantes</span>\n              </label>\n              <div class=\"tools \">\n                <i class=\"fa fa-edit \"></i>\n                <i class=\"fa fa-trash-o \"></i>\n              </div>\n            </li>\n            <li>\n              <span class=\"handle \">\n                  <i class=\"fa fa-ellipsis-v \"></i>\n                  <i class=\"fa fa-ellipsis-v \"></i>\n              </span>\n              <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" value=\"\">\n                  <span class=\"text \">Añadir ejemplares del año 2015 de FLEX Magazine</span>\n              </label>\n              <div class=\"tools \">\n                <i class=\"fa fa-edit \"></i>\n                <i class=\"fa fa-trash-o \"></i>\n              </div>\n            </li>\n            <li>\n              <span class=\"handle \">\n                  <i class=\"fa fa-ellipsis-v \"></i>\n                  <i class=\"fa fa-ellipsis-v \"></i>\n              </span>\n              <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" value=\"\">\n                  <span class=\"text \">Añadir libros de filosofía de Miguel de Unamuno</span>\n              </label>\n              <div class=\"tools \">\n                <i class=\"fa fa-edit \"></i>\n                <i class=\"fa fa-trash-o \"></i>\n              </div>\n            </li>\n            <li>\n              <span class=\"handle \">\n                  <i class=\"fa fa-ellipsis-v \"></i>\n                  <i class=\"fa fa-ellipsis-v \"></i>\n              </span>\n              <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" value=\"\">\n                  <span class=\"text \">Añadir libros de poesía dramaturga de Lope de Vega</span>\n              </label>\n              <div class=\"tools \">\n                <i class=\"fa fa-edit \"></i>\n                <i class=\"fa fa-trash-o \"></i>\n              </div>\n            </li>\n            <li>\n              <span class=\"handle \">\n                  <i class=\"fa fa-ellipsis-v \"></i>\n                  <i class=\"fa fa-ellipsis-v \"></i>\n              </span>\n              <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" value=\"\">\n                  <span class=\"text \">Administrar usuarios con el carnet bibiliotecario caducado</span>\n              </label>\n              <div class=\"tools \">\n                <i class=\"fa fa-edit \"></i>\n                <i class=\"fa fa-trash-o \"></i>\n              </div>\n            </li>\n            <li>\n              <span class=\"handle \">\n                  <i class=\"fa fa-ellipsis-v \"></i>\n                  <i class=\"fa fa-ellipsis-v \"></i>\n              </span>\n              <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" value=\"\">\n                  <span class=\"text \">Estudiar un plan de marketing publicitario</span>\n              </label>\n              <div class=\"tools \">\n                <i class=\"fa fa-edit \"></i>\n                <i class=\"fa fa-trash-o \"></i>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"box-footer clearfix no-border \">\n          <button type=\"button\" class=\"btn btn-default pull-right \"><i class=\"fa fa-plus \"></i> Añadir tarea</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <a [routerLink]=\"['/admin']\" class=\"logo\" height=\"40px\">\n    <img [src]=\"imgLogo\">\n    <span class=\"logo-mini\">BREMS</span>\n  </a>\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Menú</span>\n    </a>\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <div *ngIf=\"userImage == undefined; else chargedImage\">\n              <img src=\"../../../../assets/img/loadingImages.svg\" width=\"20px\" height=\"20px\" align=\"middle\">\n            </div>\n            <ng-template #chargedImage>\n              <img [src]=\"sanitizer.bypassSecurityTrustUrl(userImage)\" class=\"user-image\" />\n            </ng-template>\n            <span class=\"hidden-xs\">{{user?.firstName}} {{user?.lastName1}}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"user-header\">\n              <div class=\"imgUploaderr\">\n                <div *ngIf=\"userImage == undefined; else chargedImage\">\n                  <img src=\"../../../../assets/img/loadingImages.svg\" width=\"50px\" height=\"50px\" align=\"middle\">\n                </div>\n                <ng-template #chargedImage>\n                  <img [src]=\"sanitizer.bypassSecurityTrustUrl(userImage)\" class=\"user-image\" />\n                </ng-template>\n              </div>\n              <p>\n              </p>\n            </li>\n            <li class=\"user-footer\">\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Cerrar sesión</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Administración de multas\n    <small>Administra las multas de los usuarios</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"/admin/\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li class=\"active\">Multas</li>\n  </ol>\n</section>\n<section class=\"content\">\n  <table class=\"table table-bordered table-striped\" style=\"background-color: white !important;\">\n    <thead>\n    <tr>\n      <th width=\"10%\">Identificador</th>\n      <th width=\"15%\">Usuario</th>\n      <th width=\"20%\">Recurso</th>\n      <th width=\"10%\">Razón</th>\n      <th width=\"20%\">Tiempo</th>\n      <th width=\"3%\">Administrar</th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-template ngFor let-fine [ngForOf]=\"fines\">\n      <tr>\n        <td>{{fine?.id}}</td>\n        <td>{{fine.user?.name}}</td>\n        <td>{{fine.resourceCopy?.resource.title}}</td>\n        <td>Default</td>\n        <td>{{fine?.initDate}} - {{fine?.finishDate}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"delete(fine.id)\">\n            <span class=\"fa fa-trash\"></span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n    </tbody>\n  </table><div>\n  <div class=\"pull-right\">\n    <button *ngIf=\"showPreviousPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"previousPage()\">\n      <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n    </button>\n    <button *ngIf=\"showNextPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"nextPage()\">\n      <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n</section>\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  <strong>Algo ha ido mal...</strong> {{message}}\n</div>\n\n<section class=\"content-header\">\n  <h1>Administración de préstamos <small>Administra los préstamos de los recursos</small></h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li><a [routerLink]=\"['/admin/loans']\">Préstamo</a></li>\n    <li class=\"active\">Añadir préstamo</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-default\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Nuevo préstamo</h3>\n    </div>\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <div class=\"form-group\">\n            <label>Recursos disponibles a prestar</label>\n            <br>\n            <select [(ngModel)]=\"resourceSelect\">\n                <ng-template ngFor let-resource [ngForOf]=\"resources\">\n                    <option *ngIf=\"resource.noReservedCopies.length > 0\" [ngValue]=\"resource\">{{resource.title}}</option>\n                </ng-template>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Usuario</label>\n            <br>\n            <select [(ngModel)]=\"userSelect\">\n                <option *ngFor=\"let user of users\" [ngValue]=\"user\">{{user.name}}</option>\n            </select>\n          </div>\n          <br>\n          <div class=\"pull-left\">\n            <input type=\"submit\" class=\"btn btn-success\" (click)=\"createLoan()\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"successMessage\" class=\"alert alert-success\">\n  <strong>¡Acción realizada!</strong> {{message}}\n</div>\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  <strong>Algo ha ido mal...</strong> {{message}}\n</div>\n\n<section class=\"content-header\">\n  <h1>Administración de préstamos <small>Administra los préstamos de los recursos</small></h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li class=\"active\">Prestamos</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <table class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th width=\"10%\">Identificador</th>\n        <th width=\"15%\">Usuario</th>\n        <th>Recurso</th>\n        <th>Petición</th>\n        <th>Préstamo</th>\n        <th>Devolución</th>\n        <th>Administrar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let loan of loans\">\n        <td>{{ loan.copy.locationCode }}</td>\n        <td>{{ loan.user.name }}</td>\n        <td>{{ loan.copy.resource.title }}</td>\n        <td>{{ loan.dateLoanInit }}</td>\n        <td>\n          <div *ngIf=\"loan.dateLoanGiven != null ; else elseBlockLoanGiven\">{{ loan.dateLoanGiven }}</div>\n          <ng-template #elseBlockLoanGiven>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateLoan(loan.id, 'give')\"><span class=\"fa fa-bookmark-o\"></span> &nbsp; Prestar</button>\n          </ng-template>\n        </td>\n        <td>\n          <div *ngIf=\"loan.dateLoanReturn != null ; else elseBlockLoanReturn\">{{ loan.dateLoanReturn }}</div>\n          <ng-template #elseBlockLoanReturn>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateLoan(loan.id, 'return')\"><span class=\"fa fa-bookmark\"></span> &nbsp; Devolución</button>\n          </ng-template>\n        </td>\n        <td>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteLoan(loan.id)\"><span class=\"fa fa-trash\"></span></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div>\n    <div class=\"pull-left\">\n      <a [routerLink]=\"['/admin/loans/new']\">\n        <button type=\"button\" class=\"btn btn-primary\"><span class=\"fa fa-plus-circle\">  </span>&nbsp;Añadir préstamo</button>\n      </a>\n    </div>\n    <div class=\"pull-right\">\n      <button *ngIf=\"showPreviousPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"previousPage()\">\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n      </button>\n      <button *ngIf=\"showNextPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"nextPage()\">\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>Administraión de recursos <small>Administra los libros o las revistas</small></h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li><a [routerLink]=\"['/admin/resources']\">Recursos</a></li>\n    <li class=\"active\">Añadir recurso</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-default\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Nuevo libro</h3>\n    </div>\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <div class=\"form-group\">\n            <label>Título del recurso</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Título\" required [(ngModel)]=\"newResource.title\">\n          </div>\n          <div class=\"form-group\">\n            <label>Sumario del recurso</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Sumario corto\" [(ngModel)]=\"newResource.description\">\n          </div>\n          <div class=\"form-group\">\n            <label>Autor o compañía</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Autor o compañía\" required [(ngModel)]=\"newResource.author\">\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <div class=\"form-group\">\n            <label>Género literario</label>\n            <select [(ngModel)]=\"newResource.genre\" required>\n                <option *ngFor=\"let genre of genres\" [ngValue]=\"genre\">{{genre.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Editorial</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Editorial\" [(ngModel)]=\"newResource.editorial\">\n          </div>\n          <div class=\"form-group\">\n            <label>Tipo de recurso</label>\n            <select [(ngModel)]=\"newResource.resourceType\" required>\n                <option *ngFor=\"let type of types\" [ngValue]=\"type\">{{type.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Número de copias</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Número de copias\" required [(ngModel)]=\"newResource.resourceCopiesNumber\">\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"button\" class=\"btn btn-success\" value=\"Guardar\" (click)=\"createResource()\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"successMessage\" class=\"alert alert-success\">\n  <strong>¡Modificado!</strong> {{message}}\n</div>\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  <strong>Algo ha ido mal...</strong> {{message}}\n</div>\n\n<section class=\"content-header\">\n  <h1>Administraión de recursos<small>Administra los libros o las revistas</small></h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li><a [routerLink]=\"['/admin/resources']\">Recursos</a></li>\n    <li class=\"active\">Añadir recurso</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <div class=\"box box-default\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\"><small>Editar</small> {{ resource?.title }}</h3>\n    </div>\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-md-5 col-lg-3\">\n          <div class=\"form-group\">\n            <div *ngIf=\"resource.image == undefined; else chargedImage\">\n              <img src=\"assets/img/loadingImages.svg\" width=\"50px\" height=\"50px\" align=\"middle\">\n            </div>\n            <ng-template #chargedImage>\n              <img [src]=\"sanitizer.bypassSecurityTrustUrl(resource.image)\" class=\"img-responsive\" />\n            </ng-template>\n            <label for=\"exampleInputFile\">Imagen</label>\n            <input for=\"exampleInputFile\" type=\"file\" name=\"picture\" (change)=\"selectFile($event)\">\n          </div>\n        </div>\n        <div class=\"col-lg-8\">\n          <div class=\"form-group\">\n            <label>Sumario del recurso</label>\n            <textarea rows=\"3\" cols=\"50\" class=\"form-control\" [(ngModel)]=\"resource.description\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Autor o compañía</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resource.author\">\n          </div>\n          <div class=\"form-group\">\n            <label>Género literario</label>: {{resource.genre?.name}}\n            <br>\n            <select [(ngModel)]=\"resource.genre\">\n                <option *ngFor=\"let genre of genres\" [ngValue]=\"genre\" [selected]=\"resource.genre?.id == genre.id\">{{genre.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Editorial</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"resource.editorial\">\n          </div>\n          <div class=\"form-group\">\n            <label>Tipo de recurso</label> : {{resource.resourceType?.name}}\n            <br>\n            <select [(ngModel)]=\"resource.resourceType\">\n                <option *ngFor=\"let type of types\" [ngValue]=\"type\" [selected]=\"resource.resourceType?.id == type.id\">{{type.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Número de copias</label>\n            <input type=\"number\" class=\"form-control\" value=\"{{resource?.copies?.length}}\">\n          </div>\n          <div class=\"pull-right\">\n            <input type=\"button\" class=\"btn btn-success\" (click)=\"saveResource()\" value=\"Actualizar\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"successMessage\" class=\"alert alert-success\">\n  <strong>¡Eliminado!</strong> {{message}}\n</div>\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  <strong>Algo ha ido mal...</strong> {{message}}\n</div>\n\n<section class=\"content-header\">\n  <h1>Administración de recursos <small>Administra los libros o las revistas</small></h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i>Inicio</a></li>\n    <li class=\"active\">Recursos</li>\n  </ol>\n</section>\n\n<section class=\"content\">\n  <table class=\"table table-bordered table-striped\">\n    <thead>\n      <tr>\n        <th width=\"14%\">Título</th>\n        <th width=\"20%\">Sumario</th>\n        <th width=\"5%\">Ejemplares</th>\n        <th width=\"5%\">Sin alquilar</th>\n        <th width=\"8%\">Autor</th>\n        <th width=\"5%\">Género</th>\n        <th width=\"5%\">Tipo</th>\n        <th width=\"3%\">Administrar</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let resource of resources\">\n        <td>{{ resource.title }}</td>\n        <td>{{ resource.description }}</td>\n        <td>{{ resource.copies.length }}</td>\n        <td>{{ resource.noReservedCopies.length }}</td>\n        <td>{{ resource.author }}</td>\n        <td>{{ resource.genre?.name }}</td>\n        <td>{{ resource.resourceType?.name }}</td>\n        <td>\n          <a [routerLink]=\"['./', resource.id]\">\n            <button type=\"button\" class=\"btn btn-success\"><span class=\"fa fa-pencil\"></span></button>\n          </a>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteResource(resource.id)\"><span class=\"fa fa-trash\"></span></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div>\n    <div class=\"pull-left\">\n      <a [routerLink]=\"['./new']\">\n        <button type=\"button\" class=\"btn btn-primary\"><span class=\"fa fa-plus-circle\">  </span>&nbsp;Añadir recurso</button>\n      </a>\n    </div>\n    <div class=\"pull-right\">\n      <button *ngIf=\"showPreviousPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"previousPage()\">\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n      </button>\n      <button *ngIf=\"showNextPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"nextPage()\">\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<section class=\"content-header\">\n  <h1>\n    Administración de usuarios\n    <small>Administra los usuarios</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"/admin/\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li><a href=\"/admin/users\">Usuarios</a></li>\n    <li class=\"active\">Añadir usuario</li>\n  </ol>\n</section>\n<section class=\"content\">\n  <div class=\"box box-default\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Nuevo usuario</h3>\n    </div>\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <div class=\"form-group\">\n            <label>Nombre y apellidos</label>\n            <br>\n            <input type=\"text\" class=\"form-control\" style='display: inline; width: 38%;' placeholder=\"Nombre\"\n                   #firstName required>\n            <input type=\"text\" class=\"form-control\" style='display: inline; width: 30%;'\n                   placeholder=\"Primer apellido\" #lastName1 required>\n            <input type=\"text\" class=\"form-control\" style='display: inline; width: 30%;'\n                   placeholder=\"Segundo apellido\" #lastName2 required>\n          </div>\n          <div class=\"form-group\">\n            <label>Usuario</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Usuario\" #name required>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" #email required>\n          </div>\n          <div class=\"form-group\">\n            <label>Tipo de usuario</label>\n            <input type=\"radio\" name=\"type\" [(ngModel)]=\"typeuser\" value=\"User\"> Usuario\n            <input type=\"radio\" name=\"type\" [(ngModel)]=\"typeuser\" value=\"Administrator\"> Administrador\n          </div>\n        </div>\n        <div class=\"col-lg-2\">\n          <div class=\"form-group\">\n            <label>D.N.I.</label>\n            <input class=\"form-control\" name=\"dni\" type=\"text\" #dni placeholder=\"D.N.I.\">\n          </div>\n          <div class=\"form-group\">\n            <label>Contraseña</label>\n            <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Contraseña\" #password required>\n          </div>\n          <div class=\"form-group\">\n            <label>Teléfono</label>\n            <input class=\"form-control\" name=\"telephone\" type=\"text\" #telephone placeholder=\"Teléfono\">\n          </div>\n          <div class=\"pull-left\">\n            <button class=\"btn btn-success\" (click)=\"create(firstName.value, lastName1.value, lastName2.value,\n              name.value, email.value, password.value, dni.value, telephone.value)\">Registrar\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <h1>\n    Administración de usuarios\n    <small>Administra los usuarios</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li><a [routerLink]=\"['/admin/users']\">Usuarios</a></li>\n    <li class=\"active\">Modificar usuario</li>\n  </ol>\n</section>\n<section class=\"content\">\n  <div class=\"box box-default\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Editar {{user?.name}}</h3>\n    </div>\n    <div class=\"box-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <div class=\"form-group\">\n            <label>Nombre y apellidos</label>\n            <br>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" style='display: inline; width: 38%;'\n                   #firstName value=\"{{user?.firstName}}\">\n            <input type=\"text\" class=\"form-control\" name=\"lastName1\" style='display: inline; width: 30%;'\n                   #lastName1 value=\"{{user?.lastName1}}\">\n            <input type=\"text\" class=\"form-control\" name=\"lastName2\" style='display: inline; width: 30%;'\n                   #lastName2 value=\"{{user?.lastName2}}\">\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" #email value=\"{{user?.email}}\">\n          </div>\n          <div class=\"form-group\">\n            <label>DNI</label>\n            <input type=\"text\" class=\"form-control\" name=\"dni\" #dni value=\"{{user?.dni}}\">\n          </div>\n          <div class=\"pull-right\">\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"edit(firstName.value, lastName1.value,\n              lastName2.value, email.value, dni.value)\">Modificar\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"successMessage\" class=\"alert alert-success\">\n  <strong>¡Eliminado!</strong> {{message}}\n</div>\n<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n  <strong>Algo ha ido mal...</strong> {{message}}\n</div>\n<section class=\"content-header\">\n  <h1>\n    Administración de usuarios\n    <small>Administra los usuarios</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a [routerLink]=\"['/admin']\"><i class=\"fa fa-dashboard\"></i> Inicio</a></li>\n    <li class=\"active\">Usuarios</li>\n  </ol>\n</section>\n<section class=\"content\">\n  <table class=\"table table-bordered table-striped\" style=\"background-color: white !important;\">\n    <thead>\n    <tr>\n      <th width=\"20%\">Nombre y apellidos</th>\n      <th width=\"20%\">Usuario</th>\n      <th width=\"5%\">Rol(es)</th>\n      <th width=\"5%\">Multas</th>\n      <th width=\"5%\">Préstamos</th>\n      <th width=\"3%\">Administrar</th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-template ngFor let-user [ngForOf]=\"users\">\n      <tr>\n        <td>{{user?.firstName}} {{user?.lastName1}} {{user?.lastName2}}</td>\n        <td>{{user?.name}}</td>\n        <td>{{user?.roles?.length}}</td>\n        <td>{{user.penalties?.length}}</td>\n        <td>{{user.actions?.length}}</td>\n        <td>\n          <a [routerLink]=\"['./',user.id]\">\n            <button type=\"button\" class=\"btn btn-success\"><span class=\"fa fa-pencil\"></span></button>\n          </a>\n          &nbsp;&nbsp;\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"delete(user.id)\"><span class=\"fa fa-trash\"></span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n    </tbody>\n  </table>\n  \n  <div>\n    <div class=\"pull-left\">\n      <a [routerLink]=\"['/admin/users/new']\">\n        <button type=\"button\" class=\"btn btn-primary\"><span class=\"fa fa-plus-circle\">  </span>&nbsp;Añadir usuario</button>\n      </a>\n    </div>\n    <div class=\"pull-right\">\n      <button *ngIf=\"showPreviousPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"previousPage()\">\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n      </button>\n      <button *ngIf=\"showNextPage\" type=\"button\" class=\"btn btn-primary\" (click)=\"nextPage()\">\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <section class=\"sidebar\">\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <div *ngIf=\"userImage == undefined; else chargedImage\">\n          <img src=\"../../../../assets/img/loadingImages.svg\" width=\"50px\" height=\"50px\" align=\"middle\">\n        </div>\n        <ng-template #chargedImage>\n          <img [src]=\"sanitizer.bypassSecurityTrustUrl(userImage)\" class=\"user-image\" />\n        </ng-template>\n      </div>\n      <div class=\"pull-left info\">\n        <p></p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> En línea</a>\n      </div>\n    </div>\n    <ul class=\"sidebar-menu\">\n      <li class=\"header\">MENÚ</li>\n      <li [class.active]=\"indexActive\"><a [routerLink]=\"['/admin']\" (click)=\"update('index')\"><i class=\"fa fa-home\"></i> <span>Inicio</span></a></li>\n      <li [class.active]=\"resourcesActive\"><a [routerLink]=\"['/admin/resources']\" (click)=\"update('resources')\"><i class=\"fa fa-book\"></i> <span>Recursos</span></a></li>\n      <li [class.active]=\"loansActive\"><a [routerLink]=\"['/admin/loans']\" (click)=\"update('loans')\"><i class=\"fa fa-book\"></i> <span>Préstamos</span></a></li>\n      <li [class.active]=\"finesActive\"><a [routerLink]=\"['/admin/fines']\" (click)=\"update('fines')\"><i class=\"fa fa-book\"></i> <span>Multas</span></a></li>\n      <li [class.active]=\"usersActive\"><a [routerLink]=\"['/admin/users']\" (click)=\"update('users')\"><i class=\"fa fa-users\"></i> <span>Usuarios</span></a></li>\n    </ul>\n  </section>\n</aside>\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map