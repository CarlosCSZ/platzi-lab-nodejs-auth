import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { deleteItem } from '../../controller/user';
import authMiddleware from '../../middlewares/session';

export const deleteUser = Router();

deleteUser.delete('/', authMiddleware, deleteItem
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Eliminar el usuario actual según la sesión del token JWT
);
