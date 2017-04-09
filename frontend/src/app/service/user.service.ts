import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {USER_URL} from "../util";



@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getAllUsers() {
    return this.http.get(USER_URL + 'all')
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }

  getUser(id: number) {
    return this.http.get(USER_URL + id)
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'));
  }
}
