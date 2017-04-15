import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { SessionService } from 'app/service/session.service';

import {User} from '../../../../model/user.model';
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'modal-biography-edit',
  templateUrl: 'modal-biography-edit.html',
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
export class ModalBiographyEdit {
  // - attributes
  visible       : boolean;
  user          : User;

  // ------------------------------------------------------------------------------------------------------------------
  constructor(private userServ: UserService,) {
    this.visible = false;
  }

  // ------------------------------------------------------------------------------------------------------------------

  edit(biography: string) {
    this.user.biography = biography;

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
