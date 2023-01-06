import { User } from "../interfaces/user";
import { userModel } from "../models/user";

const viewUsers = async () => {
  const user = await userModel.find({});
  user.map( (user) => {
    return user.password = '******';
  });
  return user
};

const updateUser = async (username: User, user: string, whom:string) => {
  let data:(object)[] = [];
  if(user === whom){
    const user = await userModel.findOneAndUpdate({_id:whom}, {username});
    const userUpt = await userModel.findById(whom);
    data.push({user, userUpt});
  }else{
    throw new Error("USER_NOT_MATCHED")
  }
  return data
};

const deleteUser = async (user: string, whom:string) => {
  if(user === whom){
    const deleting = await userModel.deleteOne({_id:whom});
    console.log("checking", deleting);
    return deleting
  }else{
    throw new Error("USER_NOT_MATCHED")
  }
};

export { viewUsers, updateUser, deleteUser }
