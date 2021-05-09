import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SignUpModel } from '../models/sign-up-model';

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    constructor(private http: HttpClient){}

    signUpUrl: string = 'https://conduit.productionready.io/api/users';
   

    signUp(data: SignUpModel){

        return this.http.post(this.signUpUrl, data)

    }
}