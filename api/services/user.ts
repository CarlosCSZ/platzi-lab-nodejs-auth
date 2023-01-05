import { User } from "../interfaces/user";
import { userModel } from "../models/user";

const viewUsers = async () => {
  const user = await userModel.find({});
  user.map( (user) => {
    return user.password = '******';
  });
  return user
};

const updateUser = async ({ username, password }: User) => {

};

const deleteUser = async ({ username, password }: User) => {

};

export { viewUsers, updateUser, deleteUser }
