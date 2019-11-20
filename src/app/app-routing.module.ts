import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthenticationGuard } from './auth/authentication.guard';


const routes: Routes = [
    { path: 'signin', component: LoginComponent },
    { path: 'signout', component: LogoutComponent },
    { path: 'signup', component: RegisterComponent },
    { 
        path: 'projects',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
    },
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