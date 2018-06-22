webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage() {
    }
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to your first Ionic app!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_bitunes_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IonicComponent = /** @class */ (function () {
    function IonicComponent(itunes_service, plt, ScreenOrientation, storage) {
        this.itunes_service = itunes_service;
        this.plt = plt;
        this.ScreenOrientation = ScreenOrientation;
        this.storage = storage;
        console.log("La página 'itunes.html' se va a cargar");
        this.busqueda_usuario = "";
        this.cargado = false;
        if (this.esMovil) {
            console.log("el entorno es movil");
        }
        else {
            console.log("se esta ejecutando en web");
        }
        // get current
        console.log(this.ScreenOrientation.type); // logs the current orientation, example: 'landscape'
        // allow user rotate
        this.ScreenOrientation.unlock();
        // detect orientation changes
        this.ScreenOrientation.onChange().subscribe(function () {
            alert("Cambio de orientación");
        });
    }
    IonicComponent.prototype.entornoMovil = function () {
        var esMovil = false;
        esMovil = !(this.plt.is('mobileweb') || this.plt.is('core'));
        return esMovil;
    };
    IonicComponent.prototype.buscar = function () {
        var _this = this;
        //TODO guardar el termino de busqueda en el storage
        this.storage.set('termino_busqueda', this.busqueda_usuario);
        console.log("Ha tocado a buscar");
        console.log("Ha tocado a buscar " + this.busqueda_usuario);
        var resultado = this.itunes_service.buscar(this.busqueda_usuario);
        resultado.subscribe(function (jsoncanciones) { return _this.procesarCanciones(jsoncanciones); });
    };
    IonicComponent.prototype.procesarCanciones = function (jsoncanciones) {
        var infocanciones = jsoncanciones;
        this.array_canciones = infocanciones.results;
        this.cargado = true;
        console.log("Nombre del primero " + this.array_canciones[0].artistName);
    };
    IonicComponent.prototype.consulta = function () {
        console.log("tocar consulta");
        this.storage.get('termino_busqueda').then(function (val) {
            console.log('Tu termino_busqueda es', val);
        });
    };
    IonicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'itunes',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/itunes/itunes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Itunes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div showWhen="android,ios">\n    <p>esto es un movil</p>\n  </div>\n  <div ng-if="!esMovil">\n    <p>esto es una web</p>\n  </div>\n\n  <input type="text" [(ngModel)]="busqueda_usuario">\n  <button ion-button blockground (click)="buscar()" >Encontrar</button>\n  <button ion-button (click)="consulta()"> <ion-icon name="search"></ion-icon></button>\n  <div *ngIf="cargado">\n    <ul *ngFor="let cancion of array_canciones">\n      <li>{{cancion.artistName}}-{{cancion.trackName}}</li>\n      <img src="{{cancion.artworkUrl100}}">\n      <audio src="{{cancion.previewUrl}}" controls></audio>\n      \n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/itunes/itunes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_bitunes_service__["a" /* ItunesService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_bitunes_service__["a" /* ItunesService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], IonicComponent);
    return IonicComponent;
}());

//# sourceMappingURL=itunes.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicCreditosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonicCreditosComponent = /** @class */ (function () {
    function IonicCreditosComponent() {
        this.clicks = 0;
        console.log("constructor");
        //let compa1: Companeros = new Companeros ("Angel J. Cachón", "https://github.com/acachon","https://www.linkedin.com/in/angelcachon/","https://avatars0.githubusercontent.com/u/36812721?s=460&v=4");
        //this.gente.push (compa1);
        this.gente = [
            {
                nombre: "Angel J. Cachón",
                github: "https://github.com/acachon",
                linkedin: "https://www.linkedin.com/in/angelcachon/",
                image: "https://avatars0.githubusercontent.com/u/36812721?s=460&v=4"
            },
            {
                nombre: "Angel Fernandez Alvarez",
                github: "https://github.com/antroxu",
                linkedin: "https://www.linkedin.com/in/ángel-fernández-álvarez-60083521",
                image: "https://media.licdn.com/dms/image/C5603AQEvFRqszVsoqw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=Odz7zsutS6mciHhvxn5ekF3vjmzB3GgMpJhe9201_oE"
            },
            {
                nombre: "Amaya Valdiviejas Ruiz",
                github: "https://github.com/amaya1234",
                linkedin: "https://es.linkedin.com/in/amaya-valdiviejas-ruiz-3696869b",
                image: "../../assets/imgs/foto_amaya.PNG"
            },
            {
                nombre: "Carlos Moreno",
                github: "https://github.com/cmcarlos",
                linkedin: 'https://www.linkedin.com/in/carlos-moreno-c%C3%A1mara-70222a48/',
                image: "../../assets/imgs/foto_carlos.jpg"
            },
            {
                nombre: "Daniel Adrián Durán",
                github: "https://github.com/DanielFrontEnd19",
                linkedin: "https://www.linkedin.com/in/frontenddanieladri%C3%A1n/",
                image: "https://media.licdn.com/dms/image/C4E03AQHPqGALqxTwzQ/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=Kf0ygqyygOOsQVqqkDcyi-ZH_yWWI6rFzte9Tn_P-ro"
            },
            {
                nombre: "David Herrera Torrado",
                github: "https://github.com/daher7",
                linkedin: "https://www.linkedin.com/in/david-herrera-torrado-771083166/",
                image: "https://media.licdn.com/dms/image/C4E03AQFpGKoWWU9EJw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=E8XZ_shSfMsgz-krnMBFoQytZzFmwKWUWDFLl_QPseY"
            },
            {
                nombre: "Elena Jarabo",
                github: "https://github.com/keova",
                linkedin: "https://www.linkedin.com/in/elena-jarabo-ruiz/",
                image: "https://avatars1.githubusercontent.com/u/39187399?s=400&v=4"
            },
            {
                nombre: "Jose Carlos Calzada",
                github: "https://github.com/ixtab/",
                linkedin: "www.linkedin.com/in/jose-carlos-calzada-gomez",
                image: "https://media.licdn.com/dms/image/C5603AQHzaoQq6EMGCw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=DkNydaWa63DSbxG5kIhDoQKZIonzVO9xFYfVprDY1EU"
            },
            {
                nombre: "Juan Madrigal Vergel",
                github: "https://github.com/Skattspa",
                linkedin: "https://www.linkedin.com/in/jmvergel/",
                image: "../../assets/imgs/foto_juan.png"
            },
            {
                nombre: "Luis Martinez",
                github: "https://github.com/ITLuisMC",
                linkedin: "https://www.linkedin.com/in/itluismc/",
                image: "https://avatars1.githubusercontent.com/u/26518294?s=400&v=4"
            },
            {
                nombre: "Manuel Jesús Moreno Arévalo",
                github: "https://github.com/manuelazo30",
                linkedin: "https://www.linkedin.com/in/manuelazo/",
                image: "https://media.licdn.com/dms/image/C5603AQFzXcSswWcDsw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=AwbKiokk8XPgeZInfP_qjbDAgvosCFvMwW9u9j_FNC8"
            },
            {
                nombre: "Oscar  Rivera Yunquera",
                github: "https://github.com/Oscarriveragit",
                linkedin: "https://www.linkedin.com/oscarriverayunquera",
                image: "https://avatars2.githubusercontent.com/u/28908264?s=400&v=4"
            },
            {
                nombre: "Obdulia Zamora Doménech",
                github: "https://github.com/ozamgmam",
                linkedin: "https://www.linkedin.com/in/obdulia-zamora-dom%C3%A9nech-081a4742/",
                web: "web2you.esy.es",
                image: "https://media.licdn.com/dms/image/C5603AQG_xhKpDTQeIA/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=hUabZttXiTHKToU3_Igl1Oe2B62VcefppPTeQ7H0ENE"
            }
        ];
        this.mostrar(this.gente);
    }
    IonicCreditosComponent.prototype.mostrar = function (gente) {
        console.log(gente);
    };
    IonicCreditosComponent.prototype.huevoPascua = function () {
        console.log("click logo");
        this.clicks = this.clicks + 1;
        if (this.clicks === 7) {
            alert('has hecho click ' + this.clicks + ' veces');
            var logo = document.getElementById('logo');
            logo.setAttribute('src', '../../assets/imgs/nuclear_bomb.gif');
            // logo.style.width = "500px";
            // logo.style.height = "500px";
        }
    };
    IonicCreditosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "creditos",template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/creditos/creditos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Creditos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n      <ion-list>\n          <section ion-item *ngFor="let compi of gente" > <!--(click)="itemTapped($event, item)"-->\n            <ion-icon item-left>\n                <img src="{{compi.image}}" alt="No tienes foto" height="50px" width="50px" style="border-radius: 50%;">\n            </ion-icon> \n            {{compi.nombre}}\n            <div class="item-note" item-right>\n              <a href="{{compi.github}}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>\n              <a href="{{compi.linkedin}}" target="_blank">  <ion-icon name="logo-linkedin"></ion-icon></a>\n              </div>\n            </section>\n            <img id="logo" (click)=huevoPascua() src="../../assets/imgs/logo_CAS_noBackground.JPG" alt="logo cas" width="100px" height="100px" style= "margin: 5% 0% 0% 45%;">\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/creditos/creditos.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], IonicCreditosComponent);
    return IonicCreditosComponent;
}());

//# sourceMappingURL=creditos.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* unused harmony export ModalContentPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = /** @class */ (function () {
    function BasicPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    BasicPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/modal/template.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Modals</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-list>\n      <ion-list-header>\n        Hobbits\n      </ion-list-header>\n      <a ion-item (click)="openModal({charNum: 0})">\n        Gollum\n      </a>\n      <a ion-item (click)="openModal({charNum: 1})">\n        Frodo Baggins\n      </a>\n      <a ion-item (click)="openModal({charNum: 2})">\n        Sam\n      </a>\n    </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/modal/template.html"*/,
            selector: 'modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], BasicPage);
    return BasicPage;
}());

var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"{{character.image}}\">\n        </ion-avatar>\n        <h2>{{character.name}}</h2>\n        <p>{{character.quote}}</p>\n      </ion-item>\n      <ion-item *ngFor=\"let item of character['items']\">\n        {{item.title}}\n        <ion-note item-end>\n          {{item.note}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_model__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_login_service__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormularioComponent = /** @class */ (function () {
    function FormularioComponent(loginService) {
        this.loginService = loginService;
        //inicializar los atributos
        this.login = new __WEBPACK_IMPORTED_MODULE_1__app_login_model__["a" /* Login */]();
    }
    FormularioComponent.prototype.acceder = function (datos, valido) {
        if (valido) {
            console.log("los datos son validos");
            this.loginService.postLogin(datos).subscribe(function (ok) {
                console.log("Ha ido bien!");
                console.log("Respuesta ok: ", ok);
                var vresp = ok; //la respuesta es de tipo httpresponse y devuelve un objeto. Hacemos el casting con la respuesta cuando devuelve ok
                console.log("Cuerpo ", vresp.body);
                console.log("Status ", vresp.status);
                console.log("vresp ", vresp);
            }, function (ko) {
                console.log("Error ", ko);
            }, function () {
                console.log("completado "); // si ha ido bien vemos el ok y el completado
            }); //hacemos subscribe a la respuesta para esperar a su resultado.
            console.log("Datos rx: " + datos.nombre + " " + datos.pwd + " " + datos.pwd2);
        }
    };
    FormularioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'formulario',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/formulario/formulario.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Formulario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--aquí va nuestro formulario-->\n<div style="text-align: center">\n  <form #formulario_login="ngForm" (ngSubmit)="acceder(formulario_login.value, formulario_login.valid)">\n      <div>\n        <ion-item>\n          <ion-label>Nombre</ion-label>\n          <ion-input type="text" #nombre="ngModel" name="nombre" [(ngModel)]="login.nombre" required pattern=".{4,}"></ion-input>\n        </ion-item>\n        <small [hidden]="!(formulario_login.submitted && !nombre.valid)">\n          Nombre de al menos 4 letras\n        </small>\n      </div>\n      <div>\n        <ion-item>\n          <ion-label>Password</ion-label>\n          <ion-input type="text" #pwd="ngModel" name="pwd" [(ngModel)]="login.pwd" required></ion-input>\n        </ion-item>\n        <small [hidden]="!(formulario_login.submitted && !pwd.valid)">\n          Contraseña obligatoria\n        </small>\n      </div>\n      <div>\n        <ion-item>\n          <ion-label>Password repe</ion-label>\n          <ion-input type="text" #pwd2="ngModel" name="pwd2" [(ngModel)]="login.pwd2" required validateEqual="pwd"></ion-input>\n          <!-- añadir directiva  -->\n        </ion-item>\n        <small [hidden]="(pwd2.valid || pwd2.pristine)">\n          Repita la misma contraseña\n        </small>\n      </div>\n      <button type="submit" ion-button [disabled]=!(formulario_login.valid)>Acceder</button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/formulario/formulario.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_login_service__["a" /* LoginService */]])
    ], FormularioComponent);
    return FormularioComponent;
}());

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapawebPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapawebPage = /** @class */ (function () {
    function MapawebPage(geolocation) {
        this.geolocation = geolocation;
        console.log("pasa por el constrcutor");
    }
    MapawebPage.prototype.ionViewDidLoad = function () {
        this.getPosition();
        console.log("pasa por ionViewDidLoad");
    };
    MapawebPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (response) {
            console.log("pasa por getCurrentposition response");
            _this.loadMap(response);
        })
            .catch(function (error) {
            console.log("pasa por getCurrentposition. Esto no funchiona pachacho");
            console.log(error);
        });
    };
    MapawebPage.prototype.loadMap = function (position) {
        var _this = this;
        console.log("pasa por loadMapa");
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        // create a new map by passing HTMLElement
        var mapEle = document.getElementById('map');
        // create LatLng object
        var myLatLng = { lat: latitude, lng: longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                title: 'Hello World!',
                icon: {
                    url: "https://media.giphy.com/media/xU9TT471DTGJq/giphy.gif",
                    scaledSize: new google.maps.Size(50, 50),
                    class: "homero",
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 0) // anchor
                },
            });
            mapEle.classList.add('show-map');
        });
    };
    MapawebPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapaweb',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/mapaweb/mapaweb.html"*/'<!--\n  Generated template for the MapawebPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mapaweb</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/mapaweb/mapaweb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapawebPage);
    return MapawebPage;
}());

