import jwt from 'jsonwebtoken';

import { checkPassword } from './../utils/handlePassword.js';
import { userModel, userRolesModel, roleModel } from '../models/userModel.js';

export const login = async (req, res, next) => {
    const { email, password } = req.body;    
    try {        
        const user = await userModel.findOne({ 
            where: { email },
            include: [
                roleModel
            ]
        });
        if (!user) {
            return res.status(404).json({ 
                success: false,
                results: null,
                message: 'Usuario no encontrado' 
            });
        }       
        const isPasswordValid = await checkPassword(password, user.password);
        if (!isPasswordValid) {            
            return res.status(401).json({
                success: false,
                results: null, 
                message: 'Credenciales inválidas' 
            });
        }        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });  
            
        return res.status(200).json({ 
            success: true,
            results: user,
            token: token,
            message: 'Inicio de sesión exitoso' 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            results: null, 
            message: 'Error en el servidor' 
        });
    }
};