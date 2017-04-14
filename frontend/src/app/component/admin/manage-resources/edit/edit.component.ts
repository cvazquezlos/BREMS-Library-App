import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Resource } from 'app/model/resource.model';

import { ResourceService } from 'app/service/resource.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditResourceComponent implements OnInit {

  private resource: Resource;

  constructor(private router: Router,
    activatedRoute: ActivatedRoute, service: ResourceService) {
    let id = activatedRoute.snapshot.params['id'];

    service.getResource(id).subscribe(
      resource => this.resource = resource,
      error => console.error(error)
    );
    console.log(this.resource);
  }

  ngOnInit() { }

  gotoResources() { this.router.navigate(['/resources']); }

  saveResource() { }


}
