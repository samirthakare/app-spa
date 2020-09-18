import { FilterPage } from './../filter/filter.page';
import { NavController, ModalController } from '@ionic/angular';
import { EnableLocationPage } from './../enable-location/enable-location.page';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  searchText: any;
  salonList: any = [
    {
      name: 'RedBox Barber',
      image: 'http://placehold.it/224x100',
      address: '288 McClure Court, Arkansas',
      star: '4.0'
    },
    {
      name: 'Looks Unisex Salon',
      image: 'http://placehold.it/224x100',
      address: '288 McClure Court, Arkansas',
      star: '4.0'
    }
  ];
  constructor(
    public modalController: ModalController,
    public navCtrl: NavController
  ) {
    this.enableLocation();
  }


  async enableLocation() {
    const modal = await this.modalController.create({
      component: EnableLocationPage,
      cssClass: 'enableLocation-modal'
    });
    return await modal.present();
  }
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const markerData: any = [
      { lat: 22.3, lng: 70.8, text: 'Looks Unisex Salon' },
      { lat: 22.3, lng: 70.81, text: 'Beauty Plus Spa' },
      { lat: 22.31, lng: 70.8, text: 'RedBox Barber' },
      { lat: 22.33, lng: 70.81, text: 'Divine Salon' }
    ];
    const latLng = new google.maps.LatLng(22.3, 70.8);
    const mapoption = {
      center: latLng,
      zoom: 15,
      streetViewControl: false,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapoption);
    const markerIcon = {
      url: '../../../assets/images/near-by/map-image.png',
      labelOrigin: new google.maps.Point(25, 63),
      scaledSize: new google.maps.Size(56, 64)
    };
    markerData.forEach((element: any, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(element.lat, element.lng),
        map: this.map,
        icon: markerIcon,
        label: {
          text: element.text,
          fontSize: '12px',
          fontFamily: 'tofini_medium',
          width: '30px'
        }
      });
    });
  }
  bookSalon(event) {
    event.stopPropagation();
    this.navCtrl.navigateForward('/select-service');
  }
  salonDetail(event) {
    event.stopPropagation();
    this.navCtrl.navigateForward('/salon-detail');
  }
  searchCancel() {
    this.searchText = '';
  }
  async openFilter() {
    const modal = await this.modalController.create({
      component: FilterPage
    });
    return await modal.present();
  }
}
