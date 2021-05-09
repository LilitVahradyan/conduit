import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SignUpModel } from '../models/sign-up-model';
import { SignInModel } from '../models/sign-in-model';

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    constructor(private http: HttpClient){}

    signUpUrl: string = 'https://conduit.productionready.io/api/users';
    signInUrl: string = 'https://conduit.productionready.io/api/users/login';

    signUp(data: SignUpModel){
        return this.http.post(this.signUpUrl, data)
    }

    signIn(data: SignInModel){
        return this.http.post(this.signInUrl, data)
    }
}