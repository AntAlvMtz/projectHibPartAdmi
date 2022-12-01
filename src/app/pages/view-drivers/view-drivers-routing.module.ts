import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDriversPage } from './view-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDriversPageRoutingModule {}
