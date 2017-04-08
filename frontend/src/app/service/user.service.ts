import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'https://localhost:8443/api/users/';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getAllUsers() {

    return this.http.get(BASE_URL + 'all')
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
