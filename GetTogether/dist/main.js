(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n    <h2>GetTogether! allows you to search for local eateries via Yelp! and notify your friends automatically via Twitter.</h2>\n    <ol>\n        <li> You may search without logging in, but you need to log in to make a plan and have it tweeted to your friends. So,\n            log in to get started!\n        </li>\n        <li>\n            Then just enter your city, state or zip code to find places to go. Once you have chosen a place to go from the list, just\n            click \"I'm Going\".\n        </li>\n        <li> You will be taken to the \"make a plan page\" to choose a date and time.</li>\n        <li>That's all. Your friends will be notified by an automatic tweet. You will see all of your plans with maps on your\n            \"My Plans\" page.</li>\n        <li>You can change your plan time and date or cancel your plan by visiting your \"My Plans\" page. A new tweet will automatically\n            be sent to notify your friends of the change of plans.</li>\n       \n    </ol>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 1.3em;\n  align-items: center;\n  margin-top: 60px; }\n\nh2 {\n  margin-bottom: 2.5em; }\n\nol {\n  list-style-type: none;\n  margin: 0;\n  margin-left: 4em;\n  padding: 0;\n  counter-reset: li-counter; }\n\nol > li {\n  position: relative;\n  margin-bottom: 50px;\n  padding-left: 0.5em;\n  min-height: 2em; }\n\nol > li:before {\n  position: absolute;\n  top: 0;\n  left: -1.33em;\n  width: 1.2em;\n  height: 1.2em;\n  font-size: 2.5em;\n  line-height: 1.2;\n  text-align: center;\n  color: #f5f5f5;\n  border: 3px solid #c5c5c5;\n  border-radius: 50%;\n  background-color: #575042;\n  content: counter(li-counter);\n  counter-increment: li-counter; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _my_plans_my_plans_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-plans/my-plans.component */ "./src/app/my-plans/my-plans.component.ts");
/* harmony import */ var _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-plan/edit-plan.component */ "./src/app/edit-plan/edit-plan.component.ts");
/* harmony import */ var _new_plan_new_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-plan/new-plan.component */ "./src/app/new-plan/new-plan.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
        data: { shouldReuse: true }
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'myplans/:authId',
        component: _my_plans_my_plans_component__WEBPACK_IMPORTED_MODULE_4__["MyPlansComponent"],
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthguardGuard"]],
        data: { shouldReuse: false }
    },
    {
        path: 'editplan',
        component: _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_5__["EditPlanComponent"],
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthguardGuard"]]
    },
    {
        path: 'newplan',
        component: _new_plan_new_plan_component__WEBPACK_IMPORTED_MODULE_6__["NewPlanComponent"],
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthguardGuard"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\">\n        <div class=\"item\" id=\"header\">\n                <h1>Get Together!</h1>\n        </div>\n        <div class=\"item\" id=\"menu\">\n                <div class=\"mx-auto\" style=\"width: 100%\">\n                        <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" id=\"nav\">\n                                <a style=\"color:white;\" class=\"navbar-brand\" routerLink=\"/\">Get Together!</a>\n                                <span *ngIf=\"user[0]\">\n                                        <img id=\"userlogo\" class=\"circle\" src={{user[0]?.photo}}>\n                                        <span id=\"welcome\" *ngIf=\"user[0]\" style=\"color:white;\">Welcome {{user[0]?.userName}}</span>\n                                </span>\n                                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"dropdown\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n                                        aria-label=\"Toggle navigation\">\n                                        <span class=\"navbar-toggler-icon\"></span>\n                                </button>\n                                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                                        <div class=\"ml-auto\">\n                                                <ul class=\"navbar-nav\">\n                                                        <li class=\"nav-item active\">\n                                                                <a id=\"login\" *ngIf=\"!user[0]\" (click)=\"loginWithTwitter()\" style=\"color:white;\">Log in</a>\n\n                                                                <a id=\"logout\" style=\"color:white;\" (click)=\"logOut()\" *ngIf=\"user[0]\">Logout</a>\n                                                        </li>\n\n                                                        <li class=\"nav-item\">\n                                                                <a (click)=\"goToPlans()\" style=\"color:white;\">My Plans</a>\n                                                        </li>\n\n                                                        <li class=\"nav-item\">\n                                                                <a routerLink=\"/about\" style=\"color:white;\">About</a>\n                                                        </li>\n                                                </ul>\n                                        </div>\n                                </div>\n                        </nav>\n                </div>\n        </div>\n        <div class=\"item\" id=\"search\">\n                <router-outlet></router-outlet>\n        </div>\n\n        <div class=\"item\" id=\"footer\">\n            \n                <div id=\"credits\" class=\"container\">\n                        <div class=\"item\" id=\"madewith\"> Made with:</div>\n                         <img width=\"46\" alt=\"Mongo Logo\" src=\"assets/img/mongo-notxt.png\">\n                        <img width=\"65\" alt=\"Express Logo\" src=\"assets/img/express2.png\">\n                        <img width=\"70\" alt=\"Angular Logo\" src=\"assets/img/angular.png\">\n                        <img width=\"57\" alt=\"Node Logo\" src=\"assets/img/node2.png\">\n                        <img width=\"52\" alt=\"Twitter Logo\" src=\"assets/img/twitter.png\">\n                        <img width=\"100\" alt=\"Yelp Logo\" src=\"assets/img/yelpstar.png\">\n                        <div class=\"item\" id=\"byline\"> Made by: Mark Jones</div>\n                </div>\n              </div>\n        <div class=\"item\" id=\"left\"></div>\n        <div class=\"item\" id=\"right\"></div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: averia;\n  src: url('AveriaLibre-Bold.ttf'); }\n\n@font-face {\n  font-family: ostround;\n  src: url('ostrich-sans-rounded.woff'); }\n\n.grid {\n  display: -ms-grid;\n  display: grid;\n  height: 100vh;\n  -ms-grid-columns: 1fr 20fr 1fr;\n      grid-template-columns: 1fr 20fr 1fr;\n  font-family: averia;\n  -ms-grid-rows: auto auto auto auto;\n      grid-template-rows: auto auto auto auto; }\n\n#header {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  -ms-grid-column-span: 3;\n  grid-column-end: 4;\n  background-image: url('barscene.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center; }\n\n#header h1 {\n    color: white;\n    font-family: averia;\n    font-size: 10em;\n    text-shadow: 1px 1px 0 black, -1px -1px 0 black;\n    margin-top: 60px; }\n\n@media (max-width: 996px) {\n      #header h1 {\n        font-size: 8em; } }\n\n@media (max-width: 800px) {\n      #header h1 {\n        font-size: 6em; } }\n\n@media (max-width: 600px) {\n      #header h1 {\n        font-size: 4.5em; } }\n\n@media (max-width: 450px) {\n      #header h1 {\n        font-size: 3em; } }\n\n#menu {\n  cursor: pointer;\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  -ms-grid-column-span: 3;\n  grid-column-end: 4;\n  font-family: averia; }\n\n#menu .badge {\n    margin-left: 5px; }\n\n#menu #nav a:hover {\n    color: #7D5B34 !important;\n    text-decoration: none; }\n\n#menu .navbar-nav > li {\n    padding-left: 30px;\n    padding-right: 30px; }\n\n#search {\n  -ms-grid-column: 2;\n      grid-column-start: 2;\n  -ms-grid-column-span: 1;\n  grid-column-end: 3; }\n\n#footer {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  -ms-grid-column-span: 3;\n  grid-column-end: 4;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAApElEQVR42u3UKQ4AQQhFQRyaK3D/O/YyYiRJ+xJfvGBJRWauu+7+pueOqlpn/0HPHT7nrcPnvDXDGMYwhjGMYZphDGMYwximGcYwhjGMYQzTDGMYwxjGMM0whjGMYQxjmGYYwxjGMIZphjGMYQxjGMM0wxjGMIYxTDOMYQxjGMMYphnGMIYxjGGaYQxjGMMYxjDNMIYxjGEM0wxjGMMYxjCG6bk3XALG47ODPVoAAAAASUVORK5CYII=\");\n  background-repeat: repeat-x;\n  color: white; }\n\n#footer #credits {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n#footer #credits img {\n      width: 3em; }\n\n@media (max-width: 800px) {\n        #footer #credits img {\n          width: 3em;\n          padding: 5px; } }\n\n@media (max-width: 350px) {\n        #footer #credits img {\n          width: 2.5em;\n          padding: 2px; } }\n\n@media (max-width: 800px) {\n      #footer #credits {\n        font-size: 10px; } }\n\n@media (max-width: 350px) {\n      #footer #credits {\n        font-size: 8px; } }\n\n.circle {\n  border-radius: 50%; }\n\n#userlogo {\n  width: 40px;\n  height: 40px;\n  margin-left: 20px;\n  margin-top: 0px;\n  margin-bottom: 5px; }\n\n#left {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  -ms-grid-column-span: 1;\n  grid-column-end: 2;\n  -ms-grid-row: 3;\n      grid-row-start: 3;\n  -ms-grid-row-span: 2;\n  grid-row-end: 5; }\n\n#right {\n  -ms-grid-column: 3;\n      grid-column-start: 3;\n  -ms-grid-column-span: 1;\n  grid-column-end: 4;\n  -ms-grid-row: 3;\n      grid-row-start: 3;\n  -ms-grid-row-span: 2;\n  grid-row-end: 5; }\n\n.navbar {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAApElEQVR42u3UKQ4AQQhFQRyaK3D/O/YyYiRJ+xJfvGBJRWauu+7+pueOqlpn/0HPHT7nrcPnvDXDGMYwhjGMYZphDGMYwximGcYwhjGMYQzTDGMYwxjGMM0whjGMYQxjmGYYwxjGMIZphjGMYQxjGMM0wxjGMIYxTDOMYQxjGMMYphnGMIYxjGGaYQxjGMMYxjDNMIYxjGEM0wxjGMMYxjCG6bk3XALG47ODPVoAAAAASUVORK5CYII=\");\n  background-repeat: repeat-x; }\n\nimg {\n  margin-top: 1em; }\n\n#welcome {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(dbService, authService, router, db) {
        this.dbService = dbService;
        this.authService = authService;
        this.router = router;
        this.user = [];
    }
    AppComponent.prototype.ngOnInit = function () { };
    //get user info and navigate to user's plan list
    AppComponent.prototype.goToPlans = function () {
        var authId = this.user[0].userId;
        this.router.navigate(["/myplans/" + authId]);
    };
    //firebase - twitter auth login call to the authService
    AppComponent.prototype.loginWithTwitter = function () {
        var _this = this;
        this.authService.twitterLogin().then(function (result) { return _this.afterSignIn(result); });
    };
    //get info from auth user's login creds
    AppComponent.prototype.afterSignIn = function (result) {
        var authUser = result.user;
        var creds = {
            userId: authUser.uid,
            userName: authUser.displayName,
            photo: authUser.photoURL
        };
        this.user.push(creds);
        this.saveUser(creds);
    };
    //save user info to db
    AppComponent.prototype.saveUser = function (usercreds) {
        this.authService.setAuthUser(usercreds);
        this.dbService.saveUserToDb(usercreds).subscribe(function (results) {
            console.log("User saved");
        });
    };
    //logout
    AppComponent.prototype.logOut = function () {
        this.user = [];
        this.authService.setAuthUser("");
        this.authService.signOut();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _authguard_guard__WEBPACK_IMPORTED_MODULE_4__["AuthguardGuard"]]
        }),
        __metadata("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./src/node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _my_plans_my_plans_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-plans/my-plans.component */ "./src/app/my-plans/my-plans.component.ts");
/* harmony import */ var _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-plan/edit-plan.component */ "./src/app/edit-plan/edit-plan.component.ts");
/* harmony import */ var _new_plan_new_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-plan/new-plan.component */ "./src/app/new-plan/new-plan.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./src/node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./src/node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./src/node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _reuse_strategy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reuse-strategy */ "./src/app/reuse-strategy.ts");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../interceptor */ "./src/interceptor.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _my_plans_my_plans_component__WEBPACK_IMPORTED_MODULE_6__["MyPlansComponent"],
                _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__["EditPlanComponent"],
                _new_plan_new_plan_component__WEBPACK_IMPORTED_MODULE_8__["NewPlanComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_12__["SearchFormComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"]
            ],
            providers: [
                _db_service_service__WEBPACK_IMPORTED_MODULE_13__["DbServiceService"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"], useClass: _reuse_strategy__WEBPACK_IMPORTED_MODULE_15__["ReuseStrategy"] },
                _interceptor__WEBPACK_IMPORTED_MODULE_16__["InterceptorModule"],
                _auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _authguard_guard__WEBPACK_IMPORTED_MODULE_22__["AuthguardGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.AuthUser$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.user = afAuth.authState;
    }
    //helpers for use in other components
    AuthService.prototype.getAuthUser = function () {
        return this.AuthUser$;
    };
    AuthService.prototype.setAuthUser = function (creds) {
        this.AuthUser$.next(creds);
    };
    //firebase, twitter auth
    AuthService.prototype.twitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider();
            _this.afAuth.auth.signInWithPopup(provider).then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    //sign out
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(["/"]);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (this.auth.user) {
            return true;
        }
        else {
            this.router.navigate(["/"]);
            return false;
        }
    };
    AuthguardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/db-service.service.ts":
/*!***************************************!*\
  !*** ./src/app/db-service.service.ts ***!
  \***************************************/
/*! exports provided: DbServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbServiceService", function() { return DbServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./src/node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbServiceService = /** @class */ (function () {
    function DbServiceService(http) {
        this.http = http;
        this.requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: null,
            withCredentials: true
        });
        //var for twitter search
        this.searchText = "";
        //sets the new plan as observable
        this.planSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.newPlan = this.planSource.asObservable();
        //sets plan to be edited as observable
        this.planToUpdateSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.planToUpdate = this.planToUpdateSource.asObservable();
        this.searchText = "";
    }
    //gets new plan object and sets as observable
    DbServiceService.prototype.updateNewPlan = function (plan, userId) {
        plan.user = userId;
        this.planSource.next(plan);
    };
    //receives plan to update and sets the var
    DbServiceService.prototype.addPlanToUpdate = function (plan) {
        this.planToUp = plan;
    };
    //updates plan in the db
    DbServiceService.prototype.updatePlan = function (plan) {
        return this.http
            .put("./api/plans/edit/" + plan._id, plan)
            .map(function (data) { return data.json(); });
    };
    //deletes plan in the db
    DbServiceService.prototype.deletePlan = function (plan) {
        return (this.http
            .delete("./api/plans/delete/" + plan._id)
            .map(function (data) { return data.json(); }));
    };
    //gets user's plans from db
    DbServiceService.prototype.getAllPlans = function (auserId) {
        return this.http.get("/api/plans/" + auserId).map(function (res) { return res.json(); });
    };
    //saves new plan to db
    DbServiceService.prototype.savePlantoDb = function (plan) {
        return this.http.post("./api/plans", plan).map(function (data) { return data.json(); });
    };
    //save user to db
    DbServiceService.prototype.saveUserToDb = function (user) {
        return this.http.post("/api/users", user).map(function (res) { return res.json(); });
    };
    //sends search term to api to fetch search results
    DbServiceService.prototype.getSearchResults = function (term) {
        return this.http.post("/api/search", term).map(function (res) { return res.json(); });
    };
    DbServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DbServiceService);
    return DbServiceService;
}());



