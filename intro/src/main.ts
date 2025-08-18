import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // an instance of the Nest application is created using the AppModule as the root module.
  await app.listen(process.env.PORT ?? 3000);
  // console.log(app);
}
bootstrap();
