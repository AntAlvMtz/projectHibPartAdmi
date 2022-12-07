import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'view-drivers',
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
  {
    path: 'view-drivers',
    loadChildren: () => import('./pages/view-drivers/view-drivers.module').then( m => m.ViewDriversPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./pages/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
  {
    path: 'new-route',
    loadChildren: () => import('./pages/new-route/new-route.module').then( m => m.NewRoutePageModule)
  },

  // {
  //   path: 'chat-bot',
  //   loadChildren: () => import('./pages/chat-bot/chat-bot-routing.module').then( m => m.Cha)
  // },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
