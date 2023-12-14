import { Link } from 'react-router-dom';
import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudUsers = ({users}) => {
    console.log(users);
    return (
        <div className="table-responsive">
            <table className="table table-limit-tr-width">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>                        
                        <th>Telefono</th>                        
                        <th>Email</th> 
                        <th>Contraseña</th>                       
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className='align-middle'>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.telephone}</td> 
                            <td>{user.email}</td>
                            <td>{user.password}</td>                            
                            <td>
                                <Link to={`/edit/users/${user.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('users', user.id)} className='btn btn-danger btn-lg'>
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