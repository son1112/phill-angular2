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
var Page = (function () {
    function Page() {
    }
    return Page;
}());
exports.Page = Page;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Prairie Hill Learning Center';
        this.pages = PAGES;
    }
    AppComponent.prototype.onSelect = function (page) { this.selectedPage = page; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Pages</h2>\n    <ul class=\"pages\">\n      <li *ngFor=\"let page of pages\"\n        [class.selected]=\"page === selectedPage\"\n        (click)=\"onSelect(page)\">\n        <span class=\"badge\">{{page.id}}</span> {{page.title}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedPage\">\n      <h2>{{selectedPage.name}} details!</h2>\n      <div><label>id: </label>{{selectedPage.id}}</div>\n      <div>\n        <label>title: </label>\n        <input [(ngModel)]=\"selectedPage.name\" placeholder=\"title\"/>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PAGES = [
    { "id": 1, "title": "Home" },
    { "id": 2, "title": "About" },
    { "id": 3, "title": "Programs" },
    { "id": 4, "title": "Tours" },
    { "id": 5, "title": "Staff" },
    { "id": 6, "title": "Calendar" },
    { "id": 7, "title": "Employment" },
    { "id": 8, "title": "Donate" },
    { "id": 9, "title": "Contact" },
    { "id": 10, "title": "Events" }
];
//# sourceMappingURL=app.component.js.map