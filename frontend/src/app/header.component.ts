import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html'
})

export class HeaderComponent {
  indexActive = true;
  profileActive = false;
  aboutActive = false;
  contactActive = false;

  constructor(private router: Router, activatedRoute: ActivatedRoute) { }

  gotoSearch() {
    this.router.navigate(['/search']);
  }
}
