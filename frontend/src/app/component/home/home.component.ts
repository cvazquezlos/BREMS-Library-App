import {Component, Input} from '@angular/core';

import {Resource} from '../../model/resource.model';

import {ResourceService} from '../../service/resource.service';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  books: Resource[] = [];
  booksPage: number;
  magazines: Resource[] = [];
  magazinesPage: number;

  constructor(private resourceService: ResourceService) {
    this.booksPage      = 0;
    this.magazinesPage  = 0;
    this.books          = [];
    this.magazines      = [];

    this.addBooks();
    this.addMagazines();
  }

  addBooks() {
    let newBooks: Resource[] = [];
    this.resourceService.getAllResources('Libro', this.booksPage).subscribe(
      books => {
        //newBooks = books
        this.booksPage++;
        this.books = this.books.concat(books);
      },
      error => console.error(error)
    );

  }

  addMagazines() {
    let newMagazines: Resource[] = [];

    this.resourceService.getAllResources('Revista', this.magazinesPage).subscribe(
      magazines => {
        //newMagazines = magazines;
        this.magazinesPage++;
        this.magazines = this.magazines.concat(magazines);
      },
      error => console.error(error)
    );
  }

  reserveResource(id: number) {}

}
