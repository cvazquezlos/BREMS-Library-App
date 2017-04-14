import { Component, ViewChild } from '@angular/core';

import { User } from 'app/model/user.model';

import { ModalLogin } from "app/component/public/login/modal.component/modal-login";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {

  constructor() {
    localStorage.clear();
  }

  @ViewChild(ModalLogin)
  private modalLogin: ModalLogin;

  openLogin() {
    this.modalLogin.open();
  }

}
