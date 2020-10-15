import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [AuthModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
