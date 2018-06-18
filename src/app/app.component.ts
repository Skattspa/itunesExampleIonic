import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicComponent } from '../pages/itunes/itunes';
import { IonicCreditosComponent } from '../pages/creditos/creditos';
import { BasicPage } from '../pages/modal/modal';
import { Storage } from '@ionic/storage';
import { FormularioComponent } from '../pages/formulario/formulario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  mispages: Array<{title: string, component: any}>;
  // estoyEnItunes : number;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Itunes', component: IonicComponent },
      { title: 'creditos', component: IonicCreditosComponent },
      { title: 'Modal Prueba', component: BasicPage },
      { title: 'Formulario', component: FormularioComponent },
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.estoyEnItunes = 0; //start counter
      // this.storage.get('estoyEnItunes').then((val) => {
      //   console.log('estoyEnItunes es', val);
      //   this.estoyEnItunes = val
      // });
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component)
    // this.estoyEnItunes = this.estoyEnItunes + 1;  //counter up
    // //this.storage.set('estoyEnItunes', this.estoyEnItunes);
    // console.log ('mi contador es ', this.estoyEnItunes);
    // if ((this.estoyEnItunes % 2) === 0 || this.estoyEnItunes == null){
    //   this.nav.setRoot(HelloIonicPage);
    //   console.log('estas en la pagina de hello!')
    // } else {
    //   this.nav.setRoot(IonicComponent); 
      
    //   console.log('a escuchar musica!')
    // }
    //this.storage.set('estoyEnItunes', estoyEnItunes );
    
  }

  contador (){}
}
