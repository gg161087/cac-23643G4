import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"

import { ProductosGrid } from '../components/ProductosGrid.jsx';
import { getDinamicByName, getDinamicByCategoryId } from './../utils/getDinamic.js';

export const ProductsFiltered = () => {
    
    const { product } = useParams();
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getCategory = async () => {
            const response = await getDinamicByName('data/categories.json', product)
            const {id} = response[0]            
            setCategory(id)
        }
        getCategory()
        const getProducts = async () => {  
            const dataFilter = await getDinamicByCategoryId('data/products.json', category)
            console.log(dataFilter);
            setProducts(dataFilter)            
        }
        getProducts()                        
    },[])

    return (
        <Container>
            <h1>CELULARES</h1>
            <ProductosGrid products={products}></ProductosGrid>            
            <Link to="/">VOLVER AL INICIO</Link>
        </Container>
    );
};