import { QrCodeProvider } from "./../../providers/qr-code/qr-code";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

/**
 * Generated class for the QrcodeReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-qrcode-read",
  templateUrl: "qrcode-read.html"
})
export class QrcodeReadPage {
  public qrCodeText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    private qrcodeProvider: QrCodeProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QrcodeReadPage");
  }

  useCamera() {
    this.barcodeScanner.scan().then(data => {
      this.qrCodeText = data.text;
    });
  }

  useLibrary() {
    try {
      const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then(
        imageData => {
          let base64Image = "data:image/jpeg;base64," + imageData;
          this.qrcodeProvider.decode(base64Image).then(text => {
            this.qrCodeText = text;
          });
        }
      );
    } catch (e) {
      this.qrCodeText = "Impossible de décoder l image";
    }
  }
}
