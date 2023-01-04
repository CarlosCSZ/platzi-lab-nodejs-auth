import { User } from "../interfaces/user";
import { userModel } from "../models/user";
import { tokenSign } from "../utils/jwtHandler";
import { encrypt, verify } from "../utils/passwordHandler";

const createUser = async ({ username, password }: User) => {
  const checkUser = await userModel.findOne({ username });
  if(checkUser){
    throw new Error('USERNAME ALREADY IN USE');
  };
  const encrypting = await encrypt(password);
  const data = {
    username,
    password: encrypting
  };
  const user = await userModel.create(data);
  const registration = {
    token: await tokenSign(user.username),
    username: user.username
  };
  return registration
};

const loginUser = async ({ username, password }: User) => {
  const user = await userModel.findOne({ username });
  if (!user) {
    throw new Error('USERNAME OR PASSWORD IS INCORRECT');
  };
  const isPasswordValid = await verify(password, user.password);
  if (!isPasswordValid) {
    throw new Error('USERNAME OR PASSWORD IS INCORRECT');
  };
  const login =  {
    token: await tokenSign(user.username),
    username: user.username
  };

  return login;
}

export { createUser, loginUser };
