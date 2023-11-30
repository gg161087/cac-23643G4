import { categoryModel } from './../models/categoryModel.js';

export const getAllCategories = async (req, res) => {
    try {
        const response = await  categoryModel.findAll();
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            }); 
        };
        res.status(200).json({
            success: true,
            message: 'Categories obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting all categories.',
            results: null
        });
    };
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await categoryModel.findByPk(id);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Category obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error getting category.',
            results: null
        });
    };
};

export const createCategory = async (req, res) => {    
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await categoryModel.create({
            name:name
        });
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the category.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Category created successfully.',
            results: name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Unexpected error with the server.',
            results: null
        });
    };
};

export const updateCategoryById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await categoryModel.update(
            { name: name },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the category.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Category updated correctly.',
            results: name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error when updating category.',
            results: null
        });
    };
};

export const deleteCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await categoryModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'Category not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'Category deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};