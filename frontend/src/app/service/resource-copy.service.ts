import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {RESOURCECOPY_URL} from "../util";

import {ResourceCopy} from "../model/resource-copy.model";

@Injectable()
export class ResourceCopyService {

  resourceCopy: ResourceCopy;
  resourceCopies: ResourceCopy[];
  authCreds: string;

  constructor(private http: Http) {
    this.resourceCopies = [];
  }

  setAuthHeaders(authCreds: string) {
    this.authCreds = authCreds;
  }

  getResourceCopyByLocationCode(locationCode: string) {
    let page = 0;
    let morePages = true;
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authCreds);
    while (page <= 2) {
      this.http.get(RESOURCECOPY_URL + '?page=' + page, {headers: headers})
        .map(response => response.json().content)
        .catch(error => Observable.throw('Server error')
      ).subscribe(
        response => {
          this.resourceCopies = this.resourceCopies.concat(response);
        },
        error => morePages = false
      );
      page++;
    }
    for(let copy of this.resourceCopies) {
      if (copy.locationCode === locationCode)
        return copy;
    }
  }

}
