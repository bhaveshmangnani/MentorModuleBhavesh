import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
//import { Observable } from 'rxjs';
//import {LoginService} from '../login/login.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
      const url: string = state.url;
      return this.checkLogin(url);
  }
  checkLogin(url: string) : true|UrlTree {
    if(this.authService.isLoggedIn) {return true;}

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }
  
}


