import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../auth/authentication.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.checkLogin(state.url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route, state);
  }

  canLoad(route: Route, segments: UrlSegment[]) {

    const fullPath = segments.reduce((path, currentSegment) => {
      return `${path}/${currentSegment.path}`;
    }, '');
  
    return this.checkLogin(fullPath);
  }

  checkLogin(returnUrl) {
    if(this.authService.authToken) {
      console.log('You are logged in!');
      return true;
    }

    console.log('You aren\'t logged!');
    this.router.navigate(['/signin'], { queryParams: { returnUrl } });
    return false;
  }
}
