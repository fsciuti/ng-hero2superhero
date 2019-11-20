import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '@app/auth/authentication.guard';
import { ProjectContainerComponent } from './pages/project-container/project-container.component';


const routes: Routes = [
  { path: 'projects', component: ProjectContainerComponent, canActivate: [ AuthenticationGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