/***/ }),

/***/ "./src/app/edit-plan/edit-plan.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-plan/edit-plan.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Edit Plan for: </h1>\n  <div id=\"plans\">\n    <form id=\"edForm\" class=\"form-inline\">\n      <div class=\"card\" style=\"width: 32rem;\">\n        <div class=\"card-header\">{{editplan.month}} {{editplan.day}},{{editplan.year}} {{editplan.time}}{{editplan.ampm}}\n        </div>\n        <img class=\"card-img-top\" src={{editplan.image_url}} alt=\"image cap\">\n        <div class=\"card-body\">\n          <p id=\"name\" class=\"card-text\">{{editplan.name}}</p>\n          <p id=\"title\" class=\"card-text\">{{editplan.categories[0].title}}</p>\n          <p id=\"add1\" class=\"card-text\">{{editplan.location.address1}}</p>\n          <p id=\"add2\" class=\"card-text\">{{editplan.location.city}}, {{editplan.location.state}}, {{editplan.location.zip_code}}</p>\n          <p id=\"phone\" class=\"card-text\">{{editplan.display_phone}}</p>\n          <div class=\"divide\">\n            <hr>\n          </div>\n          <h5>Choose a new date and time or delete the plan</h5>\n          <div class=\"form-row align-items-center\">\n            <div class=\"col-auto\">\n              <label class=\"sr-only\" for=\"month\">Month</label>\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"month\" name=\"month\" [(ngModel)]=\"editplan.month\">\n                <option>Month</option>\n                <option>January</option>\n                <option>February</option>\n                <option>March</option>\n                <option>April</option>\n                <option>May</option>\n                <option>June</option>\n                <option>July</option>\n                <option>August</option>\n                <option>September</option>\n                <option>October</option>\n                <option>November</option>\n                <option>December</option>\n              </select>\n            </div>\n            <div class=\"col-auto\">\n              <label class=\"sr-only\" for=\"day\">Day</label>\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"day\" name=\"day\" [(ngModel)]=\"editplan.day\">\n                <option selected>Day</option>\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>6</option>\n                <option>7</option>\n                <option>8</option>\n                <option>9</option>\n                <option>10</option>\n                <option>11</option>\n                <option>13</option>\n                <option>14</option>\n                <option>15</option>\n                <option>16</option>\n                <option>17</option>\n                <option>18</option>\n                <option>19</option>\n                <option>20</option>\n                <option>21</option>\n                <option>22</option>\n                <option>23</option>\n                <option>24</option>\n                <option>25</option>\n                <option>26</option>\n                <option>27</option>\n                <option>28</option>\n                <option>29</option>\n                <option>30</option>\n                <option>31</option>\n              </select>\n            </div>\n            <div class=\"col-auto\">\n              <label class=\"sr-only\" for=\"year\">Year</label>\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"year\" name=\"year\" [(ngModel)]=\"editplan.year\">\n                <option selected>Year</option>\n                <option value=\"2018\">2018</option>\n                <option value=\"2019\">2019</option>\n                <option value=\"2020\">2020</option>\n                <option value=\"2021\">2021</option>\n                <option value=\"2022\">2022</option>\n                <option value=\"2023\">2023</option>\n                <option value=\"2024\">2024</option>\n                <option value=\"2025\">2025</option>\n                <option value=\"2026\">2026</option>\n                <option value=\"2027\">2027</option>\n                <option value=\"2028\">2028</option>\n                <option value=\"2029\">2029</option>\n                <option value=\"2030\">2030</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row align-items-center\">\n            <div class=\"col-auto\">\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"hour\" name=\"time\" [(ngModel)]=\"editplan.time\">\n                <option>1:00</option>\n                <option>1:30</option>\n                <option>2:00</option>\n                <option>2:30</option>\n                <option>3:00</option>\n                <option>3:30</option>\n                <option>4:00</option>\n                <option>4:30</option>\n                <option>5:00</option>\n                <option>5:30</option>\n                <option>6:00</option>\n                <option>6:30</option>\n                <option>7:00</option>\n                <option>7:30</option>\n                <option>8:00</option>\n                <option>8:30</option>\n                <option>9:00</option>\n                <option>9:30</option>\n                <option>10:00</option>\n                <option>10:30</option>\n                <option>11:00</option>\n                <option>11:30</option>\n                <option>12:00</option>\n                <option>12:30</option>\n              </select>\n            </div>\n            <div class=\"col-auto\">\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"ampm\" name=\"ampm\" [(ngModel)]=\"editplan.ampm\">\n                <option>am</option>\n                <option>pm</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"divide\">\n            <hr>\n          </div>\n          <div id=\"confirm\" [class.confirm]=\"checkConfirm\">\n            <h5>Are you sure you want to delete this plan?</h5>\n            <a type=\"button\" id=del{{i}} class=\"btn btn-warning\" style=\"color:white;\" (click)=\"confirmEdit()\">Cancel</a>\n            <a type=\"button\" id=del{{i}} class=\"btn btn-danger\" style=\"color:white;\" (click)=\"delete()\">Delete</a>\n          </div>\n        </div>\n        <div class=\"card-footer text-muted item\" id='buttons'>\n          <a type=\"button\" id=del{{i}} class=\"btn btn-danger\" style=\"color:white;\" (click)=\"confirmEdit()\">Delete Plan</a>\n          <a (click)=\"goToMyPlans()\" class=\"btn btn-warning\">Cancel</a>\n          <a type=\"button\" (click)=\"onSubmit()\" id=save{{i}} class=\"btn btn-primary\" style=\"color:white;\">Save</a>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div id=\"editModal\" class=\"modal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <span class=\"close\">&times;</span>\n      </div>\n      <div class=\"modal-body\">\n        <h2>Success!</h2>\n        <p>Plan {{modalText}} and Tweeted!</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"goToMyPlans()\" class=\"btn btn-primary\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-plan/edit-plan.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-plan/edit-plan.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 4em;\n  text-align: center; }\n\nh1 {\n  margin-bottom: 1em; }\n\n#plans {\n  display: flex;\n  margin-top: 0px;\n  justify-content: center; }\n\n.card-img-top {\n  height: 250px; }\n\n.card {\n  display: flex;\n  text-align: center;\n  margin-bottom: 5px; }\n\n.card p {\n    margin: 0px; }\n\n.card h4 {\n    margin-top: 1em; }\n\nform {\n  margin-top: 2em; }\n\n.confirm {\n  display: none; }\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n/* Modal Content */\n\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 20%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s; }\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: #575042;\n  color: white; }\n\n.modal-body {\n  padding: 2px 16px; }\n\n.modal-footer {\n  padding: 2px 16px;\n  background-color: #575042;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/edit-plan/edit-plan.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-plan/edit-plan.component.ts ***!
  \**************************************************/
