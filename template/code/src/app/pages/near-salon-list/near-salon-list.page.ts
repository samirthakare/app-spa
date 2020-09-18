import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-near-salon-list',
  templateUrl: './near-salon-list.page.html',
  styleUrls: ['./near-salon-list.page.scss']
})
export class NearSalonListPage implements OnInit {
  salonList: any = [
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
    {
      name: 'Queen Cuts',
      image: 'http://placehold.it/104X79',
      address: '46 Park Avenue, London',
      distance: '1.2 km',
      star: '3.5',
      time: '8:30 am - 9:00pm'
    },
  ];
  constructor(
    public modalController: ModalController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  viewSalonDetauil() {
    this.modalController.dismiss();
    this.navCtrl.navigateForward('/salon-detail');
  }
}
