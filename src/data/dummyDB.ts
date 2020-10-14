import { User, UserAuthInfo, UserInfo } from'../auth/entitys/user/user.entity';
import { WorkInfo } from '../work/entitys/work.entity';

class DataProps {
  userList: User[];
  workList: WorkInfo[];
}

let data:DataProps = {
  userList: [],
  workList: []
};


export const workDB: WorkInfo[] = []; 
export const userInfoDB: UserInfo[] = [];


export default function userWorkInfoDB(userId: string): WorkInfo[] {
  return workDB.filter(work => work.author.id === userId);
}
