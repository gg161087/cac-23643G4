import { Link } from 'react-router-dom';

import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudProvinces = ({provinces}) => {
    return (
        <div className="table-responsive">
            <table className="table table-limit-tr-width">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>                        
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {provinces.map((province) => (
                        <tr key={province.id} className='align-middle'>
                            <td>{province.id}</td>
                            <td>{province.name}</td>                            
                            <td>
                                <Link to={`/edit/provinces/${province.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('provinces',province.id)} className='btn btn-danger btn-lg'>
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