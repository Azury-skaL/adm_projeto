import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SobrePage } from '../pages/sobre/sobre';
import { CadastroProdutosPage } from '../pages/cadastro-produtos/cadastro-produtos';
import { CadastroProvider } from '../providers/cadastro/cadastro';
import { ToastProvider } from '../providers/toast/toast';

import { firebaseConfig } from '../../config-firebase';

@NgModule({
  declarations: [
    MyApp,
    CadastroProdutosPage,
    SobrePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(firebaseConfig),
    
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroProdutosPage,
    SobrePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastroProvider,
    ToastProvider
  ]
})
export class AppModule {}
