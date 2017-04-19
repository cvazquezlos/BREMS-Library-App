import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {DomSanitizer} from '@angular/platform-browser';

import {Action} from '../../../model/action.model';
import {Fine} from '../../../model/fine.model';
import {User} from '../../../model/user.model';
import {Resource} from '../../../model/resource.model';

import {ActionService} from '../../../service/action.service';
import {FineService} from '../../../service/fine.service';
import {FileService} from '../../../service/file.service';
import {SessionService} from '../../../service/session.service';
import {UserService} from '../../../service/user.service';
import {ModalProfileEdit} from "./modal.profile.component/modal-profile-edit";
import {ModalBiographyEdit} from "./modal.biography.component/modal-biography-edit";

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

  @ViewChild(ModalProfileEdit)
  private modalProfileEdit: ModalProfileEdit;

  @ViewChild(ModalBiographyEdit)
  private modalBiographyEdit: ModalBiographyEdit;

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
      let resources: Resource[];
      this.user = this.userService.getUserCompleted();
      this.actionService.getAllActions(this.currentActionsPage, false).subscribe(
        actions => {
          this.currentActions = actions;
          for (let action of this.currentActions)
            resources.push(action.copy.resource);
          this.currentActionsPage++;
          this.downloadImages(resources);
        },
        error => console.log("Fail trying to charge " + this.user.name + " current loans.")
      );
      this.fineService.getAllFines(this.finePage).subscribe(
        fines => {
          this.fines = fines;
          this.finePage++;
        },
        error => console.log("Fail trying to charge " + this.user.name + " fines.")
      );
      resources = [];
      this.actionService.getAllActions(this.historyPage, true).subscribe(
        actions => {
          this.history = actions;
          for (let action of this.history)
            resources.push(action.copy.resource);
          this.historyPage++;
          this.downloadImages(resources);
        },
        error => console.log("Fail trying to charge " + this.user.name + " history.")
      );
      this.fileService.getUserFile(this.user.id).subscribe(
        data => {
          let dataRecieved: string[] = data.split('"');
          this.userImage = 'data:image/png;base64,' + dataRecieved[3];
        },
        error => console.log("Fail trying to charge " + this.user.name + " image.")
      );
    }
  }

  downloadImages(resources: Resource[]) {
    console.log('Downloading images from server...');
    for (let resource of resources) {
      this.fileService.getResourceFile(resource.id).subscribe(
        data => {
          let dataRecieved: string[] = data.split('"');
          resource.image = 'data:image/png;base64,' + dataRecieved[3];
        },
        error => console.log('Fail adding resource ' + resource.title + 'image.')
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
