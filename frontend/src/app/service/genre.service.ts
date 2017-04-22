import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { GENRE_URL } from "../util";

@Injectable()
export class GenreService {

  constructor(private http: Http) {
  }

  getAllGenres(page?: number) {
    let url = (page) ? GENRE_URL + '?page=' + page : GENRE_URL ;
    return this.http.get(url)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }

  getGenre(id: number) {
    return this.http.get(GENRE_URL + '/' + id)
      .map(response => response.json().resources)
      .catch(error => Observable.throw('Server error'));
  }
}
