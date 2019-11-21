import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective, IsAuthedDirective } from './directives';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HasRoleDirective,
    IsAuthedDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    HasRoleDirective,
    IsAuthedDirective
  ]
})
export class SharedModule { }
