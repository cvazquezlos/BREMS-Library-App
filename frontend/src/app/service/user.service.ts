import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {USER_URL} from "../util";

import {User} from '../model/user.model';

@Injectable()
export class UserService {

  user: User;

  constructor(private http: Http) {
  }

  getUserCompleted() {
    return this.user;
  }

  getAllUsers() {
    return this.http.get(USER_URL + 'all')
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }

  getUser(id: number, username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(USER_URL + id.toString(), {headers: headers})
      .map(response => {
        this.user = response.json();
        return this.user;
      })
      .catch(error => Observable.throw('Server error'));
  }
}
