import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {User} from '../../../model/user.model';

import {UserService} from '../../../service/user.service';

@Component({
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {

  user: User;
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.id = activatedRoute.snapshot.params['id'];
    if (!this.id) {
      this.router.navigate(['/login']);
    } else {
      this.userService.getUser(this.id).subscribe(
        user => this.user = user,
        error => console.log(error)
      );
    }
  }

}
