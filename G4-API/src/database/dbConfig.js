import { Sequelize } from 'sequelize';

export const db = new Sequelize('cac-23643g4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})