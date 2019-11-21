import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthenticationService } from '@app/auth/authentication.service';

@Directive({ selector: '[fsIsAuthed]' })
export class IsAuthedDirective implements OnInit {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authenticationService: AuthenticationService
    ) { }

    condition: boolean;

    ngOnInit() {
        this.authenticationService.isLoggedIn$.subscribe(
            (isAuthenticated) => {
                if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            }
        );
    }

    @Input() set fsIsAuthed(condition: boolean) {
        this.condition = condition;
    }

}