/*! exports provided: EditPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlanComponent", function() { return EditPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPlanComponent = /** @class */ (function () {
    function EditPlanComponent(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.checkConfirm = true;
    }
    EditPlanComponent.prototype.ngOnInit = function () {
        this.editplan = this.dbService.planToUp;
    };
    // form: NgForm
    EditPlanComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dbService.updatePlan(this.editplan).subscribe(function (results) {
            _this.modalText = "Updated";
            var x = document.getElementById("editModal");
            x.style.display = "block";
        });
    };
    EditPlanComponent.prototype.delete = function () {
        var _this = this;
        this.dbService.deletePlan(this.editplan).subscribe(function (results) {
            _this.modalText = "Deleted";
            var x = document.getElementById("editModal");
            x.style.display = "block";
        });
    };
    EditPlanComponent.prototype.confirmEdit = function () {
        this.checkConfirm = !this.checkConfirm;
    };
    EditPlanComponent.prototype.goToMyPlans = function () {
        var canplan = [];
        canplan.push(this.editplan);
        var user = canplan[0].user;
        this.router.navigate(["/myplans/" + user]);
    };
    EditPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-plan",
            template: __webpack_require__(/*! ./edit-plan.component.html */ "./src/app/edit-plan/edit-plan.component.html"),
            styles: [__webpack_require__(/*! ./edit-plan.component.scss */ "./src/app/edit-plan/edit-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditPlanComponent);
    return EditPlanComponent;
}());



/***/ }),

