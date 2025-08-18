import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';

//http://localhost:3000/tweet
@Module({
  controllers: [TweetController],
})
export class TweetModule {}
