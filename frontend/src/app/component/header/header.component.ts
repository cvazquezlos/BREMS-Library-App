import {Component, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  indexActive = true;
  profileActive = false;
  aboutActive = false;
  contactActive = false;

  // @Output attributes
  @Output() openModalLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, activatedRoute: ActivatedRoute) { }

  gotoSearch() {
    this.router.navigate(['/search']);
  }

  login() {
    this.openModalLogin.emit();
  }
}
