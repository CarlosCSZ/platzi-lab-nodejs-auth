import { Request, Response } from 'express';
import { deleteUser, updateUser, viewUsers } from '../services/user';
import { httpError } from '../utils/errorHandler';

const getItems = async ( req:Request, res: Response ) => {
  try{
    const users = await viewUsers();

    res.status(201).send({ users });
  }catch(error){
    console.error(`[view]: ${error}`);
    httpError(res, 'UNEXPECTED_ERROR_VIEWING_USERS', 401);
  }
};

const updateItem = async ( req:Request, res: Response ) => {
  try{
    const { username} = req.body;
    const { whom } = req.params;
    const user = <string>req.headers.host;
    const update = await updateUser(username, user, whom);

    res.status(200).send(update);
  }catch(error){
    console.error(`[update]: ${error}`);
    httpError(res, 'ERROR_UPDATING_USER', 401);
  }
};

const deleteItem = async ( req:Request, res: Response ) => {
  try{
    const { whom } = req.params;
    const user = <string>req.headers.host;
    const depleting = await deleteUser(user, whom);

    res.status(200).send({ depleting });
  }catch(error){
    console.error(`[deleting]: ${error}`);
    httpError(res, 'ERROR_DELETING_USER', 401);
  }
};

export { getItems, updateItem, deleteItem }
