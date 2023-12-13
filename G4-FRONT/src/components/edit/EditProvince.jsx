import { useState, useEffect } from 'react';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditProvince = ({id}) => {
    const [province, setProvince] = useState('');

    const [name, setName] = useState('');

    const getProvinceById = async () => {
        const response = await getDinamic(`provinces/${id}`)
        setProvince(response)
        setName(response.name)    
    }

    useEffect(() => {
        getProvinceById()
    }, [id])

    const updateProvince = async (e) => {
        e.preventDefault()        
        updateDinamic('provinces', {name:name})
    }

    if (!province) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1>Editar Provincia </h1>
            <form onSubmit={updateProvince}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"/>
                </div>                
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}