import { Column, Model, Table } from 'sequelize-typescript'
import { IUserCreate } from './iUserCreate'
import {
  emailUserColumn,
  idUserColumn, passwordColumn, usernameUserColumn,
} from './userColumn'

@Table
export class User extends Model<User, IUserCreate> {
  @Column(idUserColumn)
  id: string

  @Column(emailUserColumn)
  email: string

  @Column(passwordColumn)
  password: string

  @Column(usernameUserColumn)
  username: string
}
