import { Injectable } from '@nestjs/common';
import { User } from '../entitys/user/user.entity';

@Injectable()
export class LoginService {
  private users: User[] = [];

  getId(id: string): User {
    const user = this.users.find(user => user.id === id);
    return user;
  }
}
