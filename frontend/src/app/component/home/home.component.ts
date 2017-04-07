import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

import {ResourceService} from '../../service/resource.service';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  private resources: string[] = [];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private resourceService: ResourceService, private http: Http) {
    this.search('Libro');
  }

  search(type: String) {
    this.resources = [];

    this.resourceService.getResources('Libro').subscribe(
      resources => this.resources = resources,
      error => console.error(error)
    );
  }

}