/***/ "./src/app/my-plans/my-plans.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-plans/my-plans.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n \n<h1>My Plans</h1>\n<h3 id=\"plan-message\" *ngIf=\"plans.length < 1\">Your plans will show after you make them.</h3>\n <div id=\"plans\">\n    <div class=\"card\" style=\"width: 32rem;\" *ngFor=\"let plan of plans; let i = index\">\n        <div id = \"plan{{i}}\" class='card-header'>{{plan.month}} {{plan.day}},{{plan.year}} {{plan.time}}{{plan.ampm}}</div>\n          <img class=\"card-img-top\" src={{plan.image_url}} alt=\"image\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title\">{{plan.name}}</h5>\n            <div class=\"card-text\" id='loc-info'>\n                <p class=\"desc\">{{plan.categories[0].title}}</p>\n                <p class=\"card-text\"> {{plan.location.address1}} </p>\n                 <p class=\"card-text\">{{plan.location.city}}{{plan.location.state}},{{plan.location.zip_code}}</p>\n                  <p>Phone number: {{plan.display_phone}}</p>\n            </div>\n          </div>\n    \n          <div id=\"map{{i}}\"><img src=\"https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=510x250&maptype=roadmap&markers={{plan.coordinates.latitude}},{{plan.coordinates.longitude}}&key=AIzaSyBddIRZH17OVGxX5StCZlilU3AFLdcmhUY\"></div>\n\n          <div class=\"card-footer text-muted item\" id='buttons'>\n             <a type=\"button\" id={{i}} class=\"btn btn-primary\"  style=\"color:white;\"  (click)=\"edit($event)\" routerLink=\"/editplan\">Edit</a>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-plans/my-plans.component.scss":
/*!**************************************************!*\
  !*** ./src/app/my-plans/my-plans.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 4em;\n  text-align: center; }\n\nh1 {\n  margin-bottom: 1em; }\n\n#plans {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(520px, 1fr))[auto-fit];\n      grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));\n  grid-gap: 15px;\n  margin-top: 0px; }\n\n#plan-message {\n  margin-top: 50px;\n  margin-bottom: 100px; }\n\n.card {\n  display: flex;\n  text-align: center;\n  margin-bottom: 5px; }\n\n.card p {\n    margin: 0px; }\n\n.card h4 {\n    margin-top: 1em; }\n\n.card-img-top {\n  height: 250px; }\n\n#map {\n  margin-top: 10px;\n  height: 100%;\n  width: 100%; }\n\nagm-map {\n  height: 250px;\n  width: 510px; }\n\n.edit {\n  display: inline-block; }\n\n.hidden {\n  display: none; }\n\n.btn {\n  color: white; }\n\n#form-container {\n  margin-left: 1.5em; }\n"

/***/ }),

