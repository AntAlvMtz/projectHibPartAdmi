import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view-driver',
    loadChildren: () => import('./pages/view-driver/view-driver.module').then( m => m.ViewDriverPageModule)
  },
  {
    path: 'view-route',
    loadChildren: () => import('./pages/view-route/view-route.module').then( m => m.ViewRoutePageModule)
  },
  {
    path: 'new-driver',
    loadChildren: () => import('./pages/new-driver/new-driver.module').then( m => m.NewDriverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
