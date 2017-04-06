import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute) {}

}
