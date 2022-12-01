import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDriverPageRoutingModule } from './new-driver-routing.module';

import { NewDriverPage } from './new-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewDriverPageRoutingModule
  ],
  declarations: [NewDriverPage]
})
export class NewDriverPageModule {}
