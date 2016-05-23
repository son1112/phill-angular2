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
var PageDetailComponent = (function () {
    function PageDetailComponent(pageService, routeParams) {
        this.pageService = pageService;
        this.routeParams = routeParams;
    }
    PageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.pageService.getPage(id)
            .then(function (page) { return _this.page = page; });
    };
    PageDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PageDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-page-detail',
            templateUrl: 'app/page-detail.component.html'
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, router_deprecated_1.RouteParams])
    ], PageDetailComponent);
    return PageDetailComponent;
}());
exports.PageDetailComponent = PageDetailComponent;
//# sourceMappingURL=page-detail.component.js.map