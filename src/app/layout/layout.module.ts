import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { GuideComponent } from './guide/guide.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HeaderComponent, GuideComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, GuideComponent]
})
export class LayoutModule { }
