import { useState, useEffect } from 'react';

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditBranchOffice = ({id}) => {
    const [branchOffice, setBranchOffice] = useState('');

    const [name, setName] = useState('');

    const getBranchOfficeById = async () => {
        const response = await getDinamic(`branch_offices/${id}`)
        setBranchOffice(response)
        setName(response.name)    
    }

    useEffect(() => {
        getBranchOfficeById()
    }, [id])

    const updateBranchOffice = async (e) => {
        e.preventDefault()        
        updateDinamic('branch_offices', {name:name})
    }

    if (!branchOffice) {
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
            <h1>Editar Sucursal </h1>
            <form onSubmit={updateBranchOffice}>
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