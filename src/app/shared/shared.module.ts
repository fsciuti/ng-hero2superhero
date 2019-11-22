import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HasRoleDirective, IsAuthedDirective } from './directives';
import { CardComponent } from './components';

@NgModule({
  declarations: [
    HasRoleDirective,
    IsAuthedDirective,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    HasRoleDirective,
    IsAuthedDirective,
    CardComponent
  ]
})
export class SharedModule { }
