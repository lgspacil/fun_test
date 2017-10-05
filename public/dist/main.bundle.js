webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_setup_game_setup_component__ = __webpack_require__("../../../../../src/app/game-setup/game-setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__game_setup_game_setup_component__["a" /* GameSetupComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_setup_game_setup_component__ = __webpack_require__("../../../../../src/app/game-setup/game-setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_setup_game_play_game_play_component__ = __webpack_require__("../../../../../src/app/game-setup/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pop_up_pop_up_component__ = __webpack_require__("../../../../../src/app/pop-up/pop-up.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__game_setup_game_setup_component__["a" /* GameSetupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__game_setup_game_play_game_play_component__["a" /* GamePlayComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pop_up_pop_up_component__["a" /* PopUpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__pop_up_pop_up_component__["a" /* PopUpComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/game-setup/game-play/game-play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#A{\n    background-color: lightgoldenrodyellow;\n}\n\n#B{\n    background-color: lightcoral;\n}\n\n#C{\n    background-color: lightgreen;\n}\n\n#D{\n    background-color: #485391;\n}\n\n.container{\n    background-color: #9fcac7;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-setup/game-play/game-play.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"container\">\n    <h1>Welcome: {{users_name}}</h1>\n    <h1>Time Limit {{time_limit}} seconds</h1>\n\n    <md-grid-list cols=\"2\" rowHeight=\"2:1\">\n    <h2>{{questions[question_num][0]}}</h2>\n\n\n    <md-grid-tile id=\"A\" (click)=\"clicked($event)\" *ngIf=\"questions[question_num][6] == 'true'; else isTextA\">\n        <img style=\"width: 100%; height: 100%\" src ={{questions[question_num][1]}}>\n    </md-grid-tile>\n    <ng-template #isTextA>\n        <md-grid-tile id=\"A\" (click)=\"clicked($event)\">\n            {{questions[question_num][1]}}\n        </md-grid-tile>\n    </ng-template>\n\n    <md-grid-tile id=\"B\" (click)=\"clicked($event)\" *ngIf=\"questions[question_num][6] == 'true'; else isTextB\">\n        <img style=\"width: 100%; height: 100%\" src ={{questions[question_num][2]}}>\n    </md-grid-tile>\n    <ng-template #isTextB>\n        <md-grid-tile id=\"B\" (click)=\"clicked($event)\">\n            {{questions[question_num][2]}}\n        </md-grid-tile>\n    </ng-template>\n\n    <md-grid-tile id=\"C\" (click)=\"clicked($event)\" *ngIf=\"questions[question_num][6] == 'true'; else isTextC\">\n        <img style=\"width: 100%; height: 100%\" src ={{questions[question_num][3]}}>\n    </md-grid-tile>\n    <ng-template #isTextC>\n        <md-grid-tile id=\"C\" (click)=\"clicked($event)\">\n            {{questions[question_num][3]}}\n        </md-grid-tile>\n    </ng-template>\n        \n    <md-grid-tile id=\"D\" (click)=\"clicked($event)\" *ngIf=\"questions[question_num][6] == 'true'; else isTextD\">\n        <img style=\"width: 100%; height: 100%\" src ={{questions[question_num][4]}}>\n    </md-grid-tile>\n    <ng-template #isTextD>\n        <md-grid-tile id=\"D\" (click)=\"clicked($event)\">\n            {{questions[question_num][4]}}\n        </md-grid-tile>\n    </ng-template>\n    </md-grid-list>   \n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/game-setup/game-play/game-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_up_pop_up_component__ = __webpack_require__("../../../../../src/app/pop-up/pop-up.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamePlayComponent = (function () {
    function GamePlayComponent(dialog) {
        this.dialog = dialog;
        this.reTakeButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        //when the dialog is closed it will send info to this variable
        this.dialogResult = '';
        //what do you want to send to the dialog when it opens
        this.dialog_message = {
            percent: null,
            total_time: null,
            message: null,
        };
        //users name:
        this.users_name = '';
        this.total_time = 0;
        //game running Bool
        this.game_running = true;
        //audio info
        this.playing = false;
        this.audio_correct = new Audio();
        this.audio_incorrect = new Audio();
        this.audio_beep = new Audio();
        this.audio_buzzer = new Audio();
        //end of audio info
        //test information
        this.question_num = 0;
        this.correct = 0;
        this.questions = [
            ["Pick the flag of Slovakia", "../../assets/pictures/slovakia.png", "../../assets/pictures/frane.png", "../../assets/pictures/brasil.png", "../../assets/pictures/usa.png", "A", "true"],
            ["What is the capital of CA?", "Sacramento", "LA", "Fresno", "San Francisco", "A", "false"],
            ["How many hours is Europe ahead of the California Time Zone?", "4", "8", "9", "7", "C", "false"],
            ["At what temperature does water boil in celcius?", "50", "99", "100", "123", "C", "false"],
            ["How far can you walk into a forest?", "10 miles", "500 yeards", "half way", "6miles", "C", "false"],
            ["Which country is Hungary?", "../../assets/sillhouettes/afghanistan-silhouette.jpg", "../../assets/sillhouettes/iceland-silhouette.jpg", "../../assets/sillhouettes/australia-silhouette.jpg", "../../assets/sillhouettes/hungary-silhouette.jpg", "D", "true"],
            ["Which country is Iceland?", "../../assets/sillhouettes/iceland-silhouette.jpg", "../../assets/sillhouettes/costa-rica-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/mexico-silhouette.jpg", "A", "true"],
            ["Which country is New Zealand?", "../../assets/sillhouettes/italy-silhouette.jpg", "../../assets/sillhouettes/united-states-silhouette.jpg", "../../assets/sillhouettes/new-zealand-silhouette.jpg", "../../assets/sillhouettes/spain-silhouette.jpg", "C", "true"],
            ["Which country is Iceland?", "../../assets/sillhouettes/greenland-silhouette.jpg", "../../assets/sillhouettes/thailand-silhouette.jpg", "../../assets/sillhouettes/iceland-silhouette.jpg", "../../assets/sillhouettes/zambia-silhouette.jpg", "C", "true"],
            ["Which country is Australia?", "../../assets/sillhouettes/italy-silhouette.jpg", "../../assets/sillhouettes/australia-silhouette.jpg", "../../assets/sillhouettes/india-silhouette.jpg", "../../assets/sillhouettes/united-states-silhouette.jpg", "B", "true"],
            ["Which country is Germany?", "../../assets/sillhouettes/germany-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/afghanistan-silhouette.jpg", "A", "true"],
            ["Which country is Costa Rica?", "../../assets/sillhouettes/egypt-silhouette.jpg", "../../assets/sillhouettes/macedonia-silhouette.jpg", "../../assets/sillhouettes/mexico-silhouette.jpg", "../../assets/sillhouettes/costa-rica-silhouette.jpg", "D", "true"],
            ["Which country is Sweden?", "../../assets/sillhouettes/romania-silhouette.jpg", "../../assets/sillhouettes/sweden-silhouette.jpg", "../../assets/sillhouettes/hungary-silhouette.jpg", "../../assets/sillhouettes/russia-silhouette.jpg", "B", "true"],
            ["Which country is South Africa?", "../../assets/sillhouettes/russia-silhouette.jpg", "../../assets/sillhouettes/south-africa-silhouette.jpg", "../../assets/sillhouettes/germany-silhouette.jpg", "../../assets/sillhouettes/austria-silhouette.jpg", "B", "true"],
            ["Which country is Macedonia?", "../../assets/sillhouettes/egypt-silhouette.jpg", "../../assets/sillhouettes/macedonia-silhouette.jpg", "../../assets/sillhouettes/mexico-silhouette.jpg", "../../assets/sillhouettes/spain-silhouette.jpg", "B", "true"],
            ["Which country is Italy?", "../../assets/sillhouettes/spain-silhouette.jpg", "../../assets/sillhouettes/italy-silhouette.jpg", "../../assets/sillhouettes/belgium-silhouette.jpg", "../../assets/sillhouettes/united-states-silhouette.jpg", "B", "true"],
            ["Pick the flag of South Africa", "../../assets/pictures/germany.png", "../../assets/pictures/south-africa.png", "../../assets/pictures/denmark.png", "../../assets/pictures/australia.png", "B", "true"],
            ["Pick the flag of Sweden", "../../assets/pictures/denmark.png", "../../assets/pictures/norway.png", "../../assets/pictures/finland.png", "../../assets/pictures/sweden.png", "D", "true"],
            ["Pick the flag of Ireland", "../../assets/pictures/ireland.jpg", "../../assets/pictures/italy.gif", "../../assets/pictures/austria.GIF", "../../assets/pictures/bangladesh.png", "A", "true"],
            ["Pick the flag of Iceland", "../../assets/pictures/new_zealand.png", "../../assets/pictures/australia.png", "../../assets/pictures/icealnd.png", "../../assets/pictures/frane.png", "C", "true"],
            ["Marie Antoinette was born an Archduchess of what country?", "Germany", "Austria", "Frane", "Netherlands", "B", "flase"],
            ["What was the name of the currency used in Spain before the euro?", "Shilling", "Frank", "Peso", "Pesetas", "D", "false"],
            ["Which American inventor is generally given credit for the invention of the lightning rod?", "Thomas Jefferson", "Benjamin Franklin", "Harriet Tubman", "Thomas Edison", "B", "false"],
            ["In 1867 the United States purchased Alaska from what country?", "Russia", "Canada", "It was never purchased", "Inuit Tribes", "A", "false"],
            ["The inventor Nikola Tesla was born on July 10th 1856 in what modern day country?", "Germany", "Slovenia", "Croatia", "Austria", "C", "false"]
        ];
    }
    //end of test information
    GamePlayComponent.prototype.ngOnInit = function () {
        this.audio_correct.src = "../assets/sounds/correct.mp3";
        this.audio_incorrect.src = "../assets/sounds/explosion.mp3";
        this.audio_beep.src = "../assets/sounds/count_down.mp3";
        this.audio_buzzer.src = "../assets/sounds/Game-show-buzzer-sound.mp3";
        this.audio_correct.load();
        this.audio_incorrect.load();
        this.audio_beep.load();
        this.audio_buzzer.load();
        this.time_limit = this.user_info.value;
        this.inital_time = this.user_info.value;
        this.users_name = this.user_info.name;
        this.shuffle(this.questions);
        this.decrement();
    };
    GamePlayComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    GamePlayComponent.prototype.clicked = function (event) {
        var target = event.srcElement.attributes.id || event.currentTarget.id;
        console.log("you clicked: ", target);
        if (target == this.questions[this.question_num][5]) {
            console.log("You got it right!");
            this.correct++;
            this.audio_correct.play();
        }
        else {
            console.log("you got it wrong..");
            this.audio_incorrect.play();
        }
        if (this.questions.length - 1 > this.question_num) {
            this.question_num++;
            this.time_limit = this.inital_time;
        }
        else {
            clearInterval(this.interval);
            this.dialog_message.message = "You finished the Game!";
            this.dialog_message.percent = Math.floor((this.correct / this.questions.length) * 100);
            this.dialog_message.total_time = this.total_time;
            this.openDialog();
        }
    };
    GamePlayComponent.prototype.decrement = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.timer();
        }, 1000);
    };
    GamePlayComponent.prototype.timer = function () {
        this.time_limit -= 1;
        this.total_time += 1;
        if (this.time_limit == 0) {
            this.audio_buzzer.play();
        }
        else if (this.time_limit <= 3) {
            this.audio_beep.play();
        }
        //if time is out you loose!
        if (this.time_limit == 0) {
            clearInterval(this.interval);
            this.dialog_message.message = "You ran out of time, try again next time";
            this.openDialog();
        }
    };
    GamePlayComponent.prototype.openDialog = function () {
        var _this = this;
        var dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__pop_up_pop_up_component__["a" /* PopUpComponent */], { width: '600px', data: this.dialog_message });
        dialog.afterClosed()
            .subscribe(function (result) {
            console.log('Dialog closed: ', result);
            if (result == "Retake") {
                _this.reTakeButtonClicked.emit(true);
            }
            else {
                _this.reTakeButtonClicked.emit(true);
            }
            _this.dialogResult = result;
        });
    };
    return GamePlayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GamePlayComponent.prototype, "user_info", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], GamePlayComponent.prototype, "reTakeButtonClicked", void 0);
GamePlayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game-play',
        template: __webpack_require__("../../../../../src/app/game-setup/game-play/game-play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game-setup/game-play/game-play.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialog */]) === "function" && _a || Object])
], GamePlayComponent);

var _a;
//# sourceMappingURL=game-play.component.js.map

/***/ }),

/***/ "../../../../../src/app/game-setup/game-setup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-slider {\n    width: 100%;\n  }\n\n.container{\n  background-color: #9fcac7;\n  text-align: center;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\nbutton{\n  width: 100%;\n  font-size: 26px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-setup/game-setup.component.html":
/***/ (function(module, exports) {

module.exports = "  <md-card class=\"container\" *ngIf=\"show_game == false\">\n    <h1>Game Difficulty: {{level}}</h1>\n  \n    <form class=\"example-form\">\n      <md-form-field class=\"example-full-width\">\n        <input mdInput placeholder=\"Enter Name\" name=\"name\" required [(ngModel)]=\"user_info.name\">\n      </md-form-field>\n    </form>\n\n    <h2>Slide the bar to the amount of time you want for each question</h2>\n    <md-slider min=\"4\" max=\"15\" step=\"1\" value=\"10\" [(ngModel)]=\"user_info.value\" (change)=\"runChange()\"></md-slider>\n    <h2>{{user_info.value}} Seconds</h2>\n\n    <button (click)=\"submitTimeName()\">Start Game!!</button>\n\n   \n  </md-card>\n\n  <app-game-play *ngIf=\"show_game == true\" [user_info]=\"user_info\" (reTakeButtonClicked)=\"reTakeButtonClicked($event)\"> </app-game-play>"

/***/ }),

