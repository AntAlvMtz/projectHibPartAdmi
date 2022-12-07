import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDriverPage } from './edit-driver.page';

const routes: Routes = [
  {
    path: '',
    component: EditDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDriverPageRoutingModule {}
