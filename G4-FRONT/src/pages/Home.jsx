import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

import { Slider } from './../components/Slider.jsx'
import { ProductsGrid } from './../components/ProductsGrid.jsx';

import { getDinamic } from './../utils/getDinamic.js';

export const Home = () => {

    const [products, setProducts] = useState([])    

    useEffect(() => {
        const getProducts = async () => {
            const response = await getDinamic('data/products.json')
            setProducts(response)
        }        
        getProducts()       
    }, [])

    return (
        <Container>        
            <Slider/>  
            <ProductsGrid products={products}/>       
        </Container>
    )
}