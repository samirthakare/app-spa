import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NearbymultivandorPage } from './nearbymultivandor.page';

const routes: Routes = [
  {
    path: '',
    component: NearbymultivandorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NearbymultivandorPage]
})
export class NearbymultivandorPageModule {}
