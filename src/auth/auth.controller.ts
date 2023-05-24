import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { signInDto } from './dto/signInDto'
import { logInDto } from './dto/logIn'



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: logInDto) {
    return this.authService.logIn(logInDto.username, logInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signin')
  create(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto);
  }
}
