import { roleModel } from './../models/roleModel.js';

export const getAllRoles = async (req, res) => {
    try {
        const response = await  roleModel.findAll();
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            }); 
        };
        res.status(200).json({
            success: true,
            message: 'Roles obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting all roles.',
            results: null
        });
    };
};

export const getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await roleModel.findByPk(id);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Role obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error getting role.',
            results: null
        });
    };
};

export const createRole = async (req, res) => {    
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await roleModel.create({
            name:name
        });
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the role.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Role created successfully.',
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

export const updateRoleById = async (req, res) => {
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
        const response = await roleModel.update(
            { name: name },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the role.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Role updated correctly.',
            results: name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error when updating Role.',
            results: null
        });
    };
};

export const deleteRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await roleModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'Role not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'Role deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};