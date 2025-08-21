import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { UsersService } from "src/user/users.service";

@Injectable()
export class AuthService {
  constructor(@Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) {}

  isAuthenticated: boolean = false;


  login(email: string, password: string) {
    const user = this.userService.users.find(
      (user) => user.email === email && user.password === password
    );
    if(user){
        this.isAuthenticated = true;
        return 'mytoken'
    }
    else return 'invalid credentials'
  }
}
