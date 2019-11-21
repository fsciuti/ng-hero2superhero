import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthenticationService } from '@app/core/auth/authentication.service';

@Directive({
    selector: '[fsHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
    @Input() fsHasRole: string;
    isVisible = false;
    stop$ = new Subject();

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authService.activeUser$.pipe(
            takeUntil(this.stop$)
        ).subscribe(user => {
            const { role = '' } = user || {};

            if (!role) {
                this.viewContainerRef.clear();
            }

            if (role === this.fsHasRole) {
                if (!this.isVisible) {
                    this.isVisible = true;
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                }
            } else {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        })
    }

    ngOnDestroy() {
        this.stop$.next();
    }
}
