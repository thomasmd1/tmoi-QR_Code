import { HistoryStorageProvider } from './../../providers/history-storage/history-storage';
import { QrCodeProvider } from "./../../providers/qr-code/qr-code";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  inputText: string;
  generatedQrCode: string = "";

  constructor(
    public navCtrl: NavController,
    public historyStorage: HistoryStorageProvider,
    public qrCodeProvider: QrCodeProvider,
    public socialSharing: SocialSharing,
  ) {}

  generateQrCode(text) {
    this.inputText = text;
    this.qrCodeProvider.generate(text).then(text => {
      this.generatedQrCode = text;
    }).catch(() => {
      this.generatedQrCode='';
    });;
    this.historyStorage.addQrCodeToList(text);
  }

  qrCodeIsGenerate(){
    return this.generatedQrCode !== '';
  }

  share(qrCode) {
    this.socialSharing.share("Voici mon QRCode ! ", "", qrCode);
  }
}
