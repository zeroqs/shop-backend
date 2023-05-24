import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('user')
export class UserController {
  constructor(private UserService:UserService) {}


  @Get()
  getAll() {
    return this.UserService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.UserService.findOneById(id);
  }


  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.UserService.deleteById(id);
  }
}
