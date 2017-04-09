import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {

  id: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    if (!this.id) {
      this.router.navigate(['/login']);
    }
  }

}
