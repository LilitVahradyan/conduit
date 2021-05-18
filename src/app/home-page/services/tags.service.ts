import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class TagsService {
    constructor(
        private http: HttpClient
    ){ }

    getTags(){
        const url = 'https://conduit.productionready.io/api/tags';
        return this.http.get(url)
    }
}