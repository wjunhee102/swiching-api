import { EntitySchema } from "typeorm";
import { User } from "./user.entity";


export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: String,
      primary: true,
      generated: true
    },
    email: {
      type: String,
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  }
})