import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../entitys/user/user.shema';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
