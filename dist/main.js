(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "core-js/es7/reflect", "zone.js/dist/zone", "@angular/platform-browser-dynamic", "./app/app.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    require("core-js/es7/reflect");
    require("zone.js/dist/zone");
    var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    var app_module_1 = require("./app/app.module");
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
});
