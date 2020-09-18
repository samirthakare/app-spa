import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
 
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

  salonSpecialist:any = [
    {
      img:'http://placehold.it/60x60',
      name:'Emma',
    },
    {
      img:'http://placehold.it/60x60',
      name:'Sara',
    },
    {
      img:'http://placehold.it/60x60',
      name:'Andreea',
    },
    {
      img:'http://placehold.it/60x60',
      name:'Franciene',
    }
  ];

  constructor(
    private navCtrl:NavController
  ) { }

  goNext(){
    this.navCtrl.navigateForward('tabs/home/subtab2');
  }

 
  ngOnInit() {
  }
}
