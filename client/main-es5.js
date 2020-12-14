function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/DTO/game-dto.ts":
  /*!*********************************!*\
    !*** ./src/app/DTO/game-dto.ts ***!
    \*********************************/

  /*! exports provided: GameDto */

  /***/
  function srcAppDTOGameDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameDto", function () {
      return GameDto;
    });

    var GameDto = function GameDto() {
      _classCallCheck(this, GameDto);
    };
    /***/

  },

  /***/
  "./src/app/DTO/grup-dto.ts":
  /*!*********************************!*\
    !*** ./src/app/DTO/grup-dto.ts ***!
    \*********************************/

  /*! exports provided: grupDto */

  /***/
  function srcAppDTOGrupDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "grupDto", function () {
      return grupDto;
    });

    var grupDto = function grupDto() {
      _classCallCheck(this, grupDto);
    };
    /***/

  },

  /***/
  "./src/app/DTO/player-dto.ts":
  /*!***********************************!*\
    !*** ./src/app/DTO/player-dto.ts ***!
    \***********************************/

  /*! exports provided: playerDto */

  /***/
  function srcAppDTOPlayerDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerDto", function () {
      return playerDto;
    });

    var playerDto = function playerDto() {
      _classCallCheck(this, playerDto);
    };
    /***/

  },

  /***/
  "./src/app/DTO/statisticByPlayer-dto.ts":
  /*!**********************************************!*\
    !*** ./src/app/DTO/statisticByPlayer-dto.ts ***!
    \**********************************************/

  /*! exports provided: StatisticByPlayerDto */

  /***/
  function srcAppDTOStatisticByPlayerDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticByPlayerDto", function () {
      return StatisticByPlayerDto;
    });

    var StatisticByPlayerDto = function StatisticByPlayerDto() {
      _classCallCheck(this, StatisticByPlayerDto);
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./comps/home/home.component */
    "./src/app/comps/home/home.component.ts");
    /* harmony import */


    var _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/sign-in/sign-in.component */
    "./src/app/comps/sign-in/sign-in.component.ts");
    /* harmony import */


    var _comps_registration_registrtion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/registration/registrtion.component */
    "./src/app/comps/registration/registrtion.component.ts");
    /* harmony import */


    var _comps_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/start/start.component */
    "./src/app/comps/start/start.component.ts");
    /* harmony import */


    var _comps_show_players_show_players_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/show-players/show-players.component */
    "./src/app/comps/show-players/show-players.component.ts");
    /* harmony import */


    var _comps_add_a_player_add_a_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comps/add-a-player/add-a-player.component */
    "./src/app/comps/add-a-player/add-a-player.component.ts");
    /* harmony import */


    var _comps_play_play_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./comps/play/play.component */
    "./src/app/comps/play/play.component.ts");
    /* harmony import */


    var _comps_history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./comps/history/history.component */
    "./src/app/comps/history/history.component.ts");
    /* harmony import */


    var _my_gurd_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./my-gurd.guard */
    "./src/app/my-gurd.guard.ts");

    var routes = [{
      path: 'home',
      component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'sign-in',
      component: _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
    }, {
      path: 'registration',
      component: _comps_registration_registrtion_component__WEBPACK_IMPORTED_MODULE_4__["RegistrtionComponent"]
    }, {
      path: 'start',
      component: _comps_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"],
      canActivate: [_my_gurd_guard__WEBPACK_IMPORTED_MODULE_10__["MyGurdGuard"]]
    }, {
      path: 'show-players',
      component: _comps_show_players_show_players_component__WEBPACK_IMPORTED_MODULE_6__["ShowPlayersComponent"],
      canActivate: [_my_gurd_guard__WEBPACK_IMPORTED_MODULE_10__["MyGurdGuard"]]
    }, {
      path: 'add-a-player',
      component: _comps_add_a_player_add_a_player_component__WEBPACK_IMPORTED_MODULE_7__["AddAPlayerComponent"],
      canActivate: [_my_gurd_guard__WEBPACK_IMPORTED_MODULE_10__["MyGurdGuard"]]
    }, {
      path: 'play',
      component: _comps_play_play_component__WEBPACK_IMPORTED_MODULE_8__["PlayComponent"],
      canActivate: [_my_gurd_guard__WEBPACK_IMPORTED_MODULE_10__["MyGurdGuard"]]
    }, {
      path: 'history',
      component: _comps_history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"],
      canActivate: [_my_gurd_guard__WEBPACK_IMPORTED_MODULE_10__["MyGurdGuard"]]
    }, {
      path: '',
      component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'project-basketball';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/home/home.component */
    "./src/app/comps/home/home.component.ts");
    /* harmony import */


    var _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/sign-in/sign-in.component */
    "./src/app/comps/sign-in/sign-in.component.ts");
    /* harmony import */


    var _comps_registration_registrtion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comps/registration/registrtion.component */
    "./src/app/comps/registration/registrtion.component.ts");
    /* harmony import */


    var _comps_start_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./comps/start/start.component */
    "./src/app/comps/start/start.component.ts");
    /* harmony import */


    var _comps_show_players_show_players_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./comps/show-players/show-players.component */
    "./src/app/comps/show-players/show-players.component.ts");
    /* harmony import */


    var _comps_add_a_player_add_a_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./comps/add-a-player/add-a-player.component */
    "./src/app/comps/add-a-player/add-a-player.component.ts");
    /* harmony import */


    var _comps_play_play_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./comps/play/play.component */
    "./src/app/comps/play/play.component.ts");
    /* harmony import */


    var _comps_history_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./comps/history/history.component */
    "./src/app/comps/history/history.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _comps_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"], _comps_registration_registrtion_component__WEBPACK_IMPORTED_MODULE_7__["RegistrtionComponent"], _comps_start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"], _comps_show_players_show_players_component__WEBPACK_IMPORTED_MODULE_9__["ShowPlayersComponent"], _comps_add_a_player_add_a_player_component__WEBPACK_IMPORTED_MODULE_10__["AddAPlayerComponent"], _comps_play_play_component__WEBPACK_IMPORTED_MODULE_11__["PlayComponent"], _comps_history_history_component__WEBPACK_IMPORTED_MODULE_12__["HistoryComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _comps_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"], _comps_registration_registrtion_component__WEBPACK_IMPORTED_MODULE_7__["RegistrtionComponent"], _comps_start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"], _comps_show_players_show_players_component__WEBPACK_IMPORTED_MODULE_9__["ShowPlayersComponent"], _comps_add_a_player_add_a_player_component__WEBPACK_IMPORTED_MODULE_10__["AddAPlayerComponent"], _comps_play_play_component__WEBPACK_IMPORTED_MODULE_11__["PlayComponent"], _comps_history_history_component__WEBPACK_IMPORTED_MODULE_12__["HistoryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/add-a-player/add-a-player.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/comps/add-a-player/add-a-player.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddAPlayerComponent */

  /***/
  function srcAppCompsAddAPlayerAddAPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAPlayerComponent", function () {
      return AddAPlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddAPlayerComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nameSpan);
      }
    }

    function AddAPlayerComponent_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heightSpan);
      }
    }

    var AddAPlayerComponent = /*#__PURE__*/function () {
      function AddAPlayerComponent(srv, srvPost, router, fb) {
        _classCallCheck(this, AddAPlayerComponent);

        this.srv = srv;
        this.srvPost = srvPost;
        this.router = router;
        this.fb = fb;
        this.nameSpan = '';
        this.heightSpan = '';
        this.arrPlayers = [];
        this.addPlayer = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          Height: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(AddAPlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.srv.plaersAGrup.subscribe(function (val) {
            _this.arrPlayers = val;
          });
        }
      }, {
        key: "nameValid",
        value: function nameValid() {
          if (this.addPlayer.controls.name.dirty) {
            if (this.addPlayer.controls.name.hasError('required')) {
              this.nameSpan = 'Required field';
              return 'Required field';
            } else if (this.addPlayer.controls.name.hasError('minlength')) {
              this.nameSpan = 'Must be at least 4 characters long';
              return 'Must be at least 6 characters long';
            }
          }
        }
      }, {
        key: "heightValid",
        value: function heightValid() {
          if (this.addPlayer.controls.Height.dirty) {
            if (this.addPlayer.controls.Height.hasError('required')) {
              this.heightSpan = 'Required field';
              return 'Required field';
            }
          }
        }
      }, {
        key: "save",
        value: function save(name, height, select) {
          if (this.addPlayer.controls.Height.valid && this.addPlayer.controls.name.valid && this.image != null && select != '') {
            var id = Math.floor(Math.random() * 1000000000000).toString();
            var image = "http://localhost:3000/playrs/getFile/".concat(id);
            this.srvPost.addPlayer(name, height, image, select);
            this.srvPost.uploadImage(this.image, id);
            this.router.navigate(['/start']);
          } else {
            alert('Incomplete details');
          }
        }
      }, {
        key: "onUpload",
        value: function onUpload(e) {
          var _this2 = this;

          var image = e.files[0];
          var fileReader = new FileReader();

          fileReader.onload = function (e) {
            _this2.image = image;
          };

          fileReader.readAsDataURL(image);
          var formData = new FormData();
          formData.append('image', image);
        }
      }]);

      return AddAPlayerComponent;
    }();

    AddAPlayerComponent.ɵfac = function AddAPlayerComponent_Factory(t) {
      return new (t || AddAPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AddAPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddAPlayerComponent,
      selectors: [["app-add-a-player"]],
      decls: 53,
      vars: 3,
      consts: [[1, "cont"], [1, "container-sm"], [1, "form-signin", 3, "formGroup"], [1, "container-register-form"], [1, "form"], [1, "note"], [2, "text-decoration", "underline"], [1, "form-content"], [1, "rishum"], [1, "Name"], ["type", "text", "formControlName", "name", "placeholder", " Name ", "value", "", 1, "form-control"], ["inputName", ""], ["style", "font-size: large; color: red; background-color: rgb(202, 191, 189);", 4, "ngIf"], [1, "form-group"], ["type", "number", "formControlName", "Height", "placeholder", "Height ", "value", "", 1, "form-control"], ["inputHeight", ""], ["id", "select", 2, "width", "60%"], ["select", ""], ["value", ""], ["value", "Shooting Guard"], ["value", "Small Forward"], ["value", "Power Forward"], ["value", "Center"], ["type", "file", 3, "change"], ["image", ""], ["type", "submit", 1, "btnSubmit", 3, "click"], [2, "font-size", "large", "color", "red", "background-color", "rgb(202, 191, 189)"]],
      template: function AddAPlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddAPlayerComponent_span_22_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddAPlayerComponent_span_29_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Player Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Shooting Guard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Small Forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Power Forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddAPlayerComponent_Template_input_change_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

            return ctx.onUpload(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAPlayerComponent_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return ctx.save(_r0.value, _r2.value, _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addPlayer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heightValid());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n    background-color: rgba(243, 229, 213, 0.829);\r\n   min-height: 100vh;\r\n   height: 100%;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    height: 80px;\r\n    width: 80%;\r\n    margin-top: 15%;\r\n    margin-left: 10%;\r\n    color: #fff;\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    line-height: 80px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]{\r\n    border: 5px solid rgb(248, 119, 13);\r\n    border-radius: 50%;\r\n    \r\n    \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n    height: 72vh;\r\n    background-image: url('/assets/image/backgroundLogIn.jpg');\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n\r\n.btnSubmit[_ngcontent-%COMP%]\r\n{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 20%;\r\n    cursor: pointer;\r\n    background: #ffbc50;\r\n    color: #fff;\r\n    outline: none;\r\n\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n}\r\n\r\noption[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRkLWEtcGxheWVyL2FkZC1hLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0dBQzdDLGlCQUFpQjtHQUNqQixZQUFZO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBSUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWiwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2FkZC1hLXBsYXllci9hZGQtYS1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDIyOSwgMjEzLCAwLjgyOSk7XHJcbiAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ub3RlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5mb3Jte1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI0OCwgMTE5LCAxMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjA5LCAyMzgsIDgyKTsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDclOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3MnZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlL2JhY2tncm91bmRMb2dJbi5qcGcnKTtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5cclxuLmJ0blN1Ym1pdFxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM1MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxub3B0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogLmJveHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXI6IG9yYW5nZSBzb2xpZCAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogNCVcclxufVxyXG5cclxuLlBsYXllci1wb3NpdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JVxyXG5cclxufVxyXG4uaGVpZ2h0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG5cclxufVxyXG4uc2F2ZXtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-a-player',
          templateUrl: './add-a-player.component.html',
          styleUrls: ['./add-a-player.component.css']
        }]
      }], function () {
        return [{
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/history/history.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/comps/history/history.component.ts ***!
    \****************************************************/

  /*! exports provided: HistoryComponent */

  /***/
  function srcAppCompsHistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
      return HistoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HistoryComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No results");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HistoryComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_div_30_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.selectPlayer(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HistoryComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_div_38_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.resultByGrup(i_r9[0].player);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r9[0].opacity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9[0].player.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r9[0].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HistoryComponent_div_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Name a player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PercentTo2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "PercentTo3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("date :", i_r12[0]["game"][0].date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timeAPlay :", i_r12[0]["game"][0].time, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[0]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[1]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[2]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r12[0]["game"][0].result_g1, " : ", i_r12[0]["game"][0].result_g2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[3]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[4]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[5]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[0]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[0].ok2, "/", i_r12[0].to2, "\xA0\xA0\xA0\xA0\xA0", i_r12[0].percent2, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[0].ok3, "/", i_r12[0].to3, "\xA0\xA0\xA0\xA0\xA0", i_r12[0].percent3, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[0].points);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[1]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[1].ok2, "/", i_r12[1].to2, "\xA0\xA0\xA0\xA0\xA0", i_r12[1].percent2, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[1].ok3, "/", i_r12[1].to3, "\xA0\xA0\xA0\xA0\xA0", i_r12[1].percent3, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[1].points);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[2]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[2].ok2, "/", i_r12[2].to2, "\xA0\xA0\xA0\xA0\xA0", i_r12[2].percent2, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[2].ok3, "/", i_r12[2].to3, "\xA0\xA0\xA0\xA0\xA0", i_r12[2].percent3, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[2].points);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[3]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[3].ok2, "/", i_r12[3].to2, "\xA0\xA0\xA0\xA0\xA0", i_r12[3].percent2, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[3].ok3, "/", i_r12[3].to3, "\xA0\xA0\xA0\xA0\xA0", i_r12[3].percent3, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[3].points);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[4]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[4].ok2, "/", i_r12[4].to2, "\xA0\xA0\xA0\xA0\xA0", i_r12[4].percent2, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[4].ok3, "/", i_r12[4].to3, "\xA0\xA0\xA0\xA0\xA0", i_r12[4].percent3, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[4].points);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[5]["players"][0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[5].ok2, "/", i_r12[5].to2, "\xA0\xA0\xA0\xA0\xA0", i_r12[5].percent2, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", i_r12[5].ok3, "/", i_r12[5].to3, "\xA0\xA0\xA0\xA0\xA0", i_r12[5].percent3, "% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[5].points);
      }
    }

    function HistoryComponent_div_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("date:\xA0\xA0\xA0\xA0\xA0", i_r13[8], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r13[6], "\xA0\xA0\xA0:\xA0\xA0\xA0", i_r13[7], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13[3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13[4]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13[5]);
      }
    }

    var HistoryComponent = /*#__PURE__*/function () {
      function HistoryComponent(srv, postSrv) {
        _classCallCheck(this, HistoryComponent);

        this.srv = srv;
        this.postSrv = postSrv;
        this.notResults = '';
        this.grup = {};
        this.idGrup = 0;
        this.display = 'display:block;';
        this.counterOfResultsGrup = 0;
        this.arrAllPlayers = [];
        this.arrAllPlayersOfSelectGrup = [];
        this.arrSelectPlayersOfSelectGrup = [];
        this.arrResultsByGrup = [];
        this.arrAllResults = [];
        this.arrResults = [];
        this.statisticPlayer = {
          name: '',
          height: '',
          PlayerPosition: '',
          percentTo2: 0,
          percentTo3: 0,
          points: 0,
          image: ''
        };
      }

      _createClass(HistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.srv.nameAGrup.subscribe(function (val) {
            return _this3.grup = val;
          });
          this.srv.idAGrup.subscribe(function (val) {
            return _this3.idGrup = val;
          });
          this.srv.plaersAGrup.subscribe(function (val) {
            if (val) {
              _this3.arrAllPlayers = val;
              console.log(val);

              var _iterator = _createForOfIteratorHelper(val),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;

                  _this3.arrAllPlayersOfSelectGrup.push([{
                    player: i
                  }, {
                    opacity: 'opacity:1'
                  }]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this3.getAllResult();
            }
          });
        }
      }, {
        key: "selectPlayer",
        value: function selectPlayer(player) {
          var countPercentTo2 = 0;
          var countPercentTo3 = 0;
          var points = 0;
          var counter = 0;
          document.getElementById('myModa').style.display = 'none';
          document.getElementById('showTable').style.display = 'none';
          this.display = 'display:none;';

          var _iterator2 = _createForOfIteratorHelper(this.arrAllResults),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var i = _step2.value;

              var _iterator3 = _createForOfIteratorHelper(i),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var j = _step3.value;

                  if (j["players"][0]["id"] == player.id) {
                    counter++;
                    countPercentTo2 += j.percent2;
                    countPercentTo3 += j.percent3;
                    points += j.points;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.statisticPlayer.name = player.name;
          this.statisticPlayer.height = player.height;
          this.statisticPlayer.PlayerPosition = player.position;
          this.statisticPlayer.image = player.image;
          this.statisticPlayer.percentTo2 = countPercentTo2 > 0 ? Math.floor(countPercentTo2 / counter) : 0;
          this.statisticPlayer.percentTo3 = countPercentTo3 > 0 ? Math.floor(countPercentTo3 / counter) : 0;
          this.statisticPlayer.points = points > 0 ? Math.floor(points / counter) : 0;
          document.getElementById('cardFull').style.display = 'block';
          document.getElementById('resultsGrup').style.display = 'none';
          this.display = 'display:none;';
        }
      }, {
        key: "resultByGrup",
        value: function resultByGrup(player) {
          if (this.counterOfResultsGrup == 3) {
            return;
          }

          this.counterOfResultsGrup++;
          this.arrSelectPlayersOfSelectGrup.push(player);

          var _iterator4 = _createForOfIteratorHelper(this.arrAllPlayersOfSelectGrup),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var i = _step4.value;

              if (i[0].player == player) {
                i[0].opacity = 'opacity:0.3';
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          console.log(this.arrSelectPlayersOfSelectGrup);
        }
      }, {
        key: "nextResultGrup",
        value: function nextResultGrup() {
          var _this4 = this;

          this.arrResultsByGrup = [];
          var countGrup1 = 0;
          var countGrup2 = 0;
          this.srv.getResultByGrup().subscribe(function (val) {
            var result = Object.entries(val);

            for (var i = 0; i < result.length; i++) {
              console.log("ppppppppppppp");

              var _iterator5 = _createForOfIteratorHelper(_this4.arrSelectPlayersOfSelectGrup),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var j = _step5.value;

                  if (j.id == result[i][1].g1_p1 || j.id == result[i][1].g1_p2 || j.id == result[i][1].g1_p3) {
                    console.log(1);
                    countGrup1++;
                  }

                  if (j.id == result[i][1].g2_p1 || j.id == result[i][1].g2_p2 || j.id == result[i][1].g2_p3) {
                    countGrup2++;
                    console.log(2);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              if (countGrup1 == 3 || countGrup2 == 3) {
                countGrup1 = 0;
                countGrup2 = 0;
                console.log("yes");
                var play = [];
                var players = [result[i][1].g1_p1, result[i][1].g1_p2, result[i][1].g1_p3, result[i][1].g2_p1, result[i][1].g2_p2, result[i][1].g2_p3];

                for (var _i = 0, _players = players; _i < _players.length; _i++) {
                  var p = _players[_i];

                  var _iterator6 = _createForOfIteratorHelper(_this4.arrAllPlayers),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var r = _step6.value;

                      if (p == r.id) {
                        play.push(r.name);
                      }
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }
                }

                play.push(result[i][1].result_g1);
                play.push(result[i][1].result_g2);
                play.push(result[i][1].date);
                console.log(play);

                _this4.arrResultsByGrup.push(play);
              }

              console.log(_this4.arrResultsByGrup);
            }

            if (_this4.arrResultsByGrup.length == 0) {
              alert('No game results');

              var _iterator7 = _createForOfIteratorHelper(_this4.arrAllPlayersOfSelectGrup),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var q = _step7.value;
                  q[0].opacity = 'opacity:1';
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              _this4.counterOfResultsGrup = 0;
              _this4.arrSelectPlayersOfSelectGrup = [];
              return;
            } else {
              var _iterator8 = _createForOfIteratorHelper(_this4.arrAllPlayersOfSelectGrup),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _q = _step8.value;
                  _q[0].opacity = 'opacity:1';
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              document.getElementById('showTable').style.display = 'none';
              document.getElementById('resultByGrup').style.display = 'none';
              document.getElementById('cardFull').style.display = 'none';
              document.getElementById('resultsGrup').style.display = 'block';
              _this4.arrSelectPlayersOfSelectGrup = [];
              _this4.counterOfResultsGrup = 0;
            }
          });
        }
      }, {
        key: "modalDisplay",
        value: function modalDisplay(html, display) {
          if (this.notResults == 'true') {
            return;
          }

          document.getElementById(html).style.display = display;

          if (html == 'cardFull' && display == 'none' || html == 'resultByGrup' && display == 'none') {
            console.log(html);
            this.arrResults = this.arrAllResults;
            document.getElementById('showTable').style.display = 'block';
          }
        }
      }, {
        key: "date",
        value: function date(_date) {
          var _this5 = this;

          if (this.notResults) {
            return;
          }

          _date = _date.split('-');
          _date = "".concat(_date[2], ".").concat(_date[1], ".").concat(_date[0]);
          this.srv.getResultByDate({
            date: _date,
            grup: this.idGrup
          }).subscribe(function (val) {
            console.log(val);

            if (!val) {
              alert('No games found on this date');
              _this5.display = 'display:block;';
              return;
            } else {
              _this5.arrAllResults = [];
              var counter = 0;
              var arr = [];
              var result = Object.entries(val);
              var arrGames = [];

              for (var _i2 = 0, _result = result; _i2 < _result.length; _i2++) {
                var i = _result[_i2];
                arrGames.push(i[1].id);
              }

              _this5.srv.getstatisticByDate({
                games: arrGames
              }).subscribe(function (val) {
                var result = Object.entries(val);
                console.log(result);

                for (var _i3 = 0; _i3 < result.length; _i3++) {
                  if (counter == 6) {
                    _this5.arrAllResults.push(arr);

                    arr = [];
                    counter = 0;
                  }

                  arr.push(result[_i3][1]);
                  counter++;
                }

                _this5.arrAllResults.push(arr);

                console.log(_this5.arrAllResults);
              });
            }
          });
          document.getElementById('cardFull').style.display = 'none';
          document.getElementById('resultsGrup').style.display = 'none';
        }
      }, {
        key: "getAllResult",
        value: function getAllResult() {
          var _this6 = this;

          this.arrAllResults = [];
          this.srv.getAllResult(this.idGrup).subscribe(function (val) {
            if (val.length > 1) {
              _this6.notResults = '';
              var counter = 0;
              var arr = [];

              var _iterator9 = _createForOfIteratorHelper(val),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var i = _step9.value;

                  if (counter == 6) {
                    _this6.arrAllResults.push(arr);

                    arr = [];
                    counter = 0;
                  }

                  arr.push(i);
                  counter++;
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              _this6.arrAllResults.push(arr);

              console.log(_this6.arrAllResults.length);
              var aa = document.getElementById('showTable');
              console.log(aa);
              document.getElementById('cardFull').style.display = 'none';
              document.getElementById('resultsGrup').style.display = 'none';
              document.getElementById('showTable').style.display = 'block';
            }

            if (_this6.arrAllResults.length == 0) {
              _this6.notResults = 'true';
            }
          });
        }
      }]);

      return HistoryComponent;
    }();

    HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
      return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]));
    };

    HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoryComponent,
      selectors: [["app-history"]],
      decls: 106,
      vars: 14,
      consts: [[1, "cont"], [1, "container"], [1, "buttons"], [1, "dropdown"], ["id", "btnGroupDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "btnGroupDrop1", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "dropdown2"], ["id", "btnGroupDrop2", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "btnGroupDrop2", 1, "dropdown-menu"], ["class", "notResults", "style", "text-align: center; ;", 4, "ngIf"], ["id", "myModa", 1, "modal", 2, "display", "none"], [1, "modal-content"], [1, "close", 3, "click"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap"], ["style", "margin: 3%;cursor: pointer; ", 3, "click", 4, "ngFor", "ngForOf"], ["id", "resultByGrup", 1, "modal", 2, "display", "none"], [2, "color", "rgb(248, 126, 3)", "text-align", "center"], ["style", "margin: 3%;cursor: pointer;", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 2, "margin", "auto", 3, "click"], ["id", "myModa2", 1, "modal", 2, "display", "none"], [1, "modal-content2"], [2, "display", "flex", "flex-direction", "column", "text-align", "center", "color", "orange"], ["for", "birthday"], ["type", "date", "id", "birthday", "name", "birthday"], ["myDate", ""], ["type", "submit", 3, "click"], ["id", "cardFull", 2, "background", "rgba(192, 192, 192, 0.897)", "display", "none"], [1, "close2", 3, "click"], ["id", "card", 2, "border", "chocolate solid2px", "margin-top", "3%"], [1, "img", 2, "display", "flex", "margin-left", "22%"], [2, "box-shadow", "5px 10px 8px #888888"], [2, "width", "434px", "height", "364px", 3, "src"], [2, "margin-left", "2%", "box-shadow", "5px 10px 8px #888888"], [1, "table", "table-striped", "table-dark"], ["scope", "col"], ["scope", "row"], ["id", "showTable"], [4, "ngFor", "ngForOf"], ["id", "resultsGrup", 2, "display", "none"], [1, "notResults", 2, "text-align", "center"], [2, "font-size", "50px", "color", "rgb(102, 99, 99)"], [2, "margin", "3%", "cursor", "pointer", 3, "click"], [2, "text-align", "center", "color", "rgba(219, 91, 0, 0.794)"], [2, "width", "100px", "height", "100px", 3, "src"], [2, "margin", "3%", "cursor", "pointer"], [3, "click"], [2, "text-align", "center", "display", "flex"], [1, "date", 2, "margin", "auto", "border", "black solid 0.5px"], [2, "color", "rgb(253, 114, 0)"], [1, "grupAndResult", 2, "display", "flex", "margin", "auto", "border", "black solid 0.5px"], [1, "grup1", 2, "color", "rgb(253, 114, 0)"], [1, "result", 2, "margin-top", "2%", "font-size", "36px"], [1, "grup2", 2, "color", "rgb(253, 114, 0)"], [2, "text-align", "center", "border", "rgb(149, 103, 16) solid", "background", "rgba(192, 192, 192, 0.897)"], [2, "text-decoration", "underline", "color", "rgb(179, 52, 6)"], [1, "grupsAndResult", 2, "display", "flex"], [1, "grup1", 2, "margin-left", "34%"], [1, "result", 2, "margin-left", "8%", "margin-right", "8%"], [2, "margin-top", "35%", "color", "rgb(179, 52, 6)"], [1, "grup2"]],
      template: function HistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Scoreboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_12_listener() {
            return ctx.getAllResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_14_listener() {
            return ctx.modalDisplay("myModa2", "block");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "By date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_20_listener() {
            return ctx.modalDisplay("myModa", "block");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "By player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_22_listener() {
            return ctx.modalDisplay("resultByGrup", "block");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "By grup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HistoryComponent_div_24_Template, 9, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_span_click_27_listener() {
            return ctx.modalDisplay("myModa", "none");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HistoryComponent_div_30_Template, 4, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_span_click_33_listener() {
            return ctx.modalDisplay("resultByGrup", "none");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Choose a group of 3 players");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HistoryComponent_div_38_Template, 5, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_39_listener() {
            return ctx.nextResultGrup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_span_click_43_listener() {
            return ctx.modalDisplay("myModa2", "none");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Choose a date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_input_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            return ctx.date(_r3.value);
          })("click", function HistoryComponent_Template_input_click_51_listener() {
            return ctx.modalDisplay("myModa2", "none");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_span_click_56_listener() {
            return ctx.modalDisplay("cardFull", "none");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "PlayerPosition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "PercentTo2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "PercentTo3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, HistoryComponent_div_102_Template, 104, 58, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, HistoryComponent_div_105_Template, 31, 9, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayersOfSelectGrup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.statisticPlayer.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statisticPlayer.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statisticPlayer.PlayerPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.statisticPlayer.height, "m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.statisticPlayer.percentTo2, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.statisticPlayer.percentTo3, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statisticPlayer.points);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllResults);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrResultsByGrup);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n  background-color: rgba(243, 229, 213, 0.829);\r\n  height: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    width: 190px;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n\r\n.dropdown2[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n  }\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 60%;\r\n  }\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.modal-content2[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 30%;\r\n  }\r\n\r\n.close2[_ngcontent-%COMP%]{\r\n    color: #aaaaaa;\r\n    float: left;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(8,8,8,8.8);\r\n    transition: 0.3s;\r\n    width: 100%;\r\n    height: 450vh;\r\n    text-align: center;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n\r\n.ditailsOfPlayer1[_ngcontent-%COMP%] {\r\n    padding: 2px 16px;\r\n  }\r\n\r\n.ditailsOfPlayer2[_ngcontent-%COMP%] {\r\n    padding: 2px 16px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBbUJBO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztBQUVBLGtCQUFrQjs7QUFDbEI7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUlBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlOztFQUVqQjs7QUFlQTtJQUNFLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyMjksIDIxMywgMC44MjkpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uZHJvcGRvd24ye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5tb2RhbC1jb250ZW50MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAuY2xvc2Uye1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoOCw4LDgsOC44KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDUwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXRhaWxzT2ZQbGF5ZXIxIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIH1cclxuICAuZGl0YWlsc09mUGxheWVyMiB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-history',
          templateUrl: './history.component.html',
          styleUrls: ['./history.component.css']
        }]
      }], function () {
        return [{
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/comps/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCompsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, postSrv) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.postSrv = postSrv;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/sign-in']);
        }
      }, {
        key: "registration",
        value: function registration() {
          this.router.navigate(['/registration']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 32,
      vars: 0,
      consts: [[1, "cont"], [1, "container"], [1, "header"], ["id", "header"], [1, "allData"], [1, "explain"], [2, "text-decoration", "underline"], [1, "buttons"], [1, "login", 3, "click"], [1, "registration", 3, "click"], [1, "img"], ["src", "assets/image/inageHome.jpg"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "StatistiBall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "statistiBall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The app that will give you a different gaming experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "I do not know what I will do tomorrow, I just know for sure that I will continue to play basketball");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_23_listener() {
            return ctx.registration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " registration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA9 2020 - StatistuBall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".cont[_ngcontent-%COMP%]{\r\n    background-color: rgba(243, 229, 213, 0.829);\r\n    height: 100vh;\r\n}\r\n\r\n.all[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n.allData[_ngcontent-%COMP%]{\r\n    display: flex;\r\n     justify-content: center;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    margin-right: 25%;\r\nmargin-top: 6%;\r\n\r\n}\r\n\r\n.explain[_ngcontent-%COMP%]{\r\n    width: 40%;\r\nmargin-top: 6%;\r\nmargin-right: 5%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    margin-left: 25%;\r\n    color: rgb(248, 92, 20);   \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 30%;\r\n    cursor: pointer;\r\n    background: #0062cc;\r\n    color: #fff;\r\n    margin: auto;\r\n\r\n}\r\n\r\n#header[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0tBQ1osdUJBQXVCO0lBQ3hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQixjQUFjOztBQUVkOztBQUVBO0lBQ0ksVUFBVTtBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDIyOSwgMjEzLCAwLjgyOSk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYWxse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGxEYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG5tYXJnaW4tdG9wOiA2JTtcclxuXHJcbn1cclxuXHJcbi5leHBsYWlue1xyXG4gICAgd2lkdGg6IDQwJTtcclxubWFyZ2luLXRvcDogNiU7XHJcbm1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIG1hcmdpbi10b3A6IDQlOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCA5MiwgMjApOyAgIFxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG5cclxuI2hlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/play/play.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/comps/play/play.component.ts ***!
    \**********************************************/

  /*! exports provided: PlayComponent */

  /***/
  function srcAppCompsPlayPlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayComponent", function () {
      return PlayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_DTO_game_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/DTO/game-dto */
    "./src/app/DTO/game-dto.ts");
    /* harmony import */


    var src_app_DTO_statisticByPlayer_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/DTO/statisticByPlayer-dto */
    "./src/app/DTO/statisticByPlayer-dto.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlayComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_23_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.addPlayerGrup1(i_r6[0], 0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r6[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r6[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PlayComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_63_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.addPlayerGrup1(i_r9[0], 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r9[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r9[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PlayComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_103_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var i_r12 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.addPlayerGrup1(i_r12[0], 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r12[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r12[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PlayComponent_div_183_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_183_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var i_r15 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.addPlayerGrup2(i_r15[0], 0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r15[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r15[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PlayComponent_div_223_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_223_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var i_r18 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.addPlayerGrup2(i_r18[0], 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r18[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r18[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r18[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PlayComponent_div_263_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_div_263_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.addPlayerGrup2(i_r21[0], 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21[0].name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](i_r21[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r21[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var PlayComponent = /*#__PURE__*/function () {
      function PlayComponent(router, srvPost, srv) {
        _classCallCheck(this, PlayComponent);

        this.router = router;
        this.srvPost = srvPost;
        this.srv = srv;
        this.modal = 'display: none;';
        this.grup = {};
        this.idGrup = 0;
        this.arrAllPlayers = [];
        this.pointsPlayersGrup1 = [{
          player: {
            id: 0,
            name: "",
            height: '',
            PlayerPosition: '',
            image: ''
          },
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0,
          points: 0
        }, {
          player: {
            id: 0,
            name: "",
            height: '',
            PlayerPosition: '',
            image: ''
          },
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0,
          points: 0
        }, {
          player: {
            id: 0,
            name: "",
            height: '',
            PlayerPosition: '',
            image: ''
          },
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0,
          points: 0
        }];
        this.pointsPlayersGrup2 = [{
          player: {
            id: 0,
            name: "",
            height: '',
            PlayerPosition: '',
            image: ''
          },
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0,
          points: 0
        }, {
          player: {
            id: 0,
            name: "",
            height: '',
            PlayerPosition: '',
            image: ''
          },
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0,
          points: 0
        }, {
          player: {
            id: 0,
            name: "",
            height: '',
            PlayerPosition: '',
            image: ''
          },
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0,
          points: 0
        }];
        this.pointsGrup1 = {
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0
        };
        this.pointsGrup2 = {
          shootTo2: 0,
          ok2: 0,
          percentTo2: 0,
          shootTo3: 0,
          ok3: 0,
          percentTo3: 0
        };
        this.playing = false;
        this.resultGrup1 = 0;
        this.resultGrup2 = 0;
        this.minut = "00";
        this.second = "00";
      }

      _createClass(PlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          console.log(new Date().toLocaleDateString());
          this.srv.idAGrup.subscribe(function (val) {
            return _this7.idGrup = val;
          });
          this.srv.nameAGrup.subscribe(function (val) {
            console.log(val);
            _this7.grup = val;
          });
          this.srv.plaersAGrup.subscribe(function (val) {
            if (val) {
              var _iterator10 = _createForOfIteratorHelper(val),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var i = _step10.value;

                  _this7.arrAllPlayers.push([i, 'opacity:1']);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          });
          console.log("arr all results", this.arrAllPlayers);
        }
      }, {
        key: "addPlayerGrup1",
        value: function addPlayerGrup1(player, number) {
          for (var i = 0; i < this.arrAllPlayers.length; i++) {
            if (this.arrAllPlayers[i][0] === player) {
              if (this.arrAllPlayers[i][1] === 'opacity:0.2') {
                return;
              } else {
                this.arrAllPlayers[i][1] = 'opacity:0.2';
                this.pointsPlayersGrup1[number].player = player;
                document.getElementById("imgGrup1Player".concat(number)).style.display = 'block';
                document.getElementById("spanImgGrup1Player".concat(number)).style.display = 'none';
                this.modalDisplay('none', number);
                return;
              }
            }
          }
        }
      }, {
        key: "addPlayerGrup2",
        value: function addPlayerGrup2(player, number) {
          for (var i = 0; i < this.arrAllPlayers.length; i++) {
            if (this.arrAllPlayers[i][0] === player) {
              if (this.arrAllPlayers[i][1] === 'opacity:0.2') {
                return;
              } else {
                this.arrAllPlayers[i][1] = 'opacity:0.2';
                this.pointsPlayersGrup2[number].player = player;
                document.getElementById("imgGrup2Player".concat(number)).style.display = 'block';
                document.getElementById("spanImgGrup2Player".concat(number)).style.display = 'none';
                this.modalDisplay('none', number + 3);
                return;
              }
            }
          }
        }
      }, {
        key: "start",
        value: function start() {
          var _this8 = this;

          var _iterator11 = _createForOfIteratorHelper(this.pointsPlayersGrup1),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var i = _step11.value;

              if (i.player.id == 0) {
                alert("אין 6 שחקנים להתחלת משחק");
                return;
              }

              var _iterator12 = _createForOfIteratorHelper(this.pointsPlayersGrup2),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _i4 = _step12.value;

                  if (_i4.player.id == 0) {
                    alert("אין 6 שחקנים להתחלת משחק");
                    return;
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          this.playing = true;
          var min = 0;
          var sec = 0;
          this.startTime = setInterval(function () {
            sec++;
            sec < 10 ? _this8.second = "0".concat(sec) : _this8.second = "".concat(sec);

            if (sec == 59) {
              min++;
              sec = 0;
            }

            min < 10 ? _this8.minut = "0".concat(min) : _this8.minut = "".concat(min);
          }, 1000);
        }
      }, {
        key: "plus2",
        value: function plus2(grup, player) {
          if (this.playing) {
            if (grup == 1) {
              this.resultGrup1++;
              this.pointsPlayersGrup1[player].points++;
              this.pointsPlayersGrup1[player].shootTo2++;
              this.pointsPlayersGrup1[player].ok2++;
              this.pointsGrup1.shootTo2++;
              this.pointsGrup1.ok2++;
              this.pointsPlayersGrup1[player].percentTo2 = Math.round(this.pointsPlayersGrup1[player].ok2 / this.pointsPlayersGrup1[player].shootTo2 * 100);
              this.pointsGrup1.percentTo2 = Math.round(this.pointsGrup1.ok2 / this.pointsGrup1.shootTo2 * 100);
            } else {
              this.resultGrup2++;
              this.pointsPlayersGrup2[player].points++;
              this.pointsPlayersGrup2[player].shootTo2++;
              this.pointsPlayersGrup2[player].ok2++;
              this.pointsGrup2.shootTo2++;
              this.pointsGrup2.ok2++;
              this.pointsPlayersGrup2[player].percentTo2 = Math.round(this.pointsPlayersGrup2[player].ok2 / this.pointsPlayersGrup2[player].shootTo2 * 100);
              this.pointsGrup2.percentTo2 = Math.round(this.pointsGrup2.ok2 / this.pointsGrup2.shootTo2 * 100);
            }
          }
        }
      }, {
        key: "plus3",
        value: function plus3(grup, player) {
          if (this.playing) {
            if (grup == 1) {
              this.resultGrup1 += 2;
              this.pointsPlayersGrup1[player].points += 2;
              this.pointsPlayersGrup1[player].shootTo3++;
              this.pointsPlayersGrup1[player].ok3++;
              this.pointsGrup1.shootTo3++;
              this.pointsGrup1.ok3++;
              this.pointsPlayersGrup1[player].percentTo3 = Math.round(this.pointsPlayersGrup1[player].ok3 / this.pointsPlayersGrup1[player].shootTo3 * 100);
              this.pointsGrup1.percentTo3 = Math.round(this.pointsGrup1.ok3 / this.pointsGrup1.shootTo3 * 100);
            } else {
              this.resultGrup2 += 2;
              this.pointsPlayersGrup2[player].points += 2;
              this.pointsPlayersGrup2[player].shootTo3++;
              this.pointsPlayersGrup2[player].ok3++;
              this.pointsGrup2.shootTo3++;
              this.pointsGrup2.ok3++;
              this.pointsPlayersGrup2[player].percentTo3 = Math.round(this.pointsPlayersGrup2[player].ok3 / this.pointsPlayersGrup2[player].shootTo3 * 100);
              this.pointsGrup2.percentTo3 = Math.round(this.pointsGrup2.ok3 / this.pointsGrup2.shootTo3 * 100);
            }
          }
        }
      }, {
        key: "minus2",
        value: function minus2(grup, player) {
          if (this.playing) {
            if (grup == 1) {
              this.pointsPlayersGrup1[player].shootTo2++;
              this.pointsGrup1.shootTo2++;
              this.pointsPlayersGrup1[player].percentTo2 = Math.round(this.pointsPlayersGrup1[player].ok2 / this.pointsPlayersGrup1[player].shootTo2 * 100);
              this.pointsGrup1.percentTo2 = Math.round(this.pointsGrup1.ok2 / this.pointsGrup1.shootTo2 * 100);
            } else {
              this.pointsPlayersGrup2[player].shootTo2++;
              this.pointsGrup2.shootTo2++;
              this.pointsPlayersGrup2[player].percentTo2 = Math.round(this.pointsPlayersGrup2[player].ok2 / this.pointsPlayersGrup2[player].shootTo2 * 100);
              this.pointsGrup2.percentTo2 = Math.round(this.pointsGrup2.ok2 / this.pointsGrup2.shootTo2 * 100);
            }
          }
        }
      }, {
        key: "minus3",
        value: function minus3(grup, player) {
          if (this.playing) {
            if (grup == 1) {
              this.pointsPlayersGrup1[player].shootTo3++;
              this.pointsGrup1.shootTo3++;
              this.pointsPlayersGrup1[player].percentTo3 = Math.round(this.pointsPlayersGrup1[player].ok3 / this.pointsPlayersGrup1[player].shootTo3 * 100);
              this.pointsGrup1.percentTo3 = Math.round(this.pointsGrup1.ok3 / this.pointsGrup1.shootTo3 * 100);
            } else {
              this.pointsPlayersGrup2[player].shootTo3++;
              this.pointsGrup2.shootTo3++;
              this.pointsPlayersGrup2[player].percentTo3 = Math.round(this.pointsPlayersGrup2[player].ok3 / this.pointsPlayersGrup2[player].shootTo3 * 100);
              this.pointsGrup2.percentTo3 = Math.round(this.pointsGrup2.ok3 / this.pointsGrup2.shootTo3 * 100);
            }
          }
        }
      }, {
        key: "finish",
        value: function finish() {
          clearInterval(this.startTime);
          this.playing = false;
        }
      }, {
        key: "save",
        value: function save() {
          var _this9 = this;

          var game = new src_app_DTO_game_dto__WEBPACK_IMPORTED_MODULE_1__["GameDto"]();
          game.idGrup = this.idGrup;
          game.G1P1 = this.pointsPlayersGrup1[0]['player'].id;
          game.G1P2 = this.pointsPlayersGrup1[1]['player'].id;
          game.G1P3 = this.pointsPlayersGrup1[2]['player'].id;
          game.G2P1 = this.pointsPlayersGrup2[0]['player'].id;
          game.G2P2 = this.pointsPlayersGrup2[1]['player'].id;
          game.G2P3 = this.pointsPlayersGrup2[2]['player'].id;
          var tempDate = new Date().toLocaleDateString().split('.');
          console.log(tempDate);

          if (tempDate[0].length == 1) {
            tempDate[0] = "0".concat(tempDate[0]);
          }

          if (tempDate[1].length == 1) {
            tempDate[1] = "0".concat(tempDate[1]);
          }

          var date = "".concat(tempDate[0], ".").concat(tempDate[1], ".").concat(tempDate[2]);
          console.log(date);
          game.date = date;
          game.time = "".concat(this.minut, ":").concat(this.second);
          game.resultG1 = this.resultGrup1;
          game.resultG2 = this.resultGrup2;
          console.log(game);
          this.srvPost.saveGame(game).subscribe(function (val) {
            for (var i = 0; i < 3; i++) {
              var statistic = new src_app_DTO_statisticByPlayer_dto__WEBPACK_IMPORTED_MODULE_2__["StatisticByPlayerDto"]();
              statistic.idGame = val;
              statistic.idPlayer = _this9.pointsPlayersGrup1[i]['player'].id;
              statistic.idGrup = _this9.idGrup;
              statistic.ok2 = _this9.pointsPlayersGrup1[i].ok2;
              statistic.ok3 = _this9.pointsPlayersGrup1[i].ok3;
              statistic.to2 = _this9.pointsPlayersGrup1[i].shootTo2;
              statistic.to3 = _this9.pointsPlayersGrup1[i].shootTo3;
              statistic.percent2 = _this9.pointsPlayersGrup1[i].percentTo2;
              statistic.percent3 = _this9.pointsPlayersGrup1[i].percentTo3;
              statistic.points = _this9.pointsPlayersGrup1[i].points;

              _this9.srvPost.saveStatisticByPlayer(statistic);
            }

            for (var _i5 = 0; _i5 < 3; _i5++) {
              var _statistic = new src_app_DTO_statisticByPlayer_dto__WEBPACK_IMPORTED_MODULE_2__["StatisticByPlayerDto"]();

              _statistic.idGame = val;
              _statistic.idPlayer = _this9.pointsPlayersGrup2[_i5]['player'].id;
              _statistic.idGrup = _this9.idGrup;
              _statistic.ok2 = _this9.pointsPlayersGrup2[_i5].ok2;
              _statistic.ok3 = _this9.pointsPlayersGrup2[_i5].ok3;
              _statistic.to2 = _this9.pointsPlayersGrup2[_i5].shootTo2;
              _statistic.to3 = _this9.pointsPlayersGrup2[_i5].percentTo3;
              _statistic.percent2 = _this9.pointsPlayersGrup2[_i5].percentTo2;
              _statistic.percent3 = _this9.pointsPlayersGrup2[_i5].percentTo3;
              _statistic.points = _this9.pointsPlayersGrup2[_i5].points;

              _this9.srvPost.saveStatisticByPlayer(_statistic);
            }
          });
          this.router.navigate(['/start']);
        }
      }, {
        key: "modalDisplay",
        value: function modalDisplay(type, number) {
          if (this.playing) {
            return;
          }

          var modal = document.getElementById("myModal".concat(number)).style.display = type;
        }
      }]);

      return PlayComponent;
    }();

    PlayComponent.ɵfac = function PlayComponent_Factory(t) {
      return new (t || PlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_5__["GetDataService"]));
    };

    PlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayComponent,
      selectors: [["app-play"]],
      decls: 306,
      vars: 76,
      consts: [[1, "cont"], [1, "container", 2, "position", "relative"], [1, "bacImg", 2, "background-image", "url('assets/image/backgroundPlay.jpg')"], [1, "textOnImg"], [1, "all"], [2, "color", "rgb(250, 131, 34)"], [1, "box"], [1, "grup1"], [1, "player-1"], [1, "LocationImg", 3, "click"], ["id", "spanImgGrup1Player0"], [2, "font-size", "20px"], ["id", "imgGrup1Player0", 2, "display", "none"], [3, "src"], ["id", "myModal0", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap"], ["class", "pl", "style", "margin: 3%;", 3, "click", 4, "ngFor", "ngForOf"], [1, "shoot-to-2", 2, "display", "flex"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "shoot-to-3", 2, "display", "flex"], [1, "player-2"], ["id", "spanImgGrup1Player1"], ["id", "imgGrup1Player1", 2, "display", "none"], ["id", "myModal1", 1, "modal"], [1, "player-3"], ["id", "spanImgGrup1Player2"], ["id", "imgGrup1Player2", 2, "display", "none"], ["id", "myModal2", 1, "modal"], [1, "percentTo2Grup1"], [2, "display", "flex"], [2, "color", "rgb(247, 23, 23)"], [1, "bord-result"], [1, "result"], [1, "result-grup-1"], [1, "result-grup-2"], [1, "time"], [2, "display", "flex", "margin", "auto"], ["id", "min"], ["id", "sec"], [1, "start-game"], ["id", "btStart", "type", "button", 1, "btn", "btn-success", 3, "click"], [1, "stopAndSave"], [1, "save-game"], [1, "stop-game"], [1, "grup2"], [1, "player-0"], ["id", "spanImgGrup2Player0"], ["id", "imgGrup2Player0", 2, "display", "none"], ["id", "myModal3", 1, "modal"], ["id", "spanImgGrup2Player1"], ["id", "imgGrup2Player1", 2, "display", "none"], ["id", "myModal4", 1, "modal"], ["id", "spanImgGrup2Player2"], ["id", "imgGrup2Player2", 2, "display", "none"], ["id", "myModal5", 1, "modal"], [1, "percentTo2Grup2"], [1, "pl", 2, "margin", "3%", 3, "click"], [2, "text-align", "center", "color", "rgba(219, 91, 0, 0.794)"], [2, "width", "100px", "height", "100px", 3, "src"]],
      template: function PlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_div_click_12_listener() {
            return ctx.modalDisplay("block", 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add a player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_span_click_20_listener() {
            return ctx.modalDisplay("none", 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PlayComponent_div_23_Template, 4, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_25_listener() {
            return ctx.minus2(1, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "shoot 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_31_listener() {
            return ctx.plus2(1, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_38_listener() {
            return ctx.minus3(1, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "shoot 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_44_listener() {
            return ctx.plus3(1, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_div_click_52_listener() {
            return ctx.modalDisplay("block", 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Add a player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_span_click_60_listener() {
            return ctx.modalDisplay("none", 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PlayComponent_div_63_Template, 4, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_65_listener() {
            return ctx.minus2(1, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "shoot 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_71_listener() {
            return ctx.plus2(1, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_78_listener() {
            return ctx.minus3(1, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "shoot 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_84_listener() {
            return ctx.plus3(1, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_div_click_92_listener() {
            return ctx.modalDisplay("block", 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Add a player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_span_click_100_listener() {
            return ctx.modalDisplay("none", 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, PlayComponent_div_103_Template, 4, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_105_listener() {
            return ctx.minus2(1, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "shoot 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_111_listener() {
            return ctx.plus2(1, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_118_listener() {
            return ctx.minus3(1, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "shoot 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_124_listener() {
            return ctx.plus3(1, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " All The Grup To 2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " All The Grup To 3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_161_listener() {
            return ctx.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_165_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Save a game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_168_listener() {
            return ctx.finish();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "End of the game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_div_click_172_listener() {
            return ctx.modalDisplay("block", 3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Add a player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_span_click_180_listener() {
            return ctx.modalDisplay("none", 3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, PlayComponent_div_183_Template, 4, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_185_listener() {
            return ctx.minus2(2, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "shoot 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_191_listener() {
            return ctx.plus2(2, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_198_listener() {
            return ctx.minus3(2, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "shoot 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_204_listener() {
            return ctx.plus3(2, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_div_click_212_listener() {
            return ctx.modalDisplay("block", 4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Add a player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_span_click_220_listener() {
            return ctx.modalDisplay("none", 4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](223, PlayComponent_div_223_Template, 4, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_225_listener() {
            return ctx.minus2(2, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "shoot 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_231_listener() {
            return ctx.plus2(2, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_238_listener() {
            return ctx.minus3(2, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "shoot 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_244_listener() {
            return ctx.plus3(2, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_div_click_252_listener() {
            return ctx.modalDisplay("block", 5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Add a player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_span_click_260_listener() {
            return ctx.modalDisplay("none", 5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, PlayComponent_div_263_Template, 4, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_265_listener() {
            return ctx.minus2(2, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "shoot 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_271_listener() {
            return ctx.plus2(2, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_278_listener() {
            return ctx.minus3(2, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "shoot 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_284_listener() {
            return ctx.plus3(2, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " All The Grup To 2 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " All The Grup To 3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pointsPlayersGrup1[0].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.modal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup1[0].percentTo2, "% \xA0\xA0", ctx.pointsPlayersGrup1[0].ok2, "/", ctx.pointsPlayersGrup1[0].shootTo2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup1[0].percentTo3, "%\xA0\xA0", ctx.pointsPlayersGrup1[0].ok3, "/", ctx.pointsPlayersGrup1[0].shootTo3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pointsPlayersGrup1[1].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.modal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup1[1].percentTo2, "%\xA0\xA0", ctx.pointsPlayersGrup1[1].ok2, "/", ctx.pointsPlayersGrup1[1].shootTo2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup1[1].percentTo3, "%\xA0\xA0", ctx.pointsPlayersGrup1[1].ok3, "/", ctx.pointsPlayersGrup1[1].shootTo3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pointsPlayersGrup1[2].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.modal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup1[2].percentTo2, "%\xA0\xA0", ctx.pointsPlayersGrup1[2].ok2, "/", ctx.pointsPlayersGrup1[2].shootTo2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup1[2].percentTo3, "%\xA0\xA0", ctx.pointsPlayersGrup1[2].ok3, "/", ctx.pointsPlayersGrup1[2].shootTo3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.pointsGrup1.percentTo2, "%\xA0\xA0", ctx.pointsGrup1.ok2, "/", ctx.pointsGrup1.shootTo2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.pointsGrup1.percentTo3, "%\xA0\xA0", ctx.pointsGrup1.ok3, "/", ctx.pointsGrup1.shootTo3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.resultGrup1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.resultGrup2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.second);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pointsPlayersGrup2[0].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.modal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup2[0].percentTo2, "%\xA0\xA0", ctx.pointsPlayersGrup2[0].ok2, "/", ctx.pointsPlayersGrup2[0].shootTo2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup2[0].percentTo3, "%\xA0\xA0", ctx.pointsPlayersGrup2[0].ok3, "/", ctx.pointsPlayersGrup2[0].shootTo3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pointsPlayersGrup2[1].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.modal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup2[1].percentTo2, "%\xA0\xA0", ctx.pointsPlayersGrup2[1].ok2, "/", ctx.pointsPlayersGrup2[1].shootTo2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup2[1].percentTo3, "%\xA0\xA0", ctx.pointsPlayersGrup2[1].ok3, "/", ctx.pointsPlayersGrup2[1].shootTo3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pointsPlayersGrup2[2].player.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.modal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrAllPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup2[2].percentTo2, "%\xA0\xA0", ctx.pointsPlayersGrup2[2].ok2, "/", ctx.pointsPlayersGrup2[2].shootTo2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.pointsPlayersGrup2[2].percentTo3, "%\xA0\xA0", ctx.pointsPlayersGrup2[2].ok3, "/", ctx.pointsPlayersGrup2[2].shootTo3, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.pointsGrup2.percentTo2, "%\xA0\xA0", ctx.pointsGrup2.ok2, "/", ctx.pointsGrup2.shootTo2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.pointsGrup2.percentTo3, "%\xA0\xA0", ctx.pointsGrup2.ok3, "/", ctx.pointsGrup2.shootTo3, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n    background-color: rgba(243, 229, 213, 0.829);\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n\r\n.all[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    \r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.grup1[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\n\r\n.grup2[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    margin: 2%;\r\n}\r\n\r\n.LocationImg[_ngcontent-%COMP%]{\r\n    margin-left: 14%;\r\n    width: 100px;\r\n    height: 100px;\r\n    text-align: center;\r\n    background: rgb(212, 210, 208);\r\n    cursor: pointer;\r\n}\r\n\r\n.img0[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.result[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-top: 30%;\r\n    margin-left: 25%;\r\n    width: 90%;\r\n    height: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.result-grup-1[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    \r\n    margin: 3%;\r\n    font-size: 60px;\r\n}\r\n\r\n.result-grup-2[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    \r\n    margin: 3%;\r\n    font-size: 60px;\r\n}\r\n\r\n.bord-result[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-right: 16%;\r\n}\r\n\r\n.time[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-top: 5%;\r\n    margin-left: 30%;\r\n    width: 320px;\r\n    height: 80px;\r\n    \r\n    font-size: 60px;\r\n}\r\n\r\n.stopAndSave[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-top: 1%;\r\n    margin-left: 40%;\r\n}\r\n\r\n#btStart[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-top: 30%;\r\n    margin-left: 45%;\r\n}\r\n\r\n.bacImg[_ngcontent-%COMP%]{\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    opacity: 0.2;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.textOnImg[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-left: 3.5%;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n  }\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 60%;\r\n  }\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.pl[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n\r\n  }\r\n\r\n.history-of-player[_ngcontent-%COMP%]{\r\n      width: 40%;\r\n      height: 60%;\r\n      background: red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGxheS9wbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQWlCQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBOztJQUVFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGVBQWU7O0VBRWpCOztBQUVBO01BQ0ksVUFBVTtNQUNWLFdBQVc7TUFDWCxlQUFlO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcGxheS9wbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyMjksIDIxMywgMC44MjkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hbGx7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAzJTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmdydXAxe1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuLmdydXAye1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG4uTG9jYXRpb25JbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTIsIDIxMCwgMjA4KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1nMHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVzdWx0LWdydXAtMXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyNDUsIDIyMiwgMTkyKTsgKi9cclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuLnJlc3VsdC1ncnVwLTJ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyMjIsIDE5Mik7ICovXHJcbiAgICBtYXJnaW46IDMlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbi5ib3JkLXJlc3VsdHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2JTtcclxufVxyXG5cclxuLnRpbWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiKDI0NSwgMjIyLCAxOTIpOyAqL1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbi5zdG9wQW5kU2F2ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuI2J0U3RhcnR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxufVxyXG5cclxuLmJhY0ltZ3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRleHRPbkltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjUlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucGx7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmhpc3Rvcnktb2YtcGxheWVye1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIH1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-play',
          templateUrl: './play.component.html',
          styleUrls: ['./play.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"]
        }, {
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_5__["GetDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/registration/registrtion.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/comps/registration/registrtion.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegistrtionComponent */

  /***/
  function srcAppCompsRegistrationRegistrtionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrtionComponent", function () {
      return RegistrtionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/sarve-of-gurd.service */
    "./src/app/sarve-of-gurd.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrtionComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nameSpan);
      }
    }

    function RegistrtionComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.passwordSpan);
      }
    }

    function RegistrtionComponent_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.confirmPasswordSpan);
      }
    }

    var RegistrtionComponent = /*#__PURE__*/function () {
      function RegistrtionComponent(fb, srv, srvPost, router, srvGurd) {
        _classCallCheck(this, RegistrtionComponent);

        this.fb = fb;
        this.srv = srv;
        this.srvPost = srvPost;
        this.router = router;
        this.srvGurd = srvGurd;
        this.nameSpan = '';
        this.passwordSpan = '';
        this.confirmPasswordSpan = '';
        this.registrationFromG = this.fb.group({
          Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
      }

      _createClass(RegistrtionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "nameValid",
        value: function nameValid() {
          if (this.registrationFromG.controls.Name.dirty) {
            if (!this.registrationFromG.controls.Name.hasError('required')) {
              this.nameSpan = '';
              return '';
            } else {
              this.nameSpan = 'Required field';
              return 'Required field';
            }
          }
        }
      }, {
        key: "passwordValid",
        value: function passwordValid() {
          if (this.registrationFromG.controls.password.dirty) {
            if (this.registrationFromG.controls.password.hasError('required')) {
              this.passwordSpan = 'Required field';
              return 'Required field';
            } else if (this.registrationFromG.controls.password.hasError('minlength')) {
              this.passwordSpan = 'Must be at least 4 characters long';
              return 'Must be at least 4 characters long';
            }
          }
        }
      }, {
        key: "confirmPasswordValid",
        value: function confirmPasswordValid() {
          if (this.registrationFromG.controls.confirmPassword.dirty) {
            if (this.registrationFromG.controls.confirmPassword.hasError('required')) {
              this.confirmPasswordSpan = 'Required field';
              return 'Required field';
            } else if (this.registrationFromG.controls.confirmPassword.hasError('minlength')) {
              this.confirmPasswordSpan = 'Must be at least 4 characters long';
              return 'Must be at least 4 characters long';
            }
          }
        }
      }, {
        key: "guard",
        value: function guard(name, password, ConfirmPassword) {
          var _this10 = this;

          if (!this.registrationFromG.controls.Name.valid || !this.registrationFromG.controls.password.valid || !this.registrationFromG.controls.confirmPassword.valid) {
            alert("Incomplete details ");
            return;
          }

          if (password != ConfirmPassword) {
            alert("Incorrect password verification");
            return;
          }

          this.srvPost.addGrup(name, password).subscribe(function (val) {
            if (!val) {
              alert('There is such a group, choose another name');
            } else {
              _this10.router.navigate(['/sign-in']);
            }
          });
        }
      }]);

      return RegistrtionComponent;
    }();

    RegistrtionComponent.ɵfac = function RegistrtionComponent_Factory(t) {
      return new (t || RegistrtionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_5__["SarveOfGurdService"]));
    };

    RegistrtionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrtionComponent,
      selectors: [["app-registrtion"]],
      decls: 37,
      vars: 4,
      consts: [[1, "cont"], [1, "container"], [1, "form-signin", 3, "formGroup"], [1, "container", "register-form"], [1, "form"], [1, "note"], [2, "text-decoration", "underline"], [1, "form-content"], [1, "rishum"], [1, "firstName"], ["id", "name", "type", "text", "formControlName", "Name", "placeholder", " Name *", 1, "form-control"], ["Name", ""], ["style", "font-size: large; color: red; background-color: rgb(202, 191, 189);", 4, "ngIf"], [1, "Password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Your Password *", "value", "", 1, "form-control"], ["Password", ""], [1, "ConfirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password *", "value", "", 1, "form-control"], ["ConfirmPassword", ""], ["type", "submit", 1, "btnSubmit", 3, "click"], [2, "font-size", "large", "color", "red", "background-color", "rgb(202, 191, 189)"]],
      template: function RegistrtionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "StatistiBall-registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegistrtionComponent_span_21_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistrtionComponent_span_27_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegistrtionComponent_span_33_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrtionComponent_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.guard(_r0.value, _r2.value, _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationFromG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPasswordValid());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n    background-color: rgba(243, 229, 213, 0.829);\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    height: 80px;\r\n    width: 80%;\r\n    margin-top: 15%;\r\n    margin-left: 10%;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    line-height: 80px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]{\r\n    border: 5px solid rgb(248, 119, 13);\r\n    border-radius: 50%;\r\n    \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n    height: 72vh;\r\n    background-image: url('/assets/image/backgroundLogIn.jpg') ;  \r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n\r\n.btnSubmit[_ngcontent-%COMP%]\r\n{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 20%;\r\n    cursor: pointer;\r\n    background: #ffbc50;\r\n    color: #fff;\r\n    outline: none;\r\n\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJ0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBS0E7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDJEQUEyRDs7QUFFL0Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9yZWdpc3RyYXRpb24vcmVnaXN0cnRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDIyOSwgMjEzLCAwLjgyOSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5vdGVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5mb3Jte1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI0OCwgMTE5LCAxMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxMCU7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDcydmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2UvYmFja2dyb3VuZExvZ0luLmpwZycpIDsgIFxyXG5cclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5cclxuLmJ0blN1Ym1pdFxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM1MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrtionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registrtion',
          templateUrl: './registrtion.component.html',
          styleUrls: ['./registrtion.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_5__["SarveOfGurdService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/show-players/show-players.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/comps/show-players/show-players.component.ts ***!
    \**************************************************************/

  /*! exports provided: ShowPlayersComponent */

  /***/
  function srcAppCompsShowPlayersShowPlayersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowPlayersComponent", function () {
      return ShowPlayersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ShowPlayersComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To add a player click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShowPlayersComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowPlayersComponent_div_10_div_1_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4["delete"](i_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r3.height, "m");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3.position);
      }
    }

    function ShowPlayersComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowPlayersComponent_div_10_div_1_Template, 17, 4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arr);
      }
    }

    var ShowPlayersComponent = /*#__PURE__*/function () {
      function ShowPlayersComponent(srv, srvPost) {
        _classCallCheck(this, ShowPlayersComponent);

        this.srv = srv;
        this.srvPost = srvPost;
        this.notPlayers = '';
        this.arr = [];
      }

      _createClass(ShowPlayersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.srv.plaersAGrup.subscribe(function (val) {
            console.log(val, "val");
            _this11.arr = val;

            if (_this11.arr != null && _this11.arr.length == 0) {
              console.log(1212121);
              _this11.notPlayers = 'true';
            } else {
              _this11.notPlayers = '';
            }
          }); // console.log(this.notPlayers);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          confirm("Are you sure?") ? this.srvPost.deletePlayer(id) : false;
        }
      }]);

      return ShowPlayersComponent;
    }();

    ShowPlayersComponent.ɵfac = function ShowPlayersComponent_Factory(t) {
      return new (t || ShowPlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]));
    };

    ShowPlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowPlayersComponent,
      selectors: [["app-show-players"]],
      decls: 11,
      vars: 2,
      consts: [[1, "cont"], [1, "container"], [2, "text-decoration", "underline", "font-size", "70px", "text-align", "center", "color", "orangered"], ["style", "text-align: center", 4, "ngIf"], ["class", "allCard", 4, "ngIf"], [2, "text-align", "center"], [2, "font-size", "30px", "color", "rgb(102, 99, 99)"], ["type", "button", "routerLink", "../add-a-player", 1, "btn", "btn-success"], [1, "allCard"], ["class", "wrap", 4, "ngFor", "ngForOf"], [1, "wrap"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [2, "width", "200px", "height", "230px", 3, "src"], [1, "flip-card-back"], [2, "text-decoration", "underline"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function ShowPlayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "List of players ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShowPlayersComponent_div_9_Template, 7, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ShowPlayersComponent_div_10_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notPlayers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arr);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n  background-color: rgba(243, 229, 213, 0.829);\r\n  min-height: 100vh;\r\n  height: 100%;\r\n}\r\n  \r\n \r\n  h1[_ngcontent-%COMP%]{\r\n    color: rgb(7, 7, 6);\r\n  }\r\n  \r\n \r\n  .wrap[_ngcontent-%COMP%]{\r\n    width: 23%;\r\n    margin: 1%;\r\n  }\r\n  \r\n \r\n  .allCard[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    margin: auto;\r\n\r\n  }\r\n  \r\n \r\n  .flip-card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    width: 200px;\r\n    height: 200px;\r\n    perspective: 1000px;\r\n\r\n  }\r\n  \r\n \r\n  .flip-card-inner[_ngcontent-%COMP%] {\r\n\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    transition: transform 0.6s;\r\n    transform-style: preserve-3d;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n\r\n  }\r\n  \r\n \r\n  .flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n  }\r\n  \r\n \r\n  .flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\r\n\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n  }\r\n  \r\n \r\n  .flip-card-front[_ngcontent-%COMP%] {\r\n    background-color: #bbb;\r\n    color: black;\r\n  }\r\n  \r\n \r\n  .flip-card-back[_ngcontent-%COMP%] {\r\n    background-color: #2980b9;\r\n    color: white;\r\n    transform: rotateY(180deg);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc2hvdy1wbGF5ZXJzL3Nob3ctcGxheWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQTRDO0VBQzVDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7OztFQUdFO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7RUFJQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7OztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7O0VBRWQ7OztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1COztFQUVyQjs7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsdUNBQXVDOztFQUV6Qzs7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7OztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQywyQkFBMkI7RUFDN0I7OztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3Nob3ctcGxheWVycy9zaG93LXBsYXllcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyMjksIDIxMywgMC44MjkpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4gIFxyXG4gXHJcbiAgaDF7XHJcbiAgICBjb2xvcjogcmdiKDcsIDcsIDYpO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAud3JhcHtcclxuICAgIHdpZHRoOiAyMyU7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gIH1cclxuXHJcbiAgLmFsbENhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtY2FyZC1pbm5lciB7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcblxyXG4gIH1cclxuICBcclxuICAuZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmZsaXAtY2FyZC1mcm9udCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1jYXJkLWJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowPlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-show-players',
          templateUrl: './show-players.component.html',
          styleUrls: ['./show-players.component.css']
        }]
      }], function () {
        return [{
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/sign-in/sign-in.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/comps/sign-in/sign-in.component.ts ***!
    \****************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppCompsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var src_app_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/sarve-of-gurd.service */
    "./src/app/sarve-of-gurd.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignInComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nameSpan);
      }
    }

    function SignInComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.passwordSpan);
      }
    }

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(fb, router, srv, srvPost, srvGurd) {
        _classCallCheck(this, SignInComponent);

        this.fb = fb;
        this.router = router;
        this.srv = srv;
        this.srvPost = srvPost;
        this.srvGurd = srvGurd;
        this.nameSpan = '';
        this.passwordSpan = '';
        this.signInFromG = this.fb.group({
          nameGrup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          myPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          remmberMe: ['']
        });
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "nameValid",
        value: function nameValid() {
          if (this.signInFromG.controls.nameGrup.dirty) {
            if (!this.signInFromG.controls.nameGrup.hasError('required')) {
              this.nameSpan = '';
              return '';
            } else {
              this.nameSpan = 'Required field';
              return 'Required field';
            }
          }
        }
      }, {
        key: "passwordValid",
        value: function passwordValid() {
          if (this.signInFromG.controls.myPassword.dirty) {
            if (this.signInFromG.controls.myPassword.hasError('required')) {
              this.passwordSpan = 'Required field';
              return 'Required field';
            } else if (this.signInFromG.controls.myPassword.hasError('minlength')) {
              this.passwordSpan = 'Must be at least 4 characters long';
              return 'Must be at least 6 characters long';
            }
          }
        }
      }, {
        key: "guard",
        value: function guard(grup, password, rememberMe) {
          var _this12 = this;

          if (this.signInFromG.controls.myPassword.valid && this.signInFromG.controls.nameGrup.valid) {
            this.srvPost.chackNameGrup(grup, password).subscribe(function (val) {
              if (!val) {
                alert('wrong username or password');
              } else {
                console.log("shlomko");
                localStorage.setItem('gurd', 'true');

                _this12.router.navigate(['/start']);
              }
            });
          } else {
            alert('Incomplete details');
          }
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_5__["SarveOfGurdService"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 37,
      vars: 3,
      consts: [[1, "cont"], [1, "container"], [1, "form-signin", 3, "formGroup"], [1, "container-register-form"], [1, "form"], [1, "note"], [2, "text-decoration", "underline"], [1, "form-content"], [1, "rishum"], [1, "Name"], ["type", "text", "formControlName", "nameGrup", "placeholder", "grup name *", "value", "", 1, "form-control"], ["inputNameGrup", ""], ["style", "font-size: large; color: rgb(255, 3, 3); background-color: rgb(202, 191, 189); width: 10%; height: 5%;", 4, "ngIf"], [1, "form-group"], ["type", "password", "formControlName", "myPassword", "placeholder", "Your Password *", "value", "", 1, "form-control"], ["inputPassword", ""], ["style", "font-size: large; color: red; background-color: rgb(202, 191, 189);", 4, "ngIf"], [2, "color", "seashell"], ["type", "checkbox", "value", "true"], ["rememberMe", ""], ["type", "submit", 1, "btnSubmit", 3, "click"], [2, "font-size", "large", "color", "rgb(255, 3, 3)", "background-color", "rgb(202, 191, 189)", "width", "10%", "height", "5%"], [2, "font-size", "large", "color", "red", "background-color", "rgb(202, 191, 189)"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "StatistiBall-LogIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignInComponent_span_21_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignInComponent_span_27_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Remember me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.guard(_r0.value, _r2.value, _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInFromG);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nameValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordValid());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n    background-color: rgba(243, 229, 213, 0.829);\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    height: 80px;\r\n    width: 80%;\r\n    margin-top: 15%;\r\n    margin-left: 10%;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    line-height: 80px;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    border: 5px solid rgb(248, 119, 13);\r\n    border-radius: 50%;\r\n    \r\n    \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n    height: 72vh;\r\n    background-image: url('/assets/image/backgroundLogIn.jpg');\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n.btnSubmit[_ngcontent-%COMP%]\r\n{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 20%;\r\n    cursor: pointer;\r\n    background: #ffbc50;\r\n    color: #fff;\r\n    outline: none;\r\n\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUlBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osMERBQTBEO0FBQzlEO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUdBOztJQUVJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhOztBQUVqQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyMjksIDIxMywgMC44MjkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm5vdGVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm17XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjQ4LCAxMTksIDEzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMDksIDIzOCwgODIpOyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTAlOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3MnZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlL2JhY2tncm91bmRMb2dJbi5qcGcnKTtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5cclxuLmJ0blN1Ym1pdFxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYmM1MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"]
        }, {
          type: src_app_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_5__["SarveOfGurdService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/start/start.component.ts":
  /*!************************************************!*\
    !*** ./src/app/comps/start/start.component.ts ***!
    \************************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppCompsStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/servies/get-data.service */
    "./src/app/servies/get-data.service.ts");
    /* harmony import */


    var src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/post-data.service */
    "./src/app/servies/post-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent(srv, postSrv) {
        _classCallCheck(this, StartComponent);

        this.srv = srv;
        this.postSrv = postSrv;
        this.nameGrup = '';
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.srv.nameAGrup.subscribe(function (val) {
            return _this13.nameGrup = val;
          });
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]));
    };

    StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 37,
      vars: 1,
      consts: [[1, "cont"], [1, "container"], [1, "all"], [1, "header"], [1, "buttons"], ["routerLink", "/add-a-player", 1, "button-add"], [2, "color", "honeydew", "font-size", "25px"], ["routerLink", "/show-players", 1, "button-show"], ["routerLink", "/history", 1, "button-history"], ["id", "newGame", "type", "button", "routerLink", "/play", 1, "btn", "btn-secondary"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add a Player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To watch the players ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "New game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to the ", ctx.nameGrup, " group");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".cont[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgba(243, 229, 213, 0.829);\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    \r\n}\r\n\r\n.all[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    margin: auto;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 80px;\r\n    color:black\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\n.bi[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n}\r\n\r\n.button-add[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 220px;\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1VzSUtVzobWeSh6O65cuU5Nec8_k_ajPBoA&usqp=CAU');\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n    outline: none;\r\n    box-shadow: 5px 10px 8px #888888;\r\n}\r\n\r\n.button-show[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 220px;\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1VzSUtVzobWeSh6O65cuU5Nec8_k_ajPBoA&usqp=CAU');\r\n    margin: auto;\r\n    border-radius: 50%;\r\n    outline: none;\r\n    box-shadow: 5px 10px 8px #888888;\r\n}\r\n\r\n.button-history[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    outline: none;\r\n    width: 20%;\r\n    height: 220px;\r\n    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1VzSUtVzobWeSh6O65cuU5Nec8_k_ajPBoA&usqp=CAU');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    margin: auto;\r\n    box-shadow: 5px 10px 8px #888888;\r\n}\r\n\r\n#newGame[_ngcontent-%COMP%]{\r\n    margin-bottom: 5%;\r\n    box-shadow: 5px 10px 8px #888888;\r\n    width: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJOzs7K0JBRzJCO0FBQy9COztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsOEhBQThIO0lBQzlILDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhIQUE4SDtJQUM5SCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsOEhBQThIO0lBQzlILDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyMjksIDIxMywgMC44MjkpO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlL2JhY2tncm91bmRTaG93LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyAqL1xyXG59XHJcblxyXG5cclxuLmFsbHtcclxuICAgIC8qIG1hcmdpbi10b3A6IDEwJTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gIFxyXG5idXR0b257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgY29sb3I6YmxhY2tcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5iaXtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tYWRke1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjVDFWelNVdFZ6b2JXZVNoNk82NWN1VTVOZWM4X2tfYWpQQm9BJnVzcXA9Q0FVJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDhweCAjODg4ODg4O1xyXG59XHJcblxyXG4uYnV0dG9uLXNob3d7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NUMVZ6U1V0VnpvYldlU2g2TzY1Y3VVNU5lYzhfa19halBCb0EmdXNxcD1DQVUnKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggIzg4ODg4ODtcclxufVxyXG5cclxuLmJ1dHRvbi1oaXN0b3J5e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1QxVnpTVXRWem9iV2VTaDZPNjVjdVU1TmVjOF9rX2FqUEJvQSZ1c3FwPUNBVScpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggIzg4ODg4ODtcclxufVxyXG5cclxuI25ld0dhbWV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDhweCAjODg4ODg4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start',
          templateUrl: './start.component.html',
          styleUrls: ['./start.component.css']
        }]
      }], function () {
        return [{
          type: src_app_servies_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]
        }, {
          type: src_app_servies_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-gurd.guard.ts":
  /*!**********************************!*\
    !*** ./src/app/my-gurd.guard.ts ***!
    \**********************************/

  /*! exports provided: MyGurdGuard */

  /***/
  function srcAppMyGurdGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyGurdGuard", function () {
      return MyGurdGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sarve-of-gurd.service */
    "./src/app/sarve-of-gurd.service.ts");

    var MyGurdGuard = /*#__PURE__*/function () {
      function MyGurdGuard(srv) {
        _classCallCheck(this, MyGurdGuard);

        this.srv = srv;
      }

      _createClass(MyGurdGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.srv.getLogIn()) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return MyGurdGuard;
    }();

    MyGurdGuard.ɵfac = function MyGurdGuard_Factory(t) {
      return new (t || MyGurdGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_1__["SarveOfGurdService"]));
    };

    MyGurdGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MyGurdGuard,
      factory: MyGurdGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyGurdGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _sarve_of_gurd_service__WEBPACK_IMPORTED_MODULE_1__["SarveOfGurdService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sarve-of-gurd.service.ts":
  /*!******************************************!*\
    !*** ./src/app/sarve-of-gurd.service.ts ***!
    \******************************************/

  /*! exports provided: SarveOfGurdService */

  /***/
  function srcAppSarveOfGurdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SarveOfGurdService", function () {
      return SarveOfGurdService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SarveOfGurdService = /*#__PURE__*/function () {
      function SarveOfGurdService() {
        _classCallCheck(this, SarveOfGurdService);

        this.logIn = localStorage.getItem('gurd');
      }

      _createClass(SarveOfGurdService, [{
        key: "getLogIn",
        value: function getLogIn() {
          console.log(this.logIn);
          return this.logIn;
        }
      }]);

      return SarveOfGurdService;
    }();

    SarveOfGurdService.ɵfac = function SarveOfGurdService_Factory(t) {
      return new (t || SarveOfGurdService)();
    };

    SarveOfGurdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SarveOfGurdService,
      factory: SarveOfGurdService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SarveOfGurdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servies/get-data.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/servies/get-data.service.ts ***!
    \*********************************************/

  /*! exports provided: GetDataService */

  /***/
  function srcAppServiesGetDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetDataService", function () {
      return GetDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GetDataService = /*#__PURE__*/function () {
      function GetDataService(http) {
        _classCallCheck(this, GetDataService);

        this.http = http;
        this.url = 'http://localhost:3000';
        this.nameAGrup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.idAGrup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.plaersAGrup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(GetDataService, [{
        key: "getAllResult",
        value: function getAllResult(id) {
          console.log(id);
          return this.http.get("".concat(this.url, "/results/getAllResult/").concat(id));
        }
      }, {
        key: "getResultByGrup",
        value: function getResultByGrup() {
          return this.http.get("".concat(this.url, "/results/getResultByGrup/"));
        }
      }, {
        key: "getResultByDate",
        value: function getResultByDate(date) {
          return this.http.post("".concat(this.url, "/results/getResultByDate/"), date);
        }
      }, {
        key: "getstatisticByDate",
        value: function getstatisticByDate(games) {
          return this.http.post("".concat(this.url, "/results/getstatisticByDate/"), games);
        }
      }]);

      return GetDataService;
    }();

    GetDataService.ɵfac = function GetDataService_Factory(t) {
      return new (t || GetDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    GetDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetDataService,
      factory: GetDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servies/post-data.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/servies/post-data.service.ts ***!
    \**********************************************/

  /*! exports provided: PostDataService */

  /***/
  function srcAppServiesPostDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDataService", function () {
      return PostDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _DTO_grup_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../DTO/grup-dto */
    "./src/app/DTO/grup-dto.ts");
    /* harmony import */


    var _DTO_player_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../DTO/player-dto */
    "./src/app/DTO/player-dto.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _get_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./get-data.service */
    "./src/app/servies/get-data.service.ts");

    var PostDataService = /*#__PURE__*/function () {
      function PostDataService(http, srvData) {
        _classCallCheck(this, PostDataService);

        this.http = http;
        this.srvData = srvData;
        this.url = 'http://localhost:3000';
        this.grupId = 0;
        this.token = localStorage.getItem("token");

        if (this.token) {
          this.srvData.nameAGrup.next(localStorage.getItem('grup'));
          this.srvData.idAGrup.next(parseInt(localStorage.getItem('id')));
          this.grupId = parseInt(localStorage.getItem('id'));
          this.getPlayers(this.grupId);
        }
      }

      _createClass(PostDataService, [{
        key: "chackNameGrup",
        value: function chackNameGrup(nameGrup, password) {
          var _this14 = this;

          var grup = new _DTO_grup_dto__WEBPACK_IMPORTED_MODULE_2__["grupDto"]();
          grup.NameGrup = nameGrup;
          grup.Password = password;
          return this.http.post("".concat(this.url, "/playrs/logIn"), grup).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) {
            if (val) {
              localStorage.setItem("token", val['token']);
              localStorage.setItem("id", val["id"]);
              localStorage.setItem("grup", val["NameGrup"]);
              _this14.token = localStorage.getItem("token");

              _this14.srvData.nameAGrup.next(val['NameGrup']);

              _this14.srvData.idAGrup.next(val['id']);

              _this14.grupId = val['id'];

              _this14.getPlayers(_this14.grupId);
            }

            return val;
          }));
        }
      }, {
        key: "addGrup",
        value: function addGrup(nameGrup, password) {
          var newGrup = new _DTO_grup_dto__WEBPACK_IMPORTED_MODULE_2__["grupDto"]();
          newGrup.NameGrup = nameGrup;
          newGrup.Password = password;
          return this.http.post("".concat(this.url, "/playrs/addGrup"), newGrup);
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(name, height, image, select) {
          var _this15 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("token", this.token);
          var newPlayer = new _DTO_player_dto__WEBPACK_IMPORTED_MODULE_3__["playerDto"]();
          newPlayer.Name = name;
          newPlayer.Height = height;
          newPlayer.Image = image;
          newPlayer.Position = select;
          newPlayer.GrupId = this.grupId;
          this.http.post("".concat(this.url, "/playrs/addPlayer/"), newPlayer, {
            headers: headers
          }).subscribe(function () {
            _this15.getPlayers(_this15.grupId);
          });
        }
      }, {
        key: "deletePlayer",
        value: function deletePlayer(id) {
          var _this16 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("token", this.token);
          this.http["delete"]("".concat(this.url, "/playrs/deletePlayer/").concat(id), {
            headers: headers
          }).subscribe(function (val) {
            if (val) {
              _this16.getPlayers(_this16.grupId);

              return;
            }

            alert('There are statistics attached to the player and it is not possible to delete this player');
          });
        }
      }, {
        key: "getPlayers",
        value: function getPlayers(grupId) {
          var _this17 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("token", this.token);
          this.http.get("".concat(this.url, "/playrs/getPlayers/").concat(grupId), {
            headers: headers
          }).subscribe(function (val) {
            _this17.srvData.plaersAGrup.next(val);
          });
        }
      }, {
        key: "saveGame",
        value: function saveGame(game) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("token", this.token);
          return this.http.post("".concat(this.url, "/results/saveGame/"), game, {
            headers: headers
          });
        }
      }, {
        key: "saveStatisticByPlayer",
        value: function saveStatisticByPlayer(statisticPlayer) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("token", this.token);
          this.http.post("".concat(this.url, "/results/saveStatistic/"), statisticPlayer, {
            headers: headers
          }).subscribe();
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(image, id) {
          console.log(image);
          var formData = new FormData();
          formData.append('image', image);
          console.log(id);
          console.log(formData);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('id', id);
          this.http.post("".concat(this.url, "/playrs/upload"), formData, {
            headers: headers
          }).subscribe();
        }
      }]);

      return PostDataService;
    }();

    PostDataService.ɵfac = function PostDataService_Factory(t) {
      return new (t || PostDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_get_data_service__WEBPACK_IMPORTED_MODULE_5__["GetDataService"]));
    };

    PostDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostDataService,
      factory: PostDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _get_data_service__WEBPACK_IMPORTED_MODULE_5__["GetDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\תרגילים יורי\project-basketball\front-and\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map