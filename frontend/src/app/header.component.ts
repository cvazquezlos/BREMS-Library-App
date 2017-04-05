import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  indexActive = true;
  profileActive = false;
  aboutActive = false;
  contactActive = false;
}
