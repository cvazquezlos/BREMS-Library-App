import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Action} from '../../../model/action.model';
import {User} from '../../../model/user.model';

import {ActionService} from '../../../service/action.service';
import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

  user: User;
  actionPage: number;
  actions: Action[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private sessionService: SessionService, private actionService: ActionService) {
    this.actionPage = 0;
    this.actions = [];
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials())
      this.router.navigate(['/login']);
    else {
      this.user = this.userService.getUserCompleted();
      this.actionService.getAllActions(this.actionPage).subscribe(
        actions => this.actions = actions,
        error => console.log(error)
      );
    }
  }
}
