import { userModel } from '../models/userModel.js';
import { notNumber } from '../utils/notNumber.js';
import { hashPassword, checkPassword } from '../utils/handlePassword.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const response = await userModel.findAll();
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

export const getUserById = async (req, res, next) => {
    const { id } = req.params
    try {
        const response = await userModel.findByPk(id);
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

export const updateUserById = async (req, res, next) => {
    
};

export const createNewUser = async (req, res, next) => {
    
};

export const login = async (req, res, next) => {
   
};

export const deleteUserById = async (req, res, next) => {
    
};