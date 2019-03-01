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
    public qrCodeProvider: QrCodeProvider,
    public socialSharing: SocialSharing,
    public historyStorage: HistoryStorageProvider
  ) {}

  process(text) {
    this.inputText = text;
    this.qrCodeProvider.generate(text).then(text => {
      this.generatedQrCode = text;
    });
    this.historyStorage.addQrCodeToList(text);
  }

  share(qrCode) {
    this.socialSharing.share("Voici mon QRCode ! ", "", qrCode);
  }
}
