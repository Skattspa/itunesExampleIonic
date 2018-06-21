import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicComponent } from '../pages/itunes/itunes';
import { IonicCreditosComponent } from '../pages/creditos/creditos';
import { BasicPage } from '../pages/modal/modal';
import { IonicStorageModule } from '@ionic/storage';
import { FormularioComponent } from '../pages/formulario/formulario';
import { EqualValidator } from './validatorpwd.directive';
import { FormsModule } from '@angular/forms';
import { MapawebPage } from '../pages/mapaweb/mapaweb';
import { Geolocation } from '@ionic-native/geolocation';
import { FotoCam } from '../pages/fotocamp/fotocam';
import { Camera } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    IonicComponent,
    IonicCreditosComponent,
    BasicPage,
    FormularioComponent,
    EqualValidator,
    MapawebPage,
    FotoCam
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    IonicComponent,
    IonicCreditosComponent,
    BasicPage,
    FormularioComponent,
    MapawebPage,
    FotoCam
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    LocalNotifications
  ]
})
export class AppModule {}
