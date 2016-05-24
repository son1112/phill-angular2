import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Page } from './page';

@Injectable()
export class PageService {

    private pagesUrl = 'app/pages'; // URL to web api

    constructor(private http: Http) { }
    
    // CREATE new Page
    private post(page: Page): Promise<Page> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.pagesUrl,
                  JSON.stringify(page),
                  {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // READ existing Page(s)
    getPages(): Promise<Page[]> {
        return this.http.get(this.pagesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getPage(id: number) {
        return this.getPages()
            .then(pages => pages.filter(page => page.id === id)[0]);
    }
    
    // UPDATE existing Page
    private put(page: Page) {
        let headers = new Headers();
        headers.append('Content-Type',
                       'application/json');

        let url = `${this.pagesUrl}/${page.id}`;

        return this.http
            .put(url, JSON.stringify(page),
                 {headers: headers})
            .toPromise()
            .then(() => page)
            .catch(this.handleError);
    }

    // DESTROY existing Page
    delete(page: Page) {
        let headers = new Headers();
        headers.append('Content-Type',
                       'application/json');

        let url = `${this.pagesUrl}/${page.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // SAVE combination of _post and _put methods
    save(page: Page): Promise<Page> {
        if (page.id) {
            return this.put(page);
        }
        return this.post(page);
    }
    
    // handle ERRORS
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
