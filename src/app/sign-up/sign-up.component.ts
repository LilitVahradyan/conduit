import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  @Output() haveAccount = new EventEmitter;
  
  goToSignIn(){
    this.haveAccount.emit()
  };

 signUpForm!: FormGroup; // Aranc ! error -- Property 'signUpForm' has no initializer and is not definitely assigned in the constructor.
                          
  ngOnInit(){
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")])
    })
   
  };

  onSubmit(){
   //console.log('form', this.signUpForm);
    
  }
  
   get pass(){
     return this.signUpForm.get('password');
   }
   get username(){
     return this.signUpForm.get('username');
   }
   get email(){
    return this.signUpForm.get('email');
  }
   
   
}

