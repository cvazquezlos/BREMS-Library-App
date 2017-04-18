import {Component, OnInit} from '@angular/core';

import {SessionService} from '../../service/session.service';
import {UserService} from '../../service/user.service';

@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
  }

}
