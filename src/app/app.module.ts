import { QrcodeReadPage } from './../pages/qrcode-read/qrcode-read';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HistoryStorageProvider } from '../providers/history-storage/history-storage';
import { IonicStorageModule } from '@ionic/storage';
import { Camera} from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    QrcodeReadPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    QrcodeReadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    QRScanner,
    SocialSharing,
    HistoryStorageProvider,
    Camera,
    BarcodeScanner
  ]
})
export class AppModule {}
