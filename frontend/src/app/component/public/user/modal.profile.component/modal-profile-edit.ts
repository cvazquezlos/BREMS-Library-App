import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { SessionService } from 'app/service/session.service';

import {User} from '../../../../model/user.model';
import {UserService} from "../../../../service/user.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'modal-profile-edit',
  templateUrl: 'modal-profile-edit.html',
  styles: [`
    .hide{display: none}`]
  ,
  animations: [
    trigger('dialog', [
      transition('void => *', [
        animate(100, style({ transform: 'scale3d(.3, .3, .3)' }))
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalProfileEdit {
  // - attributes
  visible       : boolean;
  user          : User;

  firstName     : string;
  lastName1     : string;
  lastName2     : string;
  email         : string;
  telephone     : string;
  viewTelephone : boolean;
  address       : string;
  avatar        : string;

  // ------------------------------------------------------------------------------------------------------------------
  constructor(private userServ: UserService,) {
    this.visible = false;

    if( !isNullOrUndefined(this.user) )
    {
      this.firstName      = this.user.firstName;
      this.lastName1      = this.user.lastName1;
      this.lastName2      = this.user.lastName2;
      this.email          = this.user.email;
      this.telephone      = this.user.telephone;
      this.viewTelephone  = this.user.viewTelephone;
      this.address        = this.user.address;
      this.avatar         = this.user.avatar;
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  edit() {
    this.user.firstName      = this.firstName;
    this.user.lastName1      = this.lastName1;
    this.user.lastName2      = this.lastName2;
    this.user.email          = this.email;
    this.user.telephone      = this.telephone;
    this.user.viewTelephone  = this.viewTelephone;
    this.user.address        = this.address;
    this.user.avatar         = this.avatar;

    this.userServ.updateUser(this.user.id).subscribe(
      response => console.log("user updated"),
      error => console.log(JSON.stringify(error))
    );
  }

  // ------------------------------------------------------------------------------------------------------------------

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
