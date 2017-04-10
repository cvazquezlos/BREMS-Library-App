import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user.model';

import {UserService} from '../service/user.service';

import {BASE_URL} from "../util";

@Injectable()
export class SessionService {

  user: User;

  constructor(private http: Http, private userService: UserService, private router: Router) {
  }

  getSession() {
    return this.user;
  }

  logIn(username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(BASE_URL + 'logIn', {headers: headers})
      .map(response => {
          let id = response.json().id;
          this.userService.getUser(id).subscribe(
            user => {
              this.user = user;
            },
            error => console.error(error)
          );
          localStorage.setItem("user", username);
          return this.user;
        }
      )
      .catch(error => Observable.throw('Server error'));
  }

  logOut() {
    this.http.get(BASE_URL + 'logOut').subscribe(
      response => {
        localStorage.removeItem("user");
      },
      error => console.error(error)
    );
  }

  checkCredentials() {
    return (localStorage.getItem("user") !== null);
  }
}
