import { Router } from 'express';
import { deleteUser } from './delete-profile';
import { viewUser } from './view-profile';
import { updateUser } from './update-profile';

export const profile = Router();

profile.use('/', viewUser);
profile.use('/', deleteUser);
profile.use('/', updateUser);

