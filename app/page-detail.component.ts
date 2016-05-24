import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Page } from './page';
import { PageService } from './page.service';

@Component({
    selector: 'my-page-detail',
    templateUrl: 'app/page-detail.component.html',
    styleUrls: ['app/page-detail.component.css']
})

export class PageDetailComponent implements OnInit {
    @Input() page: Page;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private _pageService: PageService,
        private _routeParams: RouteParams) {
    }
    
    ngOnInit() {
        if (this._routeParams.get('id') !== null) {
            let id = +this._routeParams.get('id');
            this.navigated = true;
            this._pageService.getPage(id)
                .then(page => this.page = page);
        } else {
            this.navigated = false;
            this.page = new Page();
        }
    }

    save() {
        this._pageService
            .save(this.page)
            .then(page => {
                this.page = page; // saved page, w/ id if new
                this.goBack(page);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    
    goBack(savedPage: Page = null) {
        this.close.emit(savedPage);
        if (this.navigated) {
            window.history.back();
        }
    }
}
