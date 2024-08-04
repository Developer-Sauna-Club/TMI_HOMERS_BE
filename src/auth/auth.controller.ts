import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { SignInDTO } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: SignUpDTO) {
    const { email, nickname, password } = body;
    console.log(body);

    await this.authService.signUp(body);
    return 'Sign up';
  }

  @Post('signin')
  signIn(@Body() body: SignInDTO) {
    const { email, password } = body;
    console.log(body);

    return 'Sign in';
  }

  @Get('check')
  check() {
    return 'Check';
  }
}
