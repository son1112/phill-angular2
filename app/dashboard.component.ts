import { Component, OnInit } from '@angular/core';

import { Page } from './page';
import { PageService } from './page.service';

import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    pages: Page[] = [];

    constructor(
        private router: Router,
        private pageService: PageService) {
    }

    ngOnInit() {
        this.pageService.getPages()
            .then(pages => this.pages = pages.slice(1,5));
    }

    gotoDetail(page: Page){
        let link = ['PageDetail', { id: page.id }];
        this.router.navigate(link);
    }
}