//# sourceMappingURL=mapaweb.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoCam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FotoCam = /** @class */ (function () {
    function FotoCam(camera, screenOrientation, localNotifications, storage) {
        //this.ruta_foto = '../../assets/imgs/mafasion.jpeg';
        //this.ruta_foto = 'assets/imgs/mafasion.jpeg';
        //this.ruta_foto = 'https://media.tenor.com/images/6894e9dc3a96c9fe13bba3c7517d0280/tenor.gif';    
        var _this = this;
        this.camera = camera;
        this.screenOrientation = screenOrientation;
        this.localNotifications = localNotifications;
        this.storage = storage;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // set a key/value
        this.storage.get('logueado').then(function (lado) {
            if (!lado) {
                console.log("ok es null");
                _this.mensaje = "primeravez";
                _this.storage.set('logueado', true);
            }
            else {
                console.log("ok NO es null");
                _this.mensaje = "siguientesveces";
            }
        }, function (error) { return console.log(" error al leer"); });
        // Or to get a key/value pair
        this.storage.get('foto').then(function (ok) {
            console.log("hay foto " + ok);
            if (ok == null) {
                console.log("ok es null");
            }
            else {
                console.log("ok NO es null");
                _this.ruta_foto = ok;
            }
        }, function (error) { return console.log(" error NO hay foto"); });
    }
    FotoCam.prototype.hazFoto = function () {
        var _this = this;
        console.log("toco hacer una foto");
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log("base64Image " + base64Image);
            _this.ruta_foto = base64Image;
            _this.storage.set('foto', base64Image);
            console.log("foto guardada");
        }, function (err) {
            console.log("hubo un error al echar la foto");
        });
        this.screenOrientation.onChange().subscribe(function () {
            console.log("Orientation Changed");
            _this.lanzaNotificacion();
        });
    };
    FotoCam.prototype.lanzaNotificacion = function () {
        this.localNotifications.schedule({
            title: 'Cambio la ortientación',
            text: 'Ahora es' + this.screenOrientation.type,
            actions: 'yes-no'
        });
    };
    FotoCam = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'fotocam',template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/fotocamp/fotocam.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Venga a echar una fotito!</h3>\n\n    \n  <input type="text" value={{mensaje}}><br>\n  <button ion-button icon-only (click)="hazFoto()">\n    <ion-icon name="camera"></ion-icon>\n  </button>\n    <img src={{ruta_foto}}><br>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/pages/fotocamp/fotocam.html"*/,
            styles: ["img {\n    border-radius: 50%;\n}"],
            providers: [__WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], FotoCam);
    return FotoCam;
}());

