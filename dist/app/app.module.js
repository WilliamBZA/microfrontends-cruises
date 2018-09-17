/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./app.component", "@angular/core", "@angular/platform-browser", "angular-maps"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var app_component_1 = require("./app.component");
    var core_1 = require("@angular/core");
    var platform_browser_1 = require("@angular/platform-browser");
    var angular_maps_1 = require("angular-maps");
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                imports: [platform_browser_1.BrowserModule, angular_maps_1.MapModule.forRoot()],
                declarations: [app_component_1.AppComponent],
                bootstrap: [app_component_1.AppComponent],
                providers: [{ provide: angular_maps_1.MapAPILoader, deps: [], useFactory: MapServiceProviderFactory }]
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
    function MapServiceProviderFactory() {
        var bc = new angular_maps_1.BingMapAPILoaderConfig();
        bc.apiKey = "AkO1rARMw-tWnH2pu_4ujk58o8KOmfscCaavb5OJngpLVrgNj3DVZZjLFyJxu4DZ"; // your bing map key
        bc.branch = "experimental";
        // to use the experimental bing brach. There are some bug fixes for
        // clustering in that branch you will need if you want to use 
        // clustering.
        return new angular_maps_1.BingMapAPILoader(bc, new angular_maps_1.WindowRef(), new angular_maps_1.DocumentRef());
    }
    exports.MapServiceProviderFactory = MapServiceProviderFactory;
});
