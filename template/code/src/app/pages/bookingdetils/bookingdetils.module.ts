import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingdetilsPage } from './bookingdetils.page';
import { SucessfulPageModule } from '../sucessful/sucessful.module';

const routes: Routes = [
  {
    path: '',
    component: BookingdetilsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SucessfulPageModule
  ],
  declarations: [BookingdetilsPage]
})
export class BookingdetilsPageModule {}
