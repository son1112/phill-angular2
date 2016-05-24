import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Page } from './page';
import { PageService } from './page.service';
import { PageDetailComponent } from './page-detail.component';

@Component({
    selector: 'my-pages',
    templateUrl: 'app/pages.component.html',
    styleUrls: ['app/pages.component.css'],
    directives: [PageDetailComponent]
})

export class PagesComponent implements OnInit {
    pages: Page[]; 
    selectedPage: Page;
    addingPage = false;
    error: any;

    constructor(
        private _router: Router,
        private _pageService: PageService) { }

    getPages() {
        this._pageService
            .getPages()
            .then(pages => this.pages = pages)
            .catch(error => this.error = error); //TODO: Display error message
    }

    addPage() {
        this.addingPage = true;
        this.selectedPage = null;
    }

    close(savedPage: Page) {
        this.addingPage = false;
        if (savedPage) { this.getPages(); }
    }

    delete(page: Page, event: any) {
        event.stopPropagation();
        this._pageService
            .delete(page)
            .then(res => {
                this.pages = this.pages.filter(h => h !== page);
                if (this.selectedPage === page) {
                    this.selectedPage = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    ngOnInit() {
        this.getPages();
    }
    
    onSelect(page: Page) {
        this.selectedPage = page;
        this.addingPage = false;
    }

    gotoDetail() {
        this._router.navigate(['PageDetail', {
            id: this.selectedPage.id }]);
    }
}
