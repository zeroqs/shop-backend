import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { signInDto } from './dto/signInDto'
import { LocalAuthGuard } from './local-auth.guard'


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signin')
  create(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto)
  }
}
