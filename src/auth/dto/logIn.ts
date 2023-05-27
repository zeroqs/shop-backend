import { ApiProperty } from '@nestjs/swagger'

export class logInDto {

  @ApiProperty({ example: '12345', description: 'Пароль' })
  readonly password: string

  @ApiProperty({ example: 'alex', description: 'Имя пользователя' })
  readonly username: string
}