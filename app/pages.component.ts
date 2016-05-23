import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Page } from './page';
import { PageService } from './page.service';

@Component({
    selector: 'my-pages',
    templateUrl: 'app/pages.component.html',
    styleUrls: ['app/pages.component.css']
})

export class PagesComponent implements OnInit {
    title = 'Prairie Hill Learning Center';

    pages: Page[]; 
    selectedPage: Page;

    constructor(
        private router: Router,
        private pageService: PageService) { }

    getPages() {
        this.pageService.getPages().then(pages => this.pages = pages);
    }

    ngOnInit() {
        this.getPages();
    }
    
    onSelect(page: Page) { this.selectedPage = page; }

    gotoDetail() {
        this.router.navigate(['PageDetail', {
            id: this.selectedPage.id }]);
    }
}
