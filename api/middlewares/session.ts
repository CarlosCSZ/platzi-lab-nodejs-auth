import { verifyToken } from "../utils/jwtHandler";
import { userModel } from "../models/user";
import { NextFunction, Request, Response } from "express";
import { httpError } from "../utils/errorHandler";
import { check } from "express-validator";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
      httpError(res, 'Por favor, inicie sesión', 401);
      return
    };

    const checkToken = await verifyToken(token);
    if (!checkToken){
      httpError(res, 'Error del ID del token', 401);
      return
    };
    // const user = await userModel.findOne({token});
    next()
  }catch(error){
    console.error(`[Session]: ${ error }`)
    httpError(res, 'UNEXPECTEED_ERROR_TOKEN', 401);
  }
}

export default authMiddleware
