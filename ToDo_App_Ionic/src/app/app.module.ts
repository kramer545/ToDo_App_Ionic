import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/Storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNewItemPage } from '../pages/add-new-item/add-new-item'
import { LoginPage } from '../pages/login/login';
import { DataProvider } from '../providers/data/data';
import { AuthLoginProvider } from '../providers/auth-login/auth-login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	AddNewItemPage,
	LoginPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	AddNewItemPage,
	LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	DataProvider,
	Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthLoginProvider
  ]
})
export class AppModule {}
