import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRoutePageRoutingModule } from './new-route-routing.module';

import { NewRoutePage } from './new-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewRoutePageRoutingModule
  ],
  declarations: [NewRoutePage]
})
export class NewRoutePageModule {}
