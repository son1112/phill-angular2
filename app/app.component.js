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
var page_detail_component_1 = require('./page-detail.component');
var page_service_1 = require('./page.service');
var AppComponent = (function () {
    function AppComponent(pageService) {
        this.pageService = pageService;
        this.title = 'Prairie Hill Learning Center';
    }
    AppComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.getPages().then(function (pages) { return _this.pages = pages; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    AppComponent.prototype.onSelect = function (page) { this.selectedPage = page; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>Menu</h2>\n        <ul class=\"pages\">\n          <li *ngFor=\"let page of pages\"\n            [class.selected]=\"page === selectedPage\"\n            (click)=\"onSelect(page)\">\n            <span class=\"badge\">{{page.id}}</span> {{page.title}}\n          </li>\n        </ul>\n\n        <my-page-detail [page]=\"selectedPage\"></my-page-detail>\n        ",
            styles: ["\n            .selected {\n                background-color: #CFD8DC !important;\n                color: white;\n            }\n            .pages {\n                margin: 0 0 2em 0;\n                list-style-type: none;\n                padding: 0;\n                width: 15em;\n            }\n            .pages li {\n                cursor: pointer;\n                position: relative;\n                left: 0;\n                background-color: #EEE;\n                margin: .5em;\n                padding: .3em 0;\n                height: 1.6em;\n                border-radius: 4px;\n            }\n            .pages li.selected:hover {\n                background-color: #BBD8DC !important;\n                color: white;\n            }\n            .pages li:hover {\n                color: #607D8B;\n                background-color: #DDD;\n                left: .1em;\n            }\n            .pages .text {\n                position: relative;\n                top: -3px;\n            }\n            .pages .badge {\n                display: inline-block;\n                font-size: small;\n                color: white;\n                padding: 0.8em 0.7em 0 0.7em;\n                background-color: #607D8B;\n                line-height: 1em;\n                position: relative;\n                left: -1px;\n                top: -4px;\n                height: 1.8em;\n                margin-right: .8em;\n                border-radius: 4px 0 0 4px;\n            }\n            "],
            directives: [page_detail_component_1.PageDetailComponent],
            providers: [page_service_1.PageService]
        }), 
        __metadata('design:paramtypes', [page_service_1.PageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map