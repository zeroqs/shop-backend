import { ConflictException, HttpStatus, Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { encodePassword } from '../bcrypt/bcrypt'
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/userModel/user.model'
import { InjectModel } from '@nestjs/sequelize'
import { signInDto } from './dto/signInDto'
import { logInDto } from './dto/logIn'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @InjectModel(User) private userModel: typeof User,
  ) {
  }


  async login(dto: logInDto) {
    const payload = { username: dto.username, sub: dto.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async signIn(dto: signInDto) {
    const password = encodePassword(dto.password)
    try {
      return await this.userModel.create({ ...dto, password })
    } catch (e) {
      throw new ConflictException({ statusCode: HttpStatus.CONFLICT, error: 'Conflict error' })
    }
  }
}
