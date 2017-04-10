import {Component} from '@angular/core';
import {SessionService} from '../../service/session.service';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {


    constructor(private loginService: SessionService) {
    }


}
