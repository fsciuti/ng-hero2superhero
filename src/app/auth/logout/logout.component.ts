import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'ngptt-logout',
  templateUrl: './logout.component.html',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
