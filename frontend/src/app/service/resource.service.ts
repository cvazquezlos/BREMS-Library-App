import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { RESOURCES_URL } from "../util";

@Injectable()
export class ResourceService {

  constructor(private http: Http) {
  }

  getResource(id: number) {
    let url = RESOURCES_URL + '/' + id;

    return this.http.get(url)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'))
  }

  getAllResources(type: string, page: number) {
    return this.http.get(RESOURCES_URL + '?type=' + type + '&page=' + page)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
