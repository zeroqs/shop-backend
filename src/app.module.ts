import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModule } from './user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { User } from './user/userModel/user.model'
import { PostModule } from './post/post.module'
import { AuthModule } from './auth/auth.module'
import configurations from './configurations'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('postgresHost'),
        port: Number(configService.get('postgresHost')),
        username: configService.get('postgresUser'),
        password: configService.get('postgresPassword'),
        database: configService.get('postgresDB'),
        models: [User],
        synchronize: true,
        autoLoadModels: true,
      }),
    }),
    UserModule,
    PostModule,
    AuthModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {
}
