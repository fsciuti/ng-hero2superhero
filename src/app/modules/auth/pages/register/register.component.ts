import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@app/core/auth/authentication.service';

@Component({
  selector: 'ngptt-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {}

  register() {
    this.authService.register('test@email.com', 'test', 'admin').subscribe(() => console.log('User registered'));
  }
}