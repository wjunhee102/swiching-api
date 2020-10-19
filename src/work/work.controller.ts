import { Body, Controller, Get, Post } from '@nestjs/common';
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

  // @Get("test")
  // getTest() {
  //   return this.workService.getTestJsonFile();
  // }
  
}
