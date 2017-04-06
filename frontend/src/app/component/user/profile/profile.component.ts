import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute) { }

}
