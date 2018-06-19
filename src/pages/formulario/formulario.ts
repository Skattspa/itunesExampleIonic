import { Component,ViewChild } from '@angular/core';
import { Login } from '../../app/login.model';
import { LoginService } from '../../app/login.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'formulario',
  templateUrl: 'formulario.html',
  providers: [LoginService]
})
export class FormularioComponent {
    login: Login;
    constructor (public loginService : LoginService){
      //inicializar los atributos
      this.login = new Login();

    }

    acceder (datos : Login, valido : boolean){
      if (valido){
        console.log("los datos son validos");
        this.loginService.postLogin(datos).subscribe(ok => {
          console.log("Ha ido bien!");
          console.log("Respuesta ok: ", ok);
          let vresp : HttpResponse<Object> = <HttpResponse<Object>>ok; //la respuesta es de tipo httpresponse y devuelve un objeto. Hacemos el casting con la respuesta cuando devuelve ok
          console.log("Cuerpo ", vresp.body);
          console.log ("Status ", vresp.status);
          console.log("vresp ", vresp )

        },
      ko=>{
        console.log("Error ", ko);
      },
    ()=>{
      console.log("completado "); // si ha ido bien vemos el ok y el completado
    }) //hacemos subscribe a la respuesta para esperar a su resultado.
     
      console.log("Datos rx: "+datos.nombre + " "+ datos.pwd +" "+datos.pwd2);
    }
    
  }
}
  
  

