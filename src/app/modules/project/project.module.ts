import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent, ProjectDashboardComponent, ProjectDetailComponent } from './pages';
import { ProjectListComponent, ProjectBoxComponent } from './components';
import { SharedModule } from '@app/shared/shared.module';


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
    SharedModule,
    ProjectRoutingModule
  ],
  exports: []
})
export class ProjectModule { }
