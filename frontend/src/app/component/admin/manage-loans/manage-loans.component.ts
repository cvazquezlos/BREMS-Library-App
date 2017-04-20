import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from 'app/model/action.model';

import { SessionService } from 'app/service/session.service';
import { ActionService } from 'app/service/action.service'

@Component({
  templateUrl: './manage-loans.component.html',
  styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {

  private loans: Action[] = [];

  constructor(private router: Router,
    private sessionService: SessionService,
    private actionService: ActionService) {
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(["/login"]);
    } else {
      this.actionService.getAllActions().subscribe(
        loans => { this.loans = loans; console.log(loans); },
        error => console.log(error)
      );
    }
  }

}
