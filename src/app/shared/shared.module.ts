import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HasRoleDirective, IsAuthedDirective } from './directives';
import { CardComponent } from './components';
import { TabsComponent } from './components/tabs/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { LogoutDirective } from './directives/logout.directive';

@NgModule({
  declarations: [
    HasRoleDirective,
    IsAuthedDirective,
    LogoutDirective,
    CardComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    HasRoleDirective,
    IsAuthedDirective,
    LogoutDirective,
    CardComponent,
    TabsComponent,
    TabComponent
  ]
})
export class SharedModule { }
