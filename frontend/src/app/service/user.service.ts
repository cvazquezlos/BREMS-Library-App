import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {USER_URL} from "../util";

import {User} from '../model/user.model';

@Injectable()
export class UserService {

  user: User;
  authCreds: string;

  constructor(private http: Http) {
  }

  setAuthHeaders(authCreds: string) {
    this.authCreds = authCreds;
  }

  getUserCompleted() {
    return this.user;
  }

  getAllUsers() {
    return this.http.get(USER_URL + 'all')
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }

  getUser(id: number) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.get(USER_URL + '/' + id.toString(), {headers: headers})
      .map(response => {
        this.user = response.json();
        return this.user;
      })
      .catch(error => Observable.throw('Server error'));
  }

  updateUser(user: User) {
    let body = JSON.stringify(user);
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.put(USER_URL + '/' + user.id, body, {headers: headers})
      .map(
        response => {
          this.getUser(user.id).subscribe(
            user => this.user = user,
            error => console.log("Fail trying to get full user information by UserService.")
          );
          return this.user;
        })
      .catch(error => Observable.throw('Server error'));
  }

  updateFile(formData: FormData, user: User) {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.put(USER_URL + '/' + user.id + '/upload', formData, {headers: headers})
      .map(response => console.log("Success. The file has been successfully added to server directories."))
      .catch(error => Observable.throw('Server error'));
  }
}
