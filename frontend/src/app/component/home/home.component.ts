import {Component, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

import {Resource} from '../../model/resource.model';

import {ResourceService} from '../../service/resource.service';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  books: Resource[] = [];
  magazines: Resource[] = [];
  resources: Resource[] = [];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private resourceService: ResourceService, private http: Http) {
    this.resourceService.getResources('Libro').subscribe(
      books => this.books = books,
      error => console.error(error)
    );
    this.resourceService.getResources('Revista').subscribe(
      magazines => this.magazines = magazines,
      error => console.error(error)
    );
  }

  reserveResource(id: number) {}

}
