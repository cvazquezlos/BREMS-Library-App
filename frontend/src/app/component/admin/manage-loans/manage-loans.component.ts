import { Component, OnInit } from '@angular/core';

import { ActionService } from 'app/service/action.service'

@Component({
  templateUrl: './manage-loans.component.html',
  styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {

  private loans: Object[] = [];

  constructor(private service: ActionService) {
  }

  ngOnInit() {
    this.service.getAllActions().subscribe(
      loans => {
        this.loans = loans;
        console.log(this.loans);
      },
      error => console.log(error)
    );
  }
}
