import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../model/user.model';

import {SessionService} from '../../service/session.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {

  aboutActive = false;
  contactActive = false;
  indexActive = true;
  isAdmin: boolean;
  profileActive = false;
  @Output() openModalLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private sessionService: SessionService) {
    this.isAdmin = false;
  }

  gotoSearch() {
    this.router.navigate(['/search']);
    this.update('index');
  }

  login() {
    this.openModalLogin.emit();
  }

  logOut() {
    if (this.sessionService.logOut()) {
      this.router.navigate(['']);
    }
  }

  update(page: string) {
    switch(page){
      case 'index':
        this.aboutActive = false;
        this.contactActive = false;
        this.indexActive = true;
        this.profileActive = false;
        break;
      case 'profile':
        this.aboutActive = false;
        this.contactActive = false;
        this.indexActive = false;
        this.profileActive = true;
        break;
      case 'about':
        this.aboutActive = false;
        this.contactActive = false;
        this.indexActive = false;
        this.profileActive = false;
        break;
      case 'contact':
        this.aboutActive = false;
        this.contactActive = true;
        this.indexActive = false;
        this.profileActive = false;
        break;
    }
  }
}
