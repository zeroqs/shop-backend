import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import * as process from 'process'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../user/userModel/user.model'

@Module({
  imports: [UserModule,
    JwtModule.register({
    global: true,
    secret: String(process.env.JWT_ACCESS_SECRET),
    signOptions: { expiresIn: '1h' },
  }),
    SequelizeModule.forFeature([User])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
