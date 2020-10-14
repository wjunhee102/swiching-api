import { UserInfo } from "src/auth/entitys/user/user.entity";

/**
 * work info type
 */
export class WorkInfo {
  workID: string;
  orgName: string;
  workTitle: string;
  content: string;
  date: Date;
  member: UserInfo[];
  author: UserInfo;
}

// export class WorkList {

// }