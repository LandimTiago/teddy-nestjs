import { DefaultResponses } from '@Infrastructure/decorators/default-responses.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @DefaultResponses({ summary: 'Login' })
  async signIn(
    @Body() { password, username }: { password: string; username: string },
  ) {
    return await this.authService.signIn(username, password);
  }
}
