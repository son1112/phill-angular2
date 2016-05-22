import { Component, Input } from '@angular/core';

import { Page } from './page';

@Component({
    selector: 'my-page-detail',
    template: `
        <div *ngIf="page">
          <h2>{{page.title}}</h2>
          <div><label>id: </label>{{page.id}}</div>
          <div>
            <label>title: </label>
            <input [(ngModel)]="page.title" placeholder="title"/>
          </div>
        </div>
        `
})

export class PageDetailComponent {
    @Input()
    page: Page;
}