//# sourceMappingURL=fotocam.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_itunes_itunes__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_creditos_creditos__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modal_modal__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_formulario_formulario__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__validatorpwd_directive__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mapaweb_mapaweb__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_fotocamp_fotocam__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_itunes_itunes__["a" /* IonicComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_creditos_creditos__["a" /* IonicCreditosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_modal__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_formulario_formulario__["a" /* FormularioComponent */],
                __WEBPACK_IMPORTED_MODULE_15__validatorpwd_directive__["a" /* EqualValidator */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mapaweb_mapaweb__["a" /* MapawebPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fotocamp_fotocam__["a" /* FotoCam */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_itunes_itunes__["a" /* IonicComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_creditos_creditos__["a" /* IonicCreditosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_modal__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_formulario_formulario__["a" /* FormularioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mapaweb_mapaweb__["a" /* MapawebPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fotocamp_fotocam__["a" /* FotoCam */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__["a" /* LocalNotifications */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_itunes_itunes__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_formulario_formulario__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapaweb_mapaweb__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_fotocamp_fotocam__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    // estoyEnItunes : number;
    function MyApp(platform, menu, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Itunes', component: __WEBPACK_IMPORTED_MODULE_6__pages_itunes_itunes__["a" /* IonicComponent */] },
            { title: 'creditos', component: __WEBPACK_IMPORTED_MODULE_7__pages_creditos_creditos__["a" /* IonicCreditosComponent */] },
            { title: 'Modal Prueba', component: __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__["a" /* BasicPage */] },
            { title: 'Formulario', component: __WEBPACK_IMPORTED_MODULE_10__pages_formulario_formulario__["a" /* FormularioComponent */] },
            { title: 'Mapa web Page', component: __WEBPACK_IMPORTED_MODULE_11__pages_mapaweb_mapaweb__["a" /* MapawebPage */] },
            { title: 'Foto Cam', component: __WEBPACK_IMPORTED_MODULE_12__pages_fotocamp_fotocam__["a" /* FotoCam */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // this.estoyEnItunes = 0; //start counter
            // this.storage.get('estoyEnItunes').then((val) => {
            //   console.log('estoyEnItunes es', val);
            //   this.estoyEnItunes = val
            // });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
        // this.estoyEnItunes = this.estoyEnItunes + 1;  //counter up
        // //this.storage.set('estoyEnItunes', this.estoyEnItunes);
        // console.log ('mi contador es ', this.estoyEnItunes);
        // if ((this.estoyEnItunes % 2) === 0 || this.estoyEnItunes == null){
        //   this.nav.setRoot(HelloIonicPage);
        //   console.log('estas en la pagina de hello!')
        // } else {
        //   this.nav.setRoot(IonicComponent); 
        //   console.log('a escuchar musica!')
        // }
        //this.storage.set('estoyEnItunes', estoyEnItunes );
    };
    MyApp.prototype.contador = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/Dev1/Desktop/Projects/itunesExampleIonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItunesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItunesService = /** @class */ (function () {
    function ItunesService(http) {
        this.http = http;
    }
    ItunesService.prototype.buscar = function (busqueda) {
        var resultado;
        resultado = this.http.get("https://itunes.apple.com/search?term=" + busqueda + "&media=music&limit=20");
        return resultado;
    };
    ItunesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ItunesService);
    return ItunesService;
}());

//# sourceMappingURL=bitunes.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService_1 = LoginService;
    LoginService.prototype.postLogin = function (login) {
        var respuesta; //tipo de objeto
        var json_login = JSON.stringify(login); //objeto que queremos enviar
        console.log("JSON para enviar ", json_login);
        var cabecera = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]; //definir tipo de cabecera 
        cabecera.set('Content-type', 'application/json;charset=UTF-8'); //definir contenido de la cabecera
        respuesta = this.http.post(LoginService_1.DIRECCION_POST, json_login, { headers: cabecera, observe: "response" }); //enviar el post con los parametros y guardarlo dentro de variable respuesta
        return respuesta; //respuesta de la funcion
    };
    LoginService.DIRECCION_POST = "http://10.1.2.10:8080/appwebprofe/PostLogin";
    LoginService = LoginService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
    var LoginService_1;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
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


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (control) {
        var vdev = null;
        // self value (e.g. retype password)
        var password_repe = control.value; //esta es la contraseña repe
        // control value (e.g. password)
        var password_orginal = control.root.get(this.validateEqual).value; //cojes el valor de queal, q referencia al otro objeto
        console.log("Pasa por el validador");
        console.log("e = " + password_orginal);
        console.log("v = " + password_repe);
        if (!(password_orginal === password_repe)) {
            vdev = {
                validateEqual: false
            };
        }
        return vdev;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());

//# sourceMappingURL=validatorpwd.directive.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map