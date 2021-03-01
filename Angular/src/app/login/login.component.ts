import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error: string | null = null;
  constructor(public loginService: LoginService, public router: Router, public authService: AuthService) {
  }
  ngOnInit(): void {
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
