import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  @Output() needAccount = new EventEmitter;

  constructor() { }
  passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";

  goToSignUp(){
    this.needAccount.emit()
  }

  ngOnInit(): void {
  }

  submitForm(){

  }
  
  
}

