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
  viewTelephone: boolean;
  address?: string;
  biography?: string;
  avatar?: string;
  literaryHobby?: string[];
  roles?: string[];
}
