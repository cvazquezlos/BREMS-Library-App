import {Component, OnInit} from '@angular/core';
import {STATUS_NO_CONTENT, BOOKS_IMG_URL} from "../../../util";
import {DomSanitizer} from '@angular/platform-browser';

import {Action} from '../../../model/action.model';
import {Resource} from '../../../model/resource.model';
import {User} from '../../../model/user.model';

import {ActionService} from '../../../service/action.service';
import {FileService} from '../../../service/file.service';
import {ResourceService} from '../../../service/resource.service';
import {ResourceCopyService} from '../../../service/resource-copy.service';
import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'home.component.html',
  styles: [`
    .showBtnMoreBook {
      display: block
    }

    .showBtnMoreMagaz {
      display: block
    }`]
})

export class HomeComponent implements OnInit {

  books: Resource[];
  booksPage: number;
  errorMessage: boolean;
  img_url: string;
  isLogged: boolean;
  magazines: Resource[];
  magazinesPage: number;
  message: String;
  moreBooksActive: boolean;
  moreMagazActive: boolean;
  successMessage: boolean;
  user: User;

  constructor(private resourceService: ResourceService, private sessionService: SessionService,
              private sanitizer: DomSanitizer, private fileService: FileService, private actionService: ActionService,
              private resourceCopyService: ResourceCopyService, private userService: UserService) {
    this.books = [];
    this.booksPage = 0;
    this.errorMessage = false;
    this.img_url = BOOKS_IMG_URL;
    this.isLogged = false;
    this.magazines = [];
    this.magazinesPage = 0;
    this.moreBooksActive = true;
    this.moreMagazActive = true;
    this.successMessage = false;

    this.addBooks(true);
    this.addMagazines(true);
  }

  ngOnInit() {
    this.isLogged = this.sessionService.checkCredentials();
    this.user = this.userService.getUserCompleted();
  }

  addBooks(userReq: boolean) {
    this.resourceService.getAllResources('Libro', this.booksPage).subscribe(
      books => {
        if (userReq) {
          this.booksPage++;
          this.books = this.books.concat(books);
          this.downloadImages(this.books);
          this.addBooks(false);
        }
      },
      error => {
        if (error.statusCode == STATUS_NO_CONTENT) {
          console.log(error + " - STATUS CODE: " + error.statusCode);
        }
        else {
          if (userReq)
            console.error("ERROR: " + error);
        }
        this.moreBooksActive = false;
      }
    );

  }

  addMagazines(userReq: boolean) {
    this.resourceService.getAllResources('Revista', this.magazinesPage).subscribe(
      magazines => {
        if (userReq) {
          this.magazinesPage++;
          this.magazines = this.magazines.concat(magazines);
          this.downloadImages(this.magazines);
          this.addMagazines(false);
        }
      },
      error => {
        if (error.statusCode == STATUS_NO_CONTENT) {
          console.log(error + " - STATUS CODE: " + error.statusCode);
        }
        else {
          if (userReq)
            console.error("ERROR: " + error);
        }
        this.moreMagazActive = false;
      }
    );
  }

  downloadImages(resources: Resource[]) {
    console.log('Downloading images from server...');
    for (let resource of resources) {
      this.fileService.getResourceFile(resource.id).subscribe(
        data => {
          let dataRecieved: string[] = data.split('"');
          resource.image = 'data:image/png;base64,' + dataRecieved[3];
        },
        error => console.log('Fail adding resource ' + resource.title + 'image.')
      );
    }
  }

  reserveResource(resource: Resource) {
    console.log('Trying to find a reserve copy avaible of ' + resource.title + '...')
    let copy = this.resourceCopyService.getResourceCopyByLocationCode(resource.noReservedCopies[0]);
    if (copy === undefined) {
      console.log('Not enough copies or user is not allow to make the reserve.');
      this.successMessage = false;
      this.errorMessage = true;
      this.message = 'La reserva no se ha podido realizar.';
    } else {
      let action: Action;
      action = {copy: copy, user: this.user};
      console.log(JSON.stringify(action));
      this.actionService.postAction(action).subscribe(
        response => {
          this.errorMessage = false;
          this.successMessage = true;
          this.message = 'La reserva se ha realizado exitosamente.';
          console.log('Reserve successfully completed.');
        },
        error => console.log('Fail trying to make the reserve.')
      );
    }
  }
}
