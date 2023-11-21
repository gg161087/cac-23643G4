import mysql from 'mysql2';
import util from 'util';

import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from './../../config.js';

export const pool = mysql.createPool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
});

pool.getConnection((err) => {
    err
        ? console.warn("No conectado", { error: err.message })
        : console.log("Conexión con B.D. establecida...");
});

pool.query = util.promisify(pool.query);