import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]]
    })
  }
  
  @Output() needAccount: EventEmitter<boolean> = new EventEmitter();

  goToSignUp(){
    this.needAccount.emit()
  }

  

  submitForm(){

  }
  
  
}

