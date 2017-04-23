import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {User} from '../../../model/user.model';

import {FileService} from '../../../service/file.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  indexActive: boolean;
  resourcesActive: boolean;
  loansActive: boolean;
  finesActive: boolean;
  usersActive: boolean;
  user: User;
  userImage: any;

  constructor(private fileService: FileService, private sanitizer: DomSanitizer, private userService: UserService) { }

  ngOnInit() {
    this.update('index');
    this.userService.getUser(Number(localStorage.getItem('id'))).subscribe(
      user => this.user = user,
      error => console.log("Fail trying to get user information.")
    );
    this.fileService.getUserFile(Number(localStorage.getItem('id'))).subscribe(
      data => {
        let dataRecieved: string[] = data.split('"');
        this.userImage = 'data:image/png;base64,' + dataRecieved[3];
      },
      error => console.log("Fail trying to charge " + this.user.name + " image.")
    );
  }

  update(page: string) {
    switch (page) {
      case 'index':
        this.indexActive = true;
        this.resourcesActive = false;
        this.loansActive = false;
        this.finesActive = false;
        this.usersActive = false;
        break;
      case 'resources':
        this.indexActive = false;
        this.resourcesActive = true;
        this.loansActive = false;
        this.finesActive = false;
        this.usersActive = false;
        break;
      case 'loans':
        this.indexActive = false;
        this.resourcesActive = false;
        this.loansActive = true;
        this.finesActive = false;
        this.usersActive = false;
        break;
      case 'fines':
        this.indexActive = false;
        this.resourcesActive = false;
        this.loansActive = false;
        this.finesActive = true;
        this.usersActive = false;
        break;
      case 'users':
        this.indexActive = false;
        this.resourcesActive = false;
        this.loansActive = false;
        this.finesActive = false;
        this.usersActive = true;
        break;
    }
  }
}
