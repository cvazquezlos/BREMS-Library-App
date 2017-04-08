import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Headers} from '@angular/http';
import {Http} from '@angular/http';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  constructor(private router: Router, activatedRoute: ActivatedRoute, private http: Http) { }

  logIn(username:String, password:String){
    var headers = new Headers();

    let value = "Basic " + btoa(username + ":" + password);
    headers.append("Authorization", value);
    this.http.get("https://localhost:8443/api/logIn",{headers : headers}).subscribe(
        response => {response.json().content},
        error => console.error(error)
    );
  }

  logOut(){
    this.http.get("https://localhost:8443/api/logOut").subscribe(
        response => {response.json().content},
        error => console.error(error)
    );
  }
}