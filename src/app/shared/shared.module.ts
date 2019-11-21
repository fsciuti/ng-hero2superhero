import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HasRoleDirective, IsAuthedDirective } from './directives';

@NgModule({
  declarations: [
    HasRoleDirective,
    IsAuthedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    HasRoleDirective,
    IsAuthedDirective
  ]
})
export class SharedModule { }
