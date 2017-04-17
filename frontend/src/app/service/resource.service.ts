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
    return this.http.get(RESOURCES_URL + '/' + id)
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'))
  }

  getAllResources(type?: string, page?: number) {
    let url = (type && page) ? RESOURCES_URL + '?type=' + type + '&page=' + page : RESOURCES_URL;
    return this.http.get(url)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }

  searchResources(name: string, page: number) {
    return this.http.get(RESOURCES_URL + '?name=' + name + '&page=' + page)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
