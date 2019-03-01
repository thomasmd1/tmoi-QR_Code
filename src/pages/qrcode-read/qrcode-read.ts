import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrcodeReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode-read',
  templateUrl: 'qrcode-read.html',
})
export class QrcodeReadPage {

  public qrCodeText: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodeReadPage');
  }

  useCamera() {
      this.barcodeScanner.scan().then(data =>{
      this.qrCodeText = data.text;
    });
    
}

}
