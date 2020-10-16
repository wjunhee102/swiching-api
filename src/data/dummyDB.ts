import { UserAuthInfo, UserInfo } from'../auth/entitys/user/user.entity';
import { WorkInfo } from '../work/entitys/work.entity';
/**
 * TEST user info database
 */
import { userList } from './userDB.json';
import { writeFile } from 'fs';

/**
 * user info entity
 */
type userEntity = UserInfo & UserAuthInfo & {
  groupList: group[];
}

type group = {
  id: string;
  groupName: string;
}

// class DataProps {
//   userList: User[];
//   workList: WorkInfo[];
// }

// let data:DataProps = {
//   userList: [],
//   workList: []
// };

export const workDB: WorkInfo[] = []; 
export const userInfoDB: UserInfo[] = [];

/**
 * 유저 work list
 * @param userId 
 */

let userData = userList;

function userWorkInfoDB(userId: string) {
  userData.push({
    id: "a122",
    email: "test@test.test",
    name: "TEST",
    password: "12345",
    joined: "2020-10-14T09:50:13.421Z",
    groupList: [
      {
        id: "sadasd",
        groupName: "TESTG"
      }
    ]
  });

  userData = userData.filter(user => user.id !== "a123");

  updateUserDataBase(userData);

  console.log("2:", userData);
  return userData;
}

/**
 * TEST: user database update method 
 * @param newUserData 
 */
function updateUserDataBase(newUserData:userEntity[]) {
  writeFile('./src/data/userDB.json',JSON.stringify({"userList":[...newUserData]}, null, 2), function (err) {
    if (err) {
        console.log('에러발생');
        console.dir(err);
        return;
    }
    console.log('파일쓰기완료'); 
   });
}


export default userWorkInfoDB
