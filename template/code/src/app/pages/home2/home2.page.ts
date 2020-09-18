import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {


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

  style:any = [
    {
      img:'http://placehold.it/70x70',
      style:'Haircut',
      places:'195 Places'
    },
    {
      img:'http://placehold.it/70x70',
      style:'Makeup',
      places:'195 Places'
    },
    {
      img:'http://placehold.it/70x70',
      style:'Hair color',
      places:'195 Places'
    },
    {
      img:'http://placehold.it/70x70',
      style:'Spa',
      places:'195 Places'
    },
    {
      img:'http://placehold.it/70x70',
      style:'Hairdryer',
      places:'195 Places'
    },
  ];
  
  constructor(
    private navCtr:NavController
  ) { }

  ngOnInit() {
  }

  goNext(){
    this.navCtr.navigateForward('salon-detail');
  }

}
