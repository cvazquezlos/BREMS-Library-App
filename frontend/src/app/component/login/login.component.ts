import {Component} from '@angular/core';

import {User} from '../../model/user.model';

import {LoginService} from '../../service/login.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  username: string;
  password: string;
  id: number;

  constructor(private loginService: LoginService) {
    this.id = 0;
  }

  logIn() {
    this.loginService.logIn(this.username, this.password).subscribe(
      userId => this.id = userId,
      error => console.log(error)
    );
  }
}
