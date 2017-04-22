import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Resource } from 'app/model/resource.model';

import { SessionService } from 'app/service/session.service';
import { ResourceService } from 'app/service/resource.service';
import { FileService } from 'app/service/file.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditResourceComponent implements OnInit {

  resource: any = {};

  successMessage: boolean;
  errorMessage: boolean;
  message: String;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private sessionService: SessionService,
    private resourceservice: ResourceService,
    private fileService: FileService) {
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(["/login"]);
    } else {
      let id = this.activatedRoute.snapshot.params['id'];
      this.resourceservice.getResource(id).subscribe(
        resource => {
          this.resource = resource;
          this.fileService.getResourceFile(resource.id).subscribe(
            data => {
              let dataRecieved: string[] = data.split('"');
              resource.image = 'data:image/png;base64,' + dataRecieved[3];
            },
            error => console.log('Fail adding resource ' + resource.title + 'image.')
          );
          console.log(resource);
        },
        error => console.log(error)
      );
    }
  }

  gotoResources() { this.router.navigate(['/resources']); }

  saveResource() {
    this.resourceservice.updateResource(this.resource).subscribe(
      response => {
        this.successMessage = true;
        this.errorMessage = false;
        this.message = 'Recurso editado correctamente.';
      },
      error => {
        this.successMessage = false;
        this.errorMessage = true;
        this.message = 'No se ha podido editar el recurso.'
      }
    );
  }

}
