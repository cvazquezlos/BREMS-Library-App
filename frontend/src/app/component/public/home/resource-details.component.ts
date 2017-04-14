import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Resource} from '../../../model/resource.model';

import {ResourceService} from '../../../service/resource.service';

@Component({
  templateUrl: 'resource-details.component.html'
})

export class ResourceDetailsComponent implements OnInit {

  resource: Resource;

  constructor(private activatedRoute: ActivatedRoute, private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResource(this.activatedRoute.snapshot.params['id']).subscribe(
      resource => {this.resource = resource; console.log(this.resource.title)},
      error => console.log(error)
    );
  }

}
