import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { AuthenticationGuard } from '@app/core/auth/authentication.guard';
import { GuideComponent } from '@app/layout';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
    {
        path: 'guide',
        component: GuideComponent,
        outlet: 'popup'
    },
    { 
        path: 'signin',
        component: LoginComponent,
        data: {
            guide: 'Esegui il tuo login'
        }
    },
    { path: 'signout', component: LogoutComponent },
    { path: 'signup', component: RegisterComponent },
    { 
        path: 'projects',
        loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule),
        canLoad: [ AuthenticationGuard ],
        data: {
            guide: 'Area di Gestione dei Progetti'
        }
    },
    { 
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canLoad: [ AuthenticationGuard ],
        data: {
            guide: 'Area Amministrativa'
        }
    },
    { path: '', redirectTo: 'signin', pathMatch: 'full',  },
    { path: '**', redirectTo: 'signin' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { preloadingStrategy: SelectivePreloadingStrategyService /* PreloadAllModules */ }
            )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}