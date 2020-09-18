import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sucessful',
  templateUrl: './sucessful.page.html',
  styleUrls: ['./sucessful.page.scss'],
})
export class SucessfulPage implements OnInit {

  constructor(
    private modal:ModalController,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  continue(){
    this.modal.dismiss();
    this.navCtrl.navigateForward('tabs/home')
  }

}
