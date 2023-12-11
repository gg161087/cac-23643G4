import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './SearchResult.css';
import { getDinamic } from './../utils/getDinamic.js';

export const SearchResult = ({ result }) => {  
    const navigate = useNavigate()  
    const [product, setProduct] = useState('')

    const getProductByModel = async (model) => {
        const response = await getDinamic('products')
        const dataFilter = await response.find((element => element.model == model))
        setProduct(dataFilter);        
    };
    
    useEffect(() => {
        getProductByModel(result)
    },[result])

    if (!product) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    
    return (
        <Link
            className="search-result"
            to={`products/${product.category.name}/${product.id}`}
        >
        {result}
        </Link>
    );
};
