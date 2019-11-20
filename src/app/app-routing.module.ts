import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ProjectContainerComponent } from './project/project-container/project-container.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
    { path: 'projects', component: ProjectContainerComponent },
    { path: 'signin', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}