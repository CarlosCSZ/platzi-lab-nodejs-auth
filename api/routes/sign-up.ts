import { Router, Request, Response } from "express";
// import { body, check, validationResult } from 'express-validator';
import { createUser } from "../services/user";
import { httpError } from "../utils/errorHandler";

export const signUp = Router();

signUp.post('/',
  // Validación y sanitización de los datos de entrada
  // body('username').not().isEmpty().trim(),
  // check('username').custom(async (username) => {
  //   const maybeUser = await UserModel.findOne({ username });
  //   if (maybeUser) {
  //     throw new Error('username already in use');
  //   }

  //   return true;
  // }),
  // body('password').isLength({ min: 6 }),

  //
  async (req: Request, res: Response) => {
    try {
      // const errors = validationResult(request);
      // if (!errors.isEmpty()) {
      //   return response.status(400).json({ errors: errors.array() });
      // }

      const { username, password } = req.body;

      const user = await createUser({ username, password });

      // return response
      //   .status(201)
      //   .json({ username: user.username, createdAt: user.createdAt });
      res.send({ data:user });
    } catch (error) {
      console.error(`[signIn]: ${error}`);
      httpError(res, 'ERROR_SINGINUP');
    }
  }
);
