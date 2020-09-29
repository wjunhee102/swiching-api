import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../entitys/user/user.entity';
import { LoginService } from './login.service';

@Controller('user')
export class LoginController {

  constructor(private readonly loginService: LoginService) {}

  @Get(':id')
  getId(@Param("id") userId: string): User {
    return this.loginService.getId(userId);
  } 

}
