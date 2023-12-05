import { db } from '../database/dbConfig.js';
import { DataTypes } from 'sequelize';

import { provinceModel } from './provinceModel.js';

export const branchOfficeModel = db.define('branch_offices', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    departments: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'provinces',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})
branchOfficeModel.belongsTo(provinceModel, { foreignKey: 'province_id' })