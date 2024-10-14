import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, UserService } from './app.service';
import { User } from 'src/types/models/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(this.appService.getHello());
    return this.appService.getHello();
  }

  @Post()
  postHello(): any {
    return this.appService.postHello();
  }
}

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): any {
    return this.userService.getUser();
  }

  @Post()
  postHello(@Body() newUser: User): User {
    return this.userService.postUser(newUser);
  }
}
