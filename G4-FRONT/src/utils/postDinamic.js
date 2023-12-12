import axios from 'axios';

import { API_BASE_URL } from '../../config.js';

export const postLogin = async (path, email, password) => { 
    try {
        const { data } = await axios.post(`${API_BASE_URL}/${path}`, {
            email: email,
            password: password
        })
        if (data) {
            return data
        }        
    } catch (error) {
        console.error(error)
    }
};
export const postSubscriber = async (email) => {
    const { data } = await axios.post(`${API_BASE_URL}/subscribers`, email)
    return data
}
export const postRegister = async (user) => {
    const userSchema = {
        name: user.name,
        last_name: user.last_name,
        telephone: user.telephone,
        email: user.email,
        password: user.password
    }
    try {
        const { data } = await axios.post(`${API_BASE_URL}/users/register`, userSchema)
        if (data) {
            return data
        }        
    } catch (error) {
        console.error(error)
    }
}