import { Component, OnInit } from '@angular/core';

import { Page } from './page';
import { PageDetailComponent } from './page-detail.component';
import { PageService } from './page.service';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <h2>Menu</h2>
        <ul class="pages">
          <li *ngFor="let page of pages"
            [class.selected]="page === selectedPage"
            (click)="onSelect(page)">
            <span class="badge">{{page.id}}</span> {{page.title}}
          </li>
        </ul>

        <my-page-detail [page]="selectedPage"></my-page-detail>
        `,
    styles:[`
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .pages {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .pages li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .pages li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .pages li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .pages .text {
                position: relative;
                top: -3px;
            }
            .pages .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
            }
            `],
    directives: [PageDetailComponent],
    providers: [PageService]
})

export class AppComponent implements OnInit {
    title = 'Prairie Hill Learning Center';
    pages: Page[]; 
    selectedPage: Page;

    constructor(private pageService: PageService) { }

    getPages() {
        this.pageService.getPages().then(pages => this.pages = pages);
    }

    ngOnInit() {
        this.getPages();
    }
    
    onSelect(page: Page) { this.selectedPage = page; }
}
