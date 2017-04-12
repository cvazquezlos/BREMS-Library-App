import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {BOOKS_IMG_URL} from '../../../util';

import {Genre} from '../../../model/genre.model';
import {Resource} from '../../../model/resource.model';

import {GenreService} from '../../../service/genre.service';

@Component({
  templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {

  genres: Genre[];
  genresPage: number;
  img_url: string;
  resources: Resource[];
  visible: boolean;

  constructor(private router: Router, private genreService: GenreService) {
    this.genres = [];
    this.genresPage = 0;
    this.img_url  = BOOKS_IMG_URL;
    this.resources = [];
    this.visible = false;
  }

  ngOnInit() {
    this.genreService.getAllGenres(this.genresPage).subscribe(
      genres => this.genres = genres,
      error => console.log(error)
    );
  }

  searchResourcesByGenre(id: number) {
    this.visible = true;
    this.genreService.getGenre(id).subscribe(
      genre => this.resources = genre,
      error => console.log(error)
    );
  }
}
