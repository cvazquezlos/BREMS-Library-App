import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {Action} from '../../../model/action.model';
import {Fine} from '../../../model/fine.model';
import {User} from '../../../model/user.model';

import {ActionService} from '../../../service/action.service';
import {FineService} from '../../../service/fine.service';
import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';
import {ModalProfileEdit} from "./modal.profile.component/modal-profile-edit";
import {IMG_URL} from "../../../util";
import {ModalBiographyEdit} from "./modal.biography.component/modal-biography-edit";

const url_avatar = IMG_URL + "avatars/";

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

  @ViewChild(ModalProfileEdit)
  private modalProfileEdit: ModalProfileEdit;

  @ViewChild(ModalBiographyEdit)
  private modalBiographyEdit: ModalBiographyEdit;

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService,
              private actionService: ActionService, private fineService: FineService) {
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
    }
  }

  public editProfile() {
    this.modalProfileEdit.open(this.user);
  }

  public editBiography() {
    this.modalBiographyEdit.open(this.user);
  }
}
