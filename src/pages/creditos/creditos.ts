import { Component,ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Compañeros } from '../../app/creditos.model';
import { List } from 'ionic-angular';

@Component({
  selector: 'creditos',
  templateUrl: 'creditos.html'
})
export class IonicCreditosComponent {
  array_compañeros;
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
        github: 'https://github.com/antroxu',
        linkedin: 'https://www.linkedin.com/in/ángel-fernández-álvarez-60083521',
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
        nombre: 'Daniel Adrián Durán',
        github: 'https://github.com/DanielFrontEnd19',
        linkedin: 'https://www.linkedin.com/in/frontenddanieladri%C3%A1n/',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'David Herrera Torrado',
        github: 'https://github.com/daher7',
        linkedin: 'https://www.linkedin.com/in/david-herrera-torrado-771083166/',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Elena Jarabo',
        github: 'https://github.com/keova',
        linkedin: 'https://www.linkedin.com/in/elena-jarabo-ruiz/',
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
        github: 'https://github.com/manuelazo30',
        linkedin: 'https://www.linkedin.com/in/manuelazo/',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Oscar  Rivera Yunquera',
        github: 'https://github.com/Oscarriveragit',
        linkedin: 'Www.linkedin.com/oscarriverayunquera',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Obdulia Zamora Doménech',
        github: 'https://github.com/ozamgmam',
        linkedin: 'https://www.linkedin.com/in/obdulia-zamora-dom%C3%A9nech-081a4742/',
        web: 'web2you.esy.es',
        image: 'assets/imgs/logo.png'
      },
      {
        nombre: 'Valeriano Moreno',
        github: 'https://github.com/Valexx55/',
        linkedin: 'No me gusta linkedin',
        image: 'assets/imgs/logo.png'
      },
      
    ];
    
    this.mostrar(compañeros);
  }

  mostrar (compañeros){
    console.log(compañeros);
    this.array_compañeros = compañeros;

  }
  // @ViewChild(List) list: List;
  // stopSliding() {
  //   // this.list.enableSlidingItems(false);
  // }
  
}
