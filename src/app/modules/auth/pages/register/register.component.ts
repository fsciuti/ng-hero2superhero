import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthenticationService } from '@app/core/auth/authentication.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'ngptt-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  @ViewChild('roleField', {static: false}) role: NgModel;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {}

  register(f) { //NB: Bad Practice!!!!
    const { email, password } = f.value;
    this.authService.register(email, password, this.role.value).subscribe(() => console.log('User registered'));
  }
}