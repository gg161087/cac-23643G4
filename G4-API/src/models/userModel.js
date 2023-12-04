import { db } from './../database/dbConfig.js';
import { DataTypes } from 'sequelize';

export const userModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telephone: {
        type: DataTypes.INTEGER(12),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
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
export const roleModel = db.define('roles', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

export const userRolesModel = db.define('user_roles', {
    user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    role_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
            model: 'roles',
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
});

userRolesModel.hasMany(roleModel, { foreignKey: 'roles_id' });
roleModel.belongsTo(userRolesModel, { foreignKey: 'roles_id' });

userRolesModel.hasMany(userModel, { foreignKey: 'user_id' });
userModel.belongsTo(userRolesModel, { foreignKey: 'user_id' });