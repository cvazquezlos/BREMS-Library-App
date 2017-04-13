import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-manage-resources',
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {

  private resources: Object[] = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.resources = [];
    let url = "https://localhost:8443/api/resources";

    this.http.get(url).subscribe(
      response => {
        let data = response.json().content;
        data.forEach(element => {
          this.resources.push(element);
        });
      },
      error => console.error(error)
    );
  }

}
