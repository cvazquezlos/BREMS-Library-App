import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {RESOURCECOPY_URL} from "../util";

import {ResourceCopy} from "../model/resource-copy.model";

@Injectable()
export class ResourceCopyService {

  resourceCopies: ResourceCopy[];
  authCreds: string;

  constructor(private http: Http) {
    this.resourceCopies = [];
  }

  setAuthHeaders(authCreds: string) {
    this.authCreds = authCreds;
  }

  getResourceCopies() {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    return this.http.get(RESOURCECOPY_URL, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw('Server error'))
  }
}
