import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
      private fb: FormBuilder,
      private authSrv: AuthService,
      private router: Router,
      private route: ActivatedRoute
   ) { }
  
  signInForm!: FormGroup;
  infoMessage: string = '';
  errorMessages: string[] = [];
  
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]]
    })
  }

  onOpenSignUp(){
    this.router.navigate(['/register'], {relativeTo: this.route})
  }

  signIn(){
    this.authSrv.signIn(this.signInForm.getRawValue())
    .subscribe(
      (response) =>{
      this.infoMessage = 'You are successfully Signed In!';
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