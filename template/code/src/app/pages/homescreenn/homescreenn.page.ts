import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homescreenn',
  templateUrl: './homescreenn.page.html',
  styleUrls: ['./homescreenn.page.scss'],
})
export class HomescreennPage implements OnInit {
  salonList: any = [
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/212x140',
      address: '46 Park Avenue, London',
      star: '4.0'
    },
    {
      name: 'Cute Stuff Salon',
      image: 'http://placehold.it/212x140',
      address: '428 Mill Lane, London',
      star: '4.0'
    }
  ];

  slider2:any = [
    {
      img:'http://placehold.it/107x131',
      name:'Emmma',
    },
    {
      img:'http://placehold.it/107x131',
      name:'Sara',
    },
    {
      img:'http://placehold.it/107x131',
      name:'Andria',
    },
    {
      img:'http://placehold.it/107x131',
      name:'Lala',
    }
  ];

  select = 'HAIR';
  constructor(
    private navCtrl:NavController
  ) { }

  goNext(){
    this.navCtrl.navigateForward('tabs/home/subtab');
  }

}
