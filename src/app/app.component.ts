import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  hasAccount = true;

  onClickLink(){
    this.hasAccount = !this.hasAccount
  }
}
