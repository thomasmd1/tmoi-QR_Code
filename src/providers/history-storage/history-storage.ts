import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the HistoryStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryStorageProvider {

  private qrCodeList: Array<{ text:string, createdAt: Date }> = [];
  public EventEmit: EventEmitter<any[]> = new EventEmitter();

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello HistoryStorageProvider Provider');
  }

  addQrCodeToList(text: string){
    this.qrCodeList.push({
      text,
      createdAt: new Date()
  });
  this.saveToStorage();
  this.EventEmit.emit(this.qrCodeList);
  console.log(this.qrCodeList);
  }

  private saveToStorage(){
    this.storage.set('history_data', this.qrCodeList);
  }

}
