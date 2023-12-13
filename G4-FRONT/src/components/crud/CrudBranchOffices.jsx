import { Link } from 'react-router-dom';

import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudBranchOffices = ({branchOffices}) => {
    return (
        <div className="table-responsive">
            <table className="table table-limit-tr-width">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Provincia #</th>
                        <th>Departamento</th>
                        <th>Dirección</th>
                        <th>Telefono</th>                        
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {branchOffices.map((sucursal) => (
                        <tr key={sucursal.id} className='align-middle'>
                            <td>{sucursal.id}</td>
                            <td>{sucursal.province_id}</td>
                            <td>{sucursal.departments}</td>
                            <td>{sucursal.address}</td>
                            <td>{sucursal.telephone}</td>                            
                            <td>
                                <Link to={`/edit/branch_offices/${sucursal.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('branch_offices',post.id)} className='btn btn-danger btn-lg'>
                                    <Icon css='icon' icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>     
    )
}