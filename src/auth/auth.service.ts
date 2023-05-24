import { ConflictException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { encodePassword, isPasswordCorrect } from '../bcrypt/bcrypt'
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/userModel/user.model'
import { InjectModel } from '@nestjs/sequelize'
import { signInDto } from './dto/signInDto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @InjectModel(User) private userModel: typeof User
  ) {}


  async logIn(username: string, pass: string)  {
    const user = await this.usersService.findOneByUsername(username);

    if (!user || !isPasswordCorrect(pass,user.password)  ) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.id};

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signIn(dto : signInDto) {
    const password = encodePassword(dto.password)
    try {
      return await this.userModel.create( {...dto,password})
    } catch (e) {
      throw new ConflictException({statusCode : HttpStatus.CONFLICT, error: 'Conflict error'})
    }
  }
}
