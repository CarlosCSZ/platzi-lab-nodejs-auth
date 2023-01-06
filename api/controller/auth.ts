import { Request, Response } from 'express';
import { createUser ,loginUser } from '../services/auth';
import { httpError } from '../utils/errorHandler';


const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await createUser({ username, password });

    res.send({ user });
  } catch (error) {
    console.error(`[signIn]: ${error}`);
    httpError(res, `${error}`, 401);
  }
};

const login = async (req:Request, res:Response) => {
  try {
    const { username, password } = req.body;

    const data = await loginUser({ username, password });

    res.send({ data })
  } catch (error) {
    console.error(`[signIn]: ${error}`);
    httpError(res, `${error}`, 403);
  }
};

export { register, login }
