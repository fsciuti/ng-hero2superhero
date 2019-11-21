import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { mergeMap, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

import { ProjectService } from '../project.service';
import { Project } from '@app/models';

@Injectable({
    providedIn: 'root',
})
export class ProjectDetailResolverService implements Resolve<Project> {
    constructor(private projectService: ProjectService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> | Observable<never> {
        let id = route.paramMap.get('id');

        return this.projectService.get(+id).pipe(
            mergeMap(project => {
                return of(project);
            }),
            catchError(error => {
                this.router.navigate(['../','projects']);
                return throwError(error);
            })
        )

    }
}