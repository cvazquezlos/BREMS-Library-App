import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {DomSanitizer} from '@angular/platform-browser';

import {Action} from '../../../model/action.model';
import {Fine} from '../../../model/fine.model';
import {User} from '../../../model/user.model';

import {ActionService} from '../../../service/action.service';
import {FineService} from '../../../service/fine.service';
import {FileService} from '../../../service/file.service';
import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

  currentActions: Action[];
  currentActionsPage: number;
  fines: Fine[];
  finePage: number;
  history: Action[];
  historyPage: number;
  user: User;
  userImage: any;

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService,
              private actionService: ActionService, private fineService: FineService,
              private sanitizer: DomSanitizer, private fileService: FileService) {
    this.currentActions = [];
    this.currentActionsPage = 0;
    this.fines = [];
    this.finePage = 0;
    this.history = [];
    this.historyPage = 0;
  }

  ngOnInit() {
    if (!this.sessionService.checkCredentials())
      this.router.navigate(['/login']);
    else {
      this.user = this.userService.getUserCompleted();
      this.actionService.getAllActions(this.currentActionsPage, false).subscribe(
        actions => {
          this.currentActions = actions;
          this.currentActionsPage++;
        },
        error => console.log(error)
      );
      this.fineService.getAllFines(this.finePage).subscribe(
        fines => {
          this.fines = fines;
          this.finePage++;
        },
        error => console.log(error)
      );
      this.actionService.getAllActions(this.historyPage, true).subscribe(
        actions => {
          this.history = actions;
          this.historyPage++;
        },
        error => console.log(error)
      );
      this.fileService.getUserFile(this.user.id).subscribe(
        data => {
          let dataRecieved: string[] = data.split('"');
          this.userImage = 'data:image/png;base64,' + dataRecieved[3];
          console.log(this.userImage);
        },
        error => console.log("FILAZO")
      );
    }
  }
}
