import { ImageModalPage } from './../image-modal/image-modal.page';
import { SharePage } from './../share/share.page';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.page.html',
  styleUrls: ['./salon-detail.page.scss']
})
export class SalonDetailPage implements OnInit {
  empployeeList: any = [
    {
      index: 1,
      image: 'http://placehold.it/57x56',
      name: 'Daniel William',
      post: 'Manager'
    },
    {
      index: 2,
      image: 'http://placehold.it/57x56',
      name: 'Kieran Dely',
      post: 'Sr. Barber'
    },
    {
      index: 3,
      image: 'http://placehold.it/57x56',
      name: 'Helen White',
      post: 'Makeup Artist'
    },
    {
      index: 4,
      image: 'http://placehold.it/57x56',
      name: 'Ben Jhonson',
      post: 'Hair Stylist'
    },
    {
      index: 5,
      image: 'http://placehold.it/57x56',
      name: 'Ben Jhonson',
      post: 'Sr. Berber'
    }
  ];
  services: any = [
    {
      title: 'Hairstyle',
      type: '10',
      color: '#FD6C57',
      icon: 'noun_hair_147163.png'
    },
    {
      title: 'Shaving',
      type: '6',
      color: '#FE9654',
      icon: 'noun_Razor Blade_1260924.png'
    },
    {
      title: 'Hairdryer',
      type: '4',
      color: '#615DD9',
      icon: 'noun_Dryer_1830788.png'
    },
    {
      title: 'Haircut',
      type: '8',
      color: '#1E9895',
      icon: 'noun_barbershop_79139.png'
    },
    {
      title: 'Hair Coloring',
      type: '4',
      color: '#3885FF',
      icon: 'noun_dye_2415211.png'
    }
  ];
  reviews: any = [
    {
      name: 'Julia Chan',
      time: '2 hours ago',
      text:
        'Ben Johnson is very friendly and polite. When I came to her in August 2019. She made a proper…',
      star: 3
    },
    {
      name: 'Rajat Kashyap',
      time: '3 months ago',
      text:
        'Ben Johnson is very friendly and polite. When I came to her in August 2019. She made a proper…',
      star: 1
    },
    {
      name: 'Rajat Kashyap',
      time: '3 months ago',
      text:
        'Ben Johnson is very friendly and polite. When I came to her in August 2019. She made a proper…',
      star: 1
    }
  ];
  galleryimg: any = [
    'http://placehold.it/165x142',
    'http://placehold.it/165x142',
    'http://placehold.it/165x142',
    'http://placehold.it/165x142'
  ];
  state: any = 1;
  activeStar: any = 3;
  avtiveSegment: any = 'About';
  avtiveSegmentt: any = 'pricetable';
  salonSpecialist: any = [
    {
      img: 'http://placehold.it/70x70',
      name: 'Emma',
      sublabel: 'Manger'
    },
    {
      img: 'http://placehold.it/70x70',
      name: 'Sara',
      sublabel: 'Sr. Hair Stylist'
    },
    {
      img: 'http://placehold.it/70x70',
      name: 'Andreea',
      sublabel: 'Makeup Artist'
    },
    {
      img: 'http://placehold.it/70x70',
      name: 'Franciene',
      sublabel: 'Hair Stylist'
    }
  ]

  hairStyle: any = [
    {
      class: 'border-left',
      img: 'http://placehold.it/56x56 ',
      hair: 'Hairstyle',
      service: '28 Services',
    },
    {
      class: 'border-left1',
      img: 'http://placehold.it/56x56 ',
      hair: 'Hairstyle',
      service: '28 Services',
    },
    {
      class: 'border-left2',
      img: 'http://placehold.it/56x56',
      hair: 'Hairstyle',
      service: '28 Services',
    },
    {
      class: 'border-left3',
      img: 'http://placehold.it/56x56',
      hair: 'Hairstyle',
      service: '28 Services',
    },
    {
      class: 'border-left4',
      img: 'http://placehold.it/56x56',
      hair: 'Hairstyle',
      service: '28 Services',
    },
    {
      class: 'border-left5',
      img: 'http://placehold.it/56x56',
      hair: 'Hairstyle',
      service: '28 Services',
    },
    {
      class: 'border-left6',
      img: 'http://placehold.it/56x56',
      hair: 'Hairstyle',
      service: '28 Services',
    }
  ]

