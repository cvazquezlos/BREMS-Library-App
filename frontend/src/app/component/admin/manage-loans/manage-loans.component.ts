import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Action } from 'app/model/action.model';

import { SessionService } from 'app/service/session.service';
import { ActionService } from 'app/service/action.service';

@Component({
    templateUrl: './manage-loans.component.html',
    styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {

    loans: Action[] = [];
    errorMessage: boolean;
    message: String;
    showNextPage: boolean;
    showPreviousPage: boolean;
    successMessage: boolean;
    private loansPage: number;

    constructor(private router: Router,
        private sessionService: SessionService,
        private actionService: ActionService) {
        this.successMessage = false;
        this.errorMessage = false;
        this.loansPage = 0;
        this.showNextPage = false;
        this.showPreviousPage = false;
    }

    ngOnInit() {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        } else {
            this.getLoans();
            this.checkNextPage();
            this.checkPreviousPage();
        }
    }

    getLoans() {
        this.actionService.getAllActions(this.loansPage).subscribe(
            loans => this.loans = loans,
            error => console.log(error)
        );
    }

    nextPage() {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.loansPage++;
        this.getLoans();
        this.checkNextPage();
        this.showPreviousPage = true;
    }

    previousPage() {
        this.showNextPage = false;
        this.showPreviousPage = false;
        this.loansPage--;
        this.getLoans();
        this.checkPreviousPage();
        this.showNextPage = true;
    }

    checkNextPage() {
        this.actionService.getAllActions(this.loansPage + 1).subscribe(
            loans => this.showNextPage = (Object.keys(loans).length === 0) ? false : true
        );
    }

    checkPreviousPage() {
        if (this.loansPage > 0) {
            this.actionService.getAllActions(this.loansPage - 1).subscribe(
                loans => this.showPreviousPage = (Object.keys(loans).length === 0) ? false : true);
        } else {
            this.showPreviousPage = false;
        }
    }

    updateLoan(id: number, action: String) {
        let loan: Action;
        loan = this.loans.find(x => x.id === id);

        this.actionService.updateAction(loan, action).subscribe(
            response => {
                this.successMessage = true;
                this.errorMessage = false;
                this.message = 'Realizado correctamente.';
                this.loansPage = 0;
                this.getLoans();
                this.checkNextPage();
                this.checkPreviousPage();
            },
            error => {
                this.successMessage = false;
                this.errorMessage = true;
                this.message = 'No se ha podido realizar la acción.'
            }
        );
    }

    deleteLoan(id: number) {
        this.actionService.deleteAction(id).subscribe(
            response => {
                this.successMessage = true;
                this.errorMessage = false;
                this.message = 'Prestamo eliminado correctamente.';
                this.loansPage = 0;
                console.log('Loan successfully deleted.');
                this.getLoans();
                this.checkNextPage();
                this.checkPreviousPage();
            },
            error => {
                this.successMessage = false;
                this.errorMessage = true;
                this.message = 'No se ha podido eliminar el prestamo.'
                console.log('Fail trying to delete selected loan.');
            }
        );
    }

}
