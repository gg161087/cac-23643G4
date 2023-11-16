import { Link } from 'react-router-dom';

import { ProductoCard } from './ProductoCard.jsx';

import './ProductosGrid.css'

export const ProductosGrid = ({productos, category}) => {    
    if(!productos){
        return null
    }

    return (
        <div className="container">
            <div className="grid_container">
                {productos.map((producto) =>(
                    <Link key={producto.product_id} to={`/${category}/${producto.product_id}`}>
                        <ProductoCard producto={producto}></ProductoCard>   
                    </Link>
                ))}
            </div>
        </div>
    )
}