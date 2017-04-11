import {Component} from '@angular/core';

import {Resource} from '../../model/resource.model';

import {ResourceService} from '../../service/resource.service';
import {STATUS_NO_CONTENT, BOOKS_IMG_URL} from "../../util";

@Component({
  templateUrl: 'home.component.html',
  styles: [`
  .showBtnMoreBook {display: block}
  .showBtnMoreMagaz{display: block}`]
})

export class HomeComponent {

  books: Resource[];
  booksPage: number;
  magazines: Resource[];
  magazinesPage: number;

  img_url: string;
  moreBooksActive: boolean;
  moreMagazActive: boolean;


  constructor(private resourceService: ResourceService) {
    this.booksPage = 0;
    this.magazinesPage = 0;
    this.books = [];
    this.magazines = [];

    this.img_url  = BOOKS_IMG_URL;
    this.moreBooksActive = true;
    this.moreMagazActive = true;

    this.addBooks();
    this.addMagazines();
  }

  addBooks() {
    this.resourceService.getAllResources('Libro', this.booksPage).subscribe(
      books => {
        this.booksPage++;
        this.books = this.books.concat(books);
      },
      error => {
        if( error.statusCode == STATUS_NO_CONTENT ) {
          console.log(error + " - STATUS CODE: " + error.statusCode);
        }

        else{
          console.error("ERROR: " + error);
        }

        this.moreBooksActive = false;
      }
    );

  }

  addMagazines() {
    this.resourceService.getAllResources('Revista', this.magazinesPage).subscribe(
      magazines => {
        this.magazinesPage++;
        this.magazines = this.magazines.concat(magazines);
      },
      error => {
        if( error.statusCode == STATUS_NO_CONTENT ) {
          console.log(error + " - STATUS CODE: " + error.statusCode);
        }

        else{
          console.error("ERROR: " + error);
        }

        this.moreMagazActive = false;
      }
    );
  }

  reserveResource(id: number) {}

}
