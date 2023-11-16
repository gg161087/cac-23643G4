import { Link } from 'react-router-dom'

import { ProductoCard } from './ProductoCard.jsx'

import categories from './../data/categories.json'
import { getNameById } from './../utils/getById.js';

import './ProductosGrid.css'

export const ProductosGrid = ({products}) => { 

    if(!products){
        return null
    }

    return (
        <div className="container">
            <div className="grid_container">
                {products.map((product) =>(
                    <Link key={product.id} to={`/${getNameById(categories, product.category_id)}/${product.id}`}>
                        <ProductoCard product={product}></ProductoCard>   
                    </Link>
                ))}
            </div>
        </div>
    )
}