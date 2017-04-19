import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {FineService} from '../../../service/fine.service';
import {SessionService} from '../../../service/session.service';

import {Fine} from '../../../model/fine.model';

@Component({
  templateUrl: 'manage-fines.component.html'
})
export class ManageFinesComponent implements OnInit {

  errorMessage: boolean;
  message: String;
  pageFines: number;
  showNextPage: boolean;
  showPreviousPage: boolean;
  successMessage: boolean;
  fines: Fine[];

  constructor(private router: Router, private sessionService: SessionService, private fineService: FineService) {
    this.successMessage = false;
    this.errorMessage = false;
    this.pageFines = 0;
    this.showNextPage = false;
    this.showPreviousPage = false;
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials())
      this.router.navigate(['/login']);
    else {
      this.getFines();
      this.checkNextPage();
      this.checkPreviousPage();
    }
  }

  getFines() {
    this.fineService.getAllFines(this.pageFines).subscribe(
      fines => this.fines = fines,
      error => console.log('Fail trying to get all fines.')
    );
  }

  nextPage() {
    this.showNextPage = false;
    this.showPreviousPage = false;
    this.pageFines++;
    this.getFines();
    this.checkNextPage();
    this.showPreviousPage = true;
  }

  previousPage() {
    this.showNextPage = false;
    this.showPreviousPage = false;
    this.pageFines--;
    this.getFines();
    this.checkPreviousPage();
    this.showNextPage = true;
  }

  checkNextPage() {
    this.fineService.getAllFines(this.pageFines + 1).subscribe(
      fines => {
        if (Object.keys(fines).length === 0) {
          this.showNextPage = false;
        } else {
          this.showNextPage = true;
        }
      }
    );
  }

  checkPreviousPage() {
    if (this.pageFines > 0) {
      this.fineService.getAllFines(this.pageFines - 1).subscribe(
        fines => {
          if (Object.keys(fines).length === 0) {
            this.showPreviousPage = false;
          } else {
            this.showPreviousPage = true;
          }
        }
      );
    } else {
      this.showPreviousPage = false;
    }
  }

  delete(id: number) {
    this.fineService.deleteFine(id).subscribe(
      response => {
        this.successMessage = true;
        this.errorMessage = false;
        this.message = 'Multa eliminada correctamente.';
        this.pageFines = 0;
        console.log('Fine successfully deleted.');
        this.getFines();
        this.checkNextPage();
        this.checkPreviousPage();
      },
      error => {
        this.successMessage = false;
        this.errorMessage = true;
        this.message = 'No se ha podido eliminar la multa. Está activa.';
        console.log('Fail trying to delete selected fine.');
      }
    );
  }

}
