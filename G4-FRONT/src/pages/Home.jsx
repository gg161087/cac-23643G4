import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

import { Slider } from './../components/Slider.jsx'
import { ProductosGrid } from './../components/ProductosGrid.jsx';

import { getDinamic } from './../utils/getDinamic.js';

export const Home = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await getDinamic('data/products.json')
            setProducts(response)
        }        
        getProducts()
        const getCategories = async () => {
            const response = await getDinamic('data/categories.json')
            setCategories(response)
        }
        getCategories()
    }, [])

    return (
        <Container>        
            <Slider/>  
            <ProductosGrid products={products} categories={categories}/>       
        </Container>
    )
}