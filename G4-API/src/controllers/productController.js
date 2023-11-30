import { productModel, productSpecificationsModel } from './../models/productModel.js';
import { categoryModel } from './../models/categoryModel.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const response = await productModel.findAll({ 
            include: [
                { model: productSpecificationsModel },
                { model: categoryModel }      
            ]
        });
        if (!response) {
            res.status(404).json({
                success: false,
                results: null,
                message: 'bad request'
            })
        }
        const categories = await categoryModel.findAll();
        const categoriesMap = {};
        categories.forEach(category => {
            categoriesMap[category.id] = category.name;
        });
        
        const mappedProducts = response.map(product => ({
            ...product.toJSON(),
            category: categoriesMap[product.category_id]
        }));

        res.status(200).json({
            success: true,
            results: mappedProducts
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            results: null,
            message: `error: ${error}`
        })
    }
};

export const getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await productModel.findByPk(id);
        if (!response) {
            res.status(404).json({
                success: false,
                results: null,
                message: 'bad request'
            })
        }
        res.status(200).json({
            success: true,
            results: response
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            results: null,
            message: `error: ${error}`
        })
    }
};

export const createProduct = async (req, res, next) => {    
    
};

export const updateProductById = async (req, res, next) => {
    
};

export const deleteProductById = async (req, res, next) => {
   
};