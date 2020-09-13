import { User } from './user.entity';

export class CurrentUser extends User {
  iat: number;
  exp: number;
}
