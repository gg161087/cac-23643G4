import { provinceModel } from '../models/provinceModel.js';

export const getAllProvinces = async (req, res) => {
    try {
        const response = await  provinceModel.findAll();
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            }); 
        };
        res.status(200).json({
            success: true,
            message: 'Provinces obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting all provinces.',
            results: null
        });
    };
};

export const getProvinceById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await provinceModel.findByPk(id);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Province obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error getting province.',
            results: null
        });
    };
};

export const createProvince = async (req, res) => {    
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await provinceModel.create({
            name:name
        });
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the province.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Province created successfully.',
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

export const updateProvinceById = async (req, res) => {
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
        const response = await provinceModel.update(
            { name: name },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the province.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Province updated correctly.',
            results: name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error when updating province.',
            results: null
        });
    };
};

export const deleteProvinceById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await provinceModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'Province not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'Province deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};