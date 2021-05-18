import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SignUpModel } from '../models/sign-up-model';
import { SignInModel } from '../models/sign-in-model';


@Injectable({
    providedIn: 'root'
})

export class AuthService{

    constructor(private http: HttpClient){}

    signUp(data: SignUpModel){
        const signUpUrl = 'https://conduit.productionready.io/api/users';
        return this.http.post(signUpUrl, {user: data})
    }

    signIn(data: SignInModel){
        const signInUrl = 'https://conduit.productionready.io/api/users/login';
        return this.http.post(signInUrl, {user: data})
    }
}