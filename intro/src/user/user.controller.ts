import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe
} from "@nestjs/common";
import { UsersService } from "./users.service";

// GET -- http://localhost:3000/users
@Controller("users")
export class UsersController {
  @Get()
  getUsers(
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe ) limit: number,
    @Query() query: any,
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
  ) {
    const displayUsers = new UsersService();
    if (query.gender) {
      return {
        message: "Users fetched successfully according to query params",
        users: displayUsers
          .getAllUsers()
          .filter((user) => user.gender === query.gender),
      };
    }
    // console.log(query);
    console.log(limit, page);
    return {
      message: "Users fetched successfully",
      users: displayUsers.getAllUsers(),
    };
  }

  //POST -- http://localhost:3000/users
  @Post()
  createUser() {
    const user = {
      id: 5,
      name: "Johny",
      email: "johny@gmail.com",
      gender: "Male",
      isMarried: false,
    };
    const newUser = new UsersService();
    newUser.createUser(user);
    return { message: "User created", user };
  }

  @Get(":id")
  getUserByID(@Param("id", ParseIntPipe) id: number) {
    const user = new UsersService();
    // user.getUserById(+id);
    console.log(typeof id, id);
    return { message: "User fetched successfully", user: user.getUserById(id) };
  }
}
