import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"

import { ProductsGrid } from '../components/ProductsGrid.jsx';
import { getDinamicByName, getDinamicByCategoryId } from './../utils/getDinamic.js';

export const ProductsFiltered = () => {
    
    const { category } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProductsByCategoryId = async () => {
            const response = await getDinamicByName('categories', category)
            const {id} = response[0]
            const dataFilter = await getDinamicByCategoryId('products', id)
            setProducts(dataFilter);                       
        }
        getProductsByCategoryId()
                                
    },[category])

    return (
        <Container>
            <h1>{category.toLocaleUpperCase()}</h1>
            <ProductsGrid products={products}></ProductsGrid>            
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};