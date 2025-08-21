import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
@Injectable()
export class UsersService{
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService){}

    users: {id: number; name: string; email: string, gender: string, isMarried: boolean, password: string } [] = [
        {id : 1, name: 'John', email: 'john@gmail.com', gender: 'Male', isMarried: false, password: 'password'},
        {id : 2, name: 'Jane Doe', email: 'jane@gmail.com', gender: 'Female', isMarried: true, password: 'password' },
        {id : 3, name: 'Alex', email: 'alex@gmail.com', gender: 'Male', isMarried: false, password: 'password' },
        {id : 4, name: 'Emily', email: 'emily@gmail.com', gender: 'Female', isMarried: true, password: 'password' }
    ]
    getAllUsers(){
        if(this.authService.isAuthenticated === true){
            return this.users;
        }
        return "you are not authenticated"

    }

    getUserById(id: number){
        return this.users.find(user => user.id === id);
    }

    createUser(user: {id: number; name: string; email: string;  gender: string; isMarried: boolean, password: string }){
        this.users.push(user);
    }
}
