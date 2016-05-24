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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.pagesUrl = 'app/pages'; // URL to web api
    }
    // CREATE new Page
    PageService.prototype.post = function (page) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.pagesUrl, JSON.stringify(page), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // READ existing Page(s)
    PageService.prototype.getPages = function () {
        return this.http.get(this.pagesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PageService.prototype.getPage = function (id) {
        return this.getPages()
            .then(function (pages) { return pages.filter(function (page) { return page.id === id; })[0]; });
    };
    // UPDATE existing Page
    PageService.prototype.put = function (page) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.pagesUrl + "/" + page.id;
        return this.http
            .put(url, JSON.stringify(page), { headers: headers })
            .toPromise()
            .then(function () { return page; })
            .catch(this.handleError);
    };
    // DESTROY existing Page
    PageService.prototype.delete = function (page) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.pagesUrl + "/" + page.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // SAVE combination of _post and _put methods
    PageService.prototype.save = function (page) {
        if (page.id) {
            return this.put(page);
        }
        return this.post(page);
    };
    // handle ERRORS
    PageService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    PageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map