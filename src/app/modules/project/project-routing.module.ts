import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '@app/core/auth/authentication.guard';

import { ProjectDetailResolverService } from './resolvers';
import { ProjectComponent, ProjectDashboardComponent, ProjectDetailComponent } from './pages';

const routes: Routes = [
  { 
    path: '', 
    component: ProjectComponent,
    canActivateChild: [ AuthenticationGuard ],
    children: [
      { path: '', component: ProjectDashboardComponent },
      { 
        path: ':id', 
        component: ProjectDetailComponent,
        resolve: {
          project: ProjectDetailResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
