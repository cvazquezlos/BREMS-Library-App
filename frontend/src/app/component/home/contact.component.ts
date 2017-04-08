import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'contact.component.html'
})

export class ContactComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute) {}

}
