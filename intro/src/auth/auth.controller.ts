import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService){}

    @Get()
    login(email: string, password: string){
        this.authService.login(email, password);
        return this.authService.login(email, password);
    }

    @Post()
    login2(@Body() user: {email: string, password: string}){
        console.log(user);
        return this.authService.login(user.email, user.password);
    }

}
