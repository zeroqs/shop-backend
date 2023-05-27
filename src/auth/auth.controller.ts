import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { signInDto } from './dto/signInDto'
import { LocalAuthGuard } from './local-auth.guard'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { User } from '../user/userModel/user.model'
import { logInDto } from './dto/logIn'


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @ApiOperation({ summary: 'Вход' })
  @ApiResponse({ status: 200 })
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() logInDto: logInDto) {
    return this.authService.login(logInDto)
  }


  @ApiOperation({ summary: 'Регистрация' })
  @ApiResponse({ status: 200, type: User })
  @HttpCode(HttpStatus.CREATED)
  @Post('signin')
  create(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto)
  }
}
