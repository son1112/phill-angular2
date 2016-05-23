"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var page_service_1 = require('./page.service');
var PagesComponent = (function () {
    function PagesComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
        this.title = 'Prairie Hill Learning Center';
    }
    PagesComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.getPages().then(function (pages) { return _this.pages = pages; });
    };
    PagesComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    PagesComponent.prototype.onSelect = function (page) { this.selectedPage = page; };
    PagesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['PageDetail', {
                id: this.selectedPage.id }]);
    };
    PagesComponent = __decorate([
        core_1.Component({
            selector: 'my-pages',
            templateUrl: 'app/pages.component.html',
            styleUrls: ['app/pages.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, page_service_1.PageService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map