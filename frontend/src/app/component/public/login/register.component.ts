import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../service/session.service';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  register(firstName: string, lastName1: string, lastName2: string, username: string,
    password: string, dni: string, email: string, phone: string) {


    this.sessionService.register(firstName, lastName1, lastName2, username, password, dni, email, phone).subscribe(
      user => { this.router.navigate(['/']); },
      error => console.log("Fail trying to register new account.")
    );
  }
}
