import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Action} from '../../../model/action.model';
import {Fine} from '../../../model/fine.model';
import {User} from '../../../model/user.model';

import {ActionService} from '../../../service/action.service';
import {FineService} from '../../../service/fine.service';
import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

  actions: Action[];
  actionPage: number;
  fines: Fine[];
  finePage: number;
  user: User;

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService,
              private actionService: ActionService, private fineService: FineService) {
    this.actions = [];
    this.actionPage = 0;
    this.fines = [];
    this.finePage = 0;
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials())
      this.router.navigate(['/login']);
    else {
      this.user = this.userService.getUserCompleted();
      this.actionService.getAllActions(this.actionPage).subscribe(
        actions => {
          this.actions = actions;
          this.actionPage++;
        },
        error => console.log(error)
      );
      this.fineService.getAllFines(this.finePage).subscribe(
        fines => {
          this.fines = fines;
          this.finePage++;
        },
        error => console.log(error)
      );
    }
  }
}
