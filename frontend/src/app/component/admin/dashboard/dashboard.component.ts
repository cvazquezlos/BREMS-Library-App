import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {SessionService} from '../../../service/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(["/login"]);
    }
  }

}
