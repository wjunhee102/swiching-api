import { EntitySchema } from "typeorm";
import { User } from "../entitys/user.entity";


export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: String,
      primary: true,
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    fullName: {
      type: String
    },
    createdDate: {
      type: Date
    },
    updatedDate: {
      type: Date
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }
})