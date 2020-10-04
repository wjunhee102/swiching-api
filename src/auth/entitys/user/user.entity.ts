/**
 * work list type
 */
export class work {
  workID: string;
  orgName: string;
  workTitle: string;
}

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
  userAuth: UserAuth;
  workList: [work];
  orgList: [org];
}

/**
 * user 인증 type
 */
export class UserAuth {
  userID: string;
  userEmail: string;
  userName: string;
  userPassword: string;
  joined: string;
}
