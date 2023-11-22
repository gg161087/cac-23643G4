import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import products from './../data/products.json';
import { getById } from './../utils/getById.js';
import { ProductosGrid } from './../components/ProductosGrid.jsx';

export const ProductoDetalle = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null)

    const findProduct = getById(products, id)

    useEffect(() => {
        setProduct(findProduct)
    }, [id])
    if (!product) {
        return null
    }
    return (
        <div className="container">
            <h1>{product.brand}</h1>
            <img src={product.imgUrl} alt="" />
            <p>${product.price}</p>
            <p>{product.dues} sin interes</p>
            <p>Pagando en efecto un {product.discount}% off</p>
            <p>{product.description}</p>
            <p>Codigo: {product.sku}</p>
            <h2>Caracteristicas:</h2>
            {product.specifications.map((specification) => (                
                <div key={specification.name}>
                    <h3>{specification.name}</h3>
                    <p>{specification.value}</p>
                </div>
            ))}
            <br></br>
            <h1>Productos que te puede interesar:</h1>
            <ProductosGrid products={products} />
        </div>
    )
}
