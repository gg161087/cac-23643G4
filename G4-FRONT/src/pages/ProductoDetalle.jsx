import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'

import products from './../data/products.json';
import { getById } from './../utils/getById.js';

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
        <>
            <Header></Header>
            <div className="container">
                <h1>{product.brand}</h1>
                <img src={product.imgUrl} alt=""/>
                <p>${product.price}</p>
                <p>{product.dues} sin interes</p>
                <p>Pagando en efecto un {product.discount}% off</p>
                <p>{product.description}</p>
                <p>Codigo: {product.sku}</p>
                <h2>Caracteristicas:</h2>
                {product.specifications.map((specification)=>(
                    <div>
                        <h3>{specification.name}</h3>
                        <p>{specification.value}</p>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </>
    )
}
