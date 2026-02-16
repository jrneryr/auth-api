import { Body, Controller, Post } from '@nestjs/common';
import type { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body()
    body: SignUpDTO,
  ) {
    const result = await this.authService.signup(body);

    return result;
  }

  @Post('signin')
  async signin(
    @Body()
    body: SignInDTO,
  ) {
    const result = await this.authService.signin(body);

    return result;
  }
}
