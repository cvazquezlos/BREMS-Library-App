import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'about.component.html'
})

export class AboutComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute) { }

}
