import {ResourceCopy} from './resource-copy.model';
import {User} from './user.model';

export interface Fine {
  id?: number;
  initDate: any;
  finishDate: any;
  resourceCopy: ResourceCopy;
  user?: User;
}
