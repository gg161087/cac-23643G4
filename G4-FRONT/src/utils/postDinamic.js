import axios from 'axios';

import { API_BASE_URL } from '../../config.js';

export const postLogin = async (path, email, password) => { 
    try {
        const { data } = await axios.post(`${API_BASE_URL}/${path}`, {
            email: email,
            password: password
        })
        if (data.success) {
            return data.results
        }        
    } catch (error) {
        console.error(error)
    }
};
export const postSubscriber = async (email) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/subscribers`, email)
        if (data.success) {
            return data.results
        }        
    } catch (error) {
        console.error(error)
    }
}