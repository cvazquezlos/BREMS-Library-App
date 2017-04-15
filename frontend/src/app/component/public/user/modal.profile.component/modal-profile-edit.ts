import {Component} from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

import {User} from '../../../../model/user.model';
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'modal-profile-edit',
  templateUrl: 'modal-profile-edit.html',
  styles: [`
    .hide {
      display: none
    }`]
  ,
  animations: [
    trigger('dialog', [
      transition('void => *', [
        animate(100, style({transform: 'scale3d(.3, .3, .3)'}))
      ]),
      transition('* => void', [
        animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
      ])
    ])
  ]
})
export class ModalProfileEdit {
  visible: boolean;
  user: User;
  firstName: string;
  lastName1: string;
  lastName2: string;
  email: string;
  telephone: string;
  viewTelephone: boolean;
  address: string;

  constructor(private userService: UserService) {
    this.visible = false;
  }

  edit() {
    this.user.firstName = this.firstName;
    this.user.lastName1 = this.lastName1;
    this.user.lastName2 = this.lastName2;
    this.user.email = this.email;
    this.user.telephone = this.telephone;
    this.user.viewTelephone = this.viewTelephone;
    this.user.address = this.address;

    let updatedUser = {
      id: this.user.id, name: this.user.name, dni: this.user.dni, firstName: this.firstName,
      lastName1: this.lastName1, lastName2: this.lastName2, email: this.email, telephone: this.telephone,
      viewTelephone: this.viewTelephone, address: this.address, biography: this.user.biography
    };

    this.userService.updateUser(updatedUser).subscribe(
      response => {
        console.log(this.user.name + " successfully updated.");
        this.user = this.userService.getUserCompleted();
        // NOW YOU HAVE TO RETURN THE MODIFIED USER TO FATHER COMPONENT.
        this.close();
      },
      error => console.log("Faile trying to modify " + this.user.name + ".")
    );
  }

  close(): void {
    this.visible = false;
  }

  open(user: User): void {
    if (!this.visible) {
      this.visible = true;
    }
    this.user = user;
  }
}