/***/ "../../../../../src/app/game-setup/game-setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameSetupComponent = (function () {
    function GameSetupComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.show_game = false;
        this.user_info = {
            value: 10,
            name: "",
        };
        this.level = "Medium";
    }
    GameSetupComponent.prototype.ngOnInit = function () {
    };
    GameSetupComponent.prototype.runChange = function () {
        if (this.user_info.value <= 6) {
            this.level = "Hard";
        }
        else if (this.user_info.value <= 10) {
            this.level = "Medium";
        }
        else if (this.user_info.value <= 13) {
            this.level = "Easy";
        }
        else {
            this.level = "Very Easy";
        }
        console.log('hello');
    };
    GameSetupComponent.prototype.submitTimeName = function () {
        if (this.user_info.name != "") {
            this.show_game = true;
        }
    };
    GameSetupComponent.prototype.reTakeButtonClicked = function (event) {
        this.show_game = false;
    };
    return GameSetupComponent;
}());
GameSetupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game-setup',
        template: __webpack_require__("../../../../../src/app/game-setup/game-setup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game-setup/game-setup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], GameSetupComponent);

var _a;
//# sourceMappingURL=game-setup.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpService = (function () {
    function HttpService() {
    }
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HttpService);

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#A{\n    background-color: lightgoldenrodyellow;\n}\n\n#B{\n    background-color: lightcoral;\n}\n\n#C{\n    background-color: lightgreen;\n}\n\n#D{\n    background-color: #485391;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <h2>{{questions[question_num][0]}}</h2>\n\n\n  <md-grid-tile id=\"A\" (click)=\"clicked($event)\" *ngIf=\"questions[question_num][6] == 'true'; else isText\">\n      <img src ={{questions[question_num][1]}}>\n  </md-grid-tile>\n  <ng-template #isText>\n      <md-grid-tile id=\"A\" (click)=\"clicked($event)\">\n          {{questions[question_num][1]}}\n      </md-grid-tile>\n  </ng-template>\n\n\n  <md-grid-tile id=\"B\" (click)=\"clicked($event)\">{{questions[question_num][2]}}</md-grid-tile>\n  <md-grid-tile id=\"C\" (click)=\"clicked($event)\">{{questions[question_num][3]}}</md-grid-tile>\n  <md-grid-tile id=\"D\" (click)=\"clicked($event)\">{{questions[question_num][4]}}</md-grid-tile>\n  \n</md-grid-list>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(cookieService) {
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        //audio info
        this.playing = false;
        this.audio_correct = new Audio();
        this.audio_incorrect = new Audio();
        //end of audio info
        //test information
        this.question_num = 0;
        this.correct = 0;
        this.questions = [
            ["Pick the flag of Slovakia", "http://flaglane.com/download/slovakian-flag/slovakian-flag-graphic.png", "HI", "USA", "Brasil", "A", "true"],
            ["What is the capital of CA?", "Sacramento", "LA", "Fresno", "San Francisco", "A", "false"],
            ["How many hours is Europe ahead of the California Time Zone?", "4", "8", "9", "7", "C", "false"],
            ["When does water boil?", "50", "99", "100", "123", "C", "false"],
        ];
    }
    //end of test information
    MainComponent.prototype.ngOnInit = function () {
        this.cookieService.set('Test', 'Hello World');
        this.cookieValue = this.cookieService.get('Test');
        console.log("i am being run");
        this.audio_correct.src = "../assets/sounds/correct.mp3";
        this.audio_incorrect.src = "../assets/sounds/explosion.mp3";
        this.audio_correct.load();
        this.audio_incorrect.load();
    };
    MainComponent.prototype.clicked = function (event) {
        var target = event.srcElement.attributes.id || event.currentTarget.id;
        console.log("you clicked: ", target);
        if (target == this.questions[this.question_num][5]) {
            console.log("You got it right!");
            this.correct++;
            this.audio_correct.play();
        }
        else {
            console.log("you got it wrong..");
            this.audio_incorrect.play();
        }
        if (this.questions.length - 1 > this.question_num)
            this.question_num++;
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "  <h1 md-dialog-title> {{data.message}}!</h1>\n  <h2 md-dialog-title *ngIf='data.percent'>Game Stats</h2>\n\n\n  <h3 *ngIf='data.percent'>Your Score: {{data.percent}}%</h3>\n  <h3 *ngIf='data.total_time'>Total Time: {{data.total_time}} seconds</h3>\n\n  \n  <button md-raised-button (click)=\"onCloseConfirm()\">Take Test Again!</button>\n  \n  \n\n"

/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PopUpComponent = (function () {
    function PopUpComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    PopUpComponent.prototype.ngOnInit = function () {
    };
    PopUpComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close('Retake');
    };
    PopUpComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    return PopUpComponent;
}());
PopUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pop-up',
        template: __webpack_require__("../../../../../src/app/pop-up/pop-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pop-up/pop-up.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialogRef */]) === "function" && _a || Object, Object])
], PopUpComponent);

var _a;
//# sourceMappingURL=pop-up.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map