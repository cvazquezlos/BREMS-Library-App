import {ResourceCopy} from './resource-copy.model';

import {User} from './user.model';

export interface Action {
  id?: number;
  dateLoanInit?: any;
  dateLoanGiven?: any;
  dateLoanReturn?: any;
  copy: ResourceCopy;
  user: User;
}
