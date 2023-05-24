import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import * as process from 'process'
import { User } from './user/userModel/user.model'
import { PostModule } from './post/post.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
    }),
    UserModule,
    PostModule,
    AuthModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
