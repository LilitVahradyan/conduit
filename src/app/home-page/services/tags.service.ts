import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TagsModel } from '../models/tags.model';

@Injectable({
    providedIn: 'root'
})

export class TagsService {
    constructor(
        private http: HttpClient
    ){ }

    getTags(){
        const url = 'https://conduit.productionready.io/api/tags';
        return this.http.get<{tags: TagsModel[]}>(url)
    }
}