/***/ "./src/app/my-plans/my-plans.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-plans/my-plans.component.ts ***!
  \************************************************/
/*! exports provided: MyPlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlansComponent", function() { return MyPlansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPlansComponent = /** @class */ (function () {
    function MyPlansComponent(dbService, router, route, auth) {
        this.dbService = dbService;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.plans = [];
        this.planIndex = -1;
    }
    MyPlansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.authUser = params['authId']; });
        this.getAllPlans();
    };
    //get list of plans 
    MyPlansComponent.prototype.getAllPlans = function () {
        var _this = this;
        this.dbService.getAllPlans(this.authUser).subscribe(function (plans) {
            _this.plans = plans;
        });
    };
    //get plan information to be updated
    MyPlansComponent.prototype.edit = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var index = idAttr.nodeValue;
        var planToEdit = this.plans[index];
        this.dbService.addPlanToUpdate(planToEdit);
    };
    MyPlansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-plans',
            template: __webpack_require__(/*! ./my-plans.component.html */ "./src/app/my-plans/my-plans.component.html"),
            styles: [__webpack_require__(/*! ./my-plans.component.scss */ "./src/app/my-plans/my-plans.component.scss")]
        }),
        __metadata("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MyPlansComponent);
    return MyPlansComponent;
}());



/***/ }),

