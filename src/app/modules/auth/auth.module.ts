import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth.component';
import { LoginComponent, RegisterComponent } from './pages';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
