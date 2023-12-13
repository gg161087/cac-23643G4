import { Link } from 'react-router-dom';
import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudRoles = ({roles}) => {
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
                    {roles.map((role) => (
                        <tr key={role.id} className='align-middle'>
                            <td>{role.id}</td>
                            <td>{role.name}</td>                            
                            <td>
                                <Link to={`/edit/roles/${role.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('roles', role.id)} className='btn btn-danger btn-lg'>
                                    <Icon css='icon' icon={faTrash}/>
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