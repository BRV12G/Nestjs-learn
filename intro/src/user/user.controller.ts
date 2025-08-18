import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

// GET -- http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const displayUsers = new UsersService();
    return { message: 'Users fetched successfully', users: displayUsers.getAllUsers()}
  }

  //POST -- http://localhost:3000/users
  @Post()
  createUser() {
    const user = {id: 5, name: 'Johny', age: 30, gender: 'Male', isMarried: false };
    const newUser = new UsersService();
    newUser.createUser(user);
    return {message: 'User created', user};
  }
}
