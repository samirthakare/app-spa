import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-time-date',
  templateUrl: './booking-time-date.page.html',
  styleUrls: ['./booking-time-date.page.scss'],
})
export class BookingTimeDatePage implements OnInit {
  bookDate: any;
  isExpand: boolean = false;
  constructor(
    private navCtrl:NavController
  ) { 
    this.bookDate = new Date();
  }

  ngOnInit() {
  }
  
  salonSpecialist:any = [
    {
      img:'http://placehold.it/70X70',
      name:'Emma',
      sublabel:'Manger'
    },
    {
      img:'http://placehold.it/70X70',
      name:'Sara',
      sublabel:'Sr. Hair Stylist'
    },
    {
      img:'http://placehold.it/70X70',
      name:'Andreea',
      sublabel:'Makeup Artist'
    },
    {
      img:'http://placehold.it/70X70',
      name:'Franciene',
      sublabel:'Hair Stylist'
    }
  ]
  setTimeSlot(time) {
    this.activeTimeSlot = time;
  }

  bookingdetails(){
    this.navCtrl.navigateForward('bookingdetils');
  }
  goBack(){
    this.navCtrl.back();
  }

  timeSlot: any = [
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM'
  ];
  selectedEmployee: any = 2;
  activeTimeSlot: any = '12:00 PM';
  minYear: any = new Date().getFullYear();
  maxYear: any = new Date().getFullYear() + 5;


}
