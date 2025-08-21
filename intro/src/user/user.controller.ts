import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Body,
  Patch,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

// GET -- http://localhost:3000/users
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  // getUsers(
  //   @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
  //   @Query() query: any,
  //   @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
  // ) {
  //   let displayUsers = this.usersService.getAllUsers();
  //   if (query.gender) {
  //     displayUsers = displayUsers.filter(
  //       (user) => user.gender === query.gender
  //     );
  //     return {
  //       message: "Users fetched successfully according to query params",
  //       displayUsers,
  //     };
  // //   }
  //   // console.log(query);
  //   console.log(limit, page);
  //   return {
  //     message: "Users fetched successfully",
  //     displayUsers,
  //   };
  // }

  //POST -- http://localhost:3000/users
  // @Post()
  // createUser() {
  //   const user = {
  //     id: 5,
  //     name: "Johny",
  //     email: "johny@gmail.com",
  //     gender: "Male",
  //     isMarried: false,
  //   };
  //   const newUser = new UsersService();
  //   newUser.createUser(user);
  //   return { message: "User created", user };
  // }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    const newUser = this.usersService.createUser(user);
    return { message: "User created", newUser };
    // console.log(user);
    // return { message: "User created", user };
  }

  @Get(":id")
  getUserByID(@Param("id", ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    // user.getUserById(+id);
    console.log(typeof id, id);
    return { message: "User fetched successfully", user };
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
    return { message: "User updated", user };
  }
}
