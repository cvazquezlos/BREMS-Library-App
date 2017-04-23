import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Resource } from 'app/model/resource.model';
import { Genre } from 'app/model/genre.model';
import { ResourceType } from 'app/model/resource-type.model';

import { SessionService } from 'app/service/session.service';
import { ResourceService } from 'app/service/resource.service';
import { GenreService } from 'app/service/genre.service';
import { FileService } from 'app/service/file.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditResourceComponent implements OnInit {

  resource: any = {};
  genres: Genre[];
  types: ResourceType[];

  genreSelect: Genre;

  resourceImage: any;

  successMessage: boolean;
  errorMessage: boolean;
  message: String;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private sessionService: SessionService,
    private resourceService: ResourceService,
    private genreService: GenreService,
    private fileService: FileService) {
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(["/login"]);
    } else {
      this.getResource();
      this.genreService.getAllGenres().subscribe(
        genres => this.genres = genres,
        error => console.log(error)
      );
      this.resourceService.getResourcesTypes().subscribe(
        types => this.types = types,
        error => console.log(error)
      )
    }
  }

  getResource() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.resourceService.getResource(id).subscribe(
      resource => {
        this.resource = resource;
        this.fileService.getResourceFile(resource.id).subscribe(
          data => {
            let dataRecieved: string[] = data.split('"');
            resource.image = 'data:image/png;base64,' + dataRecieved[3];
          },
          error => console.log('Fail adding resource ' + resource.title + 'image.')
        );
      },
      error => console.log(error)
    );
  }

  saveResource() {

    this.resourceService.updateResource(this.resource).subscribe(
      response => {
        if (this.resourceImage !== undefined) {
          let formData = new FormData();
          formData.append('file', this.resourceImage, this.resourceImage.name);
          this.resourceService.updateFile(formData, response.id).subscribe();
        }
        this.successMessage = true;
        this.errorMessage = false;
        this.message = 'Recurso editado correctamente.';
        this.getResource();
      },
      error => {
        this.successMessage = false;
        this.errorMessage = true;
        this.message = 'No se ha podido editar el recurso.'
      }
    );
  }

  selectFile($event) {
    this.resourceImage = $event.target.files[0];
  }

}
