import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {BASE_URL} from "../util";

import {User} from '../model/user.model';

import {UserService} from '../service/user.service';

@Injectable()
export class SessionService {

  isLogged = false;
  isAdmin = false;
  user: User;
  current: User;

  constructor(private http: Http, private userService: UserService) {
    this.reqIsLogged();
  }

  getSession() {
    return Observable.of(this.user);
  }

  setSession(current: User) {
    this.current = current;
  }

  getLogged() {
    return this.isLogged;
  }

  reqIsLogged() {
    let headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.get(BASE_URL + 'logIn', {headers: headers}).subscribe(
      response => this.processLogInResponse(response),
      error => {
        if (error.status != 401) {
          console.error("Error when asking if logged: " + JSON.stringify(error));
        }
      }
    )
  }

  private processLogInResponse(response) {
    this.isLogged = true;
    this.userService.getUser(response.json().id).map(
      response => this.user = response.json()
    );
    this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
  }

  logIn(username: string, password: string) {
    let headers = new Headers();

    let value = 'Basic ' + btoa(username + ':' + password);
    headers.append('Authorization', value);
    return this.http.get(BASE_URL + 'logIn', {headers : headers})
      .map(response => {
        this.processLogInResponse(response);
        return response.json().id
      })
      .catch(error => Observable.throw('Server error'));
  }

  logOut() {
    return this.http.get(BASE_URL + 'logOut')
      .map(response => {
        this.isLogged = false;
        this.isAdmin = false;
        return response;
      })
      .catch(error => Observable.throw('Server error'));
  }

  register(firstname: string, lastname: string, lastname2: string, username: string,
           password: string, dni: string, email: string, phone: string){


  }
}
