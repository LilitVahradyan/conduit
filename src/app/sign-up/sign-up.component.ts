import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

 constructor(private authSrv: AuthService){}

 signUpForm!: FormGroup;  
 infoMessage: string = '';
 errorMessage: string = '';

  ngOnInit(){
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")])
    })
   
  };
  
  @Output() haveAccount: EventEmitter<boolean> = new EventEmitter();
  
  goToSignIn(){
    this.haveAccount.emit()
  };
  
  onSubmit(){
    this.authSrv.signUp({user: this.signUpForm.getRawValue()})
      .subscribe(
        (response) =>{
        this.infoMessage = 'You are successfully Signed Up!';
      },
        (error) => {
        this.errorMessage = 'Invalid Credentials!';
        
      })
      
    
  }

  
  
  
}

