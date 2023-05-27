import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.UserService.getAll()
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.UserService.findOneById(id)
  }


  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.UserService.deleteById(id)
  }
}
