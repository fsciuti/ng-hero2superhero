import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { ProjectService } from '../project.service';
import { take, mergeMap, catchError, throwIfEmpty } from 'rxjs/operators';
import { EMPTY, of, Observable, throwError } from 'rxjs';
import { Project } from '@app/models/project.model';

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