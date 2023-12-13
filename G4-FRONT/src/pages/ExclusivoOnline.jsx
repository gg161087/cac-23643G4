import { useState, useEffect} from 'react';
import { Link } from "react-router-dom"

import { ProductsGrid } from './../components/ProductsGrid.jsx';

import { getDinamic } from './../utils/getDinamic.js';

export const ExclusivoOnline = () => {
    const [products, setProducts] = useState([])

    const getProductsOnline = async () => {
        const response = await getDinamic('products')
        const productsOnline = response.filter(producto => producto.category_id === 6);
        setProducts(productsOnline)
    }
    useEffect(() => {
        getProductsOnline()
    },[])

    return (
        <div className="container">
            <h1>EXCLUSIVO ONLINE</h1>
            <ProductsGrid products={products}></ProductsGrid>
            <Link to="/">VOLVER AL INICIO</Link>
        </div>
    );
};
