import { UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);

    if (user.password !== password) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
