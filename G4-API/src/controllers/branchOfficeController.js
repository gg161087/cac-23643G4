import { branchOfficeModel } from './../models/branchOfficeModel.js';
import { provinceModel } from './../models/provinceModel.js';

export const getAllBranchOffices = async (req, res) => {
    try {
        const branchOffices = await branchOfficeModel.findAll({ 
            include: [
                { model: provinceModel },                                              
            ]
        });        
        res.status(200).json(branchOffices);     
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const getBranchOfficeById = async (req, res, next) => {
    const { id } = req.params
    try {
        const branchOffice = await branchOfficeModel.findByPk(id, { 
            include: [
                { model: provinceModel }                               
            ]
        });
        res.status(200).json(branchOffice);      
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

export const createBranchOffice = async (req, res) => {    
    const { departments, address, telephone, province_id } = req.body;
    if (!departments || !address || !telephone|| !province_id) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    const branchOfficeSchema = {
        departments:departments,
        address:address,
        telephone:telephone,
        province_id:province_id
    };
    try {
        const newBranchOffice = await branchOfficeModel.create({branchOfficeSchema});
        res.status(201).json(newBranchOffice);      
    } catch (error) {
        console.error(error);        
        res.status(500).json({ message: error.message });
    };
};

export const updateBranchOfficeById = async (req, res) => {
    const { id } = req.params;
    const { departments, address, telephone, province_id } = req.body;
    if (!departments || !address || !telephone || !province_id) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    const branchOfficeSchema = {
        province_id:province_id,
        departments:departments,
        address:address,
        telephone:telephone
    };       
    try {
        const branchOffice = await branchOfficeModel.findByPk(id);
        if (!branchOffice) {
            res.status(404).json({ message: 'Not found.' });
        } else {           
            const result = await branchOffice.update({branchOfficeSchema});
            res.json({ message: 'Branch Office updated correctly.', result:result });
        };
    } catch (error) {
        console.error(error);        
        res.status(500).json({ message: error.message });
    };
};

export const deleteBranchOfficeById = async (req, res) => {
    const { id } = req.params;
    try {
        const branchOffice = await branchOfficeModel.findByPk(id);
        if (!branchOffice) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await branchOffice.destroy();
            res.status(202).json({ message: 'Branch Office deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};