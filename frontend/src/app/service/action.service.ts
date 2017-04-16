import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {ACTION_URL} from "../util";

import {Action} from "../model/action.model";

@Injectable()
export class ActionService {

  authCreds: string;

  constructor(private http: Http) {
  }

  setAuthHeaders(authCreds: string) {
    this.authCreds = authCreds;
  }

  getAllActions(page: number, finished: boolean) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.get(ACTION_URL + '?page=' + page + '&finished=' + finished, {headers: headers})
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }

  postAction(action: Action) {
    let body = JSON.stringify(action);
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.post(ACTION_URL, body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'));
  }
}
