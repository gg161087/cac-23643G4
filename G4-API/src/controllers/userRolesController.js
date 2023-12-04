import { userRolesModel } from './../models/userModel';

export const getAllUserRoles = async (req, res) => {
    try {
        const response = await  userRolesModel.findAll();
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            }); 
        };
        res.status(200).json({
            success: true,
            message: 'User Roles obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting all user roles.',
            results: null
        });
    };
};

export const getUserRolesByUserId = async (req, res) => {
    const { user_id } = req.params;
    try {
        const response = await userRolesModel.findByPk(user_id);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'User Roles obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error getting user roles.',
            results: null
        });
    };
};

export const createUserRoles = async (req, res) => {    
    const { user_id, role_id } = req.body;
    if (!user_id || !role_id) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await userRolesModel.create({
            user_id:user_id,
            role_id:role_id
        });
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the role for user.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Role for user created successfully.',
            results: { 
                user_id:user_id,
                role_id:role_id
            }
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

export const updateUserRolesByUserId = async (req, res) => {
    const { user_id } = req.params;
    const { role_id } = req.body;
    if (!role_id) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await userRolesModel.update(
            { role_id: role_id },
            { where: { user_id: user_id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the user roles.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'User roles updated correctly.',
            results: {
                user_id:user_id,
                role_id:role_id
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error when updating roles for user.',
            results: null
        });
    };
};

export const deleteUserRolesByUserId = async (req, res) => {
    const { user_id } = req.params;
    try {
        const response = await userRolesModel.destroy({
            where: { user_id: user_id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'User roles not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'User roles deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};