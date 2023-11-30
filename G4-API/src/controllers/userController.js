import { userModel } from '../models/userModel.js';
import { notNumber } from '../utils/notNumber.js';
import { hashPassword, checkPassword } from '../utils/handlePassword.js';

export const getAllUsers = async (req, res) => {
    try {
        const response = await  userModel.findAll();
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            }); 
        };
        res.status(200).json({
            success: true,
            message: 'Users obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting all users.',
            results: null
        });
    };
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await userModel.findByPk(id);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'User obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error getting user.',
            results: null
        });
    };
};

export const createNewUser = async (req, res, next) => {
    const { name, last_name, telephone, email, password } = req.body;
    if (!name || !last_name || !telephone|| !email|| !password) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    const newUser = {
        name:name,
        last_name:last_name,
        telephone:telephone,
        email:email,
        password:password        
    };
    try {
        const response = await userModel.create({newUser});
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the user.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'User created successfully.',
            results: newUser
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

export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, last_name, telephone, email, password } = req.body;
    if (!name || !last_name || !telephone|| !email|| !password) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    const updateUser = {
        name:name,
        last_name:last_name,
        telephone:telephone,
        email:email,
        password:password        
    };
    try {
        const response = await userModel.update(
            { updateUser },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the user.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'User updated correctly.',
            results: updateUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error when updating product.',
            results: null
        });
    };
};


export const login = async (req, res, next) => {
   
};

export const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await userModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'User not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'User deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};