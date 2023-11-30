import { subscriberModel } from './../models/subscriberModel.js';

export const getAllSubscribers = async (req, res) => {
    try {
        const response = await  subscriberModel.findAll();
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            }); 
        };
        res.status(200).json({
            success: true,
            message: 'Subcribers obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting all subcribers.',
            results: null
        });
    };
};

export const getSubcriberById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await subscriberModel.findByPk(id);
        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'Bad request.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Subcriber obtained correctly.',
            results: response
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Error getting subcriber.',
            results: null
        });
    };
};

export const createSubscriber = async (req, res) => {    
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await subscriberModel.create({
            email:email
        });
        if (!response) {
            return res.status(403).json({
                success: false,
                message: 'Error trying to create the subcriber.',
                results: null
            });
        };
        res.status(201).json({
            success: true,
            message: 'Subcriber created successfully.',
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

export const updateSubcriberById = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            success: false,
            message: 'Bad request.',
            results: null
        });
    };
    try {
        const response = await subscriberModel.update(
            { email: email },
            { where: { id: id } }
        );
        if (response[0] === 0 || !response) {
            return res.status(400).json({
                success: false,
                message: 'Error trying to update/find the subcriber.',
                results: null
            });
        };
        res.status(200).json({
            success: true,
            message: 'Subcriber updated correctly.',
            results: email
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error when updating subcriber.',
            results: null
        });
    };
};

export const deleteSubcriberById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await subscriberModel.destroy({
            where: { id: id }
        });
        if (response === 0) {
            return res.status(400).json({
                success: false,                
                message: 'Subcriber not found or cannot be deleted.'
            });
        };
        res.status(200).json({
            success: true,            
            message: 'Subcriber deleted successfully.'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,            
            message: 'Error when trying to delete.'
        });
    };
};