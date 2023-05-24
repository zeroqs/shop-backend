import { Injectable } from '@nestjs/common'
import { User } from './userModel/user.model'
import { InjectModel } from '@nestjs/sequelize'


@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}



  async getAll() : Promise<User[]>  {
    return await this.userModel.findAll()
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async deleteById(id:string) {
    return await this.userModel.destroy({
      where : {
        id,
      }
    })
  }
}
