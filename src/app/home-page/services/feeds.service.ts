import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FeedModel } from '../models/feeds.model';

@Injectable({
    providedIn: 'root'
})


export class FeedsService {

    constructor(
        private http: HttpClient,
    ) { }

    getFeeds(){
        const url = 'https://conduit.productionready.io/api/articles';
        return this.http.get<FeedModel[]>(url)
    }
}