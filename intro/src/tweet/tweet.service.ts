import { Injectable } from "@nestjs/common";
import { UsersService } from "src/user/users.service";

@Injectable()
export class TweetService {
    constructor(private readonly userService: UsersService){

    }
  tweets: { text: string; date: Date; userId: number }[] = [
    {
      text: "Hello World",
      date: new Date(),
      userId: 1 },
    {
      text: "Hello NestJS",
      date: new Date(),
      userId: 1,
    },
    {
      text: "Hello Angular",
      date: new Date(),
      userId: 2,
    },
    {
      text: "Hello React",
      date: new Date(),
      userId: 3,
    },
    {
      text: "Hello Vue",
      date: new Date(),
      userId: 4,
    },
  ];

  getTweets(userId: number) {
    // return this.tweets.filter((tweet) => tweet.userId === userId);
    const user = this.userService.getUserById(userId);
    if (!user) {
      return "User not found";
    }
    const tweets = this.tweets.filter((tweet) => tweet.userId === userId);
    const response = tweets.map(tweet => {return {text: tweet.text, date: tweet.date, userid:user.id, name: user.name }});
    return response;
  }
}
