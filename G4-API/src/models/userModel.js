import { pool } from '../database/db.js';

export const getUsers = async () => {
    const query = "SELECT * FROM users";
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const getUser = async (id) => {
    const query = `SELECT * FROM users WHERE id = ${id} LIMIT 1`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const createUser = async (user) => {
    const query = `INSERT INTO users SET ?`;
    try {
        return await pool.query(query, user);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const loginUser = async (email) => {
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const updateUser = async (id, user) => {
    const query = `UPDATE users1 SET ? WHERE id = ${id}`;
    try {
        return await pool.query(query, user);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const deleteUser = async (id) => {
    const query = `DELETE FROM users WHERE id = ${id}`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};