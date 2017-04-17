import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {ACTION_URL} from "../util";

@Injectable()
export class ActionService {

  authCreds: string;

  constructor(private http: Http) {
  }

  setAuthHeaders(authCreds: string) {
    this.authCreds = authCreds;
  }

  getAllActions(page?: number, finished?: boolean) {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);

    let url = (page && finished) ? ACTION_URL + '?page=' + page + '&finished=' + finished : ACTION_URL;
    return this.http.get(url, {headers: headers})
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
