import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../../model/user.model';

import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'manage-users.component.html'
})
export class ManageUsersComponent implements OnInit {

  errorMessage: boolean;
  message: String;
  showNextPage: boolean;
  showPreviousPage: boolean;
  successMessage: boolean;
  users: User[];
  usersPage: number;

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService) {
    this.successMessage = false;
    this.errorMessage = false;
    this.users = [];
    this.usersPage = 0;
    this.showNextPage = false;
    this.showPreviousPage = false;
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(["/login"]);
    } else {
      this.getUsers();
      this.checkNextPage();
      this.checkPreviousPage();
    }
  }

  getUsers() {
    this.userService.getUsers(this.usersPage).subscribe(
      users => this.users = users,
      error => console.log("Fail trying to get current page of users.")
    );
  }

  nextPage() {
    this.showNextPage = false;
    this.showPreviousPage = false;
    this.usersPage++;
    this.getUsers();
    this.checkNextPage();
    this.showPreviousPage = true;
  }

  previousPage() {
    this.showNextPage = false;
    this.showPreviousPage = false;
    this.usersPage--;
    this.getUsers();
    this.checkPreviousPage();
    this.showNextPage = true;
  }

  checkNextPage() {
    this.userService.getUsers(this.usersPage + 1).subscribe(
      users => {
        if (Object.keys(users).length === 0) {
          this.showNextPage = false;
        } else {
          this.showNextPage = true;
        }
      }
    );
  }

  checkPreviousPage() {
    if (this.usersPage > 0) {
      this.userService.getUsers(this.usersPage - 1).subscribe(
        users => {
          if (Object.keys(users).length === 0) {
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
    this.userService.deleteUser(id).subscribe(
      response => {
        this.successMessage = true;
        this.errorMessage = false;
        this.message = 'Usuario eliminado correctamente.';
        this.usersPage = 0;
        console.log('User successfully deleted.');
        this.getUsers();
        this.checkNextPage();
        this.checkPreviousPage();
      },
      error => {
        this.successMessage = false;
        this.errorMessage = true;
        this.message = 'No se ha podido eliminar al usuario. Tiene un préstamo o una multa activa.'
        console.log('Fail trying to delete selected user.');
      }
    );
  }
}
