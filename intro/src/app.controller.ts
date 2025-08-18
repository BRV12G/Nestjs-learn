import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // instance of the AppService class is injected into the AppController

  @Get()
  getHello(): string {
    return this.appService.getHello(); //on the instance of the AppService class, the getHello() method is called.
  }
}
