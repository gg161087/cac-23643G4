import axios from 'axios';

const URL = 'http://localhost:3000'

export const getDinamicByCategoryId = async(path, id) => {
    const response = await axios(`${URL}/${path}`)                  
    const dataFilter = response.data.results.filter((element => element.category_id == id))    
    return dataFilter 
}
export const getCategoryByCategoryId = async(path, id) => {
    const response = await axios(`${URL}/${path}`)                  
    const dataFilter = response.data.results.find((element => element.id == id))    
    return dataFilter 
}
export const getDinamic = async(path) => {
    const response = await axios(`${URL}/${path}`)      
    if (response.data.success) {
        return response.data.results        
    }
}
export const getDinamicByName = async (path, name) => {
    const response = await axios(`${URL}/${path}`)                  
    const dataFilter = response.data.results.filter((element => element.name == name))    
    return dataFilter
}
export const getDinamicById = async (path, id) => {
    const response = await axios(`${URL}/${path}`)    
    const dataFilter = response.data.results.find((element => element.id == id))
    return dataFilter
}