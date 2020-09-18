import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }
  serviceList:any = [
    {
      name:'Hairstyling',
    },
    {
      name:'Spa',
    },
    {
      name:'Hairstyling',
    },
    {
      name:'Makeup',
    },
    {
      name:'Eyebrows',
    },
    {
      name:'Haircolor',
    },
    {
      name:'Retoch',
    },
    {
      name:'Eye Lashes',
    },
    {
      name:'Body Glowing',
    },
    {
      name:'Nail',
    }
  ]
  time(){
    this.navCtrl.navigateForward('booking-time-date');
  }
  goBack(){
    this.navCtrl.back();
  }

}
