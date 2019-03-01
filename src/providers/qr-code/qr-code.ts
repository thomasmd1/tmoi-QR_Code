import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import QRCode from "qrcode";
import jsQr from "jsqr";

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {
  constructor(public http: HttpClient) {
    console.log("Hello QrCodeProvider Provider");
  }

  generate(text: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      QRCode.toDataURL(text, { errorCorrectionLevel: "H" }, function(err, url) {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }

  async decode(url) {
    const imageData = await this.getImageDataFromUrl(url);
    const qrcode = jsQr(imageData.data, imageData.width, imageData.height);

    if (qrcode && qrcode.data !== undefined) {
      return qrcode.data;
    }
  }

  getImageDataFromUrl(url): Promise<ImageData> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      image.onload = () => {
        try {
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0);
        } catch (e) {
          reject(e);
        }

        const data = context.getImageData(0, 0, canvas.width, canvas.height);

        return resolve(data);
      };

      image.onerror = (error: ErrorEvent) => {
        return reject(error);
      };
    });
  }
}
