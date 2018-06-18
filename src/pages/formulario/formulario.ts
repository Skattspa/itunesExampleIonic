import { Component,ViewChild } from '@angular/core';
import { Login } from '../../app/login.model';

@Component({
  selector: 'formulario',
  templateUrl: 'formulario.html'
})
export class FormularioComponent {
    login: Login;
    constructor (){
      //inicializar los atributos
      this.login = new Login();
    }

    acceder (datos : Login, valido : boolean){
      if (valido){
        console.log("los datos son validos");
      } else {
        console.log("tucutu :P . Formulario no valido");
      }
      console.log("Datos rx: "+datos.nombre + " "+ datos.pwd +" "+datos.pwd2);
    }
    
  }
  
  
  

