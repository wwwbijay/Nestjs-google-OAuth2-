import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  constructor() { }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'Ok' };
  }
}
