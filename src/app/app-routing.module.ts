import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { AuthenticationGuard } from '@app/core/auth/authentication.guard';
import { GuideComponent, HomeComponent } from '@app/layout';

const routes: Routes = [

    {
        path: 'guide',
        component: GuideComponent,
        outlet: 'popup'
    },
    {
        path: 'home',
        component: HomeComponent
    },
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
    { path: '', redirectTo: 'home', pathMatch: 'full' },
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