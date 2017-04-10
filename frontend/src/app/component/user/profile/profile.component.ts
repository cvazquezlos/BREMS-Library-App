import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {User} from '../../../model/user.model';

import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

  user: User;
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private sessionService: SessionService) {
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials())
      this.router.navigate(['/login']);
    else
      this.user = this.sessionService.getSession();
  }
}
