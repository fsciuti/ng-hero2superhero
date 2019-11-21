import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent, ProjectDashboardComponent } from './pages';
import { ProjectListComponent, ProjectDetailComponent } from './components';


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
