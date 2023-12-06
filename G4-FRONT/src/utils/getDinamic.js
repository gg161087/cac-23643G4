import axios from 'axios';

import { API_BASE_URL } from './../../config.js';

export const getDinamicByCategoryId = async(path, id) => {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`)                  
    const dataFilter = data.results.filter((element => element.category_id == id))    
    return dataFilter 
}
export const getCategoryByCategoryId = async(path, id) => {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`)                  
    const dataFilter = await data.results.find((element => element.id == id))    
    return dataFilter 
}
export const getDinamic = async(path) => {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`)      
    if (data.success) {
        return data.results        
    }
}
export const getDinamicByName = async (path, name) => {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`)                  
    const dataFilter = await data.results.filter((element => element.name == name))    
    return dataFilter
}
export const getDinamicById = async (path, id) => {
    const { data } = await axios.get(`${API_BASE_URL}/${path}`)    
    const dataFilter = await data.results.find((element => element.id == id))
    return dataFilter
}