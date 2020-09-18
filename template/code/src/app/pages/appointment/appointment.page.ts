import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  avtiveSegmentt:any = 'up';
  services:any  = [];
  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  } 
  segmentChanged2(event) {
    this.avtiveSegmentt = event.detail.value;
  }

  goBack(){
    this.navCtrl.back();
  }
  servicelist:any = [
    {
      name:'Pedicure & Manicure',
    },
    {
      name:'Paraffin Treatment...',
    },
    {
      name:'Eyebrow',
    },
    {
      name:'Eyebrow, Upper lip...',
    },
    {
      name:'Full Arm',
    },
    {
      name:'Half Leg',
    }
  ]

  price:any = [
    {
      pri:'($15)',
    },
    {
      pri:'($18)',
    },
    {
      pri:'($05)',
    },
    {
      pri:'($12)',
    },
    {
      pri:'($25)',
    },
    {
      pri:'($22)',
    }
  ]

  Upcoming:any = [
    {
      img:'http://placehold.it/59X59',
      head:'Luxury Life Salon',
      addres:'88 Richmod Road, London',
      date:'25 May 2020, 1:00pm',
      com:'Complete',
      book:'Book Again',
    },
  ]
  pastBooking:any = [
    {
      img:'http://placehold.it/59X59',
      head:'Luxury Life Salon',
      addres:'88 Richmod Road, London',
      date:'25 May 2020, 1:00pm',
      com:'Complete',
      book:'Book Again',
    },
    {
      img:'http://placehold.it/59X59',
      head:'Luxury Life Salon',
      addres:'88 Richmod Road, London',
      date:'25 May 2020, 1:00pm',
      com:'Complete',
      book:'Book Again',
    }
  ]

}
