import {Component} from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
import {Router} from '@angular/router';

import {User} from '../../../../model/user.model';
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'modal-biography-edit',
  templateUrl: 'modal-biography-edit.html',
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
export class ModalBiographyEdit {

  visible: boolean;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.visible = false;
  }

  edit(biography: string) {
    let updatedUser = {
      id: this.user.id, name: this.user.name, dni: this.user.dni, firstName: this.user.firstName,
      lastName1: this.user.lastName1, lastName2: this.user.lastName2, email: this.user.email,
      telephone: this.user.telephone, viewTelephone: this.user.viewTelephone, address: this.user.address,
      biography: biography};
    this.userService.updateUser(updatedUser).subscribe(
      response => {
        console.log(this.user.name + " successfully updated.");
        this.user = this.userService.getUserCompleted();
        this.router.navigate(['/profile']);
        this.close();
      },
      error => console.log("Fail trying to modify " + this.user.name + "'s biography.")
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
