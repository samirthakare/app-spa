import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { Routes } from '@angular/router'; */

import { IonicModule } from '@ionic/angular';

import { SucessfulPage } from './sucessful.page';

/* const routes: Routes = [
  {
    path: '',
    component: SucessfulPage
  }
]; */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
  ],
  declarations: [SucessfulPage],
entryComponents: [SucessfulPage]
})
export class SucessfulPageModule {}
