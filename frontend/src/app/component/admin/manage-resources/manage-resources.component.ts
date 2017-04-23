import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Resource } from 'app/model/resource.model';

import { SessionService } from 'app/service/session.service';
import { ResourceService } from 'app/service/resource.service';

@Component({
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {

  resources: Resource[] = [];
  successMessage: boolean;
  errorMessage: boolean;
  message: String;
  showNextPage: boolean;
  showPreviousPage: boolean;
  resourcesPage: number;

  constructor(private router: Router,
    private sessionService: SessionService,
    private ResourceService: ResourceService) {
    this.successMessage = false;
    this.errorMessage = false;
    this.resourcesPage = 0;
    this.showNextPage = false;
    this.showPreviousPage = false;
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(["/login"]);
    } else {
      this.getResources();
      this.checkNextPage();
      this.checkPreviousPage();
    }
  }

  getResources() {
    this.ResourceService.getPageResources(this.resourcesPage).subscribe(
      resources => this.resources = resources,
      error => console.log("Fail trying to get current page of resources.")
    );
  }

  nextPage() {
    this.showNextPage = false;
    this.showPreviousPage = false;
    this.resourcesPage++;
    this.getResources();
    this.checkNextPage();
    this.showPreviousPage = true;
  }

  previousPage() {
    this.showNextPage = false;
    this.showPreviousPage = false;
    this.resourcesPage--;
    this.getResources();
    this.checkPreviousPage();
    this.showNextPage = true;
  }

  checkNextPage() {
    this.ResourceService.getPageResources(this.resourcesPage + 1).subscribe(
      resources => this.showNextPage = (Object.keys(resources).length === 0) ? false : true
    );
  }

  checkPreviousPage() {
    if (this.resourcesPage > 0) {
      this.ResourceService.getPageResources(this.resourcesPage - 1).subscribe(
        resources => this.showPreviousPage = (Object.keys(resources).length === 0) ? false : true
      );
    } else {
      this.showPreviousPage = false;
    }
  }

  deleteResource(id: number) {
    this.ResourceService.deleteResource(id).subscribe(
      response => {
        this.successMessage = true;
        this.errorMessage = false;
        this.message = 'Recurso eliminado correctamente.';
        this.resourcesPage = 0;
        this.getResources();
        this.checkNextPage();
        this.checkPreviousPage();
      },
      error => {
        this.successMessage = false;
        this.errorMessage = true;
        this.message = 'No se ha podido eliminar el recurso.'
      }
    );
  }

}
