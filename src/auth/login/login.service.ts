import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserAuth } from '../entitys/user/user.entity';

let testUserAuth: UserAuth = {
  userID: "testID",
  userName: "TEST",
  userEmail: "www@naver.com",
  userPassword: "123123@",
  joined: "2020-10-01",
}

let testUserInfo: User = {
  userAuth: testUserAuth,
  workList: [
    {
      workID: "123aaa",
      orgName: "TESTOrg",
      workTitle: "인수인계 앱 만들기"
    }
  ],
  orgList: [
    {
      orgID: "123avc",
      orgName : "TESTOrg",
    }
  ] 
}

const defaultUserInfo: User = {
  userAuth: {
    userID: "",
    userName: "",
    userEmail: "",
    userPassword: "",
    joined: "",
  },
  workList: [
    {
      workID: "",
      orgName: "",
      workTitle: ""
    }
  ],
  orgList: [
    {
      orgID: "",
      orgName: ""
    }
  ]
}

@Injectable()
export class LoginService {
  private users: User[] = [];

  constructor() {
    /**
     * test data
     */
    this.users = [testUserInfo];
  }

  getUserInfoAll():User[] {
    return this.users;
  }

  getId(id: string): User {
    const user = this.users.find(user => user.userAuth.userID === id);
    return user;
  }

  createUserInfo(userInfo: UserAuth):string {
    const newUserInfo: User = Object.assign("", defaultUserInfo,{
      userAuth: userInfo
    })

    this.users.push(newUserInfo);

    if(!userInfo || !this.users.find(user => user.userAuth.userID === userInfo.userID)) {
      throw new NotFoundException('not add user');
    }
    
    return "sucess created user";
  }
}
