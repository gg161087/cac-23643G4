import { branchOfficeModel } from './../models/branchOfficeModel.js';
import { provinceModel } from './../models/provinceModel.js';

export const getAllBranchOffices = async (req, res) => {
    try {
        const response = await branchOfficeModel.findAll({ 
            include: [
                { model: provinceModel },                                              
            ]
        });
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            })
        }       
        res.status(200).json({
            success: true,
            message: 'Branch Offices obtained correctly.',
            results: response
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Error getting all Branch Offices.',
            results: null
        })
    }
};

export const getBranchOfficeById = async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await branchOfficeModel.findByPk(id, { 
            include: [
                { model: provinceModel }                               
            ]
        });
        if (!response) {
            res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            })
        }
        res.status(200).json({
            success: true,
            message: 'Branch Office obtained correctly.',
            results: response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Error getting Branch Office.',
            results: null
        })
    }
};

export const createBranchOffice = async (req, res) => {    
    const { departments, address, telephone, province_id } = req.body;
    if (!departments || !address || !telephone|| !province_id) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    const newBranchOffice = {
        departments:departments,
        address:address,
        telephone:telephone,
        province_id:province_id
    };
    try {
        const response = await branchOfficeModel.create({newBranchOffice});
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the Branch Office.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Branch Office created successfully.',
            results: newBranchOffice
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

export const updateBranchOfficeById = async (req, res) => {
    const { departments, address, telephone, province_id } = req.body;
    if (!departments || !address || !telephone|| !province_id) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    const updateBranchOffice = {
        departments:departments,
        address:address,
        telephone:telephone,
        province_id:province_id
    };    
    try {
        const response = await branchOfficeModel.update(
            { updateBranchOffice },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the Branch Office.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Branch Office updated correctly.',
            results: updateBranchOffice
        });
    } catch (error) {
        console.error(error);        
        res.status(500).json({
            success: false,
            message: 'Error when updating Branch Office.',
            results: null
        });
    };
};

export const deleteBranchOfficeById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await branchOfficeModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'Branch Office not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'Branch Office deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};