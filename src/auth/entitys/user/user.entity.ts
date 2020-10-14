import { WorkInfo } from "src/work/entitys/work.entity";

/**
 * org list type
 */
export class org {
  orgID: string;
  orgName: string;
}

/**
 * user 정보 type
 */
export class User {
  userAuth: UserAuthInfo;
  workList: WorkInfo[];
  orgList: org[];
}

/**
 * user 인증 type
 */
export class UserAuthInfo {
  id: string;
  email: string;
  name: string;
  password: string;
  joined: string;
}

/**
 * 
 */
export class UserInfo {
  id: string;
  email: string;
  name: string;
}
