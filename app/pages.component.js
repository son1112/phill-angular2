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
var page_detail_component_1 = require('./page-detail.component');
var PagesComponent = (function () {
    function PagesComponent(_router, _pageService) {
        this._router = _router;
        this._pageService = _pageService;
        this.addingPage = false;
    }
    PagesComponent.prototype.getPages = function () {
        var _this = this;
        this._pageService
            .getPages()
            .then(function (pages) { return _this.pages = pages; })
            .catch(function (error) { return _this.error = error; }); //TODO: Display error message
    };
    PagesComponent.prototype.addPage = function () {
        this.addingPage = true;
        this.selectedPage = null;
    };
    PagesComponent.prototype.close = function (savedPage) {
        this.addingPage = false;
        if (savedPage) {
            this.getPages();
        }
    };
    PagesComponent.prototype.delete = function (page, event) {
        var _this = this;
        event.stopPropagation();
        this._pageService
            .delete(page)
            .then(function (res) {
            _this.pages = _this.pages.filter(function (h) { return h !== page; });
            if (_this.selectedPage === page) {
                _this.selectedPage = null;
            }
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PagesComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    PagesComponent.prototype.onSelect = function (page) {
        this.selectedPage = page;
        this.addingPage = false;
    };
    PagesComponent.prototype.gotoDetail = function () {
        this._router.navigate(['PageDetail', {
                id: this.selectedPage.id }]);
    };
    PagesComponent = __decorate([
        core_1.Component({
            selector: 'my-pages',
            templateUrl: 'app/pages.component.html',
            styleUrls: ['app/pages.component.css'],
            directives: [page_detail_component_1.PageDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, page_service_1.PageService])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map