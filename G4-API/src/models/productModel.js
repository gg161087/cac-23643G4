import { db } from './../database/dbConfig.js';
import { DataTypes } from 'sequelize';

import { categoryModel } from './categoryModel.js';

export const productModel = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    brand: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dues: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
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

export const productSpecificationsModel = db.define('product_specifications', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    value: {
        type: DataTypes.STRING(255),
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

export const productImgsurlsModel = db.define('product_imgsurls', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    img_url: {
        type: DataTypes.STRING(255),
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

productModel.hasMany(productSpecificationsModel, { foreignKey: 'product_id' });
productSpecificationsModel.belongsTo(productModel, { foreignKey: 'product_id' });
productModel.hasMany(productImgsurlsModel, { foreignKey: 'product_id' });
productImgsurlsModel.belongsTo(productModel, { foreignKey: 'product_id' });

productModel.belongsTo(categoryModel, { foreignKey: 'category_id' });