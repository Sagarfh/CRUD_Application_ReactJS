import express from 'express';
import { getUser, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';

const route = express.Router();


route.get('/', getUser);
route.post('/add', addUser);
route.get('/:id', getUserById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);

export default route;