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
    this.booksPage = 0;
    this.magazinesPage = 0;
    this.resourceService.getAllResources('Libro', this.booksPage).subscribe(
      books => this.books = books,
      error => console.error(error)
    );
    this.booksPage++;
    this.resourceService.getAllResources('Revista', this.magazinesPage).subscribe(
      magazines => this.magazines = magazines,
      error => console.error(error)
    );
    this.magazinesPage++;
  }

  addBooks() {
    let newBooks: Resource[] = [];
    this.resourceService.getAllResources('Libro', this.booksPage).subscribe(
      books => newBooks = books,
      error => console.error(error)
    );
    this.booksPage++;
    for (const book of newBooks) {
      this.books.push(book);
    }
  }

  addMagazines() {
    let newMagazines: Resource[] = [];
    this.resourceService.getAllResources('Revista', this.magazinesPage).subscribe(
      magazines => newMagazines = magazines,
      error => console.error(error)
    );
    this.magazinesPage++;
    for (const magazine of newMagazines) {
      this.books.push(magazine);
    }
  }

  reserveResource(id: number) {}

}
