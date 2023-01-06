import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = <string>process.env.JWT_SECRET;

const tokenSign = async (id: string) => {
  const jwt = sign(
    {
      id,
    },
    JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );
  return jwt
};

const verifyToken = async (tokenJWT: string) => {
  try{
    return verify(tokenJWT, JWT_SECRET);
  }catch (e) {
    return null
  }
};

export { tokenSign, verifyToken }
