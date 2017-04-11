import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ACTION_URL} from "../util";

@Injectable()
export class ActionService {

  constructor(private http: Http) {
  }

  getAllActions(page: number) {
    return this.http.get(ACTION_URL + '&page=' + page)
      .map(response => response.json().content)
      .catch(error => Observable.throw('Server error'));
  }
}
