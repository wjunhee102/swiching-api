import { Body, Controller, Get, Post } from '@nestjs/common';
import { work } from 'src/auth/entitys/user/user.entity';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {

  constructor(private readonly workService: WorkService) {}

  @Get()
  getWorkListInfo() {
    return "worklist test"
  }

  @Post()
  postWorkListInfo(@Body() userId: string) {
    return "aaa"
  }
  
}
