import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './pages/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectDashboardComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports: []
})
export class ProjectModule { }
