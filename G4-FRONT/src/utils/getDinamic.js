import axios from 'axios';

import { API_BASE_URL } from './../../config.js';

export const getDinamic = async(path) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/${path}`);     
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}