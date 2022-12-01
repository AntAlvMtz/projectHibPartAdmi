import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDriversPageRoutingModule } from './view-drivers-routing.module';

import { ViewDriversPage } from './view-drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDriversPageRoutingModule
  ],
  declarations: [ViewDriversPage]
})
export class ViewDriversPageModule {}
