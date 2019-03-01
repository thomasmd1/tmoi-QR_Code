import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

/*
  Generated class for the HistoryStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryStorageProvider {
  private qrCodeList: Array<{ text: string; createdAt: Date }> = [];

  constructor(public http: HttpClient, public storage: Storage) {}

  addQrCodeToList(text: string) {
    this.qrCodeList.push({
      text,
      createdAt: new Date()
    });
    this.saveToStorage();
  }

  private saveToStorage() {
    this.storage.set("history_data", this.qrCodeList);
  }
}
