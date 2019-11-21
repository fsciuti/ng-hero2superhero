import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [ HeaderComponent, GuideComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, GuideComponent]
})
export class LayoutModule { }
