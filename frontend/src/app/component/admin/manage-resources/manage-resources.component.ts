import { Component, OnInit } from '@angular/core';

import { ResourceService } from 'app/service/resource.service';

@Component({
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {

  private resources: Object[] = [];

  constructor(private service: ResourceService) {
  }

  ngOnInit() {
    this.service.getAllResources().subscribe(
      resources => {
        this.resources = resources;
      },
      error => console.log(error)
    );
  }
}
