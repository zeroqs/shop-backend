import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { isPasswordCorrect } from '../bcrypt/bcrypt'
import { User } from '../user/userModel/user.model'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService) {
    super()
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByUsername(username)

    if (!user || !isPasswordCorrect(password, user.password)) {
      throw new UnauthorizedException()
    }

    return user
  }
}