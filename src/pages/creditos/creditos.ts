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
  }
  // @ViewChild(List) list: List;
  // stopSliding() {
  //   // this.list.enableSlidingItems(false);
  // }
  
}