/***/ "./src/app/new-plan/new-plan.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-plan/new-plan.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"twitter:card\" content=\"summary\" />\n<meta name=\"twitter:site\" content=\"@yelp\" />\n<meta name=\"twitter:title\" content=\"{{plan.name}}\" />\n<meta name=\"twitter:description\" content=\"View details on Yelp!\" />\n<meta name=\"twitter:image\" content=\"{{plan.image_url}}\" />\n\n\n<div class=\"container-fluid\">\n  <h1>Make my new plan for: </h1>\n  <div id=\"plans\">\n    <form id=\"edForm\" (ngSubmit)=\"onSubmit(edForm)\" class=\"form-inline\" #edform=\"ngForm\">\n      <div class=\"card\" style=\"width: 32rem;\">\n        <!-- <div class='card-header'></div> -->\n        <img class=\"card-img-top\" src={{plan.image_url}} alt=\"image cap\">\n        <div class=\"card-body\">\n          <p id=\"name\" class=\"card-text\">{{plan.name}}</p>\n          <p id=\"title\" class=\"card-text\">{{plan.categories[0].title}}</p>\n          <p id=\"add1\" class=\"card-text\">{{plan.location.address1}}</p>\n          <p id=\"add2\" class=\"card-text\">{{plan.location.city}}, {{plan.location.state}}, {{plan.location.zip_code}}</p>\n          <p id=\"phone\" class=\"card-text\">{{plan.display_phone}}</p>\n\n          <div class=\"divide\">\n            <hr>\n          </div>\n\n          <h5>Choose your date and time</h5>\n          <div class=\"form-row align-items-center\" [class.has-error]=\"month.touched && month.invalid && day.touched && day.invalid && time.touched && time.invalid && ampm.touched && ampm.invalid && year.touched && year.invalid\">\n            <div class=\"col-auto\">\n              <label class=\"sr-only\" for=\"month\">Month</label>\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"month\" name=\"month\" [(ngModel)]=\"plan.month\" required #month=\"ngModel\">\n                <option [ngValue]=\"undefined\" selected disabled>Month</option>\n                <option>January</option>\n                <option>February</option>\n                <option>March</option>\n                <option>April</option>\n                <option>May</option>\n                <option>June</option>\n                <option>July</option>\n                <option>August</option>\n                <option>September</option>\n                <option>October</option>\n                <option>November</option>\n                <option>December</option>\n              </select>\n              <div class=\"help-block\" *ngIf=\"month.touched && month.pristine\">\n                Month selection required.\n              </div>\n            </div>\n\n            <div class=\"col-auto\">\n              <label class=\"sr-only\" for=\"day\">Day</label>\n\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"day\" name=\"day\" [(ngModel)]=\"plan.day\" required #day=\"ngModel\">\n                <option [ngValue]=\"undefined\" selected disabled>Day</option>\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>6</option>\n                <option>7</option>\n                <option>8</option>\n                <option>9</option>\n                <option>10</option>\n                <option>11</option>\n                <option>13</option>\n                <option>14</option>\n                <option>15</option>\n                <option>16</option>\n                <option>17</option>\n                <option>18</option>\n                <option>19</option>\n                <option>20</option>\n                <option>21</option>\n                <option>22</option>\n                <option>23</option>\n                <option>24</option>\n                <option>25</option>\n                <option>26</option>\n                <option>27</option>\n                <option>28</option>\n                <option>29</option>\n                <option>30</option>\n                <option>31</option>\n              </select>\n              <div class=\"help-block\" *ngIf=\"day.touched && day.invalid\">\n                Day selection required.\n              </div>\n            </div>\n            <div class=\"col-auto\">\n              <label class=\"sr-only\" for=\"year\">Year</label>\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"year\" name=\"year\" [(ngModel)]=\"plan.year\" required #year=\"ngModel\">\n                <option [ngValue]=\"undefined\" selected disabled>Year</option>\n                <option value=\"2018\">2018</option>\n                <option value=\"2019\">2019</option>\n                <option value=\"2020\">2020</option>\n                <option value=\"2021\">2021</option>\n                <option value=\"2022\">2022</option>\n                <option value=\"2023\">2023</option>\n                <option value=\"2024\">2024</option>\n                <option value=\"2025\">2025</option>\n                <option value=\"2026\">2026</option>\n                <option value=\"2027\">2027</option>\n                <option value=\"2028\">2028</option>\n                <option value=\"2029\">2029</option>\n                <option value=\"2030\">2030</option>\n              </select>\n              <div class=\"help-block\" *ngIf=\"year.touched && year.invalid\">\n                Year selection required.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-row align-items-center\">\n            <div class=\"col-auto\">\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"hour\" name=\"time\" [(ngModel)]=\"plan.time\" required #time=\"ngModel\">\n                <option [ngValue]=\"undefined\" selected disabled>Time</option>\n                <option>1:00</option>\n                <option>1:30</option>\n                <option>2:00</option>\n                <option>2:30</option>\n                <option>3:00</option>\n                <option>3:30</option>\n                <option>4:00</option>\n                <option>4:30</option>\n                <option>5:00</option>\n                <option>5:30</option>\n                <option>6:00</option>\n                <option>6:30</option>\n                <option>7:00</option>\n                <option>7:30</option>\n                <option>8:00</option>\n                <option>8:30</option>\n                <option>9:00</option>\n                <option>9:30</option>\n                <option>10:00</option>\n                <option>10:30</option>\n                <option>11:00</option>\n                <option>11:30</option>\n                <option>12:00</option>\n                <option>12:30</option>\n              </select>\n              <div class=\"help-block\" *ngIf=\"time.touched && time.invalid\">\n                Time selection required.\n              </div>\n            </div>\n\n            <div class=\"col-auto\">\n              <select class=\"custom-select my-1 mr-sm-2\" id=\"ampm\" name=\"ampm\" [(ngModel)]=\"plan.ampm\" required #ampm=\"ngModel\">\n                <option [ngValue]=\"undefined\" selected disabled>am/pm</option>\n                <option>am</option>\n                <option>pm</option>\n              </select>\n              <div class=\"help-block\" *ngIf=\"ampm.touched && ampm.invalid\">\n                ampm selection required.\n              </div>\n            </div>\n          </div>\n          <div class=\"divide\">\n            <hr>\n          </div>\n        </div>\n        <div class=\"card-footer text-muted item\" id='buttons'>\n\n          <button [disabled]=\"month.pristine || day.pristine || year.pristine || time.pristine || ampm.pristine\" class=\"btn btn-primary\"\n            type=\"button\" (click)=\"savePlan()\">Save</button>\n          <button routerLink=\"/\" class=\"btn btn-danger\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div id=\"myModal\" class=\"modal\">\n\n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <span class=\"close\">&times;</span>\n      </div>\n      <div class=\"modal-body\">\n        <h2>Success!</h2>\n        <p>Plan saved and Tweeted!</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"goToMyPlans()\" class=\"btn btn-primary\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-plan/new-plan.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-plan/new-plan.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 4em;\n  text-align: center; }\n\nh1 {\n  margin-bottom: 1em; }\n\n#plans {\n  display: flex;\n  margin-top: 0px;\n  justify-content: center;\n  line-height: 0.7; }\n\n.card {\n  display: flex;\n  text-align: center;\n  margin-bottom: 5px; }\n\n.card p {\n    margin: 0px;\n    align-content: center;\n    line-height: 2em; }\n\n.card h4 {\n    margin-top: 1em; }\n\n.card-img-top {\n  height: 250px; }\n\n#npForm input {\n  text-align: center; }\n\n#add2 {\n  width: 90%;\n  margin: auto; }\n\n.divide {\n  height: 60px; }\n\n/* The Modal (background) */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n/* Modal Content */\n\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 20%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s; }\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n/* The Close Button */\n\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: #575042;\n  color: white; }\n\n.modal-body {\n  padding: 2px 16px; }\n\n.modal-footer {\n  padding: 2px 16px;\n  background-color: #575042;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/new-plan/new-plan.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-plan/new-plan.component.ts ***!
  \************************************************/
