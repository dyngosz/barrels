import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barrels: Observable<any[]>;

  constructor(public navCtrl: NavController,
              afDB: AngularFireDatabase) {
    this.barrels = afDB.list('barrels').valueChanges();
  }

}
