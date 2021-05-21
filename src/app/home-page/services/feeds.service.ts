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

    getFeeds(query: {limit: number,  offset: number}){
        const url = 'https://conduit.productionready.io/api/articles';
        return this.http.get<{articlesCount: number, articles: FeedModel[]}>
                    (url,  {params: query as any})
    }
}