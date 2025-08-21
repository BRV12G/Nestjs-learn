import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';


@Controller('tweet')
export class TweetController {

    constructor(private tweetService: TweetService){}

    //http://localhost:3000/tweet/userid
    @Get(":userid")
        public getTweets(@Param('userid', ParseIntPipe) userid: number){ //since we'll be getting the userid as a string we'll convert it to a number type.
            const tweets = this.tweetService.getTweets(userid);
            return {
                message: `Tweets for  user ${userid} fetched successfully`,
                tweets,
            }

    }

}
