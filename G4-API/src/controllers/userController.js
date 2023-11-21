import { getUsers, getUser, createUser, loginUser, deleteUser, updateUser } from '../models/userModel.js';
import { notNumber } from '../utils/notNumber.js';
import { hashPassword, checkPassword } from '../utils/handlePassword.js';

export const getAllUsers = async (req, res, next) => {
    const dbResponse = await getUsers();
    dbResponse instanceof Error
        ? next(dbResponse)
        : res.status(200).json(dbResponse);
};

export const getUserById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await getUser(Number(req.params.id));
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next();
};

export const updateUserById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await updateUser(req.params.id, req.body);
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(200).json(req.body) : next();
};

export const createNewUser = async (req, res, next) => {
    const password = await hashPassword(req.body.password);
    const dbResponse = await createUser({ ...req.body, password });
    dbResponse instanceof Error
        ? next(dbResponse)
        : res.status(201).json(`User ${req.body.name} created!`);
};

export const login = async (req, res, next) => {
    const dbResponse = await loginUser(req.body.email);
    if (!dbResponse.length) return next();
    if (await checkPassword(req.body.password, dbResponse[0].password)) {
        res.status(200).json({ message: "Ok" });
    } else {
        let error = new Error();
        error.status = 401;
        error.message = "Unauthorized";
        next(error);
    }
};

export const deleteUserById = async (req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const dbResponse = await deleteUser(req.params.id);
    console.log(dbResponse);
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(204).end() : next();
};