import { Component,ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Companeros } from "../../app/creditos.model";
import { List } from "ionic-angular";

@Component({
  selector: "creditos",
  templateUrl: "creditos.html"
})
export class IonicCreditosComponent {
  array_compañeros;
  private gente : any [];
  constructor( ) {
    console.log ("constructor");

    //let compa1: Companeros = new Companeros ("Angel J. Cachón", "https://github.com/acachon","https://www.linkedin.com/in/angelcachon/","https://avatars0.githubusercontent.com/u/36812721?s=460&v=4");
    //this.gente.push (compa1);
    this.gente = [
      {
        nombre: "Angel J. Cachón",
        github: "https://github.com/acachon",
        linkedin: "https://www.linkedin.com/in/angelcachon/",
        image: "https://avatars0.githubusercontent.com/u/36812721?s=460&v=4"
      },
      {
        nombre: "Angel Fernandez Alvarez",
        github: "https://github.com/antroxu",
        linkedin: "https://www.linkedin.com/in/ángel-fernández-álvarez-60083521",
        image: "https://media.licdn.com/dms/image/C5603AQEvFRqszVsoqw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=Odz7zsutS6mciHhvxn5ekF3vjmzB3GgMpJhe9201_oE"
      },
      {
        nombre: "Amaya Valdiviejas Ruiz",
        github: "https://github.com/amaya1234",
        linkedin: "https://es.linkedin.com/in/amaya-valdiviejas-ruiz-3696869b",
        image: "https://avatars2.githubusercontent.com/u/22312605?s=400&v=4"
      },
      {
        nombre: "Carlos Moreno",
        github: "github!",
        image: "assets/imgs/logo.png"
      },
      {
        nombre: "Daniel Adrián Durán",
        github: "https://github.com/DanielFrontEnd19",
        linkedin: "https://www.linkedin.com/in/frontenddanieladri%C3%A1n/",
        image: "https://media.licdn.com/dms/image/C4E03AQHPqGALqxTwzQ/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=Kf0ygqyygOOsQVqqkDcyi-ZH_yWWI6rFzte9Tn_P-ro"
      },
      {
        nombre: "David Herrera Torrado",
        github: "https://github.com/daher7",
        linkedin: "https://www.linkedin.com/in/david-herrera-torrado-771083166/",
        image: "https://media.licdn.com/dms/image/C4E03AQFpGKoWWU9EJw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=E8XZ_shSfMsgz-krnMBFoQytZzFmwKWUWDFLl_QPseY"
      },
      {
        nombre: "Elena Jarabo",
        github: "https://github.com/keova",
        linkedin: "https://www.linkedin.com/in/elena-jarabo-ruiz/",
        image: "https://avatars1.githubusercontent.com/u/39187399?s=400&v=4"
      },
      {
        nombre: "jose  jccalzadag@gmail.com",
        github: "github!",
        image: "assets/imgs/logo.png"
      },
      {
        nombre: "Juan Madrigal Vergel",
        github: "https://github.com/Skattspa",
        linkedin: "https://www.linkedin.com/in/jmvergel/",
        image: "https://avatars3.githubusercontent.com/u/15067035?s=400&v=4"
      },
      {
        nombre: "Luis Martinez",
        github: "github!",
        image: "assets/imgs/logo.png"
      },
      {
        nombre: "Manuel Jesús Moreno Arévalo",
        github: "https://github.com/manuelazo30",
        linkedin: "https://www.linkedin.com/in/manuelazo/",
        image: "assets/imgs/logo.png"
      },
      {
        nombre: "Oscar  Rivera Yunquera",
        github: "https://github.com/Oscarriveragit",
        linkedin: "Www.linkedin.com/oscarriverayunquera",
        image: "https://media.licdn.com/dms/image/C5603AQFzXcSswWcDsw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=AwbKiokk8XPgeZInfP_qjbDAgvosCFvMwW9u9j_FNC8"
      },
      {
        nombre: "Obdulia Zamora Doménech",
        github: "https://github.com/ozamgmam",
        linkedin: "https://www.linkedin.com/in/obdulia-zamora-dom%C3%A9nech-081a4742/",
        web: "web2you.esy.es",
        image: "https://media.licdn.com/dms/image/C5603AQG_xhKpDTQeIA/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=hUabZttXiTHKToU3_Igl1Oe2B62VcefppPTeQ7H0ENE"
      }      
    ];
    
    this.mostrar(this.gente);
  }
  
  mostrar (gente){
    console.log(gente);
    
  }
  // @ViewChild(List) list: List;
  // stopSliding() {
  //   // this.list.enableSlidingItems(false);
  // }
  
}
