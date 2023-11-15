import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'

import celulares from './../data/celulares.json';
import computadoras from './../data/computadoras.json';
import televisores from './../data/televisores.json';

export const ProductoDetalle = ({category}) => {

    const { id } = useParams();

    const [product, setProduct] = useState(null)

    let findProduct = ''

    const getProductById = (productos, productoId) => {        
        return productos.find(producto => producto.id == productoId);
    };

    console.log(category);
    switch (category) {
        case 'celulares':            
            findProduct = getProductById(celulares, id);             
            break;
        case 'computadoras':
            findProduct = getProductById(computadoras, id);            
            break;
        case 'televisores':
            findProduct = getProductById(televisores, id);            
            break;
    
        default:
            break;
    }

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
                <h1>{product.Marca}</h1>
            </div>
            <Footer></Footer>
        </>
    )
}
