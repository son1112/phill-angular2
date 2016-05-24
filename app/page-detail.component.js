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
var page_1 = require('./page');
var page_service_1 = require('./page.service');
var PageDetailComponent = (function () {
    function PageDetailComponent(_pageService, _routeParams) {
        this._pageService = _pageService;
        this._routeParams = _routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    PageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._routeParams.get('id') !== null) {
            var id = +this._routeParams.get('id');
            this.navigated = true;
            this._pageService.getPage(id)
                .then(function (page) { return _this.page = page; });
        }
        else {
            this.navigated = false;
            this.page = new page_1.Page();
        }
    };
    PageDetailComponent.prototype.save = function () {
        var _this = this;
        this._pageService
            .save(this.page)
            .then(function (page) {
            _this.page = page; // saved page, w/ id if new
            _this.goBack(page);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PageDetailComponent.prototype.goBack = function (savedPage) {
        if (savedPage === void 0) { savedPage = null; }
        this.close.emit(savedPage);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', page_1.Page)
    ], PageDetailComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PageDetailComponent.prototype, "close", void 0);
    PageDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-page-detail',
            templateUrl: 'app/page-detail.component.html',
            styleUrls: ['app/page-detail.component.css']
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService, router_deprecated_1.RouteParams])
    ], PageDetailComponent);
    return PageDetailComponent;
}());
exports.PageDetailComponent = PageDetailComponent;
//# sourceMappingURL=page-detail.component.js.map