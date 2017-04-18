import {Component, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor() {
  }

  ngOnDestroy() {
    console.log('Killing proccesses...');
  }

}
