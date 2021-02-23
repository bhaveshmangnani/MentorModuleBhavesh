import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor() { }
  

  ngOnInit(): void {
  }

  login(){
    alert('username: '+this.username+'\npassword: '+this.password);
    console.log(this.password);
  }

}
