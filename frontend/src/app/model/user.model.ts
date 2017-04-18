import {Action} from './action.model';
import {Fine} from './fine.model';

export interface User {
  id?: number;
  name: string;
  passwordHash?: string;
  dni: string;
  firstName: string;
  lastName1: string;
  lastName2: string;
  email: string;
  telephone: string;
  viewTelephone?: boolean;
  address?: string;
  biography?: string;
  literaryHobby?: string[];
  roles?: string[];
  hasPhoto?: boolean;
  actions?: Action;
  penalties?: Fine;
}
