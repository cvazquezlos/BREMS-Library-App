import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import {Resource} from '../../../model/resource.model';

import {ResourceService} from '../../../service/resource.service';
import {FileService} from '../../../service/file.service';

@Component({
  templateUrl: 'resource-details.component.html'
})

export class ResourceDetailsComponent implements OnInit {

  resource: Resource;

  constructor(private activatedRoute: ActivatedRoute, private resourceService: ResourceService,
              public sanitizer: DomSanitizer, private fileService: FileService) {
  }

  ngOnInit() {
    this.resourceService.getResource(this.activatedRoute.snapshot.params['id']).subscribe(
      resource => {
        this.resource = resource;
        console.log(this.resource.title)
      },
      error => console.log(error)
    );
    this.fileService.getResourceFile(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
        let dataRecieved: string[] = data.split('"');
        this.resource.image = 'data:image/png;base64,' + dataRecieved[3];
      },
      error => console.log("FILAZO")
    );
  }

}
