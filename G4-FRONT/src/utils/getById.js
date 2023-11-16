
export const getById = (array, id) => {
    const result = array.find(element => element.id == id);
    if (result) {
        return result
    }else{
        return 'not found'
    }

}

export const getNameById = (array, id) => {
    const result = array.find(element => element.id === id);

    if (result) {
        return result.name
    } else {
        return 'not found'        
    }
}