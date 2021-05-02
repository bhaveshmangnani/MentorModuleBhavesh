import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { Observable, Subscription } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor (private http: HttpClient){}
  /*
  uname = "Bhavesh";
  pwd = "bm10";
  */
  error = '';
  isLogin = false;

  validate_user(username: string, password: string)
  {
    var user = {'username': username, 'password': password};
    return this.http.post( 'https://localhost:44308/api/login/checklogin', user ) ;
  }
}
