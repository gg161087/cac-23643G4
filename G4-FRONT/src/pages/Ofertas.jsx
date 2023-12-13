import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import { ProductsGrid } from './../components/ProductsGrid.jsx';

import { getDinamic } from './../utils/getDinamic.js';

export const Ofertas = () => {
    const [products, setProducts] = useState([])

    const getProductsByDiscount = async () => {
        const response = await getDinamic('products')
        response.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
        const fiveProductsDiscounts = response.slice(0, 4);
        setProducts(fiveProductsDiscounts)
    }
    useEffect(() => {
        getProductsByDiscount()
    },[])
    return (
        <div className="container">
            <h1>OFERTAS</h1>
            <ProductsGrid products={products}></ProductsGrid>
            <Link to="/">VOLVER AL INICIO</Link>
        </div>
    );
};
