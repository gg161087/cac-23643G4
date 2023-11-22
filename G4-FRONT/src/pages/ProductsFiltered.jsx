import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"

import { ProductosGrid } from '../components/ProductosGrid.jsx';
import { getDinamic, getDinamicByCategoryId } from './../utils/getDinamic.js';

export const ProductsFiltered = () => {
    
    const { product } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProducts = async () => {
            const categories = await getDinamic('data/categories.json')
            const findId = categories.find(item => item.name === product);          
            const dataFilter = await getDinamicByCategoryId('data/products.json', findId.id) 
            console.log(dataFilter);
            setProducts(dataFilter)            
        }
        getProducts()                
        console.log(products);      
    },[product])

    return (
        <Container>
            <h1>CELULARES</h1>
            <ProductosGrid products={products}></ProductosGrid>            
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};