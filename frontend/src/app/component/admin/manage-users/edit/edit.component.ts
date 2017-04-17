import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {User} from '../../../../model/user.model';

import {SessionService} from '../../../../service/session.service';
import {UserService} from '../../../../service/user.service';

@Component({
  templateUrl: './edit.component.html'
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(['/login']);
    } else {
      this.userService.getUser(this.activatedRoute.snapshot.params['id']).subscribe(
        response => this.user = response,
        error => console.log('Fail trying to access to user details.')
      );
    }
  }

  edit(firstName: string, lastName1: string, lastName2: string, email: string, dni: string) {
    let updatedUser = {
      id: this.user.id, name: this.user.name, dni: this.user.dni, firstName: firstName,
      lastName1: lastName1, lastName2: lastName2, email: email, telephone: this.user.telephone,
      viewTelephone: this.user.viewTelephone, address: this.user.address, biography: this.user.biography
    };

    this.userService.updateUser(updatedUser, false).subscribe(
      response => {
        console.log(this.user.name + " successfully updated.");
        this.router.navigate(['/admin/users']);
      },
      error => console.log("Fail trying to modify " + this.user.name + ".")
    );
  }
}
