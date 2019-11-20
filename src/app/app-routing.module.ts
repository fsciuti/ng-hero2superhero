import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectContainerComponent } from './project/project-container/project-container.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
    { path: 'projects', component: ProjectContainerComponent },
    { path: 'signin', component: LoginComponent },
    { path: 'signout', component: LogoutComponent },
    { path: 'signup', component: RegisterComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: '**', redirectTo: 'signin', pathMatch: 'full' }
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