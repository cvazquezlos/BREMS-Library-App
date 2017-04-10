import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {User} from '../../../model/user.model';

import {UserService} from '../../../service/user.service';
import {SessionService} from '../../../service/session.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

  user: User;
  visible: boolean = false;
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private _sessionService: SessionService) { }

  ngOnInit() {
    if (!this._sessionService.checkCredentials())
      this.router.navigate(['/login']);
    else
      this.visible = true;
  };

}
