import { productModel } from './../models/productModel.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const response = await productModel.findAll();
        if (!response) {
            res.status(404).json({
                success: false,
                results: null,
                message: 'bad request'
            })
        }
        res.status(404).json({
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
        res.status(404).json({
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