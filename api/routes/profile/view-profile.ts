import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { userModel } from '../../models/user';

export const viewUser = Router();

viewUser.get(
  '/',
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Ver información del usuario actual según la sesión del token JWT
  async (request, response) => {
    const users = await userModel.find({});
    return response.status(200).send({
      users
    });
  }
);
