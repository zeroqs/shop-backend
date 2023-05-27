import { ApiProperty } from '@nestjs/swagger'

export class signInDto {

  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  readonly email: string

  @ApiProperty({ example: '123456', description: 'Пароль' })
  readonly password: string

  @ApiProperty({ example: 'alex', description: 'Имя пользователя' })
  readonly username: string
}