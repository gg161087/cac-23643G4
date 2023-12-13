import { Link } from 'react-router-dom';

import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudCategories = ({categories}) => {
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
                    {categories.map((category) => (
                        <tr key={category.id} className='align-middle'>
                            <td>{category.id}</td>
                            <td>{category.name}</td>                            
                            <td>
                                <Link to={`/edit/categories/${category.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('categories', category.id)} className='btn btn-danger btn-lg'>
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