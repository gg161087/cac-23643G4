import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getDinamic, getDinamicById } from '../utils/getDinamic.js';
import { ProductsGrid } from '../components/ProductsGrid.jsx';

export const ProductDetail = () => {

    const { id } = useParams();

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState('')

    useEffect(() => {        
        const getProduct = async () => {
            const findProduct = await getDinamicById('data/products.json', id)            
            setProduct(findProduct)
            console.log(product);
        }
        getProduct()
        const getProducts = async () => {
            const response = await getDinamic('data/products.json')
            setProducts(response)
        }        
        getProducts()
    }, [id])

    if (!product) {
        return (
            <p>cargando</p>
        )
    }
    
    return (
        <Container>
            <h1>{product.brand}</h1>
            <img src={product.imgUrl} alt="" />
            <p>${product.price}</p>
            <p>{product.dues} sin interes</p>
            <p>Pagando en efecto un {product.discount}% off</p>
            <p>{product.description}</p>
            <p>Codigo: {product.sku}</p>
            <h2>Caracteristicas:</h2>
            {product.product_specifications.map((specification) => (                
                <div key={specification.name}>
                    <h3>{specification.name}</h3>
                    <p>{specification.value}</p>
                </div>
            ))}
            <br></br>
            <h1>Productos que te puede interesar:</h1>
            <ProductsGrid products={products} />
        </Container>
    )
}
