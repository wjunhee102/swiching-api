// import { UserInfo } from "./user.entity";

type UserInfo = any;

export class Org {
  orgID: string;
  orgName: string;
  memberList: UserInfo[];
}