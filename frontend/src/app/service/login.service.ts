import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'https://localhost:8443/api/';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  logIn(username: string, password: string) {
    const headers = new Headers();

    const value = 'Basic ' + btoa(username + ':' + password);
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
