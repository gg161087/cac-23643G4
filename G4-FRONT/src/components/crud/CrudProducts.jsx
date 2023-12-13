import { Link } from 'react-router-dom';
import { faSpinner, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import { deleteDinamic } from './../../utils/deleteDinamic.js';

export const CrudProducts = ({products}) => {
    return (
        <div className="table-responsive">
            <table className="table table-limit-tr-width">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descuento</th>
                        <th>Código</th>
                        <th>Cuotas</th>
                        <th>Imagen URL</th>
                        <th>Categoria #</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className='align-middle'>
                            <td>{product.id}</td>
                            <td>{product.brand}</td>
                            <td>{product.model}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.discount}</td>
                            <td>{product.sku}</td>
                            <td>{product.dues}</td>
                            <td>{product.imgUrl}</td>
                            <td>{product.category_id}</td>
                            <td>
                                <Link to={`/edit/products/${product.id}`} className='btn btn-success btn-lg m-2'>
                                    <Icon css='icon' icon={faPencil} />
                                </Link>
                                <button onClick={() => deleteDinamic('products', product.id)} className='btn btn-danger btn-lg'>
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