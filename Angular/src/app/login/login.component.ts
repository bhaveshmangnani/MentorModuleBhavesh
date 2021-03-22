import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {AuthService} from '../auth/auth.service';

import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error: string | null = null;

  data !: any;

  constructor(public loginService: LoginService, public router: Router, public authService: AuthService, public http: HttpClient) {
  }
  ngOnInit(): void {
    this.display();
    
  }

  display(){

    return this.http.get('https://localhost:44381/string/hw').subscribe( 
      res => { this.data = res }, err =>{ console.log( 'err' + err.toString() ); }
      ) 
  }

  login(){
    const res = this.loginService.validate_user(this.username, this.password)
    if(res)
    {
      this.authService.login();
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          const redirectUrl = '/directory';
          this.router.navigate([redirectUrl]);
        }
      });
    }
    else
    {
      this.error = this.loginService.error;
    }
  }
  logout() {
    this.authService.logout();
  }
}
