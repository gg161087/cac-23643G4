import { pool } from './../database/db.js';

export const getProducts = async () => {
    const query = "SELECT * FROM products";
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const getProduct = async (id) => {
    const query = `SELECT * FROM products WHERE id = ${id} LIMIT 1`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const createProduct = async (user) => {
    const query = `INSERT INTO products SET ?`;
    try {
        return await pool.query(query, user);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const updateProduct = async (id, user) => {
    const query = `UPDATE product SET ? WHERE id = ${id}`;
    try {
        return await pool.query(query, user);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};

export const deleteProduct = async (id) => {
    const query = `DELETE FROM product WHERE id = ${id}`;
    try {
        return await pool.query(query);
    } catch (error) {
        error.message = error.code;
        return error;
    }
};