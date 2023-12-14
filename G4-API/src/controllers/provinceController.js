import { provinceModel } from '../models/provinceModel.js';

export const getAllProvinces = async (req, res) => {
    try {
        const provinces = await  provinceModel.findAll();
        res.status(200).json(provinces);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getProvinceById = async (req, res) => {
    const { id } = req.params;
    try {
        const province = await provinceModel.findByPk(id);
        res.status(200).json(province);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createProvince = async (req, res) => {    
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const newProvince = await provinceModel.create({name});       
        res.status(201).json(newProvince);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateProvinceById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const province = await provinceModel.findByPk(id);
        if (!province) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await province.update({name});
            res.json({ message: 'Province updated correctly.', result:result});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteProvinceById = async (req, res) => {
    const { id } = req.params;
    try {
        const province = await provinceModel.findByPk(id);
        if (province) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await province.destroy();
            res.status(202).json({ message: 'Province deleted successfully.', result:result });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};