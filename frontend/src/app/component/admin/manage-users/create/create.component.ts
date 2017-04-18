import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import {User} from '../../../../model/user.model';

import {SessionService} from '../../../../service/session.service';
import {UserService} from '../../../../service/user.service';

@Component({
  templateUrl: './create.component.html'
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService) {
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials()) {
      this.router.navigate(['/login']);
    }
  }

  create(firstName: string, lastName1: string, lastName2: string, name: string, email: string, password: string,
         dni: string, telephone: string) {
    let createdUser: User = {
      name: name, dni: dni, firstName: firstName, lastName1: lastName1, lastName2: lastName2, email: email,
      telephone: telephone, literaryHobby: []
    };
    this.userService.createUser(createdUser).subscribe(
      response => {
        console.log(name + " successfully created.");
        this.router.navigate(['/admin/users']);
      },
      error => console.log('Fail trying to register new user.')
    );
  }

}
