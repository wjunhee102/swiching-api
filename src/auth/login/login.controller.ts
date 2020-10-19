import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { User } from '../entitys/user/user.entity';
import { LoginService } from './login.service';

@Controller('user')
export class LoginController {

  constructor(private readonly loginService: LoginService) {}


  @Get()
  getUserAllInfo():Promise<User[]> {
    return this.loginService.findAll();
  }

  @Get(":id")
  getUserInfo(@Param("id") userId: string):Promise<User> {
    return this.loginService.findOne(userId);
  }
  // @Get()
  // getUserAllInfo():User[] {
  //   return this.loginService.getUserInfoAll();
  // }
  
  // @Get(':id')
  // getId(@Param("id") userId: string): User {
  //   return this.loginService.getId(userId);
  // } 

  // @Post('add')
  // postUserAdd(@Body() userInfo):string {
  //   return this.loginService.createUserInfo(userInfo);
  // }

}
