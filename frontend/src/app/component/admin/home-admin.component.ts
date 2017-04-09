import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'home-admin.component.html'
})

export class HomeAdminComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute) {}

}
