import { Injectable } from '@angular/core';

import { Page } from './page';
import { PAGES } from './mock-pages';

@Injectable()
export class PageService {
    getPages() {
        return Promise.resolve(PAGES);
    }
    getPagesSlowly() {
        return new Promise<Page[]>(resolve => setTimeout(() => resolve(PAGES), 2000));
    }
}
