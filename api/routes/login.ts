import { Router, Request, Response } from 'express';
// import { body, validationResult } from 'express-validator';
import { userModel } from '../models/user';
import { loginUser } from '../services/user';
import { httpError } from '../utils/errorHandler';

export const login = Router();

login.post('/',
  // Validación y sanitización de los datos de entrada
  // body('username').not().isEmpty().trim(),
  // body('password').isLength({ min: 6 }),

  //
  async (req:Request, res:Response) => {
    try {
      // const errors = validationResult(request);
      // if (!errors.isEmpty()) {
      //   return response.status(400).json({ errors: errors.array() });
      // }

      const { username, password } = req.body;

      const data = await loginUser({ username, password });

      // if (!user) {
      //   return res.status(400).json({
      //     error: 'username or password is incorrect',
      //   });
      // }

      // const isPasswordValid = password === user.password;
      // if (!isPasswordValid) {
      //   return res.status(403).json({
      //     error: 'username or password is incorrect',
      //   });
      // }

      // @todo: generate a JWT token
      // const token = 'jwt-token';

      // return res.status(201).json({ token, username: user.username });
      res.send({ data })
    } catch (error) {
      console.error(`[signIn]: ${error}`);
      httpError(res, 'AN UNEXPECTED ERROR HAPPENED. PLEASE TRY AGAIN', 403);
    }
  }
);
