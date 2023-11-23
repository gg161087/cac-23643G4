import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"

import { ProductsGrid } from '../components/ProductsGrid.jsx';
import { getDinamicByName, getDinamicByCategoryId } from './../utils/getDinamic.js';

export const ProductsFiltered = () => {
    
    const { product } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProductsByCategoryId = async () => {
            const response = await getDinamicByName('data/categories.json', product)
            const {id} = response[0]
            const dataFilter = await getDinamicByCategoryId('data/products.json', id)
            setProducts(dataFilter);                       
        }
        getProductsByCategoryId()
                                
    },[product])

    return (
        <Container>
            <h1>{product.toLocaleUpperCase()}</h1>
            <ProductsGrid products={products}></ProductsGrid>            
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};