import { UserInfo } from "./user.entity";


export class Org {
  orgID: string;
  orgName: string;
  memberList: UserInfo[];
}