import axios from 'axios';

import { API_BASE_URL } from './../../config.js';

export const updateDinamic = async(path, id) => {
    try {
        const { data } = await axios.put(`${API_BASE_URL}/${path}/${id}`);     
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}