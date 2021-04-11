import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {AuthService} from '../auth/auth.service';
import { Subscription } from 'rxjs';

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
  public sub : Subscription[] = []

  constructor(public loginService: LoginService, public router: Router, public authService: AuthService, public http: HttpClient) {
  }
  ngOnInit(): void {
    this.display();
    
  }

  

  display(){

    return this.http.get('https://localhost:44308/string/hw').subscribe( 
      res => { this.data = res }, err =>{ console.log( 'err' + err.toString() ); }
      ) 
  }

  login(){
    var sub2 = this.loginService.validate_user(this.username, this.password).subscribe(
      response =>{
        console.log(response);
        if (response){
          
          this.authService.login();
          var sub1 = this.authService.login().subscribe(() => {
          if (this.authService.isLoggedIn) {
            const redirectUrl = '/directory';
            this.router.navigate([redirectUrl]);
          }
            });
      
            this.sub.push(sub1);

        }
      }, error =>{
        console.log("error from ", error.message);
        this.loginService.error = "Invalid Credentials ";
        this.error = this.loginService.error;

      });

      this.sub.push(sub2);
    // console.log(res);



    // if(res)
    // {
    //   this.authService.login();
    //   var sub1 = this.authService.login().subscribe(() => {
    //     if (this.authService.isLoggedIn) {
    //       const redirectUrl = '/directory';
    //       this.router.navigate([redirectUrl]);
    //     }
    //   });

    //   this.sub.push(sub1);
    // }
    // else
    // {
    //   this.error = this.loginService.error;
    // }
  }
  logout() {
    this.authService.logout();
  }


  ngOnDestroy(): void{
    this.sub.forEach( (subs) =>{
      subs.unsubscribe();
    }

    );
    
  }


}
