import { categoryModel } from './../models/categoryModel.js';

export const getAllCategories = async (req, res, next) => {
    try {
        const response = await categoryModel.findAll();
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

export const getCategoryById = async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await postModel.findByPk(id);
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

export const createCategory = async (req, res, next) => {    
    
};

export const updateCategoryById = async (req, res, next) => {
    
};

export const deleteCategoryById = async (req, res, next) => {
   
};