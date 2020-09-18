import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingTimeDatePage } from './booking-time-date.page';

const routes: Routes = [
  {
    path: '',
    component: BookingTimeDatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingTimeDatePage]
})
export class BookingTimeDatePageModule {}
