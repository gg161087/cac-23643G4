import { pool } from './../database/db.js';

export const getCategories = async () => {
    const query = "SELECT * FROM categories";
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const getCategory = async (id) => {
    const query = `SELECT * FROM categories WHERE id = ${id} LIMIT 1`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const createCategory = async (user) => {
    const query = `INSERT INTO categories SET ?`;
    try {
        return await pool.query(query, user);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const updateCategory = async (id, user) => {
    const query = `UPDATE categories SET ? WHERE id = ${id}`;
    try {
        return await pool.query(query, user);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const deleteCategory = async (id) => {
    const query = `DELETE FROM categories WHERE id = ${id}`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};