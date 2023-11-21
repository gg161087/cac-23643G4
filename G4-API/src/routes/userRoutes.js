import { Router } from 'express';

import { getAllUsers, getUserById, createNewUser, login, deleteUserById, updateUserById } from '../controllers/userController.js';
import { validatorCreateUser } from '../utils/usersValidator.js';

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", validatorCreateUser, createNewUser);
userRouter.post("/login", login);
userRouter.patch("/:id", updateUserById);
userRouter.delete("/:id", deleteUserById);