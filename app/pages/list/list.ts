import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {SQLite} from "ionic-native";


@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  public database: SQLite;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
  //sqlite database test
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: 1}).then(() => {
            this.refresh();
        }, (error) => {
            console.log("ERROR: ", error);
        });

        //database test
        test();

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    //lotColours = ['Blue', 'Green', 'Red', 'Card', 'Allen', 'Smith'];


    this.items = [
                  {title : 'Blue Zone', note: 'Currently 61% full', icon :  this.icons[Math.floor(Math.random() * this.icons.length)] },
                  {title : 'Card Lot', note: 'Currently 34% full', icon :  this.icons[Math.floor(Math.random() * this.icons.length)] },
                  {title : 'Allen Lot', note: 'Currently 88% full', icon :  this.icons[Math.floor(Math.random() * this.icons.length)] },
                  {title : 'Smith Warehouse Lot', note: 'Currently 33% full', icon :  this.icons[Math.floor(Math.random() * this.icons.length)] }
                  ];
    /*
    for(let i = 1; i < 6; i++) {
      this.items.push({
        title: 'Parking Lot ' + i,
        note: 'This is lot #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  public test() {
        this.database.executeSql("SELECT * FROM PTX_UID", []).then((data) => {
            console.log("OUTPUT: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
}
}
