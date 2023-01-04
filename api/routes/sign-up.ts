import { Router } from "express";
import { register } from "../controller/auth";
// import { body, check, validationResult } from 'express-validator';


export const signUp = Router();

signUp.post('/', register
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
);
