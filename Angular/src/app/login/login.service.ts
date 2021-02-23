import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uname = "Bhavesh";
  pwd = "bm10";
  error = '';

  isLogin = false;

  validate_user(username: string, password: string)
  {
    if (this.uname ==username && this.pwd == password)
    {
      this.isLogin =true;
      return true;
    }
    else
    {
      this.error='Incorrect Username or Password';
      return false;
    }
  }
}
