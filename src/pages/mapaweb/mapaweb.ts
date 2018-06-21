import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
/**
 * Generated class for the MapawebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-mapaweb',
  templateUrl: 'mapaweb.html',
})
export class MapawebPage {
  map: any;

  constructor(private geolocation: Geolocation) {

    console.log ("pasa por el constrcutor");
  }

  ionViewDidLoad(){
    this.getPosition();
    console.log ("pasa por ionViewDidLoad");
  }

  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      console.log ("pasa por getCurrentposition response");
      this.loadMap(response);
    })
    .catch(error =>{
      console.log ("pasa por getCurrentposition. Esto no funchiona pachacho");
      console.log(error);
    })

    
  }

  loadMap(position: Geoposition){
    console.log ("pasa por loadMapa");
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!',
        icon: {
          url: "https://media.giphy.com/media/xU9TT471DTGJq/giphy.gif", // url
          scaledSize: new google.maps.Size(50, 50), // scaled size
          class: "homero",
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
      },
      });



      mapEle.classList.add('show-map');
    });
  }
  

}
