import { Storage } from '@ionic/storage';
import { HistoryStorageProvider } from './../../providers/history-storage/history-storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{text:string, createdAt: Date}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public historyStorage: Storage) {
    
  }

  ionViewDidLoad() {
    this.historyStorage.get('history_data').then(data =>{
      this.items = data;
    })
  }
  
}
