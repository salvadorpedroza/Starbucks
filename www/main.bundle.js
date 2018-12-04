webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-ventanas></app-ventanas>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'si funciona';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'DosOnzas-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ventanas_ventanas_component__ = __webpack_require__("./src/app/ventanas/ventanas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_slideshow__ = __webpack_require__("./node_modules/ngx-slideshow/fesm5/ngx-slideshow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preparacion_preparacion_component__ = __webpack_require__("./src/app/preparacion/preparacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__caja_caja_component__ = __webpack_require__("./src/app/caja/caja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leche_leche_component__ = __webpack_require__("./src/app/leche/leche.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__extra_extra_component__ = __webpack_require__("./src/app/extra/extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__crema_batida_crema_batida_component__ = __webpack_require__("./src/app/crema-batida/crema-batida.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__extra2_extra2_component__ = __webpack_require__("./src/app/extra2/extra2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_mongo_service__ = __webpack_require__("./src/app/services/mongo.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ventanas_ventanas_component__["a" /* ventanasComponent */],
                __WEBPACK_IMPORTED_MODULE_6__preparacion_preparacion_component__["a" /* PreparacionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__caja_caja_component__["a" /* CajaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__leche_leche_component__["a" /* LecheComponent */],
                __WEBPACK_IMPORTED_MODULE_9__extra_extra_component__["a" /* ExtraComponent */],
                __WEBPACK_IMPORTED_MODULE_10__crema_batida_crema_batida_component__["a" /* CremaBatidaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__extra2_extra2_component__["a" /* Extra2Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_slideshow__["a" /* NgxSlideshowModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_mongo_service__["a" /* MongoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/caja/caja.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-up{\r\n    height: 80%;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    /*background: #023f26;*/\r\n}\r\n\r\n.divbody{\r\n    background: rgb(238, 237, 236);\r\n    height: 87%;\r\n    width: 100%;\r\n}\r\n\r\n.productotitulo{\r\n    background: white;\r\n    border-radius: 8px;\r\n    border: 2px solid whitesmoke;;\r\n    margin-left: 2%;\r\n    /* margin-right: 2%; */\r\n    height: 2em;\r\n    -webkit-box-shadow: 1px 1px 3px 1px #bbb;\r\n            box-shadow: 1px 1px 3px 1px #bbb;\r\n    margin-top: .5em;\r\n    width: 96%;\r\n}\r\n\r\n.producto{\r\n    background: white;\r\n    border-radius: 8px;\r\n    border: 2px solid whitesmoke;;\r\n    margin-left: 2%;\r\n    /* margin-right: 2%; */\r\n    height: 3em;\r\n    -webkit-box-shadow: 1px 1px 3px 1px #bbb;\r\n            box-shadow: 1px 1px 3px 1px #bbb;\r\n    margin-top: .5em;\r\n    width: 96%;\r\n}\r\n\r\n.linea{\r\n    width: 100%;\r\n    height: 8%;\r\n    background: #023f26;\r\n    \r\n}\r\n\r\n.linea-sombra{\r\n    margin-bottom: 1%;\r\n    width: 96%;\r\n    margin-left: 2%;\r\n    border-bottom: solid 2px #ccc;\r\n    -webkit-box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 0.14);\r\n    box-shadow: -1px 3px 3px 0px rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.sth2{\r\n    color: #023f26;\r\n    padding-top: .6em;\r\n    padding-left: 3em;\r\n}\r\n\r\n.divupselect{\r\n    height: 8%;\r\n    width: 76%;\r\n    float: left;\r\n}\r\n\r\n.items{\r\n    float: left;\r\n    margin-top: 2%;\r\n    margin-right: 0;\r\n    border-radius: 4px;\r\n    margin-left: 2%;\r\n    height: 93%;\r\n    width: 96%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n\r\n}\r\n\r\n.btn-new-prod{\r\n    background: #05681b;\r\n    padding-left: 1.5em;\r\n    width: 20em;\r\n    float: left;\r\n    height: 3.5em;\r\n    margin-top: 7px;\r\n    margin-bottom: 5px;\r\n    line-height: 3.555em;\r\n}\r\n\r\n.btn-cancel-prod{\r\n    float: left;\r\n    margin-left: 4%;\r\n    background: #ed4933;;\r\n}\r\n\r\n.btn-pay-prod{\r\n    float: right;\r\n    margin-right: 4%;\r\n}\r\n\r\n.divcarrito{\r\n    height: 68%;\r\n    overflow: scroll;\r\n}\r\n\r\n.divcarrito::-webkit-scrollbar {\r\n    width: 1em;\r\n}\r\n\r\n.spanproducto{\r\n    color:black; \r\n    text-align: center; \r\n    font-family:sans-serif; \r\n    font-weight: bold;\r\n    color: #023f26;\r\n    margin-left: 2em;\r\n    margin-top:1em;\r\n}\r\n\r\n.divcantidad{\r\n    margin-top: .1%;\r\n    height: 96%;\r\n    width: 15.5%;\r\n    float: left;\r\n}\r\n\r\n.divtitulocantidad{\r\n    margin-top: .1%;\r\n    width: 15%;\r\n    float: left;\r\n}\r\n\r\n.divcantidad2{\r\n    margin-top: .1%;\r\n    height: 96%;\r\n    width: 15%;\r\n    float: left;\r\n    margin-left: 8%;\r\n}\r\n\r\n.diveliminar{\r\n    margin-top: .1%;\r\n    height: 96%;\r\n    width: 15%;\r\n    float: left;\r\n    margin-left: 3%;\r\n}\r\n\r\n.divtitulocantidad2{\r\n    margin-top: .1%;\r\n    height: 96%;\r\n    width: 15%;\r\n    float: left;\r\n    margin-left: 9%;\r\n}\r\n\r\n.btnmenos{\r\n    float: left;\r\n    background: #05681b;\r\n    height: 100%;\r\n    width: 28%;\r\n    line-height: .8em;\r\n    padding: 0;\r\n    padding-left: 6%;\r\n    font-size: 2.8em;\r\n}\r\n\r\n.btnmas{\r\n    float: left;\r\n    background: #05681b;\r\n    height: 100%;\r\n    width: 28%;\r\n    line-height: .95em;\r\n    padding: 0;\r\n    padding-left: 6%;\r\n    font-size: 2.8em;\r\n}\r\n\r\n.btneliminar{\r\n    float: left;\r\n    background: #023f26;\r\n    height: 100%;\r\n    width: 50%;\r\n    line-height: 1.55em;\r\n    padding: 0;\r\n    padding-left: 6%;\r\n    font-size: 1.8em;\r\n    margin-left: 20%;\r\n}\r\n\r\n.inputcantidad{\r\n    float: left;\r\n    height: 100%;\r\n    font-size: 2em;\r\n    color: gray;\r\n    padding-top: 4%;\r\n    border: 2px solid lightgray;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    width: 43%;\r\n    text-align: center;\r\n }\r\n\r\n.pname{\r\n     margin-top: .7%;\r\n     float: left;\r\n     width: 21%;\r\n }\r\n\r\n.pnametitulo{\r\n    margin-top: .1%;\r\n    float: left;\r\n    width: 20%;\r\n}\r\n\r\n.precio{\r\n    height: 100%;\r\n    font-size: 2em;\r\n    margin-left: 10%;\r\n    color: gray;\r\n    padding-top: 4%;\r\n    border: 2px solid lavender;\r\n    border-radius: 4px;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n }\r\n\r\n.divpagar{\r\n    margin-left: 0;\r\n    width: 100%;\r\n }\r\n\r\n.claseboto{\r\n     background: #ed4933;\r\n }\r\n\r\n.claseboto:hover{\r\n    background: #05681b;\r\n}\r\n\r\n.divtotal{\r\n    margin-top: .1%;\r\n    height: 96%;\r\n    width: 15%;\r\n    float: right;\r\n}\r\n\r\n.spantotal{\r\n    color:black; \r\n    text-align: center; \r\n    font-family:sans-serif; \r\n    font-weight: bold;\r\n    color: #023f26;\r\n    margin-left: 2em;\r\n    margin-top:1em;\r\n}\r\n\r\n.total{\r\n    background: white;\r\n    border-radius: 8px;\r\n    border: 2px solid whitesmoke;;\r\n    margin-left: 2%;\r\n    /* margin-right: 2%; */\r\n    height: 2em;\r\n    -webkit-box-shadow: 1px 1px 3px 1px #bbb;\r\n            box-shadow: 1px 1px 3px 1px #bbb;\r\n    margin-top: .5em;\r\n    width: 96%;\r\n}"

/***/ }),

/***/ "./src/app/caja/caja.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%\" >\r\n  <div class=\"headown\">\r\n      <div class=\"linea\"></div>\r\n      <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n      <label class=\"titulo\">Dos Onzas </label>\r\n    </div>\r\n    <div class=\"modal fade\"  id=\"mostrarmodal6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n           <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n             \r\n                 <h4 style=\"color:black; text-align: center;\">Todos sus productos se elminaran    ¿esta seguro que desea continuar?</h4>\r\n          </div>\r\n              \r\n              <div class=\"modal-footer\">\r\n             <a href=\"#\" style=\"float: left;\"data-dismiss=\"modal\" class=\"button2 special2 \">Cancelar</a>\r\n             <a href=\"#\" style=\"background: #ed4933;\"data-dismiss=\"modal\" class=\"button2 special2 \"(click)=\"cancelar()\">Aceptar</a>\r\n          </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n    \r\n\r\n    <div class=\"divbody\">\r\n            <div class=\"modal fade divpagar\"  id=\"mostrarmodal8\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\" style=\"  width:95%; margin-left:2%; margin-top:5%; margin-right:0;margin-bottom:0; height: 90%;\">\r\n                            <div class=\"modal-content\" style=\"  width:100%; height: 90%;\">\r\n                               <div class=\"modal-header\" style=\"height: 15%\">\r\n                              \r\n                                  <h2 style=\"color:black; text-align: center;\">Ticket de compra</h2>\r\n                           </div>\r\n                           <div class=\"productotitulo\" >\r\n                                <div class=\"pnametitulo\"><span class=\"spanproducto\">Producto</span></div>\r\n                                <div class=\"divtitulocantidad\" style=\"margin-right:5%\">\r\n                                    <span style=\"margin-left: 20%;\" class=\"spanproducto\">Precio</span>   \r\n                                </div>\r\n                        \r\n                                <div class=\"divtitulocantidad\">\r\n                                    <span class=\"spanproducto\">Cantidad</span>    \r\n                                </div>\r\n                                <div class=\"divtitulocantidad2\">\r\n                                    <span style=\"margin-left: 3%;\" class=\"spanproducto\">Importe</span>   \r\n                                </div>\r\n                                <div class=\"divtotal\">\r\n                                    <span style=\"margin-left: 3%;\" class=\"spantotal\">Total: ${{total}}</span>   \r\n                                </div>\r\n                                \r\n                        </div>\r\n                           <div *ngFor=\"let listaproducto of listaproductos\" class=\"producto\" >\r\n                                <div class=\"pname\"><span class=\"spanproducto\">{{listaproducto.nombre}}</span></div>\r\n                                <div class=\"divcantidad\" style=\"margin-right:2%\">\r\n                                    <label class=\"precio\">$ {{listaproducto.precio}}</label>  \r\n                                </div>\r\n                     \r\n                                <div class=\"divcantidad\">\r\n                                  <a class=\"button2 special2 btnmenos\" style=\"color:white;background:white\" (click)=\"resta(listaproducto)\">-</a>\r\n                                  <label class=\"inputcantidad\">{{listaproducto.cantidad}}</label>   \r\n                                  <a class=\"button2 special2 btnmas\" style=\"color:white;background:white\" (click)=\"suma(listaproducto)\">+</a>      \r\n                                </div>\r\n                                <div class=\"divcantidad2\">\r\n                                    <label class=\"precio\">$ {{listaproducto.precio*listaproducto.cantidad}}</label>   \r\n                                </div>\r\n                                \r\n                            </div> \r\n                            <!--\r\n                            <div class=\"total\">\r\n                                <div class=\"divtotal\">\r\n                                    <span style=\"margin-left: 3%;\" class=\"spantotal\">Total: {{total}}</span>   \r\n                                </div>\r\n                            </div>-->\r\n                              <a href=\"#\" data-dismiss=\"modal\" style=\"    position: absolute;\r\n                              bottom: 20px;\r\n                              left: 1000px;\" class=\"button2 special2 \" (click)=\"cancelar()\" >Aceptar</a>\r\n                           \r\n                            </div>\r\n                         </div>\r\n            </div>\r\n            \r\n        <div class=\"items\">\r\n          <div class=\"divupselect\">\r\n            <h3 class=\"sth2\"> Tus productos </h3>\r\n          </div>\r\n          <a class=\"button2 special2 btn-new-prod\" (click)=\"agregar_otro()\"  >+ Agregar otro</a>\r\n         \r\n          <hr class=\"linea-sombra\"> \r\n        <!--  <ul class=\"ulitems\">\r\n            <li *ngFor=\"let listaproducto of listaproductos\" class=\"liimg\" >\r\n                <img class=\"sizeimg\" src=\"{{listaproducto.path}}\" > \r\n                <p>{{listaproducto.title}}</p>\r\n            </li>\r\n          </ul>\r\n        -->\r\n        <div class=\"divcarrito\">\r\n            <div class=\"productotitulo\" >\r\n                    <div class=\"pnametitulo\"><span class=\"spanproducto\">Producto</span></div>\r\n                    <div class=\"divtitulocantidad\" style=\"margin-right:5%\">\r\n                        <span style=\"margin-left: 20%;\" class=\"spanproducto\">Precio </span>   \r\n                    </div>\r\n            \r\n                    <div class=\"divtitulocantidad\">\r\n                        <span class=\"spanproducto\">Cantidad</span>    \r\n                    </div>\r\n                    <div class=\"divtitulocantidad2\">\r\n                        <span style=\"margin-left: 3%;\" class=\"spanproducto\">Importe</span>   \r\n                    </div>\r\n                    <div class=\"divtitulocantidad\">\r\n                        <span style=\"margin-left: 3%;\" class=\"spanproducto\">Eliminar Producto</span>   \r\n                    </div>\r\n        \r\n            </div>\r\n            <div *ngFor=\"let listaproducto of listaproductos\" class=\"producto\" >\r\n                <div class=\"pname\"><span class=\"spanproducto\">{{listaproducto.nombre}}</span></div>\r\n                <div class=\"divcantidad\" style=\"margin-right:2%\">\r\n                    <label class=\"precio\">$ {{listaproducto.precio}}</label>   \r\n                </div>\r\n     \r\n                <div class=\"divcantidad\">\r\n                  <a class=\"button2 special2 btnmenos\" (click)=\"resta(listaproducto)\">-</a>\r\n                  <label class=\"inputcantidad\">{{listaproducto.cantidad}}</label>   \r\n                  <a class=\"button2 special2 btnmas\" (click)=\"suma(listaproducto)\">+</a>      \r\n                </div>\r\n                <div class=\"divcantidad2\">\r\n                    <label class=\"precio\">$ {{listaproducto.precio*listaproducto.cantidad}}</label>   \r\n                </div>\r\n                <div class=\"diveliminar\">\r\n                    <a class=\"button2 special2 btneliminar\" (click)=\"eliminar_producto(listaproducto)\"><i class=\"fa fa-trash\"></i></a>   \r\n                </div>\r\n                \r\n   \r\n            </div>\r\n        </div>\r\n\r\n        <a class=\"button2 special2 btn-cancel-prod\" (click)=\"confirmar()\"  > cancelar</a>\r\n        <a class=\"button2 special2 btn-pay-prod\" (click)=\"pagar()\"  > pagar</a>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal fade\"  id=\"mostrarmodal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n           <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n             \r\n                 <h2 style=\"color:black; text-align: center;\">Elige al menos un producto</h2>\r\n          </div>\r\n              \r\n              <div class=\"modal-footer\">\r\n             <a href=\"#\" data-dismiss=\"modal\" class=\"button2 special2 \">Cerrar</a>\r\n          </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n\r\n</div>        \r\n"

