import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ HeaderComponent, GuideComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, GuideComponent, HomeComponent]
})
export class LayoutModule { }
