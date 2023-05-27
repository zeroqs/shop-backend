import { Column, Model, Table } from 'sequelize-typescript'
import { IUserCreate } from './iUserCreate'
import { emailUserColumn, idUserColumn, passwordColumn, usernameUserColumn } from './userColumn'
import { ApiProperty } from '@nestjs/swagger'

@Table
export class User extends Model<User, IUserCreate> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column(idUserColumn)
  id: string

  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @Column(emailUserColumn)
  email: string

  @ApiProperty({ example: '123456', description: 'Пароль' })
  @Column(passwordColumn)
  password: string

  @ApiProperty({ example: 'alex', description: 'Имя пользователя' })
  @Column(usernameUserColumn)
  username: string
}
