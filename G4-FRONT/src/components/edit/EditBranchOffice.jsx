import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);

import { getDinamic } from '../../utils/getDinamic.js';
import { updateDinamic } from '../../utils/updateDinamic.js';

export const EditBranchOffice = ({id}) => {
    const navigate = useNavigate();

    const [branchOffice, setBranchOffice] = useState('');

    const [provinceId, setProvinceId] = useState(0);
    const [departments, setDepartaments] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState(0);

    const getBranchOfficeById = async () => {
        const response = await getDinamic(`branch_offices/${id}`)
        setBranchOffice(response)
        setProvinceId(response.province_id)
        setDepartaments(response.departments)
        setAddress(response.address) 
        setTelephone(response.telephone)   
    }

    useEffect(() => {
        getBranchOfficeById()
    }, [id])

    const updateBranchOffice = async (e) => {
        e.preventDefault()
        const updateBranchOffice = {
            province_id: provinceId,
            departments: departments,
            address: address,
            telephone: telephone
        }        
        const { result, message } = await updateDinamic('branch_offices', id, updateBranchOffice)
        if (result) { 
            Swal.fire({
                title: result.departments,
                text: message,
                icon: "success"
            });           
            navigate('/miCuenta')
        }        
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
                    <label className="form-label">Provincia ID</label>
                    <input
                        type="text"
                        value={provinceId}
                        onChange={(e) => setProvinceId(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Departamento</label>
                    <input
                        type="text"
                        value={departments}
                        onChange={(e) => setDepartaments(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        type="text"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="form-control"/>
                </div>                
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
        </div>
    )
}