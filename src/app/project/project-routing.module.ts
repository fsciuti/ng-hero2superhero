import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '@app/auth/authentication.guard';
import { ProjectComponent } from './pages/project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';


const routes: Routes = [
  { 
    path: 'projects', 
    component: ProjectComponent,
    canActivateChild: [ AuthenticationGuard ],
    children: [
      { path: '', component: ProjectDashboardComponent },
      { path: ':id', component: ProjectDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
