import {Component} from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {


    constructor(private loginService: LoginService) {
    }


}