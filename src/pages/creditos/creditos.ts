import { Component,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Compañeros } from '../../app/creditos.model';
import { List } from 'ionic-angular';

@Component({
  selector: 'creditos',
  templateUrl: 'creditos.html'
})
export class IonicCreditosComponent {
  array_compañeros : Compañeros[];
  constructor( ) {
    console.log ("constructor");
    var compañeros = [
      {
        nombre: 'Angel Cachón',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Angel Fernandez Alvarez',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Amaya Valdiviejas',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Carlos Moreno',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'daher7',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Daniel Adrián Durán',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'quienabuenarbol@gmail.com',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'keova@yahoo.com',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'keova@yahoo.com',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'jose  jccalzadag@gmail.com',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Luis Martinez',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Manuel Jesús Moreno Arévalo',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Luis Martinez  jccalzadag@gmail.com',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Oscar  Rivera Yunquera',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Valeriano Moreno',
        github: 'github!',
        image: 'assets/imgs/logo.png'
      },
      
    ];
  }

  mostrar (compañeros){
    console.log(compañeros);
  }
  // @ViewChild(List) list: List;
  // stopSliding() {
  //   // this.list.enableSlidingItems(false);
  // }
  
}
