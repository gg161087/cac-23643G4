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
    const { data } = await axios.post(`${API_BASE_URL}/subscribers`, email)
    return data
}
export const postRegister = async (data) => {

    const newUser = {
        name: data.name,
        last_name: data.last_name,
        telephone: data.telephone,
        email: data.email,
        password: data.password
    }

    try {
        const { data } = await axios.post(`${API_BASE_URL}/users/register`, { newUser })
        if (data.success) {
            return data.results
        }        
    } catch (error) {
        console.error(error)
    }
}