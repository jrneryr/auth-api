import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';

import type { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

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
    return await this.authService.signin(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  me(
    @Request()
    request,
  ) {
    return request.user;
  }
}
