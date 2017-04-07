import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ResourceService {

  private resources: string[] = [];

  constructor(private http: Http) {
  }

  getResources(type: string) {
    const url = 'https://localhost:8443/api/resources/all?type=' + type;

    return this.http.get(url)
      .map(response => this.extractTitles(response))
      .catch(error => Observable.throw('Server error'));
  }

  private extractTitles(response: Response) {
    return response.json().map(resource => resource.title);
  }
}
