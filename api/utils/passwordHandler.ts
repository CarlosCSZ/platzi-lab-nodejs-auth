import {hash, compare} from "bcryptjs";

const encrypt = async (password: string) => {
  const encrypted = await hash(password, 10);
  return encrypted
};

const verify = async (password: string, encryptedPass: string) => {
  const comparison = await compare(password, encryptedPass);
  return comparison
};

export {encrypt, verify};
