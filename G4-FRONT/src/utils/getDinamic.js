export const getDinamicByCategoryId = async(path, id) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()               
    const dataFilter = data.filter((element => element.category_id == id))    
    return dataFilter 
}
export const getDinamic = async(path) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()                
    return data
}
export const getDinamicByName = async (path) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()               
    const dataFilter = data.filter((element => element.name == id))    
    return dataFilter
}