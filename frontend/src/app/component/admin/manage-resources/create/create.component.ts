import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Resource } from 'app/model/resource.model';
import { Genre } from 'app/model/genre.model';
import { ResourceType } from 'app/model/resource-type.model';

import { SessionService } from 'app/service/session.service';
import { ResourceService } from 'app/service/resource.service';
import { GenreService } from 'app/service/genre.service';

@Component({
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateResourceComponent implements OnInit {

    resource: Resource;
    genres: Genre[];
    types: ResourceType[];

    newResource: any = {};
    resourceImage: any;

    errorMessage: boolean;
    message: string;

    constructor(
        private router: Router,
        private sessionService: SessionService,
        private resourceService: ResourceService,
        private genreService: GenreService
    ) {
        this.newResource = {
            title: '',
            author: '',
            editorial: '',
            description: '',
            genre: null,
            resourceType: null
        }
    }

    ngOnInit() {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        } else {
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

    createResource() {
        this.resource = this.newResource;

        this.resourceService.createResource(this.resource).subscribe(
            response => {
                if (this.resourceImage !== undefined) {
                    let formData = new FormData();
                    formData.append('file', this.resourceImage, this.resourceImage.name);
                    this.resourceService.updateFile(formData, response.id).subscribe();
                }
                this.router.navigate(['/admin/resources']);
            },
            error => {
                this.errorMessage = true;
                this.message = 'No se ha podido crear el recurso.'
            }
        );
    }

    selectFile($event) {
        this.resourceImage = $event.target.files[0];
    }
}
