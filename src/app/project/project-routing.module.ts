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
    children: [
      { path: '', component: ProjectDashboardComponent, canActivate: [ AuthenticationGuard ] },
      { path: ':id', component: ProjectDetailComponent, canActivate: [ AuthenticationGuard ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
