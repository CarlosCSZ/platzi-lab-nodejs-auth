import { Router } from 'express';
import { login } from '../controller/auth';
// import { body, validationResult } from 'express-validator';

export const logIn = Router();

logIn.post('/', login
  // Validación y sanitización de los datos de entrada
  // body('username').not().isEmpty().trim(),
  // body('password').isLength({ min: 6 }),

  //
);
