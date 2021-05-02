import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {AuthService} from '../auth/auth.service';
import { Subscription } from 'rxjs';
/*
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
*/

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
  public sub : Subscription[] = []

  constructor(public loginService: LoginService, public router: Router, public authService: AuthService, public http: HttpClient) {
  }

  display(){
    var STRING_URL = 'https://localhost:44308/string/hw';
    var subscription = this.http.get(STRING_URL).subscribe( 
      res => this.data = res ,
      err => console.log( 'error ->' + err.toString() ) 
    );
    this.sub.push(subscription);
    return subscription;
  }


  ngOnInit(): void {
    this.display();
  }

  login():void
  {
    var sub2 = this.loginService.validate_user(this.username, this.password).subscribe(
      response =>{
        console.log(response);
        if (response){
          const redirectUrl = '/directory';
          this.router.navigate([redirectUrl]);
        }
      },
      error =>{
        console.log("error from ", error.message);
        this.loginService.error = "Invalid Credentials ";
        this.error = this.loginService.error;
      }
    );
    this.sub.push(sub2);
  }


  logout():void 
  {
    this.authService.logout();
  }

  ngOnDestroy(): void
  {
    this.sub.forEach( (subs) =>{
      subs.unsubscribe();
    });
  }

}
