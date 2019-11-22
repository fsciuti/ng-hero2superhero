import { Directive, HostBinding, HostListener } from '@angular/core';
import { AuthenticationService } from '@app/core/auth';
import { Router } from '@angular/router';

@Directive({
  selector: '[ngpttLogout]'
})
export class LogoutDirective {

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) { }

    @HostBinding('style.cursor') style = 'pointer';

    @HostListener('click')
    onClick()  {
      this.authService.logout();
      this.router.navigate(['/signin']);
    }
}
