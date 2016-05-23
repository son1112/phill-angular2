import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Page } from './page';
import { PageService } from './page.service';

@Component({
    selector: 'my-page-detail',
    templateUrl: 'app/page-detail.component.html'
})


export class PageDetailComponent implements OnInit {
    page: Page;

    constructor(
        private pageService: PageService,
        private routeParams: RouteParams) {
    }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.pageService.getPage(id)
            .then(page => this.page = page);
    }
    goBack() {
        window.history.back();
    }
}
