import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  gender: any = 'Man';
  state: any = 1;
  activeStar: any = 3;
  avtiveSegment: any = 'Review';
  avtiveSegmentt:any = 'pricetable';
  changeGenderValue(e) {
    this.gender = e.detail.value;
  }
  logScrolling(ev) {
    if (ev.detail.scrollTop >= 200) {
      this.state = 2;
    } else {
      this.state = 1;
    }
  }
  goBack(){
    this.navCtrl.back();
  }
  packages(){
    this.navCtrl.navigateForward('packages');
  }
  facility:any = [
    {
      style:'Hair Cut',
      pri:'2 X $15',
      des:'Pedicure & Medicine ($15)',
    },
    {
      style:'Hair Cut',
      pri:'1 X $18',
      des:'Paraffin Treatment..($18)',
    },
    {
      style:'Waxing',
      pri:'1 X $105',
      des:'Eye Brow',
    },
    {
      style:'Waxing',
      pri:'2 X $15',
      des:'Eyebrow, Upper lip...',
    },
    {
      style:'Waxing',
      pri:'2 X $15',
      des:'Pedicure & Medicine ($15)',
    },
    {
      style:'Waxing',
      pri:'1 X $22',
      des:'Half Leg',
    },
  ]
}
