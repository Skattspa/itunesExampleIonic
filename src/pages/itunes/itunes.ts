import { Component } from '@angular/core';
import { ItunesService } from '../../app/bitunes.service';
import { Resultado } from '../../app/resultado.model';
import { Observable } from 'rxjs/Observable';
import { Cancion } from '../../app/cancion.model';
import { Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'itunes',
  templateUrl: 'itunes.html',
  providers: [ItunesService, ScreenOrientation]
})
export class IonicComponent {

  busqueda_usuario : string;
  array_canciones : Cancion[];
  cargado : boolean;
  esMovil : boolean;

  entornoMovil():boolean{
    let esMovil : boolean = false;
    esMovil = !(this.plt.is('mobileweb') || this.plt.is('core'));
    return esMovil
  }

  constructor( public itunes_service:ItunesService, public plt: Platform, public ScreenOrientation: ScreenOrientation) {
    console.log ("La página 'itunes.html' se va a cargar");
    this.busqueda_usuario="";
    this.cargado = false;
    if (this.esMovil){
      console.log ("el entorno es movil");
    } else {
      console.log("se esta ejecutando en web")
    }

    // get current
      console.log(this.ScreenOrientation.type); // logs the current orientation, example: 'landscape'

    
      // allow user rotate
      this.ScreenOrientation.unlock();

      // detect orientation changes
      this.ScreenOrientation.onChange().subscribe(
        () => {
          alert("Cambio de orientación");}
      );
    
  }
  

  buscar ()
  {
    console.log ("Ha tocado a buscar");
    console.log ("Ha tocado a buscar " + this.busqueda_usuario);
    let resultado : Observable<Resultado> = 
    this.itunes_service.buscar(this.busqueda_usuario);
    
    resultado.subscribe (jsoncanciones => this.procesarCanciones (jsoncanciones));
  }
  procesarCanciones ( jsoncanciones : any)
  {
    let infocanciones : Resultado = <Resultado>jsoncanciones;
    this.array_canciones =  infocanciones.results;
    this.cargado = true;
    console.log ("Nombre del primero " + this.array_canciones[0].artistName);


    


  }
  


  
  
}
