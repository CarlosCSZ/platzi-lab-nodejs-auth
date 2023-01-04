import { Router } from 'express';
import { deleteUser } from './delete-profile';
import { viewUser } from './view-profile';
import { updateUser } from './update-profile';
import authMiddleware from '../../middlewares/session';

export const profile = Router();

profile.use('/', authMiddleware, viewUser);
profile.use('/', authMiddleware, deleteUser);
profile.use('/', authMiddleware, updateUser);

