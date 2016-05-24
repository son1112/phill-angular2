import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { PagesComponent } from './pages.component';
import { PageDetailComponent } from './page-detail.component';
import { PageService } from './page.service';

@Component({
    selector: 'my-app',

    template: `
        <h1>{{title}}</h1>
        <nav>
          <a [routerLink]="['Dashboard']">Dashboard</a>
          <a [routerLink]="['Pages']">Pages</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        PageService
    ]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'PageDetail',
        component: PageDetailComponent
    },
    {
        path: '/pages',
        name: 'Pages',
        component: PagesComponent
    }
])

export class AppComponent {
    title = 'Prairie Hill Learning Center';
}
