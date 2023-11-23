export const getDinamicByCategoryId = async(path, id) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()               
    const dataFilter = data.find((element => element.category_id == id))    
    return dataFilter 
}
export const getDinamic = async(path) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()                
    return data
}
export const getDinamicByName = async (path, name) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()               
    const dataFilter = data.filter((element => element.name == name))    
    return dataFilter
}
export const getDinamicById = async (path, id) => {
    const response = await fetch(`http://localhost:5173/${path}`)
    const data = await response.json()
    const dataFilter = data.find((element => element.id == id))
    return dataFilter
}