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
    private activatedRoute: ActivatedRoute,
    private service: ResourceService) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.service.getResource(id).subscribe(
      resource => {
        this.resource = resource;
      },
      error => console.log(error)
    );
  }

  gotoResources() { this.router.navigate(['/resources']); }

  saveResource() { }

}
