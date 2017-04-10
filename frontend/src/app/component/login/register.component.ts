import {Component} from '@angular/core';
import {LoginService} from '../../service/session.service';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {


    constructor(private loginService: LoginService) {
    }


}
