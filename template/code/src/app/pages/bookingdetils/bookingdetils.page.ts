import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SucessfulPage } from '../sucessful/sucessful.page';

@Component({
  selector: 'app-bookingdetils',
  templateUrl: './bookingdetils.page.html',
  styleUrls: ['./bookingdetils.page.scss'],
})
export class BookingdetilsPage implements OnInit {

  constructor(
    private modal:ModalController,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  async presentModal(){
    const modal = await this.modal.create({
      component:SucessfulPage,
      cssClass:'modal-success'
    });
    return await modal.present();
  }

  goBack(){
    this.navCtrl.back();
  }

}
