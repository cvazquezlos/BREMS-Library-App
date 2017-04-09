import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {BASE_URL} from "../util";

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  logIn(username: string, password: string) {
    let headers = new Headers();

    let value = 'Basic ' + btoa(username + ':' + password);
    headers.append('Authorization', value);
    return this.http.get(BASE_URL + 'logIn', {headers : headers})
      .map(response => response.json().id)
      .catch(error => Observable.throw('Server error'));
  }

  logOut() {
    return this.http.get(BASE_URL + 'logOut')
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'));
  }
}
