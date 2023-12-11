import { subscriberModel } from './../models/subscriberModel.js';

export const getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await  subscriberModel.findAll();
        res.status(200).json(subscribers)
    } catch (error) {        
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getSubscriberById = async (req, res) => {
    const { id } = req.params;
    try {
        const subscriber = await subscriberModel.findByPk(id);
        res.status(200).json(subscriber);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};

export const createSubscriber = async (req, res) => {    
    const { email } = req.body;
    if (!email) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const response = await subscriberModel.create();
        const newSubscriber = await subscriberModel.create({email});
        res.status(201).json(newSubscriber);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateSubscriberById = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    if (!email) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const subscriber = await subscriberModel.findByPk(id);
        if (!subscriber) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await subscriber.update({email});
            res.json({ message: 'Subscriber updated correctly.' });
        };        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteSubscriberById = async (req, res) => {
    const { id } = req.params;
    try {
        const subscriber = await subscriberModel.findByPk(id);
        if (!subscriber) {
            res.status(404).json({ message: 'Not found.' });
        }else {
            await subscriber.destroy();
            res.status(202).json({ message: 'Subscriber deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};