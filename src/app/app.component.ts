import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-app';
  x = this.Ctrl();


  Ctrl() {
    var cc = [];
    for( var i = 1 ; i <= 20; i++){
      cc.push(moment().add(i, 'days').format('DD/MM/YYYY'));
    }
    return cc;
  }

  show() {
    
  }

}
