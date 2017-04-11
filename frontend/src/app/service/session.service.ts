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

  logIn(username: string, password: string) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(BASE_URL + 'logIn', {headers: headers})
      .map(response => {
          let id = response.json().id;
          this.userService.getUser(id, username, password).subscribe(
            user => {
              this.user = user;
            },
            error => console.log(error)
          );
          localStorage.setItem("user", username);
          return this.user;
      })
      .catch(error => Observable.throw('Server error'));
  }

  logOut() {
    return this.http.get(BASE_URL + 'logOut')
      .map(response => {
        localStorage.removeItem("user");
        return true;
      })
      .catch(error => Observable.throw('Server error'));
  }

  checkCredentials() {
    return (localStorage.getItem("user") !== null);
  }
}
