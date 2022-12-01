import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDriverPageRoutingModule } from './view-driver-routing.module';

import { ViewDriverPage } from './view-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDriverPageRoutingModule
  ],
  declarations: [ViewDriverPage]
})
export class ViewDriverPageModule {}
