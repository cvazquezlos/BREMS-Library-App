import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {FILE_URL} from "../util";

@Injectable()
export class FileService {

  authCreds: string;

  constructor(private http: Http) {
  }

  setAuthHeaders(authCreds: string) {
    this.authCreds = authCreds;
  }

  getUserFile(id: number) {
    return this.http.get(FILE_URL + '/user/' + id)
      .map(response => JSON.stringify(response))
      .catch(error => Observable.throw('Server error'));
  }

  getResourceFile(id: number) {
    return this.http.get(FILE_URL + '/resource/' + id)
      .map(response => JSON.stringify(response))
      .catch(error => Observable.throw('Server error'));
  }
}
