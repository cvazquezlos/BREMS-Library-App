import { Component, ViewChild } from '@angular/core';
import {ModalLogin} from "./login/modal.component/modal-login";



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {

  constructor() { }

  @ViewChild(ModalLogin)
  private modalLogin: ModalLogin;

  openLogin() {
    this.modalLogin.open();
  }
}
