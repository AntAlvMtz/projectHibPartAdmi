import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDriverPageRoutingModule } from './edit-driver-routing.module';

import { EditDriverPage } from './edit-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditDriverPageRoutingModule
  ],
  declarations: [EditDriverPage]
})
export class EditDriverPageModule {}
