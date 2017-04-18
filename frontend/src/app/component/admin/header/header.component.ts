import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ADMIN_IMG_URL} from '../../../util';

import {User} from '../../../model/user.model';

import {FileService} from '../../../service/file.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  imgLogo = ADMIN_IMG_URL + 'logo.png';
  user: User;
  userImage: any;

  constructor(private fileService: FileService, private sanitizer: DomSanitizer, private userService: UserService) { }

  ngOnInit() {
    console.log(Number(localStorage.getItem('id')));
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

}
