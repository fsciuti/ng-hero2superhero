import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent, ProjectDashboardComponent, ProjectDetailComponent } from './pages';
import { ProjectListComponent, ProjectBoxComponent } from './components';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectDashboardComponent,
    ProjectBoxComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports: []
})
export class ProjectModule { }
