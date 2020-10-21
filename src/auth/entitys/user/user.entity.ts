// import { WorkInfo } from "src/work/entitys/work.entity";

import { Column, Entity, PrimaryColumn } from "typeorm";

// /**
//  * org list type
//  */
// export class org {
//   orgID: string;
//   orgName: string;
// }

// /**
//  * user 정보 type
//  */
// export class UserWorkInfo {
//   workList: WorkInfo[];
//   orgList: org[];
// }

// /**
//  * user 인증 type
//  */
// export class UserAuthInfo {
//   password: string;
//   joined: string;
// }

// export class UserInfo {
//   id: string;
//   email: string;
//   name: string;
// }


// export type User = UserInfo & UserAuthInfo;
// /**
//  * 
//  */

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @Column()
  joinedDate: Date;

  @Column()
  updatedDate: Date;
  
  @Column()
  groupListId: string;

  @Column()
  isActive: boolean;
}
