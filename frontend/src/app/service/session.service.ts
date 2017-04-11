import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {BASE_URL} from "../util";

import {User} from '../model/user.model';

import {UserService} from '../service/user.service';
import {ActionService} from '../service/action.service';

@Injectable()
export class SessionService {

  user: User;
  authCreds: string;

  constructor(private http: Http, private userService: UserService, private actionService: ActionService) {
  }

  logIn(username: string, password: string) {
    this.authCreds = btoa(username + ':' + password);
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.get(BASE_URL + 'logIn', {headers: headers})
      .map(response => {
          let id = response.json().id;
          this.userService.setAuthHeaders(this.authCreds);
          this.userService.getUser(id).subscribe(
            user => {
              this.user = user;
            },
            error => console.log(error)
          );
          localStorage.setItem("user", username);
          this.actionService.setAuthHeaders(this.authCreds);
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

  register(firstName: string, lastName1: string, lastName2: string, username: string, password: string, dni: string, email: string, phone: string){
      let newUser: User;
      newUser = {name: username, passwordHash: password, dni: dni, firstName: firstName, lastName1: lastName1, lastName2: lastName2, email: email, telephone: phone};
      return this.http.post(BASE_URL + 'register', newUser);
  }
}
