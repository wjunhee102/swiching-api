import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/entitys/user/user.entity';
// import { WorkInfo } from './entitys/work.entity';

import dataBase from '../data/dummyDB';
// import { WorkInfo } from './entitys/work.entity';

// type RESULT = | 'sucess' | 'error';

@Injectable()
export class WorkService {
  private UserListAll: User[] = [];

  // private modifyUserList(userInfo: User):boolean {
  //   const newUserListAll = dataBase.user.filter(user => user.userAuth.info.id !== userInfo.userAuth.info.id);
  //   dataBase.user = newUserListAll;
  //   dataBase.user.push(userInfo);
  //   return dataBase.user !== newUserListAll.length
  // }

  constructor() {}

  // getTestJsonFile():any{
  //   return dataBase("sdda");
  // }
  // postUserWorkListSimple(userId: string):WorkInfo[] {
  //   return dataBase.user.filter(user => user.userAuth.info.id === userId)[0].workList;
  // }

  // postUserWorkList(userId: string):WorkInfo[] {
  //   return dataBase.user.filter(user => user.userAuth.info.id === userId)[0].workList;
  // }

  // deleteUserWorkList(userId, workId: string) {
  //   const userWorkInfo = dataBase.user.filter(user => user.userAuth.info.id === userId)[0]
  //   userWorkInfo.workList.filter;
  // }

  // postAddUserWorkList(userId: string, workInfo: WorkInfo):RESULT {
  //   const userWorkInfo = dataBase.user.filter(user => user.userAuth.info.id === userId)[0]
  //   userWorkInfo.workList.push(workInfo);

  //   if(this.modifyUserList(userWorkInfo)) {
  //     return 'sucess';
  //   } 
  //   return 'error';
  // }
}
