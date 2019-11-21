import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { AuthenticationService } from '@app/core/auth/authentication.service';

@Component({
  selector: 'ngptt-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {}

  login() {
    this.route.queryParamMap.subscribe((data: ParamMap) => {
      console.log('dopo il login verrai reindirizzato', data.get('returnUrl'));
    })

    this.authService.login('test@email.com', 'test').pipe(
      tap(response => {
        console.log(response);
        console.log(this.authService.decodedAuthToken);
      }),
      switchMap(() => this.route.queryParamMap)
    ).subscribe((data: ParamMap) => {
      if(data.has('returnUrl')) {
        this.router.navigate([data.get('returnUrl')]);
      }
    });
  }
}