  package: any = [
    {
      img: 'http://placehold.it/343x160',
      heading: 'Bridal Beauty Makeup',
      complet: 'Complete package offer till may 31,2020',
      book: 'Book Now',
      price: '$280.30'
    },
    {
      img: 'http://placehold.it/343x160',
      heading: 'Haircut & Hairstyle',
      complet: 'Luxury package offer till June 15, 2020',
      book: 'Book Now',
      price: '$160.45'
    },
    {
      img: 'http://placehold.it/343x160',
      heading: 'Bridal Beauty Makeup',
      complet: 'Best package offer till May 31, 2020',
      book: 'Book Now',
      price: '$160.45'
    },
    {
      img: 'http://placehold.it/343x160',
      heading: 'Bridal Beauty Makeup',
      complet: 'Best package offer till May 31, 2020',
      book: 'Book Now',
      price: '$280.30'
    }
  ]

  checkBox1: any = [
    {
      isChecked: true,
      val: 'Pedicure & Manicure',
      price: '$65'
    },
    {
      isChecked: false,
      val: 'Nail Polish Change',
      price: '$12'
    },
    {
      isChecked: false,
      val: 'Toe Polish Change',
      price: '$15'
    },
    {
      isChecked: true,
      val: 'Paraffin Treatment for Hands',
      price: '$18'
    },
    {
      isChecked: false,
      val: 'Paraffin Treatment for Feet',
      price: '$20'
    }
  ]

  checkBox2: any = [
    {
      isChecked: false,
      val: 'Upperlip',
      price: '$04'
    },
    {
      isChecked: true,
      val: 'Eyebrow',
      price: '$05'
    },
    {
      isChecked: false,
      val: 'Eyrbrow, Upperlip & Nose',
      price: '$15'
    },
    {
      isChecked: true,
      val: 'Eyebrow, Upper Lip & Chin',
      price: '$12'
    },
    {
      isChecked: false,
      val: 'Full Face',
      price: '$20'
    },
    {
      isChecked: false,
      val: 'Half Arm',
      price: '$18'
    },
    {
      isChecked: false,
      val: 'Under Arm',
      price: '$10'
    },
    {
      isChecked: true,
      val: 'Full Arm',
      price: '$22'
    },
    {
      isChecked: false,
      val: 'Full Arm & Under Arm',
      price: '$25'
    },
    {
      isChecked: true,
      val: 'Half Leg',
      price: '$22'
    }
  ]
  constructor(
    public modalController: ModalController,
    public navCtrl: NavController
  ) {}
cart(){
  this.navCtrl.navigateForward('cart');
}

  ngOnInit() {}
  setRating(no) {
    this.activeStar = no;
  }
  backPage() {
    this.navCtrl.navigateRoot('/tabs');
  }
  bookmark() {}
  setEmployee(data) {}
  segmentChanged(event) {
    this.avtiveSegment = event.detail.value;
  }
  segmentChanged2(event) {
    this.avtiveSegmentt = event.detail.value;
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
  book() {
    this.navCtrl.navigateForward('/select-service');
  }
  openPreview(img, ind) {
    this.modalController
      .create({
        component: ImageModalPage,
        componentProps: {
          img: img,
          index: ind
        },
        cssClass: 'my-modal'
      })
      .then(modal => {
        modal.present();
      });
  }
  serviceBooking() {
    this.navCtrl.navigateForward('/select-service');
  }
  async share() {
    const modal = await this.modalController.create({
      component: SharePage,
      cssClass: 'shareModal'
    });
    return await modal.present();
  }

}
