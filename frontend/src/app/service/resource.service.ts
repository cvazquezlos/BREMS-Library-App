import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'https://localhost:8443/api/resources/all';

@Injectable()
export class ResourceService {

  constructor(private http: Http) {
  }

  getResources(type: string) {

    return this.http.get(BASE_URL + '?type=' + type)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
