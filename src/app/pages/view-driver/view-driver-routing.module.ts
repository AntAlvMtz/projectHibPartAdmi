import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDriverPage } from './view-driver.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDriverPageRoutingModule {}
