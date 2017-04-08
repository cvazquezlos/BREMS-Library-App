import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'https://localhost:8443/api/resources/';

@Injectable()
export class ResourceService {

  constructor(private http: Http) {
  }

  getAllResources(type: string, page: number) {

    return this.http.get(BASE_URL + 'all?type=' + type + '&page=' + page)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
