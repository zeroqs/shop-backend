import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './userModel/user.model'
import { UserService } from './user.service'

@Module({
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
