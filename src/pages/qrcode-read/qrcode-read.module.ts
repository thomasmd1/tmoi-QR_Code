import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodeReadPage } from './qrcode-read';

@NgModule({
  declarations: [
    QrcodeReadPage,
  ],
  imports: [
    IonicPageModule.forChild(QrcodeReadPage),
  ],
})
export class QrcodeReadPageModule {}
