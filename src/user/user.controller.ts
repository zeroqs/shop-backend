import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { User } from './userModel/user.model'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.UserService.getAll()
  }

  @ApiOperation({ summary: 'Получение пользователя по id' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.UserService.findOneById(id)
  }

  @ApiOperation({ summary: 'Удаление пользователя по id' })
  @ApiResponse({ status: 200, type: User })
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.UserService.deleteById(id)
  }
}
