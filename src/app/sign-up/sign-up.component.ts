import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignUpModel } from '../models/sign-up-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

 constructor(private authSrv: AuthService){}

 signUpForm!: any;  // type ???
                          
  ngOnInit(){
    this.signUpForm = new FormGroup({
      username: new FormControl('dfgdfgdgfdg', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('fgdg@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('rferftreLfer5646', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")])
    })
   
  };
  
  @Output() haveAccount: EventEmitter<boolean> = new EventEmitter();
  
  goToSignIn(){
    this.haveAccount.emit()
  };
  
  onSubmit(){
    this.authSrv.signUp(this.signUpForm.getRawValue())
      .subscribe(
        (response) =>{
        console.log(this.signUpForm.getRawValue());
        console.log(response);
        
      },
        (error) => {
        console.log(this.signUpForm.getRawValue());
        console.log(error);
      })
      
    
  }
  
  
}