/*! exports provided: NewPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPlanComponent", function() { return NewPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPlanComponent = /** @class */ (function () {
    function NewPlanComponent(dbService, router, auth) {
        this.dbService = dbService;
        this.router = router;
        this.auth = auth;
        //get auth user
        this.authUser = this.auth.user;
        this.canplan = [];
    }
    //get ref to plan to be saved and show confirmation after saved
    NewPlanComponent.prototype.savePlan = function (form) {
        var _this = this;
        this.dbService.savePlantoDb(this.plan).subscribe(function (results) {
            _this.canplan.push(_this.plan);
            var user = _this.canplan[0].user;
            var x = document.getElementById("myModal");
            x.style.display = "block";
        });
    };
    //return to plan list after clicking confirmation
    NewPlanComponent.prototype.goToMyPlans = function () {
        var user = this.canplan[0].user;
        this.router.navigate(["/myplans/" + user]);
    };
    NewPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        //gets new plan object from the service to display
        this.dbService.newPlan.subscribe(function (plan) { return (_this.plan = plan); });
    };
    NewPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-new-plan",
            template: __webpack_require__(/*! ./new-plan.component.html */ "./src/app/new-plan/new-plan.component.html"),
            styles: [__webpack_require__(/*! ./new-plan.component.scss */ "./src/app/new-plan/new-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NewPlanComponent);
    return NewPlanComponent;
}());



/***/ }),

/***/ "./src/app/reuse-strategy.ts":
/*!***********************************!*\
  !*** ./src/app/reuse-strategy.ts ***!
  \***********************************/
