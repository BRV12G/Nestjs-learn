import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/user/user.module';

//http://localhost:3000/tweet
@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UserModule],
})
export class TweetModule {}