/***/ }),

/***/ "./src/app/caja/caja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CajaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mongo_service__ = __webpack_require__("./src/app/services/mongo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CajaComponent = /** @class */ (function () {
    function CajaComponent(service) {
        this.service = service;
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.info = { destino: "seleccion" };
        this.total = 0;
        //this.actuallista = new EventEmitter<[{}]>();
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); //copia esta
    }
    CajaComponent.prototype.ngOnInit = function () {
    };
    CajaComponent.prototype.suma = function (producto) {
        for (var i = 0; i < this.listaproductos.length; i++) {
            if (this.listaproductos[i] == producto) {
                this.listaproductos[i].cantidad++;
            }
        }
    };
    CajaComponent.prototype.resta = function (producto) {
        for (var i = 0; i < this.listaproductos.length; i++) {
            if (this.listaproductos[i] == producto) {
                if (this.listaproductos[i].cantidad > 1)
                    this.listaproductos[i].cantidad--;
            }
        }
    };
    CajaComponent.prototype.eliminar_producto = function (producto) {
        for (var i = 0; i < this.listaproductos.length; i++) {
            if (this.listaproductos[i] == producto) {
                this.listaproductos.splice(i, 1);
                break;
            }
        }
    };
    CajaComponent.prototype.confirmar = function () {
        $(document).ready(function () {
            $("#mostrarmodal6").modal("show");
        });
    };
    CajaComponent.prototype.cancelar = function () {
        this.listaproductos.splice(0, this.listaproductos.length);
        this.info.destino = "inicio";
        this.boton.emit(this.info);
    };
    CajaComponent.prototype.agregar_otro = function () {
        this.info.destino = "seleccion";
        this.boton.emit(this.info);
    };
    CajaComponent.prototype.pagar = function () {
        if (this.listaproductos != undefined) {
            if (this.listaproductos.length > 0) {
                this.total = 0;
                this.service.update(this.listaproductos);
                for (var i = 0; i < this.listaproductos.length; i++) {
                    this.total = this.total + this.listaproductos[i].precio * this.listaproductos[i].cantidad;
                }
                $(document).ready(function () {
                    $("#mostrarmodal8").modal("show");
                });
            }
            else {
                $(document).ready(function () {
                    $("#mostrarmodal10").modal("show");
                });
            }
        }
        else {
            $(document).ready(function () {
                $("#mostrarmodal10").modal("show");
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], CajaComponent.prototype, "boton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], CajaComponent.prototype, "listaproductos", void 0);
    CajaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-caja',
            template: __webpack_require__("./src/app/caja/caja.component.html"),
            styles: [__webpack_require__("./src/app/caja/caja.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_mongo_service__["a" /* MongoService */]])
    ], CajaComponent);
    return CajaComponent;
}());



/***/ }),

/***/ "./src/app/crema-batida/crema-batida.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-up{\r\n    height: 85%;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    \r\n    /*background: #023f26;*/\r\n}\r\n\r\n.divbody{\r\n    background: rgb(238, 237, 236);\r\n    height: 87%;\r\n    width: 100%;\r\n}\r\n\r\n.linea{\r\n    width: 100%;\r\n    height: 8%;\r\n    background: #023f26\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.sth2{\r\n    padding-top: .4em;\r\n    padding-left: 3em;\r\n}\r\n\r\n.divupselect{\r\n    height: 10%;\r\n}\r\n\r\n.items{\r\n    float: left;\r\n    margin-right: 0;\r\n    border-radius: 4px;\r\n    margin-left: 1%;\r\n    height: 96%;\r\n    width: 77%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.vaso{\r\n    border-radius: 4px;\r\n    float: right;\r\n    margin-right: 2%;\r\n    height: 96%;\r\n    width: 18%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.div-move-window{\r\n    border-radius: 4px;\r\n    margin-top: 4px;\r\n    height: 25%;\r\n    margin-left: 1%;\r\n    width: 97%;\r\n    background: #fff;    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);    box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n\r\n}\r\n\r\n.sizeimg{\r\n    background-size: 100% 100%;\r\n    height: 12em;\r\n    width: 12em;\r\n}\r\n\r\n.liimg{\r\n    -webkit-box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n    float: left;\r\n    height: 12em;\r\n    /* width: 12em; */\r\n    padding: 0;\r\n    margin-left: 2%;\r\n    margin-top: 7%;\r\n    border-radius: 4px;\r\n    border: 2px solid ghostwhite;\r\n}\r\n\r\n.ulitems{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.titulo-color{\r\n    height: 95%;\r\n    background: #076940b9;\r\n    width: 74%;\r\n    border-radius: 6px;\r\n    position: relative;\r\n    top: 49%;\r\n    left: 3%;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}"

/***/ }),

