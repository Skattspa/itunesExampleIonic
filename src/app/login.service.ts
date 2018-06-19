import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "./login.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService{


    static DIRECCION_POST : string = "http://10.1.2.10:8080/appwebprofe/PostLogin";
    constructor(private http: HttpClient){

    }

    postLogin (login: Login): Observable<Object>
    {
        let respuesta : Observable<Object>; //tipo de objeto

            let json_login : string = JSON.stringify(login); //objeto que queremos enviar
            console.log("JSON para enviar ", json_login);
            let cabecera = new HttpHeaders; //definir tipo de cabecera 
            cabecera.set('Content-type', 'application/json;charset=UTF-8'); //definir contenido de la cabecera
            respuesta = this.http.post(LoginService.DIRECCION_POST, json_login, {headers: cabecera, observe: "response"}); //enviar el post con los parametros y guardarlo dentro de variable respuesta

        return respuesta; //respuesta de la funcion
    }
}