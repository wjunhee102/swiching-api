import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WorkModule } from './work/work.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { UserSchema } from './auth/entitys/user/user.shema';

@Module({
  imports: [
    AuthModule, 
    WorkModule,  
    UserModule, 
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ghkdwnsgml1',
      database: 'test',
      entities: [UserSchema],
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
