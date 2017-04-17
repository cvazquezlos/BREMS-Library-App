import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../../model/user.model';

import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  errorMessage: boolean;
  message: String;
  successMessage: boolean;
  users: User[];

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService) {
    this.successMessage = false;
    this.errorMessage = false;
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(['/login']);
    } else {
      this.users = this.userService.getAllUsers();
    }
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(
      response => {
        this.successMessage = true;
        this.errorMessage = false;
        this.message = 'Usuario eliminado correctamente.';
        console.log('User successfully deleted.');
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
