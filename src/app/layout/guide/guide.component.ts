import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { of, from, Subscription } from 'rxjs';

@Component({
  selector: 'ngptt-guide',
  templateUrl: './guide.component.html',
  styles: []
})
export class GuideComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.router.events.pipe(
      filter((evt: RouterEvent) => evt instanceof NavigationEnd),
      switchMap(() => from(this.activatedRoute.root.children)),
      filter((route: ActivatedRoute) => route.outlet == 'primary'),
      switchMap((route: ActivatedRoute) => route.data)
    )
    .subscribe((data) => {
      this.message = data.guide || "";
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
