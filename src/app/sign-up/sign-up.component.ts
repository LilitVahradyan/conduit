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
 errorMessages: string[] = [];

  ngOnInit(){
    this.signUpForm = new FormGroup({
      username: new FormControl('lilit123', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('lilit95v@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('Lilit123456', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")])
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
        this.infoMessage = 'You are successfully Signed Up!';
        console.log(response);
        
      },
        (err) => {
         const e = err.error.errors;
          Object.keys(e).forEach(item => {
            const itemErrors = e[item];
          
            itemErrors.forEach((eachErr: any) => {
              this.errorMessages.push(`${item} ${eachErr}`)
            })
            
          })
          
      })
      
    
  }

  
  
  
}

