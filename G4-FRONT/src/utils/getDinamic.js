import axios from 'axios';

import { API_URL, API_PORT } from './../../config.js';

export const getDinamicByCategoryId = async(path, id) => {
    const response = await axios(`${API_URL}:${API_PORT}/${path}`)                  
    const dataFilter = await response.data.results.filter((element => element.category_id == id))    
    return dataFilter 
}
export const getCategoryByCategoryId = async(path, id) => {
    const response = await axios(`${API_URL}:${API_PORT}/${path}`)                  
    const dataFilter = await response.data.results.find((element => element.id == id))    
    return dataFilter 
}
export const getDinamic = async(path) => {
    const response = await axios(`${API_URL}:${API_PORT}/${path}`)      
    if (response.data.success) {
        return response.data.results        
    }
}
export const getDinamicByName = async (path, name) => {
    const response = await axios(`${API_URL}:${API_PORT}/${path}`)                  
    const dataFilter = await response.data.results.filter((element => element.name == name))    
    return dataFilter
}
export const getDinamicById = async (path, id) => {
    const response = await axios(`${API_URL}:${API_PORT}/${path}`)    
    const dataFilter = await response.data.results.find((element => element.id == id))
    return dataFilter
}