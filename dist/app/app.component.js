var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var core_1 = require("@angular/core");
    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            var _this = this;
            this._options = {
                disableBirdseye: false,
                disableStreetside: false,
                navigationBarMode: 1,
                zoom: 6
            };
            this._path = new Array();
            PathData.forEach(function (element) {
                _this._path.push({ latitude: element.latitude, longitude: element.longitude });
            });
        }
        AppComponent = __decorate([
            core_1.Component({
                selector: 'app-main',
                templateUrl: '/src/app/app.template.html'
            }),
            __metadata("design:paramtypes", [])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
    var PathData = [
        { 'latitude': 54.415767, 'longitude': 18.664087 },
        { 'latitude': 58.403351, 'longitude': 21.095825 },
        { 'latitude': 59.610423, 'longitude': 22.861209 },
        { 'latitude': 60.137442, 'longitude': 24.941648 },
        { 'latitude': 59.920115, 'longitude': 27.292766 },
        { 'latitude': 60.069910, 'longitude': 28.835464 },
        { 'latitude': 59.945509, 'longitude': 30.074524 },
    ];
});
