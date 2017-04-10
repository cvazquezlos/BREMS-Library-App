import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../model/user.model';

import {SessionService} from '../../service/session.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  user: User;
  id: number;

  constructor(private sessionService: SessionService, private router: Router) {
  }

  logIn(event: any, username: string, password: string) {
    event.preventDefault();
    this.sessionService.logIn(username, password).subscribe(
      user => {
        this.user = user;
        this.router.navigate(['/profile']);
      },
      error => {console.log(error); console.log('fail')}
    );
  }

  logOut() {
    this.sessionService.logOut();
  }
}
