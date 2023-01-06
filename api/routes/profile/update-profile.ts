import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { updateItem } from '../../controller/user';
import authMiddleware from '../../middlewares/session';

export const updateUser = Router();

updateUser.put('/:whom', authMiddleware, updateItem
  //whom refers to user´s id
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Actualizar información usuario según la sesión del token JWT
);
