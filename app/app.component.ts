import { Component } from '@angular/core';

export class Page {
    id: number;
    title: string;
}

@Component({
    selector: 'my-app',

    template:`
    <h1>{{title}}</h1>
    <h2>My Pages</h2>
    <ul class="pages">
      <li *ngFor="let page of pages"
        [class.selected]="page === selectedPage"
        (click)="onSelect(page)">
        <span class="badge">{{page.id}}</span> {{page.title}}
      </li>
    </ul>
    <div *ngIf="selectedPage">
      <h2>{{selectedPage.title}} details!</h2>
      <div><label>id: </label>{{selectedPage.id}}</div>
      <div>
        <label>title: </label>
        <input [(ngModel)]="selectedPage.title" placeholder="title"/>
      </div>
    </div>
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
            `]
})

export class AppComponent {
    title = 'Prairie Hill Learning Center';
    pages = PAGES;
    selectedPage: Page;

    onSelect(page: Page) { this.selectedPage = page; }
}

var PAGES: Page[] = [
    { "id": 1,  "title": "Home"       },
    { "id": 2,  "title": "About"      },
    { "id": 3,  "title": "Programs"   },
    { "id": 4,  "title": "Tours"      },
    { "id": 5,  "title": "Staff"      },
    { "id": 6,  "title": "Calendar"   },
    { "id": 7,  "title": "Employment" },
    { "id": 8,  "title": "Donate"     },
    { "id": 9,  "title": "Contact"    },
    { "id": 10, "title": "Events"     }
];
