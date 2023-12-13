import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

import { ProductsGrid } from '../components/ProductsGrid.jsx';
import { getDinamic } from './../utils/getDinamic.js';

export const ProductsFiltered = () => {
    
    const { category } = useParams();

    const [products, setProducts] = useState([])

    const getProductsByCategoryId = async () => {
        const categories = await getDinamic('categories');
        const categoryName = await categories.filter((element => element.name == category));
        const {id} = categoryName[0];        
        const response = await getDinamic('products')        
        const dataFilter = await response.filter((element => element.category_id == id));            
        setProducts(dataFilter);                       
    }

    useEffect(() =>{
        
        getProductsByCategoryId()
                                
    },[category])

    return (
        <div className='container'>
            <h1>{category.toLocaleUpperCase()}</h1>
            <ProductsGrid products={products}></ProductsGrid>            
            <Link to="/">VOLVER AL INICIO</Link>
        </div>
    );
};