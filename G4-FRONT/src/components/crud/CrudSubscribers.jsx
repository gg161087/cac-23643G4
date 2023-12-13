import { Link } from 'react-router-dom';
import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudSubscribers = ({subscribers}) => {
    return (
        <div className="table-responsive">
            <table className="table table-limit-tr-width">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Email</th>                       
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map((subscriber) => (
                        <tr key={subscriber.id} className='align-middle'>
                            <td>{subscriber.id}</td>
                            <td>{subscriber.email}</td>                           
                            <td>
                                <Link to={`/edit/subscribers/${subscriber.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('subscribers', subscriber.id)} className='btn btn-danger btn-lg'>
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