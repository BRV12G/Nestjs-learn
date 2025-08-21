import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TweetModule, AuthModule], // can import the other user-defined modules here.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} //exporting the module so that it can be used in the main.ts file
