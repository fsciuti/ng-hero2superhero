import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { AuthenticationService } from '@app/auth/authentication.service';

@Directive({
    selector: '[fsHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
    @Input() fsHasRole: string;
    isVisible = false;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private authService: AuthenticationService
    ) { }

    ngOnInit() {
        const { role } = this.authService.decodedAuthToken;

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
    }

    ngOnDestroy() { }
}