/***/ "./src/app/crema-batida/crema-batida.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"height:100%\" >\r\n    <div class=\"headown\">\r\n        <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n        <label class=\"titulo\">Dos Onzas </label>\r\n        \r\n      </div>\r\n\r\n\r\n      <div class=\"modal fade\"  id=\"mostrarmodal4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n           <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n             \r\n                 <h2 style=\"color:black; text-align: center;\">Elige una opcion</h2>\r\n          </div>\r\n              \r\n              <div class=\"modal-footer\">\r\n             <a href=\"#\" data-dismiss=\"modal\" class=\"button2 special2 \">Cerrar</a>\r\n          </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  \r\n      <div class=\"divbody\">\r\n        <div class=\"divupselect\">\r\n          <div class=\"titulo-color\">\r\n            <h2 class=\"sth2\"> Elige: </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"s1\" (click)=\"concrema()\" style=\"position: absolute;  left: 3.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s2\" (click)=\"sincrema()\" style=\"position: absolute;  left: 20.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n        <div class=\"div-up\">\r\n          <div class=\"items\">\r\n            <ul class=\"ulitems\">\r\n              <li *ngFor=\"let menuItem of menuItems\" class=\"liimg\" >\r\n                  <img class=\"sizeimg\" src=\"{{menuItem.path}}\" > \r\n                  <p style=\"color:black; text-align: center; font-family:sans-serif; \">{{menuItem.title}}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"vaso\">\r\n            <div style=\"position: relative;\">\r\n              <div style=\"position: absolute; left: 65px; top: 30px; font-family:sans-serif; color: black;\">PROGRESO </div>\r\n              \r\n            </div>\r\n            <div style=\"position: relative;\">\r\n               <div style=\"position: absolute; left: 0px; top: 60px; \">\r\n                  <img src=\"../../assets/images/vaso01.png\" width=\"245\" height=\"280\" border=\"0\">\r\n               </div>\r\n              </div>\r\n  \r\n          </div>\r\n        </div>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);  \"(click)=\"regresar()\"  >Regresar</a>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 800px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14); \"(click)=\"siguiente()\"  >Siguiente</a>\r\n        <a class=\"scrolly button special\"style=\"position: absolute; left: 1126px;\r\n        top: 75%; cursor: pointer; display: inline-block; font-size: 0.8em; font-weight: 600;\r\n         height: 5.125em; width: 13em; letter-spacing: 0.225em; line-height: 5.125em; padding: 0 2.75em;\r\n        text-align: center; text-decoration: none; text-transform: uppercase; white-space: nowrap;\r\n         overflow: hidden; text-overflow: ellipsis; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\"\r\n          (click)=\"seleccion()\">CANCELAR</a>\r\n  \r\n          <style>\r\n            .s1{\r\n               opacity: 0.6;\r\n               border-radius: 4px;\r\n               transition:all .5s ease-in-out;\r\n            }\r\n            .s2{\r\n              opacity: 0.6;\r\n              border-radius: 4px;\r\n              transition:all .5s ease-in-out;\r\n            }\r\n            .s3{\r\n               opacity: 0.6;\r\n               border-radius: 4px;\r\n               transition:all .5s ease-in-out;\r\n            }\r\n            .s4{\r\n              opacity: 0.6;\r\n              border-radius: 4px;\r\n              transition:all .5s ease-in-out;\r\n            }\r\n            </style>\r\n  \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/crema-batida/crema-batida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CremaBatidaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CremaBatidaComponent = /** @class */ (function () {
    function CremaBatidaComponent() {
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.info = { destino: "", crema: "" };
        this.d = 0;
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.menuItems = [
            { path: '../../assets/images/cremabatida.png', title: 'CON CREMA BATIDA' },
            { path: '../../assets/images/sincremabatida.png', title: 'SIN CREMA BATIDA' }
        ];
    }
    CremaBatidaComponent.prototype.ngOnInit = function () {
    };
    CremaBatidaComponent.prototype.siguiente = function () {
        if (this.d == 1) {
            $(document).ready(function () {
                {
                    $('.s4').css('border', '0px');
                    $('.s1').css('border', '0px');
                    $('.s2').css('border', '0px');
                    $('.s3').css('border', '0px');
                }
            });
            this.info.destino = "caja";
            this.boton.emit(this.info);
        }
        else {
            $(document).ready(function () {
                $("#mostrarmodal4").modal("show");
            });
        }
    };
    CremaBatidaComponent.prototype.regresar = function () {
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
        this.info.destino = "extra";
        this.boton.emit(this.info);
    };
    CremaBatidaComponent.prototype.seleccion = function () {
        this.info.destino = "seleccion";
        this.boton.emit(this.info);
    };
    CremaBatidaComponent.prototype.concrema = function () {
        this.info.crema = "Si";
        this.d = 1;
        $(document).ready(function () {
            {
                $('.s1').css('border', '4px solid #023f26');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    CremaBatidaComponent.prototype.sincrema = function () {
        this.info.crema = "No";
        this.d = 1;
        $(document).ready(function () {
            {
                $('.s2').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], CremaBatidaComponent.prototype, "boton", void 0);
    CremaBatidaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-crema-batida',
            template: __webpack_require__("./src/app/crema-batida/crema-batida.component.html"),
            styles: [__webpack_require__("./src/app/crema-batida/crema-batida.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CremaBatidaComponent);
    return CremaBatidaComponent;
}());



/***/ }),

/***/ "./src/app/extra/extra.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-up{\r\n    height: 85%;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    \r\n    /*background: #023f26;*/\r\n}\r\n\r\n.divbody{\r\n    background: rgb(238, 237, 236);\r\n    height: 87%;\r\n    width: 100%;\r\n}\r\n\r\n.linea{\r\n    width: 100%;\r\n    height: 8%;\r\n    background: #023f26\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.sth2{\r\n    padding-top: .4em;\r\n    padding-left: 3em;\r\n}\r\n\r\n.divupselect{\r\n    height: 10%;\r\n}\r\n\r\n.items{\r\n    float: left;\r\n    margin-right: 0;\r\n    border-radius: 4px;\r\n    margin-left: 1%;\r\n    height: 96%;\r\n    width: 77%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.vaso{\r\n    border-radius: 4px;\r\n    float: right;\r\n    margin-right: 2%;\r\n    height: 96%;\r\n    width: 18%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.div-move-window{\r\n    border-radius: 4px;\r\n    margin-top: 4px;\r\n    height: 25%;\r\n    margin-left: 1%;\r\n    width: 97%;\r\n    background: #fff;    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);    box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n\r\n}\r\n\r\n.sizeimg{\r\n    background-size: 100% 100%;\r\n    height: 12em;\r\n    width: 12em;\r\n}\r\n\r\n.liimg{\r\n    -webkit-box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n    float: left;\r\n    height: 12em;\r\n    /* width: 12em; */\r\n    padding: 0;\r\n    margin-left: 2%;\r\n    margin-top: 7%;\r\n    border-radius: 4px;\r\n    border: 2px solid ghostwhite;\r\n}\r\n\r\n.ulitems{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.titulo-color{\r\n    height: 95%;\r\n    background: #076940b9;\r\n    width: 74%;\r\n    border-radius: 6px;\r\n    position: relative;\r\n    top: 49%;\r\n    left: 3%;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}"

/***/ }),

/***/ "./src/app/extra/extra.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"height:100%\" >\r\n    <div class=\"headown\">\r\n        <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n        <label class=\"titulo\">Dos Onzas </label>\r\n        \r\n      </div>\r\n\r\n      <div class=\"modal fade\"  id=\"mostrarmodal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\">\r\n           <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n             \r\n                 <h2 style=\"color:black; text-align: center;\">Elige una opcion</h2>\r\n          </div>\r\n              \r\n              <div class=\"modal-footer\">\r\n             <a href=\"#\" data-dismiss=\"modal\" class=\"button2 special2 \">Cerrar</a>\r\n          </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n  \r\n      <div class=\"divbody\">\r\n        <div class=\"divupselect\">\r\n          <div class=\"titulo-color\">\r\n            <h2 class=\"sth2\"> Elige el ingrediente </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"s1\" (click)=\"ingre1()\" style=\"position: absolute;  left: 3.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s2\" (click)=\"ingre2()\" style=\"position: absolute;  left: 20.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s3\" (click)=\"ingre3()\" style=\"position: absolute;  left: 37.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s4\" (click)=\"ingre4()\" style=\"position: absolute;  left: 54.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n        <div class=\"div-up\">\r\n          <div class=\"items\">\r\n            <ul class=\"ulitems\">\r\n              <li *ngFor=\"let menuItem of menuItems\" class=\"liimg\" >\r\n                  <img class=\"sizeimg\" src=\"{{menuItem.path}}\" > \r\n                  <p style=\"color:black; text-align: center; font-family:sans-serif; \">{{menuItem.title}}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"vaso\">\r\n            <div style=\"position: relative;\">\r\n              <div style=\"position: absolute; left: 65px; top: 30px; font-family:sans-serif; color: black;\">PROGRESO </div>\r\n              \r\n            </div>\r\n            <div style=\"position: relative;\">\r\n               <div style=\"position: absolute; left: 0px; top: 60px; \">\r\n                  <img src=\"../../assets/images/vaso01.png\" width=\"245\" height=\"280\" border=\"0\">\r\n               </div>\r\n              </div>\r\n  \r\n          </div>\r\n        </div>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);  \"(click)=\"regresar()\"  >Regresar</a>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 800px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14); \"(click)=\"siguiente()\"  >Siguiente</a>\r\n        <a class=\"scrolly button special\"style=\"position: absolute; left: 1126px;\r\n        top: 75%; cursor: pointer; display: inline-block; font-size: 0.8em; font-weight: 600;\r\n         height: 5.125em; width: 13em; letter-spacing: 0.225em; line-height: 5.125em; padding: 0 2.75em;\r\n        text-align: center; text-decoration: none; text-transform: uppercase; white-space: nowrap;\r\n         overflow: hidden; text-overflow: ellipsis; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\"\r\n          (click)=\"seleccion()\">CANCELAR</a>\r\n  \r\n          <style>\r\n            .s1{\r\n               opacity: 0.6;\r\n               border-radius: 4px;\r\n               transition:all .5s ease-in-out;\r\n            }\r\n            .s2{\r\n              opacity: 0.6;\r\n              border-radius: 4px;\r\n              transition:all .5s ease-in-out;\r\n            }\r\n            .s3{\r\n               opacity: 0.6;\r\n               border-radius: 4px;\r\n               transition:all .5s ease-in-out;\r\n            }\r\n            .s4{\r\n              opacity: 0.6;\r\n              border-radius: 4px;\r\n              transition:all .5s ease-in-out;\r\n            }\r\n            </style>\r\n  \r\n  \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/extra/extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtraComponent = /** @class */ (function () {
    function ExtraComponent() {
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.info = { destino: "", ingrediente: "" };
        this.z = 0;
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.menuItems = [
            { path: '../../assets/images/almendrapolvo.jpg', title: 'ALMENDRAS' },
            { path: '../../assets/images/cocopolvo.jpg', title: 'COCO' },
            { path: '../../assets/images/nuezpolvo.jpg', title: 'NUEZ' },
            { path: '../../assets/images/chocolatepolvo.jpg', title: 'CHOCOLATE' }
        ];
    }
    ExtraComponent.prototype.ngOnInit = function () {
    };
    ExtraComponent.prototype.siguiente = function () {
        if (this.z == 1) {
            $(document).ready(function () {
                {
                    $('.s4').css('border', '0px');
                    $('.s1').css('border', '0px');
                    $('.s2').css('border', '0px');
                    $('.s3').css('border', '0px');
                }
            });
            this.info.destino = "crema";
            this.boton.emit(this.info);
        }
        else {
            $(document).ready(function () {
                $("#mostrarmodal3").modal("show");
            });
        }
    };
    ExtraComponent.prototype.regresar = function () {
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
        this.info.destino = "leche";
        this.boton.emit(this.info);
    };
    ExtraComponent.prototype.seleccion = function () {
        this.info.destino = "seleccion";
        this.boton.emit(this.info);
    };
    ExtraComponent.prototype.ingre1 = function () {
        this.info.ingrediente = "almendras";
        this.z = 1;
        $(document).ready(function () {
            {
                $('.s1').css('border', '4px solid #023f26');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    ExtraComponent.prototype.ingre2 = function () {
        this.info.ingrediente = "coco";
        this.z = 1;
        $(document).ready(function () {
            {
                $('.s2').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    ExtraComponent.prototype.ingre3 = function () {
        this.info.ingrediente = "nuez";
        this.z = 1;
        $(document).ready(function () {
            {
                $('.s3').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    ExtraComponent.prototype.ingre4 = function () {
        this.info.ingrediente = "chocolate";
        this.z = 1;
        $(document).ready(function () {
            {
                $('.s4').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], ExtraComponent.prototype, "boton", void 0);
    ExtraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-extra',
            template: __webpack_require__("./src/app/extra/extra.component.html"),
            styles: [__webpack_require__("./src/app/extra/extra.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraComponent);
    return ExtraComponent;
}());



/***/ }),

/***/ "./src/app/extra2/extra2.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-up{\r\n    height: 85%;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    \r\n    /*background: #023f26;*/\r\n}\r\n\r\n.divbody{\r\n    background: rgb(238, 237, 236);\r\n    height: 87%;\r\n    width: 100%;\r\n}\r\n\r\n.linea{\r\n    width: 100%;\r\n    height: 8%;\r\n    background: #023f26\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.sth2{\r\n    padding-top: .4em;\r\n    padding-left: 3em;\r\n}\r\n\r\n.divupselect{\r\n    height: 10%;\r\n}\r\n\r\n.items{\r\n    float: left;\r\n    margin-right: 0;\r\n    border-radius: 4px;\r\n    margin-left: 1%;\r\n    height: 96%;\r\n    width: 77%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.vaso{\r\n    border-radius: 4px;\r\n    float: right;\r\n    margin-right: 2%;\r\n    height: 96%;\r\n    width: 18%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.div-move-window{\r\n    border-radius: 4px;\r\n    margin-top: 4px;\r\n    height: 25%;\r\n    margin-left: 1%;\r\n    width: 97%;\r\n    background: #fff;    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);    box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n\r\n}\r\n\r\n.sizeimg{\r\n    background-size: 100% 100%;\r\n    height: 12em;\r\n    width: 12em;\r\n}\r\n\r\n.liimg{\r\n    -webkit-box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n    float: left;\r\n    height: 12em;\r\n    /* width: 12em; */\r\n    padding: 0;\r\n    margin-left: 2%;\r\n    margin-top: 7%;\r\n    border-radius: 4px;\r\n    border: 2px solid ghostwhite;\r\n}\r\n\r\n.ulitems{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.titulo-color{\r\n    height: 95%;\r\n    background: #076940b9;\r\n    width: 74%;\r\n    border-radius: 6px;\r\n    position: relative;\r\n    top: 49%;\r\n    left: 3%;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}"

/***/ }),

/***/ "./src/app/extra2/extra2.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"height:100%\" >\r\n    <div class=\"headown\">\r\n        <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n        <label class=\"titulo\">Dos Onzas </label>\r\n        \r\n      </div>\r\n  \r\n      <div class=\"divbody\">\r\n        <div class=\"divupselect\">\r\n          <div class=\"titulo-color\">\r\n            <h2 class=\"sth2\"> Elige el ingrediente </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"div-up\">\r\n          <div class=\"items\">\r\n            <ul class=\"ulitems\">\r\n              <li *ngFor=\"let menuItem of menuItems\" class=\"liimg\" >\r\n                  <img class=\"sizeimg\" src=\"{{menuItem.path}}\" > \r\n                  <p style=\"color:black; text-align: center; font-family:sans-serif; \">{{menuItem.title}}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"vaso\">\r\n            <div style=\"position: relative;\">\r\n              <div style=\"position: absolute; left: 65px; top: 30px; font-family:sans-serif; color: black;\">PROGRESO </div>\r\n              \r\n            </div>\r\n            <div style=\"position: relative;\">\r\n               <div style=\"position: absolute; left: 0px; top: 60px; \">\r\n                  <img src=\"../../assets/images/vaso01.png\" width=\"245\" height=\"280\" border=\"0\">\r\n               </div>\r\n              </div>\r\n  \r\n          </div>\r\n        </div>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);  \"(click)=\"seleccion()\"  >Regresar</a>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 800px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14); \"(click)=\"caja()\"  >Siguiente</a>\r\n        <a class=\"scrolly button special\"style=\"position: absolute; left: 1126px;\r\n        top: 75%; cursor: pointer; display: inline-block; font-size: 0.8em; font-weight: 600;\r\n         height: 5.125em; width: 13em; letter-spacing: 0.225em; line-height: 5.125em; padding: 0 2.75em;\r\n        text-align: center; text-decoration: none; text-transform: uppercase; white-space: nowrap;\r\n         overflow: hidden; text-overflow: ellipsis; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\"\r\n          (click)=\"inicio()\">CANCELAR</a>\r\n  \r\n          \r\n  \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/extra2/extra2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Extra2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Extra2Component = /** @class */ (function () {
    function Extra2Component() {
        this.menuItems = [
            { path: '../../assets/images/chocochips.jpg', title: 'CHOCO CHIPS' },
            { path: '../../assets/images/chispasdecolores.jpg', title: 'CHISPAS DE COLORES' },
            { path: '../../assets/images/canelaenpolvo.jpg', title: 'CANELA' },
            { path: '../../assets/images/lunetas.jpeg', title: 'LUNETAS' }
        ];
    }
    Extra2Component.prototype.ngOnInit = function () {
    };
    Extra2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-extra2',
            template: __webpack_require__("./src/app/extra2/extra2.component.html"),
            styles: [__webpack_require__("./src/app/extra2/extra2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Extra2Component);
    return Extra2Component;
}());



/***/ }),

/***/ "./src/app/leche/leche.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-up{\r\n    height: 85%;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    \r\n    /*background: #023f26;*/\r\n}\r\n\r\n.divbody{\r\n    background: rgb(238, 237, 236);\r\n    height: 87%;\r\n    width: 100%;\r\n}\r\n\r\n.linea{\r\n    width: 100%;\r\n    height: 8%;\r\n    background: #023f26\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.sth2{\r\n    padding-top: .4em;\r\n    padding-left: 3em;\r\n}\r\n\r\n.divupselect{\r\n    height: 10%;\r\n}\r\n\r\n.items{\r\n    float: left;\r\n    margin-right: 0;\r\n    border-radius: 4px;\r\n    margin-left: 1%;\r\n    height: 96%;\r\n    width: 77%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.vaso{\r\n    border-radius: 4px;\r\n    float: right;\r\n    margin-right: 2%;\r\n    height: 96%;\r\n    width: 18%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.div-move-window{\r\n    border-radius: 4px;\r\n    margin-top: 4px;\r\n    height: 25%;\r\n    margin-left: 1%;\r\n    width: 97%;\r\n    background: #fff;    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);    box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n\r\n}\r\n\r\n.sizeimg{\r\n    background-size: 100% 100%;\r\n    height: 12em;\r\n    width: 12em;\r\n}\r\n\r\n.liimg{\r\n    -webkit-box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n    float: left;\r\n    height: 12em;\r\n    /* width: 12em; */\r\n    padding: 0;\r\n    margin-left: 2%;\r\n    margin-top: 7%;\r\n    border-radius: 4px;\r\n    border: 2px solid ghostwhite;\r\n}\r\n\r\n.ulitems{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.titulo-color{\r\n    height: 95%;\r\n    background: #076940b9;\r\n    width: 74%;\r\n    border-radius: 6px;\r\n    position: relative;\r\n    top: 49%;\r\n    left: 3%;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}"

/***/ }),

/***/ "./src/app/leche/leche.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"height:100%\" >\r\n    <div class=\"headown\">\r\n        <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n        <label class=\"titulo\">Dos Onzas </label>\r\n        \r\n      </div>\r\n\r\n\r\n\r\n      \r\n    <div class=\"modal fade\"  id=\"mostrarmodal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n         <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n           \r\n               <h2 style=\"color:black; text-align: center;\">Elige una opcion</h2>\r\n        </div>\r\n            \r\n            <div class=\"modal-footer\">\r\n           <a href=\"#\" data-dismiss=\"modal\" class=\"button2 special2 \">Cerrar</a>\r\n        </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n  \r\n      <div class=\"divbody\">\r\n        <div class=\"divupselect\">\r\n          <div class=\"titulo-color\">\r\n            <h2 class=\"sth2\"> Elige el tipo de leche </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"s1\" (click)=\"leche1()\" style=\"position: absolute;  left: 3.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s2\" (click)=\"leche2()\" style=\"position: absolute;  left: 20.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s3\" (click)=\"leche3()\" style=\"position: absolute;  left: 37.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s4\" (click)=\"leche4()\" style=\"position: absolute;  left: 54.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n        <div class=\"div-up\">\r\n          <div class=\"items\">\r\n            <ul class=\"ulitems\">\r\n              <li *ngFor=\"let menuItem of menuItems\" class=\"liimg\" >\r\n                  <img class=\"sizeimg\" src=\"{{menuItem.path}}\" > \r\n                  <p style=\"color:black; text-align: center; font-family:sans-serif; \">{{menuItem.title}}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"vaso\">\r\n            <div style=\"position: relative;\">\r\n              <div style=\"position: absolute; left: 55px; top: 30px; font-family:sans-serif; color: black;\">PREPARACION </div>\r\n              \r\n            </div>\r\n            <div style=\"position: relative;\">\r\n               <div style=\"position: absolute; left: 0px; top: 60px; \">\r\n                  <img src=\"../../assets/images/vaso01.png\" width=\"245\" height=\"280\" border=\"0\">\r\n               </div>\r\n              </div>\r\n  \r\n          </div>\r\n        </div>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);  \"(click)=\"regresar()\"  >Regresar</a>\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 800px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14); \"(click)=\"siguiente()\"  >Siguiente</a>\r\n        <a class=\"scrolly button special\"style=\"position: absolute; left: 1126px;\r\n        top: 75%; cursor: pointer; display: inline-block; font-size: 0.8em; font-weight: 600;\r\n         height: 5.125em; width: 13em; letter-spacing: 0.225em; line-height: 5.125em; padding: 0 2.75em;\r\n        text-align: center; text-decoration: none; text-transform: uppercase; white-space: nowrap;\r\n         overflow: hidden; text-overflow: ellipsis; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\"\r\n          (click)=\"seleccion()\">CANCELAR</a>\r\n\r\n          <style>\r\n            .s1{\r\n               opacity: 0.6;\r\n               border-radius: 4px;\r\n               transition:all .5s ease-in-out;\r\n            }\r\n            .s2{\r\n              opacity: 0.6;\r\n              border-radius: 4px;\r\n              transition:all .5s ease-in-out;\r\n            }\r\n            .s3{\r\n               opacity: 0.6;\r\n               border-radius: 4px;\r\n               transition:all .5s ease-in-out;\r\n            }\r\n            .s4{\r\n              opacity: 0.6;\r\n              border-radius: 4px;\r\n              transition:all .5s ease-in-out;\r\n            }\r\n            </style>\r\n  \r\n          \r\n  \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/leche/leche.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LecheComponent = /** @class */ (function () {
    function LecheComponent() {
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.origen = "";
        this.info = { destino: "", tipoleche: "" };
        this.y = 0;
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.menuItems = [
            { path: '../../assets/images/santaclara.png', title: 'SANTA CLARA' },
            { path: '../../assets/images/lala.png', title: 'LALA' },
            { path: '../../assets/images/sellorojo.png', title: 'SELLO ROJO' },
            { path: '../../assets/images/sanmarcos.png', title: 'SAN MARCOS' }
        ];
    }
    LecheComponent.prototype.ngOnInit = function () {
    };
    LecheComponent.prototype.siguiente = function () {
        if (this.y == 1) {
            this.info.destino = "extra";
            this.boton.emit(this.info);
            $(document).ready(function () {
                {
                    $('.s4').css('border', '0px');
                    $('.s1').css('border', '0px');
                    $('.s2').css('border', '0px');
                    $('.s3').css('border', '0px');
                }
            });
        }
        else {
            $(document).ready(function () {
                $("#mostrarmodal2").modal("show");
            });
        }
    };
    LecheComponent.prototype.regresar = function () {
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
        this.info.destino = "vasos";
        this.boton.emit(this.info);
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
    };
    LecheComponent.prototype.seleccion = function () {
        this.info.destino = "seleccion";
        this.boton.emit(this.info);
    };
    LecheComponent.prototype.leche1 = function () {
        this.info.tipoleche = "SANTA CLARA";
        this.y = 1;
        $(document).ready(function () {
            {
                $('.s1').css('border', '4px solid #023f26');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    LecheComponent.prototype.leche2 = function () {
        this.info.tipoleche = "LALA";
        this.y = 1;
        $(document).ready(function () {
            {
                $('.s2').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    LecheComponent.prototype.leche3 = function () {
        this.info.tipoleche = "SELLO ROJO";
        this.y = 1;
        $(document).ready(function () {
            {
                $('.s3').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    LecheComponent.prototype.leche4 = function () {
        this.y = 1;
        this.info.tipoleche = "SAN MARCOS";
        $(document).ready(function () {
            {
                $('.s4').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], LecheComponent.prototype, "boton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], LecheComponent.prototype, "origen", void 0);
    LecheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-leche',
            template: __webpack_require__("./src/app/leche/leche.component.html"),
            styles: [__webpack_require__("./src/app/leche/leche.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LecheComponent);
    return LecheComponent;
}());



/***/ }),

/***/ "./src/app/preparacion/preparacion.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.div-up{\r\n    height: 85%;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    \r\n    /*background: #023f26;*/\r\n}\r\n\r\n.divbody{\r\n    background: rgb(238, 237, 236);\r\n    height: 87%;\r\n    width: 100%;\r\n}\r\n\r\n.linea{\r\n    width: 100%;\r\n    height: 8%;\r\n    background: #023f26\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.sth2{\r\n    padding-top: .4em;\r\n    padding-left: 3em;\r\n}\r\n\r\n.divupselect{\r\n    height: 10%;\r\n}\r\n\r\n.items{\r\n    float: left;\r\n    margin-right: 0;\r\n    border-radius: 4px;\r\n    margin-left: 1%;\r\n    height: 96%;\r\n    width: 77%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.vaso{\r\n    border-radius: 4px;\r\n    float: right;\r\n    margin-right: 2%;\r\n    height: 96%;\r\n    width: 18%;\r\n    background: #fff;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.div-move-window{\r\n    border-radius: 4px;\r\n    margin-top: 4px;\r\n    height: 25%;\r\n    margin-left: 1%;\r\n    width: 97%;\r\n    background: #fff;    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);    box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n\r\n}\r\n\r\n.sizeimg{\r\n    background-size: 100% 100%;\r\n    height: 12em;\r\n    width: 12em;\r\n}\r\n\r\n.liimg{\r\n    -webkit-box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -3px 3px 4px 0 rgba(0, 0, 0, 0.14);\r\n    float: left;\r\n    height: 12em;\r\n    /* width: 12em; */\r\n    padding: 0;\r\n    margin-left: 2%;\r\n    margin-top: 7%;\r\n    border-radius: 4px;\r\n    border: 2px solid ghostwhite;\r\n}\r\n\r\n.ulitems{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.titulo-color{\r\n    height: 95%;\r\n    background: #076940b9;\r\n    width: 74%;\r\n    border-radius: 6px;\r\n    position: relative;\r\n    top: 49%;\r\n    left: 3%;\r\n    -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n            box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}"

/***/ }),

/***/ "./src/app/preparacion/preparacion.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js\"></script>\r\n<div style=\"height:100%\" >\r\n  <div class=\"headown\">\r\n      <div class=\"linea\"></div>\r\n      <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n      <label class=\"titulo\">Dos Onzas </label>\r\n      \r\n    </div>\r\n\r\n    <div class=\"modal fade\"  id=\"mostrarmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n         <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n           \r\n               <h2 style=\"color:black; text-align: center;\">Elige una opcion</h2>\r\n        </div>\r\n            \r\n            <div class=\"modal-footer\">\r\n           <a href=\"#\" data-dismiss=\"modal\" class=\"button2 special2 \">Cerrar</a>\r\n        </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"divbody\">\r\n      <div class=\"divupselect\">\r\n        <div class=\"titulo-color\">\r\n          <h2 class=\"sth2\"> Elige el tamaño </h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"s1\"  (click)=\"vaso1()\" style=\"position: absolute;  left: 3.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s2\"  (click)=\"vaso2()\" style=\"position: absolute;  left: 20.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s3\"  (click)=\"vaso3()\" style=\"position: absolute;  left: 37.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"s4\"  (click)=\"vaso4()\" style=\"position: absolute;  left: 54.8%; top: 31%; font-family:sans-serif; ; height: 211px; width: 211px;\"> </div>\r\n      <div class=\"div-up\">\r\n\r\n        <div class=\"items\">\r\n           \r\n          <ul class=\"ulitems\">\r\n            <li *ngFor=\"let menuItem of menuItems\" class=\"liimg\" >\r\n                <img class=\"sizeimg\" src=\"{{menuItem.path}}\" > \r\n                <p style=\"color:black; text-align: center; font-family:sans-serif; \">{{menuItem.title}}</p>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"vaso\">\r\n          <div style=\"position: relative;\">\r\n            <div style=\"position: absolute; left: 55px; top: 30px; font-family:sans-serif; color: black;\">PREPARACION </div>\r\n            \r\n          </div>\r\n          <div style=\"position: relative;\">\r\n            <div style=\"position: absolute; left: 0px; top: 60px; \">\r\n               <img src=\"../../assets/images/vaso01.png\" width=\"245\" height=\"280\" border=\"0\">\r\n            </div>\r\n           </div>\r\n        </div>\r\n      </div>\r\n      <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);  \"(click)=\"regresar()\"  >Regresar</a>\r\n      <a class=\"button2 special2 \"style=\"position: absolute; left: 800px;\r\n      top: 75%; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14); \"(click)=\"siguiente()\"  >Siguiente</a>\r\n      <a class=\"scrolly button special\"style=\"position: absolute; left: 1126px;\r\n      top: 75%; cursor: pointer; display: inline-block; font-size: 0.8em; font-weight: 600;\r\n       height: 5.125em; width: 13em; letter-spacing: 0.225em; line-height: 5.125em; padding: 0 2.75em;\r\n      text-align: center; text-decoration: none; text-transform: uppercase; white-space: nowrap;\r\n       overflow: hidden; text-overflow: ellipsis; box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\"\r\n        (click)=\"seleccion()\">CANCELAR</a>\r\n\r\n        <style>\r\n        .s1{\r\n           opacity: 0.6;\r\n           border-radius: 4px;\r\n           transition:all .5s ease-in-out;\r\n        }\r\n        .s2{\r\n          opacity: 0.6;\r\n          border-radius: 4px;\r\n          transition:all .5s ease-in-out;\r\n        }\r\n        .s3{\r\n           opacity: 0.6;\r\n           border-radius: 4px;\r\n           transition:all .5s ease-in-out;\r\n        }\r\n        .s4{\r\n          opacity: 0.6;\r\n          border-radius: 4px;\r\n          transition:all .5s ease-in-out;\r\n        }\r\n        </style>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/preparacion/preparacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreparacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreparacionComponent = /** @class */ (function () {
    function PreparacionComponent() {
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.origen = "";
        this.info = { destino: "", precio: 0 };
        this.x = 0;
        this.boton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.menuItems = [
            { path: '../../assets/images/chico.jpg', title: 'CORTO $20' },
            { path: '../../assets/images/mediano.jpg', title: 'ALTO $35' },
            { path: '../../assets/images/grande.jpg', title: 'GRANDE $49' },
            { path: '../../assets/images/jumbo.jpg', title: 'VENTI $59' }
        ];
    }
    PreparacionComponent.prototype.ngOnInit = function () {
    };
    PreparacionComponent.prototype.siguiente = function () {
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
        if (this.x == 1) {
            if (this.origen == "tees") {
                this.info.destino = "caja";
            }
            else
                this.info.destino = "leche";
            this.boton.emit(this.info);
        }
        else {
            $(document).ready(function () {
                $("#mostrarmodal").modal("show");
            });
        }
    };
    PreparacionComponent.prototype.regresar = function () {
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
        this.info.destino = "seleccion";
        this.boton.emit(this.info);
    };
    PreparacionComponent.prototype.seleccion = function () {
        this.info.destino = "seleccion";
        this.boton.emit(this.info);
        $(document).ready(function () {
            {
                $('.s4').css('border', '0px');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
    };
    PreparacionComponent.prototype.vaso1 = function () {
        this.info.precio = 20;
        this.x = 1;
        $(document).ready(function () {
            {
                $('.s1').css('border', '4px solid #023f26');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    PreparacionComponent.prototype.vaso2 = function () {
        this.x = 1;
        this.info.precio = 35;
        $(document).ready(function () {
            {
                $('.s2').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s3').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    PreparacionComponent.prototype.vaso3 = function () {
        this.x = 1;
        this.info.precio = 49;
        $(document).ready(function () {
            {
                $('.s3').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s4').css('border', '0px');
            }
        });
    };
    PreparacionComponent.prototype.vaso4 = function () {
        this.x = 1;
        this.info.precio = 59;
        $(document).ready(function () {
            {
                $('.s4').css('border', '4px solid #023f26');
                $('.s1').css('border', '0px');
                $('.s2').css('border', '0px');
                $('.s3').css('border', '0px');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], PreparacionComponent.prototype, "boton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], PreparacionComponent.prototype, "origen", void 0);
    PreparacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-preparacion',
            template: __webpack_require__("./src/app/preparacion/preparacion.component.html"),
            styles: [__webpack_require__("./src/app/preparacion/preparacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreparacionComponent);
    return PreparacionComponent;
}());



/***/ }),

/***/ "./src/app/services/mongo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MongoService = /** @class */ (function () {
    function MongoService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3015/";
        this.updateMethod = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.updateMethodObservable = this.updateMethod.asObservable();
    }
    MongoService.prototype.update = function (payload) {
        var _this = this;
        this.http
            .post(this.baseUrl + 'update_qty', payload, { headers: { "Content-Type": "application/json" } })
            .subscribe(function (data) {
            _this.generalResponse = data;
            _this.updateMethod.next(true);
        });
        this.http
            .post(this.baseUrl + 'registry_sale', JSON.stringify(payload), { headers: { "Content-Type": "application/json" } })
            .subscribe(function (data) {
            _this.generalResponse = data;
            _this.updateMethod.next(true);
        });
    };
    MongoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MongoService);
    return MongoService;
}());



/***/ }),

/***/ "./src/app/ventanas/ventanas.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.carousel-item-next, .carousel-item-prev, .carousel-item.active {\r\n    display: block;\r\n}\r\n\r\n.headown{\r\n    width: 100%;\r\n    height: 13%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 1px 1px 12px 4px #bbb;\r\n            box-shadow: 1px 1px 12px 4px #bbb;\r\n    position: relative;\r\n    /*background: #023f26;*/\r\n}\r\n\r\n.titulo{\r\n    font-size: 1em;\r\n    margin-left: 1px;\r\n    margin-top: 0;\r\n    /* margin-bottom: 5px; */\r\n    color: #023f26;\r\n}\r\n\r\n.linea{\r\n  width: 100%;\r\n  height: 8%;\r\n  background: #023f26\r\n}\r\n\r\n.pospromo{\r\n  position: absolute;\r\n  left: 80%;\r\n  top: 69%;\r\n}\r\n\r\n.logo{\r\n    height: 80%;\r\n    margin-left: 2%;\r\n    margin-top: 2px;\r\n}\r\n\r\n.divseleccion{\r\n    background: rgb(238, 237, 236);\r\n}\r\n\r\n.divupselect{\r\n    height: 13%;\r\n}\r\n\r\n.divdownselect{\r\n    height: 83%;\r\n}\r\n\r\n.divcenterselect{\r\n    width: 53%;\r\n    margin-left: 5%;\r\n    float: left;  \r\n}\r\n\r\n.posbutonbebidas{\r\n    position: relative;\r\n    left: 30px;\r\n    top: 400px;\r\n}\r\n\r\n.newst{\r\n    width: 90%;\r\n    height: 6em;\r\n    margin-top: 1em;\r\n    text-align: center;\r\n    padding-top: .4em;\r\n    margin-left: 5%;\r\n}\r\n\r\n.newst2{\r\n    width: 80%;\r\n    height: 5em;\r\n    margin-top: 3em;\r\n    text-align: center;\r\n    margin-left: 10%;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.divbtn{\r\n    float: right;\r\n    margin-right: 10%;\r\n    width: 25%;\r\n}\r\n\r\n.posbutonalimentos{\r\n    position: relative;\r\n    left: 190px;\r\n    top: 400px;\r\n    width: 200px;\r\n    background-color: transparent;\r\n    color: black;\r\n    border: 2px solid #fff; \r\n}\r\n\r\n.sth2{\r\n    color: #023f26;\r\n    /* text-align: center; */\r\n    padding-top: 1em;\r\n    padding-left: 3em;\r\n}\r\n\r\nhtml,\r\nbody, {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  font-family: \"Roboto\", \"Helvetica\", sans-serif;\r\n  color: black;\r\n  -webkit-transition: background-color 0.2s;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.inspired-by {\r\n  display: block;\r\n  position: relative;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n\r\n.wrapper {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carta {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0px;\r\n  margin: 0 auto;\r\n  width: 350px;\r\n  background-color: #023f26;\r\n  border-radius: 15px;\r\n\r\n  \r\n\r\n  -webkit-transform: translateX(-50%);\r\n\r\n  \r\n\r\n          transform: translateX(-50%);\r\n  -webkit-transition: left 0.5s ease-out;\r\n  transition: left 0.5s ease-out;\r\n  will-change: left;\r\n\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.card--19 {\r\n  left: 50%;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 0.14);\r\n          box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.card--solstice{\r\n  left: 20%;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n          box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.card--huarache{\r\n  left: 80%;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n          box-shadow: -6px 6px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.card__header {\r\n  position: relative;\r\n  height: 90px;\r\n  padding: 30px 30px 300px;\r\n  \r\n  border-top-right-radius: 15px;\r\n  border-top-left-radius: 15px;\r\n  color: black;\r\n}\r\n\r\n.card__header--19 {\r\n  background-color: #1A4C1D;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#FFF));\r\n  background-image: linear-gradient(#FFF, #FFF);\r\n\r\n  background: #1A4C1D;\r\n background: -webkit-gradient(linear,left top, left bottom,from(#FFF),to(#FFF));\r\n background: linear-gradient(#FFF,#FFF);\r\n border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.card__header--solstice {\r\n  background-color: #1A4C1D;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#FFF));\r\n  background-image: linear-gradient(#FFF, #FFF);\r\n\r\n  background: #1A4C1D;\r\n background: -webkit-gradient(linear,left top, left bottom,from(#FFF),to(#FFF));\r\n background: linear-gradient(#FFF,#FFF);\r\n border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.card__header--huarache {\r\n  background-color: #FFF;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#1A4C1D));\r\n  background-image: linear-gradient(#FFF, #1A4C1D);\r\n\r\n  background: #1A4C1D;\r\n  background: -webkit-gradient(linear,left top, left bottom,from(#FFF),to(#FFF));\r\n  background: linear-gradient(#FFF,#FFF);\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.card__watermark {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card__watermark::after {\r\n  content: attr(data-watermark);\r\n  position: relative;\r\n  left: -20px;\r\n  color: rgba(0, 0, 0, .3);\r\n  font-size: 240px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card__logo {\r\n  width: 50px;\r\n  height: auto;\r\n}\r\n\r\n.card__price {\r\n  float: right;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: black;\r\n}\r\n\r\n.card__title {\r\n  margin: px 0 20px;\r\n  font-size: 15px;\r\n  line-height: 1.1em;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1.5px;\r\n  font-family: \"Roboto\", \"Helvetica\", sans-serif;\r\n  color: black;\r\n\r\n}\r\n\r\n.card__subtitle {\r\n  display: block;\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  font-family: \"Roboto\", \"Helvetica\", sans-serif;\r\n  color: black;\r\n  letter-spacing: 1px;\r\n  text-align: justify;\r\n  line-height: normal;\r\n  margin: 0;\r\n  padding: 0;\r\n    \r\n}\r\n\r\n.card__body {\r\n  position: relative;\r\n  padding: 40px 30px 20px;\r\n  border-radius: 15px;\r\n \r\n}\r\n\r\n.card__image {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 30px;\r\n  width: 70%;\r\n}\r\n\r\n.card__image2 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 110px;\r\n  width: 30%;\r\n}\r\n\r\n.card__image3 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -180px;\r\n  left: 56px;\r\n  width: 70%;\r\n}\r\n\r\n.card__image4 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -180px;\r\n  left: 75px;\r\n  width: 65%;\r\n}\r\n\r\n.card__image5 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -226px;\r\n  left: 66px;\r\n  width: 65%;\r\n}\r\n\r\n.card__image6 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -180px;\r\n  left: 105px;\r\n  width: 40%;\r\n}\r\n\r\n.card__image7 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -190px;\r\n  left: 90px;\r\n  width: 54%;\r\n}\r\n\r\n.card__image8 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -180px;\r\n  left: 50px;\r\n  width: 53%;\r\n}\r\n\r\n.card__image9 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -290px;\r\n  left: 70px;\r\n  width: 53%;\r\n}\r\n\r\n.card__image10 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -226px;\r\n  left: 58px;\r\n  width: 72%;\r\n}\r\n\r\n.card__image11 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -190px;\r\n  left: 80px;\r\n  width: 50%;\r\n}\r\n\r\n.card__image12 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -220px;\r\n  left: 63px;\r\n  width: 60%;\r\n}\r\n\r\n.card__image13 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -204px;\r\n  left: 100px;\r\n  width: 43%;\r\n}\r\n\r\n.card__image14 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -210px;\r\n  left: 100px;\r\n  width: 34%;\r\n}\r\n\r\n.card__image15 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 30px;\r\n  width: 90%;\r\n}\r\n\r\n.card__image16 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 50px;\r\n  width: 80%;\r\n}\r\n\r\n.card__image17 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 50px;\r\n  width: 80%;\r\n}\r\n\r\n.card__image18 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -160px;\r\n  left: 86px;\r\n  width: 50%;\r\n}\r\n\r\n.card__image19 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 80px;\r\n  width: 60%;\r\n}\r\n\r\n.card__image20 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -170px;\r\n  left: 86px;\r\n  width: 50%;\r\n}\r\n\r\n.card__image21 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -180px;\r\n  left: 70px;\r\n  width: 70%;\r\n}\r\n\r\n.card__image22 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 50px;\r\n  width: 80%;\r\n}\r\n\r\n.card__image23 {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -200px;\r\n  left: 80px;\r\n  width: 53%;\r\n}\r\n\r\n.card__wish-list {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 0 auto 5px;\r\n  padding: 20px;\r\n  border: 2px solid #1a4c1d;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n}\r\n\r\n.card__wish-list--19 {\r\n  color: #FFF;\r\n  border-color: #FFF;\r\n}\r\n\r\n.card__wish-list--solstice {\r\n  color: #FFF;\r\n  border-color: #FFF;\r\n}\r\n\r\n.card__wish-list--huarache {\r\n  color: #FFF;\r\n  border-color: #FFF;\r\n}\r\n\r\n.card__category {\r\n  display: block;\r\n  font-size: 12px;\r\n  color: rgb(174, 174, 174);\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.card__will-animate {\r\n  will-change: transform;\r\n}\r\n\r\n.cards-placeholder {\r\n  display: block;\r\n  position: relative;\r\n  margin-bottom: 0px;\r\n  text-align: center;\r\n}\r\n\r\n.cards-placeholder__item {\r\n  opacity: 0.3;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n  background-color: #fff;\r\n  width: 30px;\r\n  height: 5px;\r\n  border-radius: 5px;\r\n\r\n  -webkit-transition: opacity 0.2s;\r\n\r\n  transition: opacity 0.2s;\r\n  will-change: opacity;\r\n}\r\n\r\n.cards-placeholder__item--active {\r\n  opacity: 1;\r\n}\r\n\r\n#linea {\r\n    height: 1%;\r\n    width: 100%;\r\n    background-color: #1A4C1D;\r\n    }\r\n\r\nbody{\r\n      \r\n      margin: 0;\r\n    }\r\n\r\n#menu {\r\n    height: 19%;\r\n    width: 100%;\r\n    background-color: #F7F7F7;\r\n    }\r\n\r\n#slices {\r\n    height: 75%;\r\n    width: 100%;\r\n    }\r\n\r\n#imagen1 {\r\n    height: 100%;\r\n    width: 50%;\r\n    background-color: #E9E6E1;\r\n        float: right;\r\n    }\r\n\r\n#imagen2 {\r\n    height: 100%;\r\n    width: 50%;\r\n    background-color: #E9E6E1;\r\n         float:left;\r\n    }\r\n\r\n#foto {\r\n    height: 90%;\r\n    width: 60%;\r\n    background-color: #E5E8E8;\r\n    margin-left: 20%;\r\n    margin-top: 5%;\r\n    border-radius: 15px;\r\n    }\r\n\r\n#foto1{\r\n       background-size: cover;\r\n       height: 100%;\r\n       width: 100% ;\r\n       text-align: center;\r\n         border-radius: 15px;\r\n    }\r\n\r\n#foto12{\r\n       background-size: cover;\r\n       height: 100%;\r\n       width: 100% ;\r\n       text-align: center;\r\n         border-radius: 15px;\r\n    }\r\n\r\n#contenedor {\r\n    width: 100%;\r\n    height: 100%;\r\n    }\r\n\r\n#abajo {\r\n    height: 5%;\r\n    width: 100%;\r\n    background-color: #1A4C1D;\r\n    }\r\n\r\n.bod{\r\n      height:87%; \r\n      margin:0;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/ventanas/ventanas.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!mostrar_promociones\" style=\"height:100%\">\r\n  <div class=\"headown\">\r\n      <div class=\"linea\"></div>\r\n      <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n      <label class=\"titulo\">Dos Onzas </label>\r\n  </div>\r\n  <div class=\"card\" style=\"height:87%; margin:0\">\r\n    <ngb-carousel *ngIf=\"images\">\r\n      \r\n      <ng-template ngbSlide>\r\n        <img [src]=\"images[0]\" alt=\"Random first slide\">\r\n        <div class=\"carousel-caption\"></div>\r\n      </ng-template>\r\n\r\n      <ng-template ngbSlide>\r\n        <img [src]=\"images[1]\" alt=\"Random second slide\">\r\n        <div class=\"carousel-caption\"></div>\r\n      </ng-template>\r\n\r\n      <ng-template ngbSlide>\r\n        <img [src]=\"images[2]\" alt=\"Random second slide\">\r\n        <div class=\"carousel-caption\"></div>\r\n      </ng-template>\r\n\r\n    </ngb-carousel>\r\n\r\n    <div>\r\n      <a class=\"button2 special2 pospromo\"  (click)=\"seleccion()\">COMENZAR</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"width:100%; height:90%\" [hidden]=\"!mostrar_inicio\" >\r\n  <div class=\"landing scrollhide\">\r\n    <div id=\"page-wrapper\">\r\n\r\n      <header id=\"header\" class=\"alt\"> \t\r\n\r\n        <h1><a href=\"index.html\">Inicio </a></h1>\r\n      </header>\r\n\r\n      <section id=\"banner\">\r\n        <div class=\"divfull\">\r\n          <div class=\"inner poscomenzar2\">\r\n            <h2>DOS ONZAS</h2>\r\n            <p>Si tu cafe no es perfecto<br />\r\n            es por que no estas en<br />\r\n            DOS ONZAS.</p>\r\n            <ul class=\"actions\">\r\n              <li><a (click)=\"promociones()\"  class=\"scrolly button special\">PROMOCIONES</a></li>\r\n            </ul>\r\n          </div>\r\n          \r\n          <div>\r\n            <a class=\"button2 special2 \" (click)=\"seleccion()\"  >COMENZAR</a>\r\n          </div>\r\n        </div>\r\n      </section>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_seleccion\">\r\n  <div class=\"modal fade\"  id=\"mostrarmodal23\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\"> \r\n          <h4 style=\"color:black; text-align: center;\">Todos sus productos se elminaran    ¿esta seguro que desea continuar?</h4>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <a href=\"#\" style=\"float: left;\"data-dismiss=\"modal\" class=\"button2 special2 \">Cancelar</a>\r\n          <a href=\"#\" style=\"background: #ed4933;\"data-dismiss=\"modal\" class=\"button2 special2 \"(click)=\"inicio()\">Aceptar</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n    <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n    <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">\r\n    <div class=\"divupselect\">\r\n      <h2 class=\"sth2\"> Elige tu producto </h2>\r\n      \r\n        </div>\r\n    <div class=\"divdownselect\">\r\n      <div class=\"divcenterselect\">\r\n        <div class=\"card\" style=\"margin:0\">\r\n            <h5 style=\"color: black; margin:0\" > ¡Nuestro momento favorito: verte!</h5>\r\n        <img style=\"border-radius: 6px;\" src=\"../../assets/images/elige2.png\">\r\n      </div>\r\n      </div>\r\n      <div class=\"divbtn\">\r\n        <div class=\"card\" style=\"margin-top:0\">\r\n          <a class=\"button2 special2 newst\" (click)=\"bebidas()\"  >Bebidas</a>\r\n          <a class=\"button2 special2 newst\" (click)=\"alimentos()\"  >Alimentos</a>\r\n          <a class=\"button2 special2 newst\" (click)=\"regresar()\"  >Inicio</a>\r\n          <a class=\"button2 special2 newst\" (click)=\"promociones()\"  >Promociones</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<!--*************************************BEBIDAS***********************************************-->\r\n<div style=\"height:100%\" [hidden]=\"!mostrar_bebidas\">\r\n  \r\n  <div class=\"headown\">\r\n      <div class=\"linea\"></div>\r\n      <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n      <label class=\"titulo\">Dos Onzas </label>\r\n      \r\n    </div>\r\n    <div style=\"height:87%; width:100%;\" class=\"divseleccion\">\r\n      <div class=\"cards-placeholder\">\r\n        <div class=\"cards-placeholder__item\"></div>\r\n        <div class=\"cards-placeholder__item\"></div>\r\n        <div class=\"cards-placeholder__item\"></div>\r\n      </div>\r\n      <div class=\"wrapper\" style=\"height: 90%;\">\r\n         \r\n          <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n          top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n        \r\n\r\n        <!-- primera carta -->\r\n        <div class=\"carta card--19\">\r\n          <div class=\"card__header card__header--19\">\r\n            <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n  \r\n            \r\n  \r\n            <span class=\"card__price card__will-animate\"></span>\r\n  \r\n            <h1 class=\"card__title card__will-animate\">Café</h1>\r\n            <span class=\"card__subtitle card__will-animate\">El café es la bebida que se obtiene a partir de los granos tostados y molidos de los frutos de la planta del café (cafeto).</span>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"card__body\">\r\n            <img src=\"../../assets/images/cafe2.png\" alt=\"Nike 19\" class=\"card__image card__will-animate\">\r\n            <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"cafes()\">Elegir</a>\r\n  \r\n            <span class=\"card__category card__will-animate\"></span>\r\n          </div>\r\n        </div>\r\n       \r\n  \r\n        <!-- Nike Solstice -->\r\n        <div class=\"carta card--solstice\">\r\n          <div class=\"card__header card__header--solstice\">\r\n            <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n  \r\n           \r\n  \r\n            <span class=\"card__price card__will-animate\"></span>\r\n  \r\n            <h1 class=\"card__title card__will-animate\">Té</h1>\r\n            <span class=\"card__subtitle card__will-animate\">\r\n              El té es una infusión de las hojas y brotes de la planta del té.</span>\r\n        </div>\r\n  \r\n          <div class=\"card__body\">\r\n            <img src=\"../../assets/images/te2.png\" alt=\"Nike Solstice\" class=\"card__image card__will-animate\">\r\n            <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"tees()\">Elegir</a>\r\n          </div>\r\n        </div>\r\n  \r\n        \r\n        <div class=\"carta card--huarache\">\r\n          <div class=\"card__header card__header--huarache\">\r\n            <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n  \r\n            \r\n  \r\n            <span class=\"card__price card__will-animate\"></span>\r\n  \r\n            <h1 class=\"card__title card__will-animate\">Frapuccino</h1>\r\n            <span class=\"card__subtitle card__will-animate\">Es una marca registrada de bebidas de café congelados vendidos por Dos Onzas.</span>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"card__body\">\r\n            <img src=\"../../assets/images/frapuccino.png\" alt=\"Nike Huarache\" class=\"card__image2 card__will-animate\">\r\n            <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"frapes()\">Elegir</a>\r\n          </div>\r\n        </div> \r\n  \r\n         \r\n      </div> \r\n    </div>\r\n</div>\r\n<!--*************************************ALIMENTOS***********************************************-->\r\n<div style=\"height:100%\" [hidden]=\"!mostrar_alimentos\">\r\n  <div class=\"headown\">\r\n      <div class=\"linea\"></div>\r\n      <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n      <label class=\"titulo\">Dos Onzas </label>\r\n      \r\n    </div>\r\n    <div style=\"height:87%; width:100%;\" class=\"divseleccion\">\r\n\r\n      <div class=\"cards-placeholder\">\r\n        <div class=\"cards-placeholder__item\"></div>\r\n        <div class=\"cards-placeholder__item\"></div>\r\n      </div>\r\n      <div class=\"wrapper\" style=\"height: 90%;\">\r\n  \r\n          <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n          top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n        <!-- primera carta -->\r\n        <div class=\"carta card--19\" style=\"webkit-box-shadow: none;\">\r\n          <div class=\"card__header card__header--19\">\r\n            <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n  \r\n            \r\n  \r\n            <span class=\"card__price card__will-animate\"></span>\r\n  \r\n            <h1 class=\"card__title card__will-animate\">Desayunos</h1>\r\n            <span class=\"card__subtitle card__will-animate\">La primer comida del día no sólo nos brinda un momento plancentero sino que además, cobra gran importancia para cuidar del organismo.</span>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"card__body\">\r\n            <img src=\"../../assets/images/panini.png\" alt=\"Nike 19\" class=\"card__image4 card__will-animate\">\r\n            <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"desayunos()\">Elegir</a>\r\n  \r\n            <span class=\"card__category card__will-animate\"></span>\r\n          </div>\r\n        </div>\r\n       \r\n  \r\n        <!-- Nike Solstice -->\r\n        <div class=\"carta card--solstice\" style=\"webkit-box-shadow: none;\">\r\n          <div class=\"card__header card__header--solstice\">\r\n            <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n  \r\n            \r\n  \r\n            <span class=\"card__price card__will-animate\"></span>\r\n  \r\n            <h1 class=\"card__title card__will-animate\">Panaderia</h1>\r\n            <span class=\"card__subtitle card__will-animate\">Nuestros panes dulces y salados se elaboran mediante procesos manuales, la única maquinaria empleada son los hornos y las batidoras</span>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"card__body\">\r\n            <img src=\"../../assets/images/Croissant.png\" alt=\"Nike Solstice\" class=\"card__image3 card__will-animate\">\r\n            <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"panaderia()\">Elegir</a>\r\n  \r\n            <span class=\"card__category card__will-animate\"></span>\r\n          </div>\r\n        </div>\r\n  \r\n        \r\n        <div class=\"carta card--huarache \" style=\"webkit-box-shadow: none;\">\r\n          <div class=\"card__header card__header--huarache\">\r\n            <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n  \r\n            \r\n  \r\n            <span class=\"card__price card__will-animate\"></span>\r\n  \r\n            <h1 class=\"card__title card__will-animate\">Antojos</h1>\r\n            <span class=\"card__subtitle card__will-animate\">Son un apetito especial que se caracterizan porque no se satisfacen con un sustituto, son urgentes, no admiten postergación y producen una satisfacción especial.</span>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"card__body\">\r\n            <img src=\"../../assets/images/galleta.png\" alt=\"Nike Huarache\" class=\"card__image5 card__will-animate\">\r\n            <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"antojos()\">Elegir</a>\r\n          </div>\r\n        </div> \r\n  \r\n         \r\n      </div> \r\n\r\n    </div>\r\n</div>\r\n\r\n<!--*************************************TEES***********************************************-->\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_tees\">\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n          <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">    \r\n    <div class=\"cards-placeholder\">\r\n      <div class=\"cards-placeholder__item\"></div>\r\n      <div class=\"cards-placeholder__item\"></div>\r\n    </div>\r\n    <div class=\"wrapper\"  style=\"height: 90%;\">\r\n        \r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n      <!-- primera carta -->\r\n      <div class=\"carta card--19\">\r\n        <div class=\"card__header card__header--19\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n         \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Peach Green Tea Lemonade</h1>\r\n          <span class=\"card__subtitle card__will-animate\"> Es una variante del café con leche. Como éste, suele llevar un tercio de expreso y dos tercios de leche vaporizada, pero se añade una parte de chocolate, normalmente en forma de jarabe de chocolate.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/otro.png\" alt=\"Nike 19\" class=\"card__image6 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"metees1()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <!-- Nike Solstice -->\r\n      <div class=\"carta card--solstice\">\r\n        <div class=\"card__header card__header--solstice\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Strawberry Green Tea Lemonade</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para crear la espuma, que en ocasiones lleva también cacao o canela en polvo.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/red.png\" alt=\"Nike Solstice\" class=\"card__image7 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"metees2()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div class=\"carta card--huarache\">\r\n        <div class=\"card__header card__header--huarache\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Mint Blend</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Los mejores ingredientes merecen los mejores utensilios. Nosotros estamos convencidos de que si algo necesario no se puede obtener hecho, hay que crearlos</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/green.png\" alt=\"Nike Huarache\" class=\"card__image8 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"metees3()\">Elegir</a>\r\n        </div>\r\n      </div> \r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<!--*************************************FRAPES***********************************************-->\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_frapes\">\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n          <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">    \r\n    <div class=\"cards-placeholder\">\r\n      <div class=\"cards-placeholder__item\"></div>\r\n      <div class=\"cards-placeholder__item\"></div>\r\n    </div>\r\n    <div class=\"wrapper\"  style=\"height: 90%;\">\r\n\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n\r\n      <!-- primera carta -->\r\n      <div class=\"carta card--19\">\r\n        <div class=\"card__header card__header--19\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Cafe</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Esta opción refrescante y energética cuya legión de entusiastas no deja de crecer en todo el mundo.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/cafefrapuccino.png\" alt=\"Nike 19\" class=\"card__image12 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mefrapes1()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <!-- Nike Solstice -->\r\n      <div class=\"carta card--solstice\">\r\n        <div class=\"card__header card__header--solstice\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Cajeta</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para crear la espuma, que en ocasiones lleva también cacao o canela en polvo.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/cajeta.png\" alt=\"Nike Solstice\" class=\"card__image13 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mefrapes2()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div class=\"carta card--huarache\">\r\n        <div class=\"card__header card__header--huarache\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Chip</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Mezclamos salsa de moca y chips de Frappuccino con café, leche y hielo, luego cubrimos con crema batida y llovizna de moca.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/chip.jpg\" alt=\"Nike Huarache\" class=\"card__image14 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mefrapes3()\">Elegir</a>\r\n        </div>\r\n      </div> \r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<!--*************************************CAFES***********************************************-->\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_cafes\">\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n          <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">    \r\n      <div class=\"cards-placeholder\">\r\n      <div class=\"cards-placeholder__item\"></div>\r\n      <div class=\"cards-placeholder__item\"></div>\r\n    </div>\r\n    <div class=\"wrapper\"  style=\"height: 90%;\">\r\n\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n      <!-- primera carta -->\r\n      <div class=\"carta card--19\">\r\n        <div class=\"card__header card__header--19\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Mocha</h1>\r\n          <span class=\"card__subtitle card__will-animate\"> Es una variante del café con leche. Como éste, suele llevar un tercio de expreso y dos tercios de leche vaporizada, pero se añade una parte de chocolate.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/mocha.png\" alt=\"Nike 19\" class=\"card__image9 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mecafes1()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <!-- Nike Solstice -->\r\n      <div class=\"carta card--solstice\">\r\n        <div class=\"card__header card__header--solstice\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Cappuccino</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para crear la espuma, lleva también cacao o canela en polvo.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/capuccino.png\" alt=\"Nike Solstice\" class=\"card__image10 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mecafes2()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div class=\"carta card--huarache\">\r\n        <div class=\"card__header card__header--huarache\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Espresso</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Los mejores ingredientes merecen los mejores utensilios. Nosotros estamos convencidos de que si algo necesario no se puede obtener hecho, hay que crearlos.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/espresso.png\" alt=\"Nike Huarache\" class=\"card__image11 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mecafes3()\">Elegir</a>\r\n        </div>\r\n      </div> \r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<!--*************************************DESAYUNOS***********************************************-->\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_desayunos\">\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n          <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">    \r\n      <div class=\"cards-placeholder\">\r\n      <div class=\"cards-placeholder__item\"></div>\r\n      <div class=\"cards-placeholder__item\"></div>\r\n    </div>\r\n    <div class=\"wrapper\"  style=\"height: 90%;\">\r\n\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n      <!-- primera carta -->\r\n      <div class=\"carta card--19\">\r\n        <div class=\"card__header card__header--19\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Croissant de Jamón y Queso</h1>\r\n          <span class=\"card__subtitle card__will-animate\"> Es una variante del café con leche. Como éste, suele llevar un tercio de expreso y dos tercios de leche vaporizada, pero se añade una parte de chocolate, normalmente en forma de jarabe de chocolate.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/crossaint.png\" alt=\"Nike 19\" class=\"card__image15 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"desayuno1()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <!-- Nike Solstice -->\r\n      <div class=\"carta card--solstice\">\r\n        <div class=\"card__header card__header--solstice\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Panini Tres Quesos</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para crear la espuma, que en ocasiones lleva también cacao o canela en polvo.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/panini3.png\" alt=\"Nike Solstice\" class=\"card__image16 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"desayuno2()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div class=\"carta card--huarache\">\r\n        <div class=\"card__header card__header--huarache\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Panini Mozzarella Y Tomato</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Los mejores ingredientes merecen los mejores utensilios. Nosotros estamos convencidos de que si algo necesario no se puede obtener hecho, hay que crearlo.s</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/panini2.png\" alt=\"Nike Huarache\" class=\"card__image17 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"desayuno3()\">Elegir</a>\r\n        </div>\r\n      </div> \r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<!--*************************************PANADERIA***********************************************-->\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_panaderia\">\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n          <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">    \r\n      <div class=\"cards-placeholder\">\r\n      <div class=\"cards-placeholder__item\"></div>\r\n      <div class=\"cards-placeholder__item\"></div>\r\n    </div>\r\n    <div class=\"wrapper\"  style=\"height: 90%;\">\r\n\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n      <!-- primera carta -->\r\n      <div class=\"carta card--19\">\r\n        <div class=\"card__header card__header--19\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Pan de elote</h1>\r\n          <span class=\"card__subtitle card__will-animate\"> Es una variante del café con leche. Como éste, suele llevar un tercio de expreso y dos tercios de leche vaporizada, pero se añade una parte de chocolate, normalmente en forma de jarabe de chocolate.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/panelote.png\" alt=\"Nike 19\" class=\"card__image18 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"panaderia1()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <!-- Nike Solstice -->\r\n      <div class=\"carta card--solstice\">\r\n        <div class=\"card__header card__header--solstice\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Dona de Chocolate</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Es una bebida nacida en Italia, preparada con café expreso y leche montada con vapor para crear la espuma, que en ocasiones lleva también cacao o canela en polvo.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/dona.png\" alt=\"Nike Solstice\" class=\"card__image19 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"panaderia2()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div class=\"carta card--huarache\">\r\n        <div class=\"card__header card__header--huarache\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Rollo De Canela</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Los mejores ingredientes merecen los mejores utensilios. Nosotros estamos convencidos de que si algo necesario no se puede obtener hecho, hay que crearlo.s</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/rollocanela.png\" alt=\"Nike Huarache\" class=\"card__image20 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"panaderia3()\">Elegir</a>\r\n        </div>\r\n      </div> \r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<!--*************************************ANTOJOS***********************************************-->\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_antojos\">\r\n  <div class=\"headown\">\r\n    <div class=\"linea\"></div>\r\n        <img src=\"../../assets/images/sb.png\"  class=\"logo\">\r\n          <label class=\"titulo\">Dos Onzas </label>\r\n    \r\n  </div>\r\n  <div style=\"height:87%; width:100%;\" class=\"divseleccion\">    \r\n      <div class=\"cards-placeholder\">\r\n      <div class=\"cards-placeholder__item\"></div>\r\n      <div class=\"cards-placeholder__item\"></div>\r\n    </div>\r\n    <div class=\"wrapper\"  style=\"height: 90%;\">\r\n\r\n        <a class=\"button2 special2 \"style=\"position: absolute; left: 95px;\r\n        top: 535px;  \"(click)=\"seleccion()\"  >Regresar</a>\r\n\r\n      <!-- primera carta -->\r\n      <div class=\"carta card--19\">\r\n        <div class=\"card__header card__header--19\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Barra Saludable</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Nuestra barra de cereal permite disfrutar el delicioso sabor de la fruta asi como la seleccion de los mejores ingredientes naturales.</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/barra.png\" class=\"card__image21 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"barra()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n     \r\n\r\n      <!-- Nike Solstice -->\r\n      <div class=\"carta card--solstice\">\r\n        <div class=\"card__header card__header--solstice\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Galleta Sugar Free</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Galletas integrales de vainilla, producto horneado sabor a vainilla, adecuado para ser consumido por persona</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/galleta2.png\" alt=\"Nike Solstice\" class=\"card__image22 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"galleta()\">Elegir</a>\r\n\r\n          <span class=\"card__category card__will-animate\"></span>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div class=\"carta card--huarache\">\r\n        <div class=\"card__header card__header--huarache\">\r\n          <div class=\"card__watermark\" data-watermark=\"\"></div>\r\n\r\n          \r\n\r\n          <span class=\"card__price card__will-animate\"></span>\r\n\r\n          <h1 class=\"card__title card__will-animate\">Mentas</h1>\r\n          <span class=\"card__subtitle card__will-animate\">Deliciosos dulces de menta son un bocadillo refrescante</span>\r\n\r\n        </div>\r\n\r\n        <div class=\"card__body\">\r\n          <img src=\"../../assets/images/mentas.png\" alt=\"Nike Huarache\" class=\"card__image23 card__will-animate\">\r\n          <a class=\"card__wish-list card__wish-list--solstice card__will-animate\" (click)=\"mentas()\">Elegir</a>\r\n        </div>\r\n      </div> \r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_vasos\">\r\n  <app-preparacion [origen]=\"producto.tipo\" (boton)=\"click($event)\"></app-preparacion>\r\n</div>\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_leche\">\r\n    <app-leche  (boton)=\"click2($event)\" ></app-leche>\r\n  </div>\r\n  <div  style=\"height:100%\" [hidden]=\"!mostrar_extra\">\r\n    <app-extra (boton)=\"click3($event)\" ></app-extra>\r\n  </div>\r\n  <div  style=\"height:100%\" [hidden]=\"!mostrar_crema\">\r\n    <app-crema-batida (boton)=\"click4($event)\"></app-crema-batida>\r\n  </div>\r\n<div  style=\"height:100%\" [hidden]=\"!mostrar_caja\">\r\n  <app-caja [listaproductos]=\"listaproductos\" (boton)=\"click5($event)\" ></app-caja>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ventanas/ventanas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ventanasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ventanasComponent = /** @class */ (function () {
    function ventanasComponent() {
        this.mostrar_promociones = false;
        this.mostrar_inicio = true;
        this.mostrar_seleccion = false;
        this.mostrar_bebidas = false;
        this.mostrar_alimentos = false;
        this.mostrar_tees = false;
        this.mostrar_cafes = false;
        this.mostrar_frapes = false;
        this.mostrar_desayunos = false;
        this.mostrar_panaderia = false;
        this.mostrar_antojos = false;
        this.mostrar_vasos = false;
        this.mostrar_caja = false;
        this.mostrar_leche = false;
        this.mostrar_extra = false;
        this.mostrar_crema = false;
        this.nbebidas = 0;
        this.producto = { tipo: "", nombre: "", precio: 0, cantidad: 1, tipoleche: "", ingrediente: "", crema: "", id: "" };
        this.listaproductos = new Array();
        this.images = new Array();
        this.images[0] = "../../assets/images/promo1.jpg";
        this.images[1] = "../../assets/images/promo2.PNG";
        this.images[2] = "../../assets/images/promo3.png";
    }
    ventanasComponent.prototype.ngOnInit = function () {
    };
    ventanasComponent.prototype.nuevo_producto = function () {
        this.listaproductos.push(this.producto);
        delete this.producto;
        this.producto = { tipo: "", nombre: "", precio: 0, cantidad: 1, tipoleche: "", ingrediente: "", crema: "", id: "" };
    };
    ventanasComponent.prototype.reset = function () {
        this.mostrar_promociones = false;
        this.mostrar_inicio = false;
        this.mostrar_seleccion = false;
        this.mostrar_bebidas = false;
        this.mostrar_alimentos = false;
        this.mostrar_tees = false;
        this.mostrar_cafes = false;
        this.mostrar_frapes = false;
        this.mostrar_desayunos = false;
        this.mostrar_panaderia = false;
        this.mostrar_antojos = false;
        this.mostrar_vasos = false;
        this.mostrar_caja = false;
        this.mostrar_leche = false;
        this.mostrar_extra = false;
        this.mostrar_crema = false;
    };
    ventanasComponent.prototype.inicio = function () {
        this.listaproductos.splice(0, this.listaproductos.length);
        this.reset();
        this.mostrar_inicio = true;
    };
    ventanasComponent.prototype.regresar = function () {
        $(document).ready(function () {
            $("#mostrarmodal23").modal("show");
        });
    };
    ventanasComponent.prototype.seleccion = function () {
        this.reset();
        this.mostrar_seleccion = true;
    };
    ventanasComponent.prototype.promociones = function () {
        this.reset();
        this.mostrar_promociones = true;
    };
    ventanasComponent.prototype.bebidas = function () {
        this.reset();
        this.mostrar_bebidas = true;
    };
    ventanasComponent.prototype.alimentos = function () {
        this.reset();
        this.mostrar_alimentos = true;
    };
    ventanasComponent.prototype.tees = function () {
        this.reset();
        this.mostrar_tees = true;
        this.producto.tipo = "tees";
    };
    ventanasComponent.prototype.cafes = function () {
        this.reset();
        this.mostrar_cafes = true;
    };
    ventanasComponent.prototype.frapes = function () {
        this.reset();
        this.mostrar_frapes = true;
    };
    ventanasComponent.prototype.desayunos = function () {
        this.reset();
        this.mostrar_desayunos = true;
    };
    ventanasComponent.prototype.panaderia = function () {
        this.reset();
        this.mostrar_panaderia = true;
    };
    ventanasComponent.prototype.antojos = function () {
        this.reset();
        this.mostrar_antojos = true;
    };
    ventanasComponent.prototype.vasos = function () {
        this.reset();
        this.mostrar_vasos = true;
        this.playAudio(1);
    };
    ventanasComponent.prototype.caja = function () {
        this.nuevo_producto();
        this.reset();
        this.mostrar_caja = true;
    };
    ventanasComponent.prototype.leche = function () {
        this.reset();
        this.mostrar_leche = true;
        this.playAudio(2);
    };
    ventanasComponent.prototype.extra = function () {
        this.reset();
        this.mostrar_extra = true;
        this.playAudio(3);
    };
    ventanasComponent.prototype.crema = function () {
        this.reset();
        this.mostrar_crema = true;
        this.playAudio(4);
    };
    ventanasComponent.prototype.playAudio = function (bandera) {
        var audio1 = new Audio();
        var audio2 = new Audio();
        var audio3 = new Audio();
        var audio4 = new Audio();
        if (bandera == 1) {
            audio1.src = "../../../assets/audio/vasos.mp3";
            audio1.load();
            audio1.play();
        }
        if (bandera == 2) {
            audio2.src = "../../../assets/audio/leche.mp3";
            audio2.load();
            audio2.play();
        }
        if (bandera == 3) {
            audio3.src = "../../../assets/audio/extra.mp3";
            audio3.load();
            audio3.play();
        }
        if (bandera == 4) {
            audio4.src = "../../../assets/audio/crema.mp3";
            audio4.load();
            audio4.play();
        }
    };
    ventanasComponent.prototype.click = function (press) {
        this.producto.precio = press.precio;
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "seleccion")
            this.seleccion();
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "vasos")
            this.vasos();
        if (press.destino == "extra")
            this.extra();
        if (press.destino == "crema")
            this.crema();
        if (press.destino == "caja")
            this.caja();
    };
    ventanasComponent.prototype.click2 = function (press) {
        this.producto.tipoleche = press.tipoleche;
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "seleccion")
            this.seleccion();
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "vasos")
            this.vasos();
        if (press.destino == "extra")
            this.extra();
        if (press.destino == "crema")
            this.crema();
        if (press.destino == "caja")
            this.caja();
    };
    ventanasComponent.prototype.click3 = function (press) {
        this.producto.ingrediente = press.ingrediente;
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "seleccion")
            this.seleccion();
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "vasos")
            this.vasos();
        if (press.destino == "extra")
            this.extra();
        if (press.destino == "crema")
            this.crema();
        if (press.destino == "caja")
            this.caja();
    };
    ventanasComponent.prototype.click4 = function (press) {
        this.producto.crema = press.crema;
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "seleccion")
            this.seleccion();
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "vasos")
            this.vasos();
        if (press.destino == "extra")
            this.extra();
        if (press.destino == "crema")
            this.crema();
        if (press.destino == "caja")
            this.caja();
    };
    ventanasComponent.prototype.click5 = function (press) {
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "seleccion")
            this.seleccion();
        if (press.destino == "leche")
            this.leche();
        if (press.destino == "vasos")
            this.vasos();
        if (press.destino == "extra")
            this.extra();
        if (press.destino == "crema")
            this.crema();
        if (press.destino == "caja")
            this.caja();
        if (press.destino == "inicio")
            this.inicio();
    };
    ventanasComponent.prototype.mentas = function () {
        this.producto.id = "mentas";
        this.producto.nombre = "Mentas";
        this.producto.precio = 29;
        this.producto.tipo = "antojo";
        this.caja();
    };
    ventanasComponent.prototype.barra = function () {
        this.producto.id = "barra";
        this.producto.nombre = "B. saludable";
        this.producto.precio = 39;
        this.producto.tipo = "antojo";
        this.caja();
    };
    ventanasComponent.prototype.galleta = function () {
        this.producto.id = "galleta";
        this.producto.nombre = "Galleta S. Free";
        this.producto.precio = 49;
        this.producto.tipo = "antojo";
        this.caja();
    };
    ventanasComponent.prototype.desayuno1 = function () {
        this.producto.id = "croissant";
        this.producto.nombre = "Croissant J/Q";
        this.producto.precio = 69;
        this.producto.tipo = "desayuno";
        this.caja();
    };
    ventanasComponent.prototype.desayuno2 = function () {
        this.producto.id = "panini1";
        this.producto.nombre = "Panini T. Quesos";
        this.producto.precio = 69;
        this.producto.tipo = "desayuno";
        this.caja();
    };
    ventanasComponent.prototype.desayuno3 = function () {
        this.producto.id = "panini2";
        this.producto.nombre = "Panini M/Tomato";
        this.producto.precio = 69;
        this.producto.tipo = "desayuno";
        this.caja();
    };
    ventanasComponent.prototype.panaderia1 = function () {
        this.producto.id = "panelote";
        this.producto.nombre = "Pan de elote";
        this.producto.precio = 45;
        this.producto.tipo = "panaderia";
        this.caja();
    };
    ventanasComponent.prototype.panaderia2 = function () {
        this.producto.id = "dona";
        this.producto.nombre = "Dona de Chocolate";
        this.producto.precio = 39;
        this.producto.tipo = "panaderia";
        this.caja();
    };
    ventanasComponent.prototype.panaderia3 = function () {
        this.producto.id = "rollocanela";
        this.producto.nombre = "Rollo De Canela";
        this.producto.precio = 49;
        this.producto.tipo = "panaderia";
        this.caja();
    };
    ventanasComponent.prototype.metees1 = function () {
        this.producto.id = "telemon1";
        this.producto.nombre = "P. G. Tea Lemonade";
        this.producto.tipo = "tees";
        this.vasos();
    };
    ventanasComponent.prototype.metees2 = function () {
        this.producto.id = "telemon2";
        this.producto.nombre = "S. G. Tea Lemonade";
        this.producto.tipo = "tees";
        this.vasos();
    };
    ventanasComponent.prototype.metees3 = function () {
        this.producto.id = "mintblend";
        this.producto.nombre = "Mint Blend";
        this.producto.tipo = "tees";
        this.vasos();
    };
    ventanasComponent.prototype.mecafes1 = function () {
        this.producto.id = "mocha";
        this.producto.nombre = "Mocha";
        this.producto.tipo = "cafes";
        this.vasos();
    };
    ventanasComponent.prototype.mecafes2 = function () {
        this.producto.id = "cappuccino";
        this.producto.nombre = "Cappuccino";
        this.producto.tipo = "cafes";
        this.vasos();
    };
    ventanasComponent.prototype.mecafes3 = function () {
        this.producto.id = "espresso";
        this.producto.nombre = "Espresso";
        this.producto.tipo = "cafes";
        this.vasos();
    };
    ventanasComponent.prototype.mefrapes1 = function () {
        this.producto.id = "cafe";
        this.producto.nombre = "Cafe";
        this.producto.tipo = "Frapes";
        this.vasos();
    };
    ventanasComponent.prototype.mefrapes2 = function () {
        this.producto.id = "cajeta";
        this.producto.nombre = "Cajeta";
        this.producto.tipo = "Frapes";
        this.vasos();
    };
    ventanasComponent.prototype.mefrapes3 = function () {
        this.producto.id = "chip";
        this.producto.nombre = "Chip";
        this.producto.tipo = "Frapes";
        this.vasos();
    };
    ventanasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-ventanas',
            template: __webpack_require__("./src/app/ventanas/ventanas.component.html"),
            styles: [__webpack_require__("./src/app/ventanas/ventanas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ventanasComponent);
    return ventanasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map