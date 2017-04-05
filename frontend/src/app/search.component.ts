import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'search.component.html'
})

export class SearchComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute) {}

}
