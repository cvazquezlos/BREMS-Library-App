import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Action } from 'app/model/action.model';
import { User } from 'app/model/user.model';
import { Resource } from 'app/model/resource.model';
import { ResourceCopy } from 'app/model/resource-copy.model';

import { SessionService } from 'app/service/session.service';
import { ActionService } from 'app/service/action.service';
import { UserService } from 'app/service/user.service';
import { ResourceService } from 'app/service/resource.service';

@Component({
    templateUrl: './create.component.html'
})
export class CreateLoanComponent implements OnInit {

    loan: Action = null;
    users: User[];
    resources: Resource[];

    userSelect: User = null;
    resourceSelect: Resource = null;

    errorMessage: boolean;
    message: String;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private sessionService: SessionService,
        private actionService: ActionService,
        private userService: UserService,
        private resourceService: ResourceService) {
        this.errorMessage = false;

    }

    ngOnInit() {
        if (!this.sessionService.checkCredentials()) {
            this.router.navigate(["/login"]);
        } else {
            this.userService.getUsers().subscribe(
                users => this.users = users,
                error => console.log(error)
            );
            this.resourceService.getAllResources().subscribe(
                resources => this.resources = resources,
                error => console.log(error)
            );
        }
    }

    createLoan() {
        let copy: ResourceCopy;

        if (this.resourceSelect.noReservedCopies.length != 0) {
            copy = this.resourceSelect.copies.find(x => x.locationCode == this.resourceSelect.noReservedCopies[0]);
            copy.resource = {
                id: this.resourceSelect.id,
                title: this.resourceSelect.title,
                author: this.resourceSelect.author,
                editorial: this.resourceSelect.editorial,
                avaiblereserve: this.resourceSelect.avaiblereserve,
                description: this.resourceSelect.description,
                hasPhoto: this.resourceSelect.hasPhoto,
                noReservedCopies: this.resourceSelect.noReservedCopies
            };

            this.loan = { copy: copy, user: this.userSelect };

            this.actionService.postAction(this.loan).subscribe(
                response => this.router.navigate(["/admin/loans"]),
                error => {
                    this.errorMessage = true;
                    this.message = 'No se ha podido realizar la acción.'
                }
            );
        }
    }
}