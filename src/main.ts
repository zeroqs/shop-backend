import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'process'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api')
  await app.listen(process.env.MAIN_PORT)
}

bootstrap()
