import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../model/user.model';

import {SessionService} from '../../service/session.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  username: string;
  password: string;
  id: number;

  constructor(private loginService: SessionService, private router: Router) {
    this.id = 0;
  }

  logIn() {
    this.loginService.logIn(this.username, this.password).subscribe(
      userId => {
        this.id = userId;
        this.router.navigate(['/profile', this.id]);
      },
      error => console.log(error)
    );
  }
}
