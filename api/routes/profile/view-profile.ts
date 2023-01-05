import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { getItems } from '../../controller/user';
import authMiddleware from '../../middlewares/session';

export const viewUser = Router();

viewUser.get('/', authMiddleware, getItems
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Ver información del usuario actual según la sesión del token JWT
);
