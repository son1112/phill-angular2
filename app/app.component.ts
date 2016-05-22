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
      <h2>{{selectedPage.name}} details!</h2>
      <div><label>id: </label>{{selectedPage.id}}</div>
      <div>
        <label>title: </label>
        <input [(ngModel)]="selectedPage.name" placeholder="title"/>
      </div>
    </div>
  `
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
