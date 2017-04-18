import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {USER_URL} from "../util";

import {User} from '../model/user.model';

@Injectable()
export class UserService {

  user: User;
  users: User[];
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
    let page = 0;
    let morePages = true;
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    while (morePages) {
      this.http.get(USER_URL + '?page=' + page, {headers: headers})
        .map(response => response.json().content)
        .catch(error => Observable.throw('Server error')
        ).subscribe(
        response => {
          if (response[1] === undefined) {
            morePages = false;
          } else {
            this.users = this.users.concat(response);
          }
        }
      );
      page++;
    }
    return this.users;
  }

  getUser(id: number) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.get(USER_URL + '/' + id.toString(), {headers: headers})
      .map(response => {
        this.user = response.json();
        return response.json();
      })
      .catch(error => Observable.throw('Server error'));
  }

  updateUser(user: User, current: boolean) {
    let body = JSON.stringify(user);
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.put(USER_URL + '/' + user.id, body, {headers: headers})
      .map(response => {
        if (current) {
          this.getUser(user.id).subscribe(
            user => this.user = user,
            error => error
          );
        }
        return response.json();
      })
      .catch(error => Observable.throw('Server error'));
  }

  updateFile(formData: FormData, user: User) {
    let headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.put(USER_URL + '/' + user.id + '/upload', formData, {headers: headers})
      .map(response => console.log("Success. The file has been successfully added to server directories."))
      .catch(error => Observable.throw('Server error'));
  }

  deleteUser(id: number) {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.delete(USER_URL + '/' + id, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'));
  }

  createUser(user: User) {
    let body = JSON.stringify(user);
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.post(USER_URL, body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'))
  }
}
