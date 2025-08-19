import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // an instance of the Nest application is created using the AppModule as the root module.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //will ignore any properties that are not defined in the DTO
    forbidNonWhitelisted: true, //will throw an error if any properties are not defined in the DTO
    transform: true, //will transform the payload to the DTO type, this will make sure that data types of the paylaod are same as defined in the dto
  }));

  await app.listen(process.env.PORT ?? 3000);
  // console.log(app);
}
bootstrap();