/*! exports provided: ReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuseStrategy", function() { return ReuseStrategy; });
var ReuseStrategy = /** @class */ (function () {
    function ReuseStrategy() {
        //helper methods to retain search information after navigating back from viewing plans
        this.handlers = {};
    }
    ReuseStrategy.prototype.shouldDetach = function (route) {
        return route.data.shouldReuse || false;
    };
    ReuseStrategy.prototype.store = function (route, handle) {
        if (route.data.shouldReuse) {
            this.handlers[route.routeConfig.path] = handle;
        }
    };
    ReuseStrategy.prototype.shouldAttach = function (route) {
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    ReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig)
            return null;
        return this.handlers[route.routeConfig.path];
    };
    ReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.data.shouldReuse || false;
    };
    return ReuseStrategy;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #searchForm=\"ngForm\" (ngSubmit)=\"onClick(searchForm)\">\n  <div class=\"input-group mb-3\">\n\n    <input type=\"text\" class=\"form-control\" id=\"locSearch\" name=\"location\" placeholder=\"Enter city, state or zip code\" ngModel>\n\n    <button class=\"btn btn-outline-secondary\" type=\"submit\">Search</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/search-form/search-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.searchClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchFormComponent.prototype.ngOnInit = function () { };
    //the form emits its value to be observed 
    SearchFormComponent.prototype.onClick = function (form) {
        this.searchClicked.emit(form.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "searchClicked", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-search-form",
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.scss */ "./src/app/search-form/search-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" id=\"headline\">\n  <span>Welcome to GetTogether! An easy way to find local restaurants and bars via Yelp!, make plans for the evening and invite\n    all of your friends via Twitter.</span>\n</div>\n\n<div class=\"container\" id=\"search-container\">\n\n  <app-search-form (searchClicked)=\"sendSearch($event)\"></app-search-form>\n\n\n  <div>Search for entertainment locations in your area with:\n    <span>\n      <img src=\"../../assets/img/yelpsmall.png\" alt=\"Yelp\" class=\"yelp\">\n    </span>\n  </div>\n</div>\n\n<div id=\"divider\">\n  <hr>\n</div>\n\n<div id=\"results\">\n\n\n  <div class=\"locations\" *ngFor=\"let location of locations; let i = index\">\n\n    <div class=\"card\" id={{i}} style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"{{location.image_url}}\" alt=\"image cap\">\n      <div class=\"card-body\">\n        <span id=\"rev-link\">\n          <a href=\"{{location.url}}\" target=\"_blank\">\n            <img src=\"../../assets/img/yelpsmall.png\" alt=\"Read Yelp reviews\">\n          </a>\n        </span>\n        <h5 class=\"card-title\">{{location.name}}</h5>\n        <p>\n          <img src=\"../../assets/img/{{location.rating}}.png\" alt=\"rating\">\n          <span class=\"numRatings\">{{location.review_count}} reviews</span>\n        </p>\n        <p class=\"card-text\">{{location.price}}</p>\n        <p class=\"desc\">{{location.categories[0].title}}</p>\n        <p class=\"card-text\">{{location.location.address1}}</p>\n        <p class=\"card-text\">{{location.location.city}},\n          <span>{{location.location.state}}, {{location.location.zip_code}}</span>\n        </p>\n        <p class=\"card-text\">{{location.display_phone}}</p>\n\n        <a *ngIf=\"(authUser)\" id={{i}} class=\"btn btn-primary\" (click)=\"onClick($event)\" routerLink=\"/newplan\">I'm Going</a>\n\n        <a *ngIf=\"!(authUser)\" class=\"btn btn-light\">Please Log In</a>\n\n\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: averia;\n  src: url('AveriaLibre-Bold.ttf'); }\n\n#search-container {\n  margin-top: 6em;\n  width: 40%;\n  text-align: center; }\n\n#search-container .yelp {\n    height: 50px;\n    width: 100px;\n    padding-bottom: 10px; }\n\n@media (max-width: 800px) {\n    #search-container {\n      width: 50%; } }\n\n@media (max-width: 800px) {\n    #search-container {\n      width: 70%; } }\n\n@media (max-width: 450px) {\n    #search-container {\n      width: 90%; } }\n\nhr {\n  margin-top: 60px; }\n\n#results {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(280px, 1fr))[auto-fit];\n      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  grid-gap: 15px;\n  margin-top: 0px; }\n\n#headline {\n  margin-top: 4em;\n  font-size: 1.5em; }\n\n@media (max-width: 600px) {\n    #headline {\n      font-size: medium; } }\n\n@media (max-width: 450px) {\n    #headline {\n      font-size: 15px; } }\n\n.card {\n  display: flex;\n  margin-bottom: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: .9em; }\n\n.card p {\n    margin: 0px; }\n\n.card .desc {\n    color: #7D5B34;\n    font-style: italic; }\n\n.card a {\n    margin-left: 30%;\n    margin-top: 5px; }\n\n.card .numRatings {\n    margin-left: 5px; }\n\n.card .btn {\n    margin-top: 1em; }\n\n.card-img-top {\n  height: 286px; }\n\n#divider {\n  height: 20px;\n  margin-bottom: 80px; }\n\n#rev-link {\n  margin-top: 5px;\n  margin-left: 100px;\n  border: white 1px solid transparent; }\n\n#rev-link:hover {\n    border: white 1px solid; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _db_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(dbService, auth) {
        this.dbService = dbService;
        this.auth = auth;
        this.parseInt = parseInt;
        this.locations = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get user info
        this.auth.AuthUser$.subscribe(function (data) {
            _this.authUser = data;
        });
    };
    //sends new plan object to the dbService: to be retrieved by the NewPlan component for editing
    SearchComponent.prototype.onClick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var index = idAttr.nodeValue;
        var planobj = this.locations[index];
        var Auser = this.authUser.userId;
        this.dbService.updateNewPlan(planobj, Auser);
    };
    //sends search terms to the db service
    SearchComponent.prototype.sendSearch = function (searchCriteria) {
        var _this = this;
        this.dbService.getSearchResults(searchCriteria).subscribe(function (results) {
            _this.locations = results.businesses;
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_db_service_service__WEBPACK_IMPORTED_MODULE_1__["DbServiceService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCw205oOabmjmXuzGOtKu3ykslj5-YkZDU",
        authDomain: "togetherapp-1525099472388.firebaseapp.com",
        databaseURL: "https://togetherapp-1525099472388.firebaseio.com",
        projectId: "togetherapp-1525099472388",
        storageBucket: "togetherapp-1525099472388.appspot.com",
        messagingSenderId: "452958727174"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/interceptor.ts":
/*!****************************!*\
  !*** ./src/interceptor.ts ***!
  \****************************/
/*! exports provided: HttpsRequestInterceptor, InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./src/node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', ' https://api.twitter.com/') });
        return next.handle(dupReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

;
var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: HttpsRequestInterceptor, multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./src/node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/node_modules/@angular/core/esm5 lazy recursive":
/*!*******************************************************************!*\
  !*** ./src/node_modules/@angular/core/esm5 lazy namespace object ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/node_modules/@angular/core/esm5 lazy recursive";

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\getTogetherApp\GetTogether\